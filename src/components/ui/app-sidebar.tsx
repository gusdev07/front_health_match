import { Sidebar, SidebarContent, SidebarFooter, SidebarTrigger } from '@/components/ui/sidebar';
import { NavMain } from './nav-main';

export function AppSidebar() {
  return (
    <Sidebar collapsible='icon' className='border-none'>
      <SidebarContent className='rounded-tr-2xl bg-verdeHM text-white'>
        <NavMain />
      </SidebarContent>
      <SidebarFooter className='items-start bg-verdeHM text-white'>
        <SidebarTrigger className='mb-2 hover:bg-amareloHM hover:text-white' />
      </SidebarFooter>
    </Sidebar>
  );
}
