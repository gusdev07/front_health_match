import { Container } from '@/components/Container';
import { LatestInnovations } from './components/LatestInnovations';
import { PrescriptionTips } from './components/PrescriptionTips';
import { HeaderHome } from './components/HeaderHome';
import { CarouselCards } from './components/CarouselCards';
import { SuggestedFormulas } from './components/SuggestedFormulas';

export default function Home() {
  return (
    <Container>
      <div className='flex flex-col gap-5'>
        <div className='grid grid-cols-1 gap-4 lg:grid-cols-[3fr_1fr]'>
          <div className='flex flex-col gap-4'>
            <HeaderHome />
            <CarouselCards />
          </div>

          <LatestInnovations />
        </div>

        <div className='grid grid-cols-1 gap-4 lg:grid-cols-[3fr_1fr]'>
          <SuggestedFormulas />
          <PrescriptionTips />
        </div>
      </div>
    </Container>
  );
}
