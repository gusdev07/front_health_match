'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from '@/components/ui/carousel';

export function CarouselCards() {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!api) return;

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on('select', () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  const images = [
    '/images/Cards_Março_pages-to-jpg-0001.jpg',
    '/images/Cards_Março_pages-to-jpg-0002.jpg',
    '/images/Cards_Março_pages-to-jpg-0003.jpg',
    '/images/Cards_Março_pages-to-jpg-0004.jpg',
  ];

  return (
    <div className='relative'>
      <Carousel setApi={setApi}>
        <CarouselContent className='cursor-pointer'>
          {images.map((src, index) => (
            <CarouselItem key={index}>
              <div className='relative h-[430px] w-full 2xl:h-[400px]'>
                <Image
                  src={src}
                  alt={`Slide ${index + 1}`}
                  fill
                  className='rounded-lg border border-cinzaClaroHM object-cover'
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
      <div className='absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-2 rounded-lg border border-black/55 bg-white p-1'>
        {Array.from({ length: count }).map((_, i) => (
          <div
            key={i}
            className={`h-[6px] w-[6px] rounded-full transition-all duration-300 ${
              i + 1 === current ? 'scale-125 bg-verdeHM' : 'bg-gray-400/60'
            }`}
          />
        ))}
      </div>
    </div>
  );
}
