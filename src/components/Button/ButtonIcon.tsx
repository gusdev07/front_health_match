import { ElementType } from 'react';

interface ButtonIconProps {
  icon: ElementType;
  className?: string;
}

export function ButtonIcon({ icon: Icon, className }: ButtonIconProps) {
  return <Icon className={className} />;
}
