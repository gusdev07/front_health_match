import { create } from 'zustand';

export interface Formula {
  id: string;
  formula: string;
  dosage: string;
}

export interface OTC {
  id: string;
  otc: string;
  dosage: string;
}

export interface Pharmacy {
  id: string;
  name: string;
}

interface PrescriptionState {
  formulas: Formula[];
  addFormula: () => void;
  removeFormula: (id: string) => void;
  updateFormula: (id: string, key: keyof Formula, value: string) => void;

  otcs: OTC[];
  addOTC: () => void;
  removeOTC: (id: string) => void;
  updateOTC: (id: string, key: keyof OTC, value: string) => void;

  pharmacies: Pharmacy[];
  addPharmacy: () => void;
  removePharmacy: (id: string) => void;
  updatePharmacy: (id: string, key: keyof Pharmacy, value: string) => void;
}

export const usePrescriptionStore = create<PrescriptionState>((set) => ({
  formulas: [{ id: crypto.randomUUID(), formula: '', dosage: '' }],
  otcs: [{ id: crypto.randomUUID(), otc: '', dosage: '' }],
  pharmacies: [{ id: crypto.randomUUID(), name: '' }],

  addFormula: () =>
    set((state) => ({
      formulas: [...state.formulas, { id: crypto.randomUUID(), formula: '', dosage: '' }],
    })),
  removeFormula: (id) => set((state) => ({ formulas: state.formulas.filter((f) => f.id !== id) })),
  updateFormula: (id, key, value) =>
    set((state) => ({
      formulas: state.formulas.map((f) => (f.id === id ? { ...f, [key]: value } : f)),
    })),

  addOTC: () =>
    set((state) => ({
      otcs: [...state.otcs, { id: crypto.randomUUID(), otc: '', dosage: '' }],
    })),
  removeOTC: (id) => set((state) => ({ otcs: state.otcs.filter((o) => o.id !== id) })),
  updateOTC: (id, key, value) =>
    set((state) => ({
      otcs: state.otcs.map((o) => (o.id === id ? { ...o, [key]: value } : o)),
    })),

  addPharmacy: () =>
    set((state) => ({
      pharmacies: [...state.pharmacies, { id: crypto.randomUUID(), name: '' }],
    })),
  removePharmacy: (id) =>
    set((state) => ({ pharmacies: state.pharmacies.filter((p) => p.id !== id) })),
  updatePharmacy: (id, key, value) =>
    set((state) => ({
      pharmacies: state.pharmacies.map((p) => (p.id === id ? { ...p, [key]: value } : p)),
    })),
}));
