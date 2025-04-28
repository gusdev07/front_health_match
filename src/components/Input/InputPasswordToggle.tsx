'use client';

import { usePasswordVisibleStore } from '@/store/usePasswordVisibleStore';
import { Eye, EyeClosed } from 'lucide-react';

export function InputPasswordToggle() {
  const { isPasswordVisible, togglePasswordVisibility } = usePasswordVisibleStore();

  return isPasswordVisible ? (
    <Eye
      onClick={togglePasswordVisibility}
      className='h-4 cursor-pointer text-verdeHM duration-150 hover:text-verdeHM/70 lg:h-6'
    />
  ) : (
    <EyeClosed
      onClick={togglePasswordVisibility}
      className='h-4 cursor-pointer text-verdeHM duration-150 hover:text-verdeHM/70 lg:h-6'
    />
  );
}
