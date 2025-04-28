import useLoggedUserStore from '@/store/useLoggedUserStore';
import { useEffect } from 'react';
import { destroyCookie, parseCookies } from 'nookies';
import { useRouter } from 'next/navigation';
import { authMe } from '@/api/services/auth/login';
import { refreshAccessToken } from '@/api/services/auth/refreshAccessToken';

export const useAuth = () => {
  const router = useRouter();

  const { setUser, logout } = useLoggedUserStore();
  const { ['healthmatch.accessToken']: token } = parseCookies();

  useEffect(() => {
    const getUser = async () => {
      let accessToken = token;

      if (!accessToken) {
        accessToken = await refreshAccessToken();
      }

      if (!accessToken) {
        router.push('/signin'); // /signin
        logout();

        return;
      }

      try {
        const userData = await authMe(accessToken);

        setUser({
          username: userData.username,
          email: userData.email,
          roleId: userData.role.id,
        });
      } catch (err) {
        console.error(err);

        destroyCookie(undefined, 'healthmatch.accessToken');
        destroyCookie(undefined, 'healthmatch.refreshtoken');

        router.push('/signin'); // /signin
      }
    };

    getUser();
  }, [logout, router, setUser, token]);
};
