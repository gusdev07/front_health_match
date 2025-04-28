import { ButtonHTMLAttributes } from 'react';

interface ButtonContentProps {
  title: string;
  className: string;
}

export function ButtonContent({ title, className }: ButtonContentProps) {
  return <button className={className}>{title.toLocaleUpperCase()}</button>;
}
