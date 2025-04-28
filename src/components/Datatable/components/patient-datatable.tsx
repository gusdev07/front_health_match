'use client';

import { ColumnDef } from '@tanstack/react-table';
import { IPatient } from '../interfaces/patient';
import { DataTable } from '@/components/ui/datatable';
import { ArrowUpDown, Eye } from 'lucide-react';
import { useState } from 'react';
import { ModalNewPatient } from '@/app/(private)/pacientes/components/ModalPatient/modal-new-patient';

interface PatientDataTableProps {
  patients: IPatient[];
}

const getInitials = (name: string) => {
  const parts = name.trim().split(' ');
  if (parts.length === 1) return parts[0][0]?.toUpperCase();
  return `${parts[0][0]}${parts[parts.length - 1][0]}`.toUpperCase();
};

export const columns: ColumnDef<IPatient>[] = [
  {
    accessorKey: 'patient',
    header: ({ column }) => {
      return (
        <button
          className='flex items-center p-4 font-montserrat text-xs font-semibold text-pretoHM duration-150 hover:text-pretoHM/70 2xl:text-sm'
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
        >
          Paciente
          <ArrowUpDown className='ml-2 h-4 w-4' />
        </button>
      );
    },
    cell: ({ row }) => {
      const fullName = row.getValue('patient') as string;
      const initials = getInitials(fullName);

      return (
        <div className='flex items-center gap-2 p-2 2xl:p-4'>
          <div className='flex h-6 w-7 items-center justify-center rounded-full bg-pretoHM text-xs font-semibold text-white 2xl:h-7 2xl:w-7'>
            {initials}
          </div>
          <span className='text-xs text-pretoHM 2xl:text-sm'>{fullName}</span>
        </div>
      );
    },
  },
  {
    accessorKey: 'code',
    header: ({ column }) => {
      return (
        <button
          className='flex items-center p-4 font-montserrat text-xs font-semibold text-pretoHM duration-150 hover:text-pretoHM/70 2xl:text-sm'
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
        >
          Código
          <ArrowUpDown className='ml-2 h-4 w-4' />
        </button>
      );
    },
    cell: ({ row }) => {
      return (
        <div className='p-2 text-xs text-pretoHM 2xl:p-4 2xl:text-sm'>{row.getValue('code')}</div>
      );
    },
  },
  {
    accessorKey: 'sex',
    header: ({ column }) => {
      return (
        <button
          className='flex items-center p-4 font-montserrat text-xs font-semibold text-pretoHM duration-150 hover:text-pretoHM/70 2xl:text-sm'
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
        >
          Sexo
          <ArrowUpDown className='ml-2 h-4 w-4' />
        </button>
      );
    },
    cell: ({ row }) => {
      return (
        <div className='p-2 text-xs text-pretoHM 2xl:p-4 2xl:text-sm'>{row.getValue('sex')}</div>
      );
    },
  },
  {
    accessorKey: 'dateOfBirth',
    header: ({ column }) => {
      return (
        <button
          className='flex items-center p-4 font-montserrat text-xs font-semibold text-pretoHM duration-150 hover:text-pretoHM/70 2xl:text-sm'
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
        >
          Nascimento
          <ArrowUpDown className='ml-2 h-4 w-4' />
        </button>
      );
    },
    cell: ({ row }) => {
      return (
        <div className='p-2 text-xs text-pretoHM 2xl:p-4 2xl:text-sm'>
          {row.getValue('dateOfBirth')}
        </div>
      );
    },
  },
  {
    accessorKey: 'cpf',
    header: ({ column }) => {
      return (
        <button
          className='flex items-center p-4 font-montserrat text-xs font-semibold text-pretoHM duration-150 hover:text-pretoHM/70 2xl:text-sm'
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
        >
          CPF
          <ArrowUpDown className='ml-2 h-4 w-4' />
        </button>
      );
    },
    cell: ({ row }) => {
      return (
        <div className='p-2 text-xs text-pretoHM 2xl:p-4 2xl:text-sm'>{row.getValue('cpf')}</div>
      );
    },
  },
  {
    accessorKey: 'tell',
    header: ({ column }) => {
      return (
        <button
          className='flex items-center p-4 font-montserrat text-xs font-semibold text-pretoHM duration-150 hover:text-pretoHM/70 2xl:text-sm'
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
        >
          Telefone
          <ArrowUpDown className='ml-2 h-4 w-4' />
        </button>
      );
    },
    cell: ({ row }) => {
      return (
        <div className='p-2 text-xs text-pretoHM 2xl:p-4 2xl:text-sm'>{row.getValue('tell')}</div>
      );
    },
  },
  {
    accessorKey: 'email',
    header: ({ column }) => {
      return (
        <button
          className='flex items-center p-4 font-montserrat text-xs font-semibold text-pretoHM duration-150 hover:text-pretoHM/70 2xl:text-sm'
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
        >
          E-mail
          <ArrowUpDown className='ml-2 h-4 w-4' />
        </button>
      );
    },
    cell: ({ row }) => {
      return (
        <div className='p-2 text-xs text-pretoHM 2xl:p-4 2xl:text-sm'>{row.getValue('email')}</div>
      );
    },
  },
  // {
  //   accessorKey: 'registerDate',
  //   header: ({ column }) => {
  //     return (
  //       <button
  //         className='flex items-center p-4 font-montserrat text-xs font-semibold text-pretoHM duration-150 hover:text-pretoHM/70 2xl:text-sm'
  //         onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
  //       >
  //         Cadastro
  //         <ArrowUpDown className='ml-2 h-4 w-4' />
  //       </button>
  //     );
  //   },
  //   cell: ({ row }) => {
  //     return (
  //       <div className='p-2 text-xs text-pretoHM 2xl:p-4 2xl:text-sm'>
  //         {row.getValue('registerDate')}
  //       </div>
  //     );
  //   },
  // },
  // {
  //   accessorKey: 'lastUpdate',
  //   header: ({ column }) => {
  //     return (
  //       <button
  //         className='flex items-center p-4 font-montserrat text-xs font-semibold text-pretoHM duration-150 hover:text-pretoHM/70 2xl:text-sm'
  //         onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
  //       >
  //         Alterado
  //         <ArrowUpDown className='ml-2 h-4 w-4' />
  //       </button>
  //     );
  //   },
  //   cell: ({ row }) => {
  //     return (
  //       <div className='p-2 text-xs text-pretoHM 2xl:p-4 2xl:text-sm'>
  //         {row.getValue('lastUpdate')}
  //       </div>
  //     );
  //   },
  // },
  {
    id: 'actions',
    cell: () => {
      return (
        <div className='flex items-center p-4'>
          <Eye className='h-5 w-5 cursor-pointer text-verdeHM duration-150 hover:text-verdeHM/70' />
        </div>
      );
    },
  },
];

export default function PatientDataTable({ patients }: PatientDataTableProps) {
  const [modalPatient, setModalPatient] = useState(false);

  const openModal = () => setModalPatient(true);
  const closeModal = () => setModalPatient(false);

  return (
    <div>
      <DataTable
        columns={columns}
        data={patients}
        pageSize={7}
        searchFields={[
          'patient',
          'code',
          'sex',
          'dateOfBirth',
          'cpf',
          'tell',
          'email',
          'registerDate',
          'lastUpdate',
        ]}
        placeholderFilter='Procure por Paciente, CPF etc...'
        placeholderAction='Nova Paciente'
        openModal={openModal}
      />

      <ModalNewPatient openModal={modalPatient} closeModal={closeModal} />
    </div>
  );
}
