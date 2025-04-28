import { ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';

interface DataTableHeaderContentProps {
  children: ReactNode;
  className?: string;
}

export function DataTableHeaderContent({ children, className }: DataTableHeaderContentProps) {
  return <div className={twMerge('flex items-center gap-5', className)}>{children}</div>;
}
