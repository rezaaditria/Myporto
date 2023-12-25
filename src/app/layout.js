import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/Components/Navbar/Navbar'
import React from "react";

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Portofolio Muhammad Reza Aditria',
  description: 'education purposes',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar/>
      {children}
<div className="gradient-bg">
  <svg xmlns="http://www.w3.org/2000/svg">
    <defs>
      <filter id="goo">
        <feGaussianBlur in="SourceGraphic" stdDeviation={10} result="blur" />
        <feColorMatrix
          in="blur"
          mode="matrix"
          values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -8"
          result="goo"
        />
        <feBlend in="SourceGraphic" in2="goo" />
      </filter>
    </defs>
  </svg>
  <div className="gradients-container">
    <div className="g1" />
    <div className="g2" />
    <div className="g3" />
    <div className="g4" />
    <div className="g5" />
    <div className="interactive" />
  </div>
</div>
</body>
    </html>
  )
}
