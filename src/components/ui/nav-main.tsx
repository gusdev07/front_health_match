'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Users, Home, NotepadText, Pill, BookPlus, Store, Code2 } from 'lucide-react';
import { LogoHealthMatch } from '@/app/(public)/components/LogoHealthMatch';
import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from './sidebar';
import { usePathname } from 'next/navigation';

const items = [
  { title: 'Home', url: '/', icon: Home },
  { title: 'Prescrições', url: '/prescricoes', icon: NotepadText },
  { title: 'Pacientes', url: '/pacientes', icon: Users },
  { title: 'Ativos', url: '/ativos', icon: Pill },
  { title: 'Fórmulas', url: '/formulas', icon: BookPlus },
  { title: 'Vitrines', url: '/vitrines', icon: Store },
  { title: 'Developers', url: '/developers', icon: Code2 },
];

export function NavMain() {
  const pathname = usePathname();
  const { open } = useSidebar();

  return (
    <SidebarGroup>
      <SidebarGroupLabel className='my-6 flex items-center justify-center'>
        <LogoHealthMatch
          redirectPath='/'
          src='/images/logoHealthMatchBranco.svg'
          className='h-9 w-20 cursor-pointer'
        />
      </SidebarGroupLabel>
      <SidebarGroupContent>
        {!open && (
          <div className='mx-3 mb-8 flex items-center justify-center'>
            <Image src='/images/tinyLogo.svg' width={18} height={34} alt='mini logo' />
          </div>
        )}
        <SidebarMenu className='flex gap-4'>
          {items.map((item) => {
            const isActive = pathname === item.url;

            return (
              <SidebarMenuItem className='flex items-center gap-1' key={item.title}>
                <div className={`${isActive ? 'block' : 'hidden'} h-4 w-1 rounded bg-amareloHM`} />
                <SidebarMenuButton
                  tooltip={item.title}
                  asChild
                  className={`flex ${isActive ? 'bg-amareloHM' : ''} rounded-md transition-all hover:bg-amareloHM`}
                >
                  <Link href={item.url}>
                    <item.icon />
                    <span>{item.title}</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            );
          })}
        </SidebarMenu>
      </SidebarGroupContent>
    </SidebarGroup>
  );
}
