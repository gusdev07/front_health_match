import { Hammer } from 'lucide-react';
import { Separator } from '../ui/separator';

export function ConstructionBadge() {
  return (
    <div className='w-[350px] rounded-lg border border-cinzaClaroHM bg-white p-4 shadow-lg'>
      <p className='flex items-center justify-center gap-2 font-montserrat font-semibold text-verdeHM'>
        <Hammer className='h-5 w-5 text-amareloHM' />
        Em desenvolvimento
      </p>

      <Separator className='my-2' />

      <p className='text-center text-sm font-semibold text-pretoHM'>By BlackFarm</p>
    </div>
  );
}
