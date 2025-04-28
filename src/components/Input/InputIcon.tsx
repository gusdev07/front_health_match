import { ElementType } from 'react';

interface InputIconProps {
  icon: ElementType;
  className?: string;
}

export function InputIcon({ icon: Icon, className }: InputIconProps) {
  return <Icon className={className} />;
}
