import { Header } from '@/components/Header';
import { AppSidebar } from '@/components/ui/app-sidebar';
import { SidebarInset, SidebarProvider } from '@/components/ui/sidebar';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <SidebarProvider>
        <AppSidebar />
        <SidebarInset>
          <Header.Root className='w-full'>
            <Header.Logo />
            <Header.Search />
            <Header.Actions />
          </Header.Root>
          <main>{children}</main>
        </SidebarInset>
      </SidebarProvider>
    </div>
  );
}
