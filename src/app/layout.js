"use client";


import './globals.css'
import { Inter } from 'next/font/google'
import { useState } from 'react'

import UiApp from './ui/ui';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Akbar Kalani',
  description: ' Front end Developer ',
}

export default function RootLayout({ children }) {
  const [isDarkMode, setIsDarkMode] = useState(false);
 
  
  return (
    <html lang="en">
      <body className={` cont container mx-auto flex flex-wrap max-sm:inline-block min-h-screen justify-center ${isDarkMode ? '' : 'dark-mode'}`}>
       
      {/*   <Aside setIsDarkMode={setIsDarkMode}  isDarkMode={isDarkMode }/>  
          <Header/>   */}
           <UiApp  setIsDarkMode={setIsDarkMode} isDarkMode={isDarkMode}/>
        {children}
          
        </body>
    </html>
  )
}
