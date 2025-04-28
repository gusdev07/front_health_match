import { Container } from '@/components/Container';
import { Separator } from '@/components/ui/separator';
import { CodeXml, Phone } from 'lucide-react';

export default function Developers() {
  return (
    <Container className='flex items-center justify-center shadow-lg'>
      <div className='rounded-lg border border-cinzaClaroHM bg-pretoHM p-5 shadow-xl'>
        <p className='flex items-center justify-center gap-2 font-montserrat font-semibold text-verdeHM'>
          <CodeXml /> Desenvolvido por <span className='text-white'>BlackFarm</span>
        </p>

        <Separator className='my-5' />

        <div className='font-montserrat text-white'>
          <p>
            <span className='font-semibold'>Geovani</span> - geovani.sllva@blackfarmtech.com.br
          </p>
          <p>
            <span className='font-semibold'>Gustavo</span> - gustavo.gomes@blackfarmtech.com.br
          </p>
          <p>
            <span className='font-semibold'>Giancarlo</span> - gian.pagliarini@blackfarmtech.com.br
          </p>
        </div>

        <Separator className='my-5' />

        <p className='flex cursor-pointer items-center justify-center gap-2 font-montserrat font-semibold text-verdeHM duration-200 hover:opacity-70'>
          <Phone className='h-5 w-5' /> Contato - (11) 942054868
        </p>
      </div>
    </Container>
  );
}
