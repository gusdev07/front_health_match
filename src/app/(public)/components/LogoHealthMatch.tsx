'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';

interface LogoHealthMatchProps {
  className: string;
  src: string;
  redirectPath: string;
}

export function LogoHealthMatch({ className, src, redirectPath }: LogoHealthMatchProps) {
  const router = useRouter();

  return (
    <div>
      <Image
        src={src}
        onClick={() => router.push(`${redirectPath}`)}
        className={className}
        width={200}
        height={80}
        alt='logo health match'
      />
    </div>
  );
}
