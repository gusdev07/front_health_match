import { ReactNode } from 'react';
import { DialogContent } from '../ui/dialog';

interface ModalContentProps {
  children: ReactNode;
  className?: string;
}

export function ModalContent({ children, className }: ModalContentProps) {
  return <DialogContent className={className}>{children}</DialogContent>;
}
