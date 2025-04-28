import { Input } from '@/components/Input';
import { Separator } from '@/components/ui/separator';
import { SelectInput } from '@/components/SelectInput';
import { FormulaPrescriptionSection } from './formula-prescription-section';
import { ScrollArea } from '@/components/ui/scroll-area';
import { OTCPrescriptionSection } from './otc-prescription-section';
import { SuggestedPharmacySection } from './suggested-pharmacy-section';

export function NewPrescriptionForm() {
  return (
    <ScrollArea className='max-h-[70vh]'>
      <div className='flex flex-col p-3'>
        <div className='flex flex-col gap-3'>
          <SelectInput
            placeholder='Selecione um papel timbrado'
            selectLabel='Papéis Timbrados Disponíveis'
            dataItems={['teste', 'teste2', 'teste3']}
          />
          <Input.Root className='border border-cinzaClaroHM'>
            <Input.Content placeholder='Paciente' id='patient' />
          </Input.Root>
        </div>
        <Separator className='my-6' />
        <FormulaPrescriptionSection />
        <Separator className='my-6' />
        <OTCPrescriptionSection />
        <Separator className='my-6' />
        <SuggestedPharmacySection />
      </div>
    </ScrollArea>
  );
}
