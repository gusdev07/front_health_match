import { Input } from '@/components/Input';

export function NewPatientForm() {
  return (
    <form>
      <div className='flex flex-col gap-3 px-2'>
        <p className='font-montserrat font-semibold text-pretoHM'>Geral</p>
        <Input.Root>
          <Input.Content id='fullName' placeholder='Nome completo' />
        </Input.Root>
        <Input.Root>
          <Input.Content id='dateOfBirth' placeholder='Data de nascimento' />
        </Input.Root>
        <Input.Root>
          <Input.Content id='cpf' placeholder='CPF' />
        </Input.Root>
        <Input.Root>
          <Input.Content id='email' placeholder='E-mail' />
        </Input.Root>
        <Input.Root>
          <Input.Content id='tell' placeholder='Telefone' />
        </Input.Root>
      </div>
    </form>
  );
}
