'use client';

import { useRouter } from 'next/navigation';

interface HeaderProps {
  title: string;
  subtitle: string;
  extraTitle?: string;
  redirect?: string;
}

export function Header({ title, subtitle, extraTitle, redirect }: HeaderProps) {
  const router = useRouter();

  return (
    <div className='mb-6 w-full text-start'>
      <p className='font-montserrat font-bold text-pretoHM sm:text-xl lg:text-3xl'>
        {title.toLocaleUpperCase()}
      </p>
      <p className='text-sm font-medium text-pretoHM lg:text-base'>
        {subtitle}{' '}
        {extraTitle && (
          <span
            onClick={() => router.push(`/${redirect}`)}
            className='cursor-pointer text-sm font-bold text-verdeHM duration-200 hover:text-verdeHM/70 lg:text-base'
          >
            {extraTitle.toLocaleUpperCase()}
          </span>
        )}
      </p>
    </div>
  );
}
