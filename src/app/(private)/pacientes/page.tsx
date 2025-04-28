import { Container } from '@/components/Container';
import { DataTablePatient } from '@/components/Datatable/data-table-patient';
export default function Pacientes() {
  return (
    <Container>
      <p className='mb-2 text-xl font-bold text-pretoHM 2xl:mb-5 2xl:text-2xl'>Pacientes</p>
      <DataTablePatient />
    </Container>
  );
}
