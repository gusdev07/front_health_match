import { ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';

interface HeaderRootProps {
  children: ReactNode;
  className?: string;
}

export function DataTableHeaderRoot({ children, className }: HeaderRootProps) {
  return (
    <div
      className={twMerge(
        'rounded-xl border border-cinzaClaroHM bg-azulClaroHM px-5 py-3',
        className
      )}
    >
      {children}
    </div>
  );
}
