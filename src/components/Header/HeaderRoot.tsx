import { ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';

interface HeaderRootProps {
  children: ReactNode;
  className?: string;
}

export function HeaderRoot({ children, className }: HeaderRootProps) {
  return (
    <header
      className={twMerge('flex items-center justify-between bg-azulClaroHM px-10 py-5', className)}
    >
      {children}
    </header>
  );
}
