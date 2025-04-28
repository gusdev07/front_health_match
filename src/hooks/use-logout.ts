import useLoggedUserStore from '@/store/useLoggedUserStore';
import { useRouter } from 'next/navigation';
import { destroyCookie } from 'nookies';

export const useLogout = () => {
  const router = useRouter();
  const { logout } = useLoggedUserStore();

  const handleLogout = () => {
    destroyCookie(undefined, 'healthmatch.accessToken');
    destroyCookie(undefined, 'healthmatch.refreshToken');

    router.push('/signin');
    logout();
  };

  return { handleLogout };
};
