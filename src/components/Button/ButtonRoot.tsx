import { HTMLAttributes, ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';

interface ButtonRootProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  className?: string;
}

export function ButtonRoot({ children, className, ...rest }: ButtonRootProps) {
  return (
    <div className={twMerge('flex items-center gap-2', className)} {...rest}>
      {children}
    </div>
  );
}
