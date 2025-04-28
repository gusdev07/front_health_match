import { Input } from '@/components/Input';
import { SelectInput } from '@/components/SelectInput';
import { SectionControls } from './section-controls';
import { usePrescriptionStore } from '@/store/usePrescriptionStore';

export function OTCPrescriptionSection() {
  const { otcs, addOTC, removeOTC, updateOTC } = usePrescriptionStore();

  return (
    <div className='flex flex-col gap-3'>
      {otcs.map((item, index) => (
        <div key={item.id} className='flex items-center gap-3'>
          <SelectInput
            placeholder='OTC'
            selectLabel='OTC'
            dataItems={['otc 1', 'otc 2', 'otc 3']}
            value={item.otc}
            onValueChange={(value) => updateOTC(item.id, 'otc', value)}
          />
          <Input.Root className='border border-cinzaClaroHM'>
            <Input.Content
              placeholder='Posologia'
              value={item.dosage}
              onChange={(e) => updateOTC(item.id, 'dosage', e.target.value)}
            />
          </Input.Root>
          <SectionControls
            disabled={index === 0}
            onAdd={addOTC}
            onRemove={() => removeOTC(item.id)}
          />
        </div>
      ))}
    </div>
  );
}
