'use client';

import { useState } from 'react';
import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  getPaginationRowModel,
  useReactTable,
  SortingState,
  getSortedRowModel,
  getFilteredRowModel,
  FilterFnOption,
} from '@tanstack/react-table';

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Button as ButtonComposition } from '@/components/Button';
import { Input } from '@/components/Input';
import { DataTableHeader } from '../Datatable/components/DataTableHeader';
import { Search, Plus } from 'lucide-react';
import { DataTableHeaderContent } from '../Datatable/components/DataTableHeader/DataTableHeaderContent';
import { DataTablePagination } from '../Datatable/components/DataTablePagination';
import { ScrollArea, ScrollBar } from './scroll-area';

function normalizeString(value: string, whiteSpaceReplace = '-') {
  const alphabetSpecialChars = 'àáäâãèéëêìíïîòóöôùúüûñçßÿœæŕśńṕẃǵǹḿǘẍźḧ·/_,:;';
  const alphabetCommonChars = 'aaaaaeeeeiiiioooouuuuncsyoarsnpwgnmuxzh------';

  const normalizedValue = value
    .trim()
    .toLowerCase()
    .trim()
    .replace(/ /g, whiteSpaceReplace)
    .replace(/--/g, '-')
    .replace(/[&/\\#,+()$~%.'":*?<>{}\[\]]/g, '')
    .replace(new RegExp(alphabetSpecialChars.split('').join('|'), 'g'), (c) =>
      alphabetCommonChars.charAt(alphabetSpecialChars.indexOf(c))
    );

  return normalizedValue;
}

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
  pageSize?: number;
  searchFields?: string[];
  defaultSearch?: string;
  placeholderFilter: string;
  placeholderAction: string;
  openModal?: () => void;
}

export function DataTable<TData, TValue>({
  columns,
  data,
  pageSize = 10,
  searchFields = [],
  defaultSearch = '',
  placeholderFilter,
  placeholderAction,
  openModal,
}: DataTableProps<TData, TValue>) {
  const [sorting, setSorting] = useState<SortingState>([]);
  const [globalFilter, setGlobalFilter] = useState(defaultSearch);

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    onSortingChange: setSorting,
    getFilteredRowModel: getFilteredRowModel(),
    onGlobalFilterChange: setGlobalFilter,
    filterFns: {
      fuzzy: (row, _, value) => {
        const data = row.original;
        const search = normalizeString(value);

        return searchFields.some((field) =>
          normalizeString(data[field].toString()).includes(search)
        );
      },
    },
    globalFilterFn: 'fuzzy' as FilterFnOption<TData>,
    state: {
      sorting,
      globalFilter,
    },
    initialState: {
      pagination: {
        pageSize,
      },
    },
  });

  return (
    <div>
      <div className='flex items-center py-2 2xl:py-4'>
        <DataTableHeader.Root className='w-full'>
          <DataTableHeaderContent className='w-full justify-between'>
            <div className='flex items-center gap-5'>
              <Input.Root className='w-96 border-none p-2'>
                <Input.Content
                  placeholder={placeholderFilter}
                  value={globalFilter}
                  onChange={(event) => setGlobalFilter(event.target.value)}
                  type='text'
                  id='patientSearch'
                />
                <Input.Icon icon={Search} className='h-4 w-4 text-verdeHM' />
              </Input.Root>
              <DataTableHeader.Filter />
            </div>
            <ButtonComposition.Root
              onClick={openModal}
              className='cursor-pointer rounded-md bg-verdeHM px-2 py-2 duration-150 hover:bg-verdeHM/70'
            >
              <ButtonComposition.Icon className='h-4 w-4 text-white 2xl:h-5 2xl:w-5' icon={Plus} />
              <ButtonComposition.Content className='text-xs text-white' title={placeholderAction} />
            </ButtonComposition.Root>
          </DataTableHeaderContent>
        </DataTableHeader.Root>
      </div>

      <div className='mb-10 flex max-h-[510px] flex-col rounded-lg border border-cinzaClaroHM bg-white p-2 2xl:max-h-[660px] 2xl:w-full 2xl:p-5'>
        <ScrollArea className='h-[600px] w-full'>
          <Table>
            <TableHeader>
              {table.getHeaderGroups().map((headerGroup) => (
                <TableRow key={headerGroup.id}>
                  {headerGroup.headers.map((header) => (
                    <TableHead key={header.id}>
                      {header.isPlaceholder
                        ? null
                        : flexRender(header.column.columnDef.header, header.getContext())}
                    </TableHead>
                  ))}
                </TableRow>
              ))}
            </TableHeader>
            <TableBody>
              {table.getRowModel().rows?.length ? (
                table.getRowModel().rows.map((row) => (
                  <TableRow key={row.id} data-state={row.getIsSelected() && 'selected'}>
                    {row.getVisibleCells().map((cell) => (
                      <TableCell key={cell.id}>
                        {flexRender(cell.column.columnDef.cell, cell.getContext())}
                      </TableCell>
                    ))}
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell colSpan={columns.length} className='h-24 text-center'>
                    Sem resultados
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
          <ScrollBar orientation='horizontal' />
        </ScrollArea>

        <DataTablePagination table={table} />
      </div>
    </div>
  );
}
