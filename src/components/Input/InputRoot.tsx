import { ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';

interface InputRootProps {
  children: ReactNode;
  className?: string;
}

export function InputRoot({ children, className }: InputRootProps) {
  return (
    <div
      className={twMerge(
        'flex w-full items-center gap-1 rounded-md border border-blue-200 bg-white p-3 text-black',
        className
      )}
    >
      {children}
    </div>
  );
}
