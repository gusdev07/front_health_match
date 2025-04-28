import { api } from '@/api/config/api';
import { parseCookies, setCookie, destroyCookie } from 'nookies';

export const refreshAccessToken = async () => {
  try {
    const cookies = parseCookies();
    const refreshToken = cookies['healthmatch.refreshToken'];

    if (!refreshToken) throw new Error('Refresh token não encontrado');

    const { data } = await api.post('/auth/refresh', { refreshToken });

    setCookie(undefined, 'healthmatch.token', data.accessToken, {
      maxAge: 60 * 60 * 24 * 7, // 7 dias,
      path: '/',
    });

    setCookie(undefined, 'healthmatch.refreshToken', data.refreshToken, {
      maxAge: 60 * 60 * 24 * 30, // 30 dias
      path: '/',
    });

    api.defaults.headers['Authorization'] = `Bearer ${data.accessToken}`;

    return data.accessToken;
  } catch (error) {
    console.log(error);
    destroyCookie(undefined, 'healthmatch.accessToken');
    destroyCookie(undefined, 'healthmatch.refreshToken');
  }
};
