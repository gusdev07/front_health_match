import { SelectInput } from '@/components/SelectInput';
import { Textarea } from '@/components/ui/textarea';
import { SectionControls } from './section-controls';
import { usePrescriptionStore } from '@/store/usePrescriptionStore';

export function SuggestedPharmacySection() {
  const { pharmacies, addPharmacy, removePharmacy, updatePharmacy } = usePrescriptionStore();

  return (
    <div className='flex flex-col gap-3'>
      {pharmacies.map((item, index) => (
        <div key={item.id} className='flex flex-col gap-3'>
          <div className='flex items-center gap-3'>
            <SelectInput
              placeholder='Farmácia Sugerida'
              selectLabel='Farmácia Sugerida'
              dataItems={['Farmácia do Povo', 'Panvel', 'São João']}
              value={item.name}
              onValueChange={(value) => updatePharmacy(item.id, 'name', value)}
            />
            <SectionControls
              disabled={index === 0}
              onAdd={addPharmacy}
              onRemove={() => removePharmacy(item.id)}
            />
          </div>
        </div>
      ))}
      <Textarea placeholder='Observações' className='resize-none border-cinzaClaroHM' />
    </div>
  );
}
