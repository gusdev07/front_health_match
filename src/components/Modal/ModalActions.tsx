import { ReactNode } from 'react';
import { DialogFooter } from '../ui/dialog';

interface ModalActionsProps {
  children: ReactNode;
  className: string;
}

export function ModalActions({ children, className }: ModalActionsProps) {
  return <DialogFooter className={className}>{children}</DialogFooter>;
}
