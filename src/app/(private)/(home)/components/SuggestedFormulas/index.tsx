import { ScrollArea } from '@/components/ui/scroll-area';
import { SuggestedFormulasItem } from './suggested-formulas-item';

export function SuggestedFormulas() {
  return (
    <div className='flex w-full flex-col gap-5 rounded-lg border border-cinzaClaroHM bg-white p-5'>
      <p className='text-lg font-bold text-pretoHM 2xl:text-2xl'>Fórmulas sugeridas</p>

      <ScrollArea className='h-[480px] w-full'>
        <div className='grid grid-cols-3 gap-2 2xl:gap-4'>
          {Array.from({ length: 32 }).map((_, index) => (
            <SuggestedFormulasItem key={index} />
          ))}
        </div>
      </ScrollArea>
    </div>
  );
}
