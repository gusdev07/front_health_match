import Image from 'next/image';
import { Slogan } from '@/components/Slogan';
import { LogoHealthMatch } from './components/LogoHealthMatch';

export default function PublicLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className='h-screen bg-backgroundHM lg:grid lg:grid-cols-2'>
      <div className='relative hidden h-full w-full lg:block'>
        <Image
          src='/images/imagemTesteLogin.svg'
          alt='Imagem teste do login'
          className='object-cover'
          fill
          priority
        />
      </div>
      <div className='flex flex-col items-center justify-center'>
        <LogoHealthMatch
          redirectPath='signin'
          src='/images/logoHealthMatch.svg'
          className='my-10 cursor-pointer lg:my-0 lg:mb-16'
        />
        <div className='flex min-h-[540px] w-full flex-col items-center justify-center pl-4 pr-4 2xl:w-1/3 2xl:p-0'>
          {children}
        </div>
        <Slogan />
      </div>
    </div>
  );
}
