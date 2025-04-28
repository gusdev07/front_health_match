import axios from 'axios';
import { api } from '@/api/config/api';
import { IAuthResponse, ILoginRequest, ILoginResponse } from '@/api/types/login/loginTypes';

export const sigIn = async (payload: ILoginRequest): Promise<ILoginResponse> => {
  try {
    const { data } = await api.post<ILoginResponse>('/auth/login', payload);

    return data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      const status = error.response?.status;

      if (status === 401 || status === 404 || status === 500) {
        throw new Error('E-mail ou senha inválidos');
      }

      throw new Error('Ocorreu um erro inesperado, tente novamente');
    }

    throw new Error('Erro desconhecido ao tentar fazer login');
  }
};

export const authMe = async (accessToken: string): Promise<IAuthResponse> => {
  try {
    const { data } = await api.get<IAuthResponse>('/auth/me', {
      headers: { Authorization: `Bearer ${accessToken}` },
    });

    return data;
  } catch (error) {
    console.error(error);
    throw new Error('Erro ao se autenticar');
  }
};
