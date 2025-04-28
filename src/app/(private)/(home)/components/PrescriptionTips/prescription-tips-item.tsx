import { ElementType } from 'react';

interface PrescriptionsTipsItemProps {
  icon: ElementType;
  title: string;
  description: string;
}

export function PrescriptionsTipsItem({
  title,
  description,
  icon: Icon,
}: PrescriptionsTipsItemProps) {
  return (
    <div className='flex flex-col gap-2 rounded-lg bg-verdeClaroHM p-3 2xl:p-4'>
      <p className='flex items-center justify-between text-sm font-semibold text-pretoHM 2xl:text-base'>
        {title}
        <Icon className='h-5 w-5 text-verdeHM' />
      </p>
      <p className='text-xs text-cinzaHM 2xl:text-sm'>{description}</p>
    </div>
  );
}
