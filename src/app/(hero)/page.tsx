
import { Metadata } from 'next'
import React from 'react'
import Hero from '../components/hero';
import homeSrc from '../../../public/4.jpg'

export const metadata: Metadata = {
  title: 'Home'
};


export default function page() {
  return (
   <Hero imgurl={homeSrc} alttext='home' content='home'/>
  )
}
