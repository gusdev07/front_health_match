import useLoggedUserStore from '@/store/useLoggedUserStore';
import { useRouter } from 'next/navigation';
import { sigIn } from '@/api/services/auth/login';
import { ILoginRequest } from '@/api/types/login/loginTypes';
import { useMutation } from '@tanstack/react-query';
import { setCookie } from 'nookies';
import { api } from '@/api/config/api';

export const useSignIn = () => {
  const { setUser } = useLoggedUserStore();
  const router = useRouter();

  const mutation = useMutation({
    mutationFn: (credentials: ILoginRequest) => sigIn(credentials),
    onSuccess: (response) => {
      setUser({
        username: response.user.username,
        email: response.user.email,
        roleId: response.user.role.id,
      });

      setCookie(undefined, 'healthmatch.accessToken', response.accessToken, {
        maxAge: 60 * 60 * 24 * 7, // 7 dias
        path: '/',
      });

      setCookie(undefined, 'healthmatch.refreshToken', response.refreshToken, {
        maxAge: 60 * 60 * 24 * 30, // 30 dias
        path: '/',
      });

      api.defaults.headers['Authorization'] = `Bearer ${response.accessToken}`;

      router.push('/');
    },
  });

  return { ...mutation, isLoading: mutation.isPending, errorMessage: mutation.error?.message };
};
