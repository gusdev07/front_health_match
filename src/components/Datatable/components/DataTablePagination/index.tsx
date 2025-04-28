import { Table } from '@tanstack/react-table';
import { ChevronLeft, ChevronRight } from 'lucide-react';

import { Button } from '@/components/ui/button';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

interface DataTablePaginationProps<TData> {
  table: Table<TData>;
}

export function DataTablePagination<TData>({ table }: DataTablePaginationProps<TData>) {
  return (
    <div className='mt-4 flex items-center justify-between px-6'>
      <div className='flex items-center justify-center rounded-full text-xs font-medium'>
        {table.getState().pagination.pageIndex + 1} de {table.getPageCount()}
      </div>

      <div className='flex items-center gap-2'>
        <Button
          variant='outline'
          className='h-8 w-8 border-none p-0'
          onClick={() => table.previousPage()}
          disabled={!table.getCanPreviousPage()}
        >
          <ChevronLeft />
        </Button>

        <div className='flex items-center gap-3'>
          {Array.from({ length: table.getPageCount() }).map((_, index) => (
            <button
              key={index}
              className={`flex h-6 w-6 items-center justify-center rounded-full text-sm ${table.getState().pagination.pageIndex === index ? 'bg-verdeHM text-white' : 'bg-white'}`}
              onClick={() => table.setPageIndex(index)}
            >
              {index + 1}
            </button>
          ))}
        </div>

        <Button
          variant='outline'
          className='h-8 w-8 border-none'
          onClick={() => table.nextPage()}
          disabled={!table.getCanNextPage()}
        >
          <ChevronRight />
        </Button>
      </div>

      <div className='flex items-center space-x-2'>
        <p className='text-sm font-medium'>Linhas por página</p>
        <Select
          value={`${table.getState().pagination.pageSize}`}
          onValueChange={(value) => {
            table.setPageSize(Number(value));
          }}
        >
          <SelectTrigger className='h-8 w-[70px]'>
            <SelectValue placeholder={table.getState().pagination.pageSize} />
          </SelectTrigger>
          <SelectContent side='top'>
            {[7, 10, 20, 30].map((pageSize) => (
              <SelectItem key={pageSize} value={`${pageSize}`}>
                {pageSize}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
    </div>
  );
}
