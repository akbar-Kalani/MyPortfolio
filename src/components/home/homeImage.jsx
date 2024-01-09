


import React from 'react'
import Image from 'next/image'
import { SkillList } from '../skill/skills'
const HomeImage = () => {
  return (
    <figure className=' '>
       <img
          src="/akbarkalani.jpg"
          width={450}
          height={450}
          alt="Picture of the author"
           className='rounded-[50%] portfolioImg max-sm:w-[360px] md:w-[450px] '
       />
     
     <SkillList/>
    </figure>
  )
}

export default HomeImage
