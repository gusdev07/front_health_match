import { Brain, Microscope } from 'lucide-react';
import { LatestInnovationsItem } from './latest-innovations-item';
import { ScrollArea } from '@/components/ui/scroll-area';

export function LatestInnovations() {
  //Consulta das inovações
  const innovations = [
    {
      icon: Microscope,
      iconStyle: 'text-roxoHM',
      bgIcon: 'bg-roxoClaroHM',
      title: 'Nova ferramenta de diagnóstico',
      description: 'Tecnologia avançada para exames laboratoriais mais precisos.',
    },
    {
      icon: Brain,
      iconStyle: 'text-laranjaHM',
      bgIcon: 'bg-laranjaClaroHM',
      title: 'Tratamento neurológico',
      description: 'Soluções inovadoras para distúrbios cerebrais complexos.',
    },
    {
      icon: Microscope,
      iconStyle: 'text-roxoHM',
      bgIcon: 'bg-roxoClaroHM',
      title: 'Análise genética',
      description: 'Mapeamento genético para prevenção de doenças hereditárias.',
    },
    {
      icon: Brain,
      iconStyle: 'text-laranjaHM',
      bgIcon: 'bg-laranjaClaroHM',
      title: 'Estimulação cerebral',
      description: 'Tratamentos não invasivos para melhorar funções cognitivas.',
    },
    {
      icon: Microscope,
      iconStyle: 'text-roxoHM',
      bgIcon: 'bg-roxoClaroHM',
      title: 'Microscopia 3D',
      description: 'Visualização tridimensional de tecidos com alta precisão.',
    },
    {
      icon: Brain,
      iconStyle: 'text-laranjaHM',
      bgIcon: 'bg-laranjaClaroHM',
      title: 'Neurociência aplicada',
      description: 'Integração de IA com terapias neurológicas personalizadas.',
    },
    {
      icon: Microscope,
      iconStyle: 'text-roxoHM',
      bgIcon: 'bg-roxoClaroHM',
      title: 'Detecção precoce',
      description: 'Algoritmos para identificar doenças em estágios iniciais.',
    },
    {
      icon: Brain,
      iconStyle: 'text-laranjaHM',
      bgIcon: 'bg-laranjaClaroHM',
      title: 'Mapeamento cerebral',
      description: 'Tecnologia de ponta para diagnósticos funcionais do cérebro.',
    },
    {
      icon: Microscope,
      iconStyle: 'text-roxoHM',
      bgIcon: 'bg-roxoClaroHM',
      title: 'Biopsia inteligente',
      description: 'Equipamentos que analisam amostras em tempo real.',
    },
    {
      icon: Brain,
      iconStyle: 'text-laranjaHM',
      bgIcon: 'bg-laranjaClaroHM',
      title: 'Reabilitação cognitiva',
      description: 'Plataformas digitais para acelerar a recuperação neurológica.',
    },
  ];

  return (
    <div className='h-auto rounded-lg border border-cinzaClaroHM bg-white p-5 lg:h-[542px]'>
      <p className='mb-4 text-lg font-bold text-pretoHM 2xl:mb-6 2xl:text-2xl'>Últimas inovações</p>

      <ScrollArea className='max-h-[calc(100vh-300px)] w-full lg:h-[442px]'>
        <div className='flex flex-col gap-4'>
          {innovations.map((item, index) => (
            <LatestInnovationsItem
              key={index}
              icon={item.icon}
              iconStyle={item.iconStyle}
              bgIcon={item.bgIcon}
              title={item.title}
              description={item.description}
            />
          ))}
        </div>
      </ScrollArea>
    </div>
  );
}
