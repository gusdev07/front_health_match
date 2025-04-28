import PatientDataTable from './components/patient-datatable';

/* Consulta para pegar os patients */

// async function fetchPatient() {
//   const response = await fetch('https://jsonplaceholder.typicode.com/users');

//   return response.json();
// }

import patients from './data.json';

export async function DataTablePatient() {
  //const patients = await fetchPatient();

  return <PatientDataTable patients={patients} />;
}
