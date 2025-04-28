import { ReactNode } from 'react';
import { Dialog } from '../ui/dialog';

interface ModalRootProps {
  children: ReactNode;
  openModal: boolean;
  setOpenModal: (isOpen: boolean) => void;
}

export function ModalRoot({ children, openModal, setOpenModal }: ModalRootProps) {
  return (
    <Dialog open={openModal} onOpenChange={setOpenModal}>
      {children}
    </Dialog>
  );
}
