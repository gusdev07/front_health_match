'use client';

import { useAuth } from '@/hooks/use-auth';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactNode } from 'react';

const queryClient = new QueryClient();

export default function CoreProvider({ children }: { children: ReactNode }) {
  useAuth();
  return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>;
}
