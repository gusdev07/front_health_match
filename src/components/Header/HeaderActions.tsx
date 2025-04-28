import { CircleHelp } from 'lucide-react';
import { WhatsAppIcon } from '../ui/whatsapp-icon';
import { Header } from '.';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';

export function HeaderActions() {
  return (
    <TooltipProvider delayDuration={200}>
      <div className='flex items-center gap-8'>
        <Tooltip>
          <TooltipTrigger asChild>
            <WhatsAppIcon
              className='cursor-pointer duration-100 hover:opacity-70'
              width={24}
              height={24}
            />
          </TooltipTrigger>
          <TooltipContent>
            <p>Contato via WhatsApp</p>
          </TooltipContent>
        </Tooltip>

        <Tooltip>
          <TooltipTrigger asChild>
            <CircleHelp className='h-6 w-6 cursor-pointer text-verdeHM duration-100 hover:text-verdeHM/70' />
          </TooltipTrigger>
          <TooltipContent>
            <p>Ajuda</p>
          </TooltipContent>
        </Tooltip>

        <Header.Profile />
      </div>
    </TooltipProvider>
  );
}
