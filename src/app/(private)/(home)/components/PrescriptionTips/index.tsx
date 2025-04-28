import { HandCoins, Info, SquareChartGantt } from 'lucide-react';
import { PrescriptionsTipsItem } from './prescription-tips-item';

export function PrescriptionTips() {
  //Consulta das dicas
  const tips = [
    {
      icon: Info,
      title: 'Interações medicamentosas',
      description:
        'Evite combinações que possam causar efeitos adversos ou reduzir a eficácia do tratamento.',
    },
    {
      icon: HandCoins,
      title: 'Contexto socioeconômico',
      description:
        'Avalie acesso do paciente a medicamentos e ofereça alternativas acessíveis via programas públicos (ex.: Farmácia Popular), genéricos ou tratamentos cobertos pelo SUS.',
    },
    {
      icon: SquareChartGantt,
      title: 'Histórico do paciente',
      description: 'Leve em consideração o histórico médico e possíveis alergias do paciente.',
    },
  ];

  return (
    <div className='rounded-lg border border-cinzaClaroHM bg-white p-5'>
      <p className='mb-4 text-lg font-bold text-pretoHM 2xl:mb-6 2xl:text-2xl'>
        Dicas de Prescrição
      </p>

      <div className='flex flex-col gap-2 2xl:gap-4'>
        {tips.map((tip, index) => (
          <PrescriptionsTipsItem
            key={index}
            icon={tip.icon}
            title={tip.title}
            description={tip.description}
          />
        ))}
      </div>
    </div>
  );
}
