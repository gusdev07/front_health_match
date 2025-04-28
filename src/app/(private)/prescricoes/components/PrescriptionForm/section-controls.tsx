import { Plus, Minus } from 'lucide-react';
import { twMerge } from 'tailwind-merge';

interface SectionControlsProps {
  onAdd: () => void;
  onRemove: () => void;
  className?: string;
  disabled: boolean;
}

export function SectionControls({
  onAdd,
  onRemove,
  className = '',
  disabled = false,
}: SectionControlsProps) {
  return (
    <div className={twMerge('flex items-center gap-2 text-verdeHM', className)}>
      <button onClick={onAdd}>
        <Plus className='h-6 w-6 cursor-pointer duration-100 hover:text-verdeHM/70' />
      </button>
      <button onClick={onRemove} disabled={disabled}>
        <Minus
          className={`h-6 w-6 ${disabled ? 'text-cinzaClaroHM disabled:opacity-80' : 'cursor-pointer duration-100 hover:text-verdeHM/70'}`}
        />
      </button>
    </div>
  );
}
