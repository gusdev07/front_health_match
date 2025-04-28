import { ReactNode } from 'react';

interface ButtonRootProps {
  children: ReactNode;
}

export function ButtonRoot({ children }: ButtonRootProps) {
  return <div className='flex flex-col items-center'>{children}</div>;
}
