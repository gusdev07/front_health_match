import { Input } from '../Input';
import { Search, Info } from 'lucide-react';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '../ui/tooltip';

export function HeaderSearch() {
  return (
    <div className='flex items-center gap-2'>
      <Input.Root className='w-[300px] rounded-lg px-3 py-2'>
        <Input.Content placeholder='Procure em toda a aplicação' id='searchAll' type='text' />
        <Input.Icon icon={Search} className='h-4 w-4 text-verdeHM' />
      </Input.Root>
      <TooltipProvider delayDuration={150}>
        <Tooltip>
          <TooltipTrigger asChild>
            <Info className='h-5 w-5 text-verdeHM' />
          </TooltipTrigger>
          <TooltipContent>
            <p className='text-xs'>
              Aqui você poderá procurar sobre tudo dentro da plataforma Health Match.
            </p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </div>
  );
}
