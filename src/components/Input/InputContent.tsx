'use client';

import { UseFormRegisterReturn } from 'react-hook-form';

import { usePasswordVisibleStore } from '@/store/usePasswordVisibleStore';
import { InputHTMLAttributes } from 'react';

interface InputContentProps extends InputHTMLAttributes<HTMLInputElement> {
  placeholder: string;
  type?: 'text' | 'password';
  id?: string;
  register?: UseFormRegisterReturn;
}
export function InputContent({ placeholder, type = 'text', register, ...rest }: InputContentProps) {
  const { isPasswordVisible } = usePasswordVisibleStore();
  const inputType = type === 'password' ? (isPasswordVisible ? 'text' : 'password') : type;

  return (
    <input
      type={inputType}
      placeholder={placeholder}
      className='w-full bg-transparent text-xs outline-none lg:text-sm'
      {...register}
      {...rest}
    />
  );
}
