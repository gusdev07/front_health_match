import { DialogHeader, DialogTitle } from '../ui/dialog';

interface ModalHeaderProps {
  title: string;
}

export function ModalHeader({ title }: ModalHeaderProps) {
  return (
    <DialogHeader className='px-2'>
      <DialogTitle>{title}</DialogTitle>
    </DialogHeader>
  );
}
