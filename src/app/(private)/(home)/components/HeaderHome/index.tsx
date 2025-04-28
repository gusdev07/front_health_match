'use client';

import { Sun, Moon } from 'lucide-react';
import { isNight, getFormattedDate } from '@/utils/dateUtils'; // ajuste o caminho se necessário
import useLoggedUserStore from '@/store/useLoggedUserStore';

export function HeaderHome() {
  const night = isNight();
  const formattedDate = getFormattedDate();

  const { user } = useLoggedUserStore();

  return (
    <div className='flex items-center justify-between rounded-lg border border-cinzaClaroHM bg-white p-3 2xl:p-6'>
      <div className='flex flex-col gap-4'>
        <p className='flex font-montserrat text-2xl font-normal 2xl:text-3xl'>
          <span className='flex items-center gap-2 font-bold'>
            {night ? (
              <Moon className='h-6 w-6 text-verdeHM 2xl:h-7 2xl:w-7' />
            ) : (
              <Sun className='h-6 w-6 text-amareloHM' />
            )}
            {night ? 'Boa noite' : 'Bom dia'}
          </span>
          , Dr. {user.username}
        </p>
        <p className='text-sm text-cinzaHM 2xl:text-base'>{formattedDate}</p>
      </div>

      <div className='flex flex-col gap-2'>
        <p className='text-sm text-cinzaHM 2xl:text-base'>O seu próximo agendamento é</p>
        <p className='text-end text-sm font-semibold text-verdeHM 2xl:text-base'>
          10:30 - Sarah Silva
        </p>
      </div>
    </div>
  );
}
