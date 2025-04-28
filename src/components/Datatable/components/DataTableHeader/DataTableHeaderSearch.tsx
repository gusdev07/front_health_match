import { Search } from 'lucide-react';
import { Input } from '../../../Input';

export function DataTableHeaderSearch() {
  return (
    <Input.Root className='w-96 border-none p-2'>
      <Input.Content placeholder='Procure o paciente' type='text' id='patientSearch' />
      <Input.Icon icon={Search} className='h-4 w-4 text-verdeHM' />
    </Input.Root>
  );
}
