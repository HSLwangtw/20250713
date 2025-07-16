import React from 'react'

import Image, { StaticImageData } from 'next/image'

interface HeroProps {
    imgurl: StaticImageData;
    alttext: string;
    content: string;
}

export default function Hero(props: HeroProps) {
    return (
        <div className='h-screen relative'>
            <div className='absolute inset-0 -z-10'>
                <Image src={props.imgurl} layout='fill' objectFit='cover' alt={props.alttext} />
                <div className='absolute inset-0 bg-gradient-to-r from-gray-950'></div>
            </div>
            <div className='flex justify-center items-center h-full'>
                <h1 className='text-white txt-8xl font-bold'>{props.content}</h1>
            </div>
        </div>
    )
}
