import { Input } from '@/components/Input';
import { Button } from './Button';

export function SignupForm() {
  return (
    <div className='w-full'>
      <div className='flex flex-col gap-4'>
        <Input.Root>
          <Input.Content id='nome' placeholder='Nome' />
        </Input.Root>
        <Input.Root>
          <Input.Content id='email' placeholder='E-mail' />
        </Input.Root>
        <Input.Root>
          <Input.Content id='conselho' placeholder='Conselho' />
        </Input.Root>
        <Input.Root>
          <Input.Content id='telefone' placeholder='Telefone' />
        </Input.Root>
        <Button.Root>
          <Button.Content name='Registrar' />
        </Button.Root>
      </div>
    </div>
  );
}
