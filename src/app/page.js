"use client"



import React, { useState } from 'react';

/* import { Aside } from './components/aside/aside'; */
import { HomePage } from '@/components/home/home';

export default function Home() {

  



  return (
    
    <section className={`w-[]  cont container   `}>
     {/*  <Aside /> */}
      <main className="main-content   flex justify-end">
        
        <HomePage/>
       
      </main>
    </section>
  );
}

