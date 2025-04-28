import { DialogDescription } from '../ui/dialog';

interface ModalDescriptionProps {
  description: string;
}

export function ModalDescription({ description }: ModalDescriptionProps) {
  return <DialogDescription className='px-2 text-xs'>{description}</DialogDescription>;
}
