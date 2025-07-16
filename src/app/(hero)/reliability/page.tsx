import React from 'react'

import homeSrc from '../../../../public/3.jpg'
import { Metadata } from 'next';
import Hero from '@/app/components/hero';

export const metadata: Metadata = {
  title: 'reliability'
};

export default function Page() {
  return (
  <Hero imgurl={homeSrc} alttext='reliability' content='reliability'/>
  )
}
