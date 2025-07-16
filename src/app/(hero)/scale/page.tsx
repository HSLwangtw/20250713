import React from 'react'

import homeSrc from '../../../../public/4.jpg'
import { Metadata } from 'next';
import Hero from '@/app/components/hero';

export const metadata: Metadata = {
  title: 'Scale'
};

export default function Page() {
  return (
     <Hero imgurl={homeSrc} alttext='Scale' content='Scale'/>
  )
}
