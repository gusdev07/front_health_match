'use client';

import { Modal } from '@/components/Modal';
import { Button } from '@/components/Button';
import { Check, X } from 'lucide-react';
import { NewPrescriptionForm } from '../PrescriptionForm/new-prescription-form';
import { ModalConfirmPrescription } from './modal-confirm-prescription';
import { useState } from 'react';

interface ModalPrescriptionProps {
  openModal: boolean;
  closeModal: () => void;
}

export function ModalNewPrescription({ openModal, closeModal }: ModalPrescriptionProps) {
  const [prescriptionModalConfirm, setPrescriptionModalConfirm] = useState(false);

  const openModalConfirm = () => {
    closeModal();
    setPrescriptionModalConfirm(true);
  };
  const closeModalConfirm = () => setPrescriptionModalConfirm(false);

  return (
    <div>
      <Modal.Root openModal={openModal} setOpenModal={closeModal}>
        <Modal.Content className='p-4'>
          <Modal.Header title='Nova Prescrição' />
          <Modal.Description description='Preencha os campos abaixo para criar uma nova prescrição.' />
          <NewPrescriptionForm />
          <Modal.Actions className='flex items-center gap-3 pt-6'>
            <Button.Root
              onClick={closeModal}
              className='cursor-pointer text-verdeHM duration-150 hover:opacity-70'
            >
              <Button.Icon icon={X} />
              <Button.Content className='text-xs' title='Cancelar' />
            </Button.Root>
            <Button.Root
              onClick={openModalConfirm}
              className='cursor-pointer rounded bg-verdeHM px-2 py-1 text-white duration-150 hover:opacity-70'
            >
              <Button.Icon className='h-6 w-6' icon={Check} />
              <Button.Content className='text-xs' title='Validar' />
            </Button.Root>
          </Modal.Actions>
        </Modal.Content>
      </Modal.Root>

      <ModalConfirmPrescription
        openModal={prescriptionModalConfirm}
        closeModal={closeModalConfirm}
      />
    </div>
  );
}
