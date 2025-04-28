'use client';

import useLoggedUserStore from '@/store/useLoggedUserStore';
import { LogOut, UserRoundCheck } from 'lucide-react';
import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover';
import { Separator } from '../ui/separator';
import { useLogout } from '@/hooks/use-logout';

export function HeaderProfile() {
  const { user } = useLoggedUserStore();
  const { handleLogout } = useLogout();

  return (
    <Popover>
      <PopoverTrigger asChild>
        <div className='rounded-full bg-pretoHM text-white'>
          <p className='cursor-pointer rounded-full p-2 text-sm font-semibold hover:bg-pretoHM/70'>
            MB
          </p>
        </div>
      </PopoverTrigger>

      <PopoverContent className='mr-10 mt-2 w-64 p-4'>
        <div>
          <p className='text-base font-semibold'>Dr. {user.username}</p>
          <p className='text-xs font-normal text-cinzaHM/80'>CRM / ESPECIALIDADE</p>
        </div>

        <Separator className='my-4' />

        <div>
          <button className='flex items-center gap-1 text-verdeHM duration-100 hover:text-verdeHM/70'>
            <UserRoundCheck className='h-4 w-4' />
            <p className='text-sm'>Perfil</p>
          </button>

          <button
            onClick={handleLogout}
            className='mt-3 flex items-center gap-1 text-vermelhoHM duration-100 hover:text-vermelhoHM/70'
          >
            <LogOut className='h-4 w-4' />
            <p className='text-sm'>Sair</p>
          </button>
        </div>
      </PopoverContent>
    </Popover>
  );
}
