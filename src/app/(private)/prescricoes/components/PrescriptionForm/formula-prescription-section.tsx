import { Input } from '@/components/Input';
import { SelectInput } from '@/components/SelectInput';
import { usePrescriptionStore } from '@/store/usePrescriptionStore';
import { SectionControls } from './section-controls';

export function FormulaPrescriptionSection() {
  const { formulas, addFormula, updateFormula, removeFormula } = usePrescriptionStore();

  return (
    <div className='flex flex-col gap-3'>
      {formulas.map((item, index) => (
        <div key={item.id} className='flex gap-3'>
          <SelectInput
            placeholder='Fórmula'
            selectLabel='Fórmulas'
            dataItems={['fórmula 1', 'fórmula 2', 'fórmula 3']}
          />
          <Input.Root className='border border-cinzaClaroHM'>
            <Input.Content
              placeholder='Posologia'
              value={item.dosage}
              onChange={(e) => updateFormula(item.id, 'dosage', e.target.value)}
            />
          </Input.Root>
          <SectionControls
            disabled={index === 0}
            onAdd={addFormula}
            onRemove={() => removeFormula(item.id)}
          />
        </div>
      ))}
    </div>
  );
}
