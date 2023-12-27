import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/Components/Navbar/Navbar'
import Bubble from '@/Components/Bubble/Bubble'
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
      {/* <Bubble/> */}
      </body>
    </html>
  )
}
