import PrescriptionDataTable from './components/prescription-datatable';

/* Consulta para pegar os patients */

// async function fetchPatient() {
//   const response = await fetch('https://jsonplaceholder.typicode.com/users');

//   return response.json();
// }

import patients from './data.json';

export async function DataTablePrescription() {
  //const patients = await fetchPatient();

  return <PrescriptionDataTable patientsPrescription={patients} />;
}
