"use client"

import React from 'react'
import "./globals.css";
import { Abel } from 'next/font/google'

const inter = Abel({
    subsets: ['latin'], display: 'swap',weight: '400'
})

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang='en' className={inter.className}>
            <body>
                {children}
            </body>
        </html>
    )
}
