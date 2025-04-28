import { ElementType } from 'react';
import { twMerge } from 'tailwind-merge';

interface LatestInnovationsItemProps {
  icon: ElementType;
  iconStyle: string;
  bgIcon: string;
  title: string;
  description: string;
}

export function LatestInnovationsItem({
  icon: Icon,
  iconStyle,
  title,
  description,
  bgIcon,
}: LatestInnovationsItemProps) {
  return (
    <div className='flex cursor-pointer gap-4 duration-100 hover:opacity-70'>
      <div className={twMerge('h-1/2 rounded-lg p-3', bgIcon)}>
        <Icon className={twMerge('h-4 w-5 2xl:h-5', iconStyle)} />
      </div>
      <div className='flex flex-col gap-1'>
        <p className='text-sm font-semibold text-pretoHM 2xl:text-base'>{title}</p>
        <p className='text-xs text-cinzaHM 2xl:text-sm'>{description}</p>
      </div>
    </div>
  );
}
