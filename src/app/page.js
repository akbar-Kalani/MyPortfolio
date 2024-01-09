"use client"



import React, { useState } from 'react';

/* import { Aside } from './components/aside/aside'; */
import { HomePage } from '@/components/home/home';
import { Aside } from '@/components/aside/aside';
import Footer from '@/components/footer/footer';
export default function Home() {

  const [isDarkMode, setIsDarkMode] = useState(false);



  return (
    /*   <main className={`container mx-auto flex min-h-screen justify-center ${isDarkMode ? 'dark-mode' : ''}`}>
           <Aside />
           <HomePage toggleDarkMode={toggleDarkMode} isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode}/>
      </main> */

    <section className={`w-[]  cont container   `}>
     {/*  <Aside /> */}
      <main className="main-content   flex justify-end">
        
        <HomePage/>
       
      </main>
    </section>
  );
}

