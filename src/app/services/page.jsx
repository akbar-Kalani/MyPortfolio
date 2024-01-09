
import ExperienceSection from '@/components/experiencePage/expertion'
import { ServicesComponet } from '@/components/servicesComponet/services'
import React from 'react'

const page = () => {
  return (
    <div className='flex flex-wrap justify-end w-full'>
       <ServicesComponet/>
       <ExperienceSection/>
    </div>
  )
}

export default page
