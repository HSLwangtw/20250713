import React from 'react'

import homeSrc from '../../../../public/2.jpg'
import { Metadata } from 'next';
import Hero from '@/app/components/hero';

export const metadata: Metadata = {
  title: 'performances'
};


export default function Page() {
  return (
     <Hero imgurl={homeSrc} alttext='performance' content='performance'/>
  )
}
