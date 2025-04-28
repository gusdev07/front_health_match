import { ListFilter } from 'lucide-react';
import { Button } from '../../../Button';

export function DataTableHeaderFilter() {
  return (
    <Button.Root className='cursor-pointer rounded-md border-2 border-verdeHM p-1 px-2 duration-150 hover:opacity-70'>
      <Button.Icon className='h-5 w-5 text-verdeHM' icon={ListFilter} />
      <Button.Content className='text-xs text-verdeHM' title='Filtros' />
    </Button.Root>
  );
}
