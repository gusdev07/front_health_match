import { ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';

interface ContainerProps {
  children: ReactNode;
  className?: string;
}

export function Container({ children, className }: ContainerProps) {
  return (
    <div className={twMerge('min-h-screen bg-backgroundHM px-10 pb-10 pt-5', className)}>
      {children}
    </div>
  );
}
