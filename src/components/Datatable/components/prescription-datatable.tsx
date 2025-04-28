'use client';

import { ColumnDef } from '@tanstack/react-table';
import { IPatientPrescription } from '../interfaces/patient';
import { DataTable } from '@/components/ui/datatable';
import { ArrowUpDown, Eye, ClipboardPen } from 'lucide-react';
import { ModalNewPrescription } from '@/app/(private)/prescricoes/components/ModalPrescription/modal-new-prescription';
import { useState } from 'react';

interface PatientPrescriptionDataTableProps {
  patientsPrescription: IPatientPrescription[];
}

const getInitials = (name: string) => {
  const parts = name.trim().split(' ');
  if (parts.length === 1) return parts[0][0]?.toUpperCase();
  return `${parts[0][0]}${parts[parts.length - 1][0]}`.toUpperCase();
};

export const columns: ColumnDef<IPatientPrescription>[] = [
  {
    accessorKey: 'prescriptionNumber',
    header: ({ column }) => {
      return (
        <button
          className='flex items-center p-4 font-montserrat text-xs font-semibold text-pretoHM duration-150 hover:text-pretoHM/70 2xl:text-sm'
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
        >
          N° Prescrição
          <ArrowUpDown className='ml-2 h-4 w-4' />
        </button>
      );
    },
    cell: ({ row }) => {
      return (
        <div className='p-2 text-xs text-pretoHM 2xl:p-4 2xl:text-sm'>
          {row.getValue('prescriptionNumber')}
        </div>
      );
    },
  },
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
          <div className='flex h-6 w-6 items-center justify-center rounded-full bg-pretoHM text-xs font-semibold text-white 2xl:h-7 2xl:w-7'>
            {initials}
          </div>
          <span className='text-xs text-pretoHM 2xl:text-sm'>{fullName}</span>
        </div>
      );
    },
  },
  {
    accessorKey: 'letterhead',
    header: ({ column }) => {
      return (
        <button
          className='flex items-center p-4 font-montserrat text-xs font-semibold text-pretoHM duration-150 hover:text-pretoHM/70 2xl:text-sm'
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
        >
          Papel Timbrado
          <ArrowUpDown className='ml-2 h-4 w-4' />
        </button>
      );
    },
    cell: ({ row }) => {
      return (
        <div className='p-2 text-xs text-pretoHM 2xl:p-4 2xl:text-sm'>
          {row.getValue('letterhead')}
        </div>
      );
    },
  },
  {
    accessorKey: 'suggestedPharmacies',
    header: ({ column }) => {
      return (
        <button
          className='flex items-center p-4 font-montserrat text-xs font-semibold text-pretoHM duration-150 hover:text-pretoHM/70 2xl:text-sm'
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
        >
          Farmácias Sugeridas
          <ArrowUpDown className='ml-2 h-4 w-4' />
        </button>
      );
    },
    cell: ({ row }) => {
      const pharmacies = row.getValue('suggestedPharmacies') as string;

      if (!pharmacies)
        return <div className='p-2 text-xs text-pretoHM 2xl:p-4 2xl:text-sm'>Nenhuma</div>;

      const pharmaciesList = pharmacies.split(',').map((item) => item.trim());

      return (
        <div className='p-2 2xl:p-4'>
          <div className='flex flex-wrap gap-1'>
            {pharmaciesList.map((pharmacie, index) => (
              <span
                key={index}
                className='rounded-full bg-gray-200 px-3 py-1 text-xs font-medium text-pretoHM'
              >
                {pharmacie}
              </span>
            ))}
          </div>
        </div>
      );
    },
  },
  {
    accessorKey: 'observation',
    header: ({ column }) => {
      return (
        <button
          className='flex items-center p-4 font-montserrat text-xs font-semibold text-pretoHM duration-150 hover:text-pretoHM/70 2xl:text-sm'
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
        >
          Observações
          <ArrowUpDown className='ml-2 h-4 w-4' />
        </button>
      );
    },
    cell: ({ row }) => {
      return (
        <div className='p-2 text-xs text-pretoHM 2xl:p-4 2xl:text-sm'>
          {row.getValue('observation')}
        </div>
      );
    },
  },
  {
    id: 'actions',
    cell: () => {
      return (
        <div className='flex items-center gap-2 p-4'>
          <Eye className='h-5 w-5 cursor-pointer text-verdeHM duration-150 hover:text-verdeHM/70' />
          <ClipboardPen className='h-5 w-5 cursor-pointer text-verdeHM duration-150 hover:text-verdeHM/70' />
        </div>
      );
    },
  },
];

export default function PrescriptionDataTable({
  patientsPrescription,
}: PatientPrescriptionDataTableProps) {
  const [modalPrescription, setModalPrescription] = useState(false);

  const openModal = () => setModalPrescription(true);
  const closeModal = () => setModalPrescription(false);

  return (
    <div>
      <DataTable
        columns={columns}
        data={patientsPrescription}
        pageSize={7}
        searchFields={[
          'prescriptionNumber',
          'patient',
          'letterhead',
          'suggestedPharmacies',
          'observation',
        ]}
        placeholderFilter='Procure por Paciente, N° Prescrição etc...'
        placeholderAction='Nova Prescrição'
        openModal={openModal}
      />

      <ModalNewPrescription openModal={modalPrescription} closeModal={closeModal} />
    </div>
  );
}
