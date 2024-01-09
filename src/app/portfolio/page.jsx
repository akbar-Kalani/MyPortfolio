import WhatIDo from '@/components/development/development'
import Portfolio from '@/components/development/myportfolio/portfolio'
import ExperienceSection from '@/components/experiencePage/expertion'
import React from 'react'

const PagePortfolio = () => {
  return (
    <div className='flex flex-wrap justify-end w-full'>
      <Portfolio/>
     <WhatIDo/>
    </div>
  )
}

export default PagePortfolio
