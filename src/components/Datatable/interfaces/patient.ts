export interface IPatientPrescription {
  prescriptionNumber: string;
  patient: string;
  letterhead: string;
  suggestedPharmacies: string;
  observation: string;
}

export interface IPatient {
  patient: string;
  code: number;
  sex: string;
  dateOfBirth: string;
  cpf: string;
  tell: string;
  email: string;
  registerDate: string;
  lastUpdate: string;
}
