import { Eye, Heart } from 'lucide-react';

export function SuggestedFormulasItem() {
  return (
    <div className='flex flex-col gap-6 rounded-lg border border-cinzaClaroHM p-4'>
      <div className='flex items-center justify-between'>
        <p className='text-sm 2xl:text-base'>Hidratante Facial Diário</p>
        <div className='flex items-center gap-2 text-verdeHM'>
          <Eye className='h-4 w-4 cursor-pointer duration-150 hover:opacity-60 2xl:h-5 2xl:w-5' />
          <Heart className='h-4 w-4 cursor-pointer transition-all duration-200 hover:text-vermelhoHM/60 2xl:h-5 2xl:w-5' />
        </div>
      </div>

      <div className='flex items-center justify-between gap-4'>
        <div>
          <p className='text-xs text-cinzaHM'>Spinach Extract</p>
          <p className='text-xs font-semibold text-cinzaHM'>200mg</p>
        </div>
        <div>
          <p className='text-xs text-cinzaHM'>Spinach Extract</p>
          <p className='text-xs font-semibold text-cinzaHM'>200mg</p>
        </div>
        <div>
          <p className='text-xs text-cinzaHM'>Spinach Extract</p>
          <p className='text-xs font-semibold text-cinzaHM'>200mg</p>
        </div>
      </div>

      <div>
        <p className='text-xs text-cinzaHM'>Posologia</p>
        <p className='text-xs font-semibold text-cinzaHM'>
          Tomar 01 cápsula junto ao almoço e jantar.
        </p>
      </div>
    </div>
  );
}
