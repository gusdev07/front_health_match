import { Loader2 } from 'lucide-react';

interface ButtonContentProps {
  name: string;
  loading?: boolean;
}

export function ButtonContent({ name, loading = false }: ButtonContentProps) {
  return (
    <button className='mb-2 flex w-full items-center justify-center rounded-md bg-verdeHM p-3 text-xs font-medium text-white duration-300 hover:bg-verdeHM/70 lg:p-4 lg:text-sm'>
      {!loading ? (
        name.toLocaleUpperCase()
      ) : (
        <Loader2 className='flex h-4 w-4 animate-spin lg:h-5 lg:w-5' />
      )}
    </button>
  );
}
