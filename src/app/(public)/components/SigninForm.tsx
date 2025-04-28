'use client';

import { Input } from '@/components/Input';
import { Button } from './Button';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useSignIn } from '@/hooks/use-signIn';

const signinFormSchema = z.object({
  email: z.string().min(5, 'E-mail deve ter no mínimo 5 caracteres').email('E-mail inválido'),
  password: z.string().min(3, 'Senha deve ter mais do que 3 caracteres'),
});

type SigninFormSchema = z.infer<typeof signinFormSchema>;

export function SigninForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SigninFormSchema>({
    resolver: zodResolver(signinFormSchema),
  });

  const { mutate: signIn, isLoading, errorMessage } = useSignIn();

  const handleSignIn = ({ email, password }: SigninFormSchema) => {
    signIn({ email, password });
  };

  return (
    <form onSubmit={handleSubmit(handleSignIn)} className='w-full'>
      <div className='flex flex-col gap-4'>
        <Input.Root>
          <Input.Content register={register('email')} id='email' placeholder='E-mail' type='text' />
        </Input.Root>
        {errors.email && <p className='px-3 text-xs text-red-500'>{errors.email.message}</p>}
        <Input.Root>
          <Input.Content
            register={register('password')}
            id='password'
            placeholder='Senha'
            type='password'
          />
          <Input.PasswordToggle />
        </Input.Root>
        <div>
          {errors.password && (
            <p className='px-3 text-xs text-red-500'>{errors.password.message}</p>
          )}
        </div>
        <Button.Root>
          <Button.Content loading={isLoading} name='Entrar' />
        </Button.Root>

        {errorMessage && (
          <p className='text-center text-sm font-semibold text-red-500'>{errorMessage}</p>
        )}

        <p className='cursor-pointer text-sm font-bold text-verdeHM duration-200 hover:text-verdeHM/70 lg:text-base'>
          Esqueci a minha senha
        </p>
      </div>
    </form>
  );
}
