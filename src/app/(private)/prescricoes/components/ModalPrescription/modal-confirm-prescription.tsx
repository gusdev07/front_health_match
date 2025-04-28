'use client';

import useLoggedUserStore from '@/store/useLoggedUserStore';
import Image from 'next/image';

import { Button } from '@/components/Button';
import { Modal } from '@/components/Modal';
import { Separator } from '@/components/ui/separator';
import { NotepadText, Pencil, X } from 'lucide-react';

interface ModalConfirmPrescriptionProps {
  openModal: boolean;
  closeModal: () => void;
}

export function ModalConfirmPrescription({ openModal, closeModal }: ModalConfirmPrescriptionProps) {
  const { user } = useLoggedUserStore();

  return (
    <Modal.Root openModal={openModal} setOpenModal={closeModal}>
      <Modal.Content className='w-auto max-w-[60vw] p-4'>
        <Modal.Header title='Nova Prescrição' />
        <Modal.Description description='Valide a prescrição' />
        <div className='flex flex-col gap-3 2xl:gap-7'>
          <div className='flex justify-center'>
            <div className='text-xs text-pretoHM'>
              <div className='flex flex-col gap-0.5'>
                <p className='font-bold'>Dr. {user.username}</p>
                <p>Clínica Vida</p>
                <p>Rua das Flores, 123, São Paulo, SP</p>
                <p>(11) 9 9705-32222 | contato@clinicavida.com</p>
              </div>
            </div>
          </div>

          <Separator className='bg-cinzaClaroHM' />

          {/* Infos Paciente */}
          <div className='rounded-xl border border-cinzaClaroHM p-4'>
            <div className='flex justify-between gap-24 text-xs'>
              <div className='flex flex-col gap-1'>
                <p className='text-cinzaHM'>Nome</p>
                <p className='font-bold text-pretoHM'>Maria Oliveira</p>
              </div>
              <div className='flex flex-col gap-1'>
                <p className='text-cinzaHM'>E-mail</p>
                <p className='font-bold text-pretoHM'>maria.oliveira@example.com</p>
              </div>
              <div className='flex flex-col gap-1'>
                <p className='text-cinzaHM'>Telefone</p>
                <p className='font-bold text-pretoHM'>(11)91234-5678</p>
              </div>
            </div>
          </div>

          {/* Array de Fórmulas */}
          <div className='flex flex-col gap-3 rounded-xl border border-cinzaClaroHM p-4'>
            <div className='flex flex-col gap-0.5'>
              <p className='text-sm font-bold text-pretoHM'>BioBalance Plus</p>
              <p className='text-xs text-cinzaHM'>
                Suporte para equilíbrio da microbiota intestinal e melhora da digestão
              </p>
            </div>

            <div className='flex flex-col gap-2'>
              <p className='text-xs font-bold text-pretoHM'>Composição</p>
              <div className='grid grid-cols-3 gap-x-10 gap-y-3'>
                <div>
                  <p className='text-xs text-cinzaHM'>Lactobacillus rhamnosus</p>
                  <p className='text-xs font-semibold text-pretoHM'>10 bilhões UFC</p>
                </div>
                <div>
                  <p className='text-xs text-cinzaHM'>Bifidobacterium longum</p>
                  <p className='text-xs font-semibold text-pretoHM'>10 bilhões UFC</p>
                </div>
                <div>
                  <p className='text-xs text-cinzaHM'>Saccharomyces boulardii</p>
                  <p className='text-xs font-semibold text-pretoHM'>5 bilhões UFC</p>
                </div>
                <div>
                  <p className='text-xs text-cinzaHM'>Lactobacillus plantarum</p>
                  <p className='text-xs font-semibold text-pretoHM'>10 bilhões UFC</p>
                </div>
                <div>
                  <p className='text-xs text-cinzaHM'>Frutooligossacarídeos (FOS)</p>
                  <p className='text-xs font-semibold text-pretoHM'>Prebiótico – 2 g</p>
                </div>
              </div>
            </div>

            <div>
              <p className='text-xs text-cinzaHM'>Posologia</p>
              <p className='text-xs font-semibold text-pretoHM'>
                Tomar 01 cápsula junto ao almoço e jantar.
              </p>
            </div>
          </div>

          {/* Array OTC */}
          <div className='flex flex-col gap-3 rounded-xl border border-cinzaClaroHM p-4'>
            <p className='text-sm font-bold text-pretoHM'>OTC: Paracetamol</p>
            <div>
              <p className='text-xs text-cinzaHM'>Posologia</p>
              <p className='text-xs font-semibold text-cinzaHM'>
                Tomar 01 comprimido a cada 8 horas, se necessário.
              </p>
            </div>
          </div>

          {/* Imagem Carimbo */}
          <div className='flex justify-center'>
            <div>
              <Image
                src='/images/imagem-exemplo-carimbo.png'
                width={174}
                height={60}
                alt='imagem-carimbo'
              />
            </div>
          </div>

          <Modal.Actions className='flex items-center gap-2'>
            <Button.Root
              onClick={closeModal}
              className='cursor-pointer text-verdeHM duration-150 hover:opacity-70'
            >
              <Button.Icon className='h-5 w-5' icon={X} />
              <Button.Content className='text-xs' title='Cancelar' />
            </Button.Root>
            <Button.Root className='cursor-pointer rounded border-2 border-verdeHM px-2 py-1 text-verdeHM duration-150 hover:opacity-70'>
              <Button.Icon className='h-5 w-5' icon={Pencil} />
              <Button.Content className='text-xs' title='Editar' />
            </Button.Root>
            <Button.Root className='cursor-pointer rounded border-2 border-verdeHM bg-verdeHM px-2 py-1 text-white duration-150 hover:opacity-70'>
              <Button.Icon className='h-5 w-5' icon={NotepadText} />
              <Button.Content className='text-xs' title='Preescrever' />
            </Button.Root>
          </Modal.Actions>
        </div>
      </Modal.Content>
    </Modal.Root>
  );
}
