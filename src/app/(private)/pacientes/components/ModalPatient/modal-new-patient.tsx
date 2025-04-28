import { Modal } from '@/components/Modal';
import { Button } from '@/components/Button';
import { Plus, X } from 'lucide-react';
import { NewPatientForm } from '../PatientForm/new-patient-form';

interface ModalPatientProps {
  openModal: boolean;
  closeModal: () => void;
}

export function ModalNewPatient({ openModal, closeModal }: ModalPatientProps) {
  const openModalConfirm = () => {
    closeModal();
  };

  return (
    <Modal.Root openModal={openModal} setOpenModal={closeModal}>
      <Modal.Content className='p-4'>
        <Modal.Header title='Novo Paciente' />
        <Modal.Description description='Preencha os campos abaixo para criar um novo paciente.' />
        <NewPatientForm />
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
            <Button.Icon className='h-6 w-6' icon={Plus} />
            <Button.Content className='text-xs' title='Adicionar' />
          </Button.Root>
        </Modal.Actions>
      </Modal.Content>
    </Modal.Root>
  );
}
