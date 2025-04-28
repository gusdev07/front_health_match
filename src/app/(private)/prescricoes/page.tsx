import { Container } from '@/components/Container';
import { DataTablePrescription } from '@/components/Datatable/data-table-prescription';

export default function Prescricoes() {
  return (
    <Container>
      <p className='mb-2 text-xl font-bold text-pretoHM 2xl:mb-5 2xl:text-2xl'>Prescrições</p>
      <DataTablePrescription />
    </Container>
  );
}
