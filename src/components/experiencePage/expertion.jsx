import React from 'react';

import { CgWebsite } from "react-icons/cg";

const ExperienceSection = () => {
  return (
    <div className='homepage pb-10'>
      <section className=" px-10 border-b-2 col-span-12 py-4 ">
        <h3 className="text-white proflietext uppercase font-bold text-4xl px-4">
          EXPERIENCE.
          <span className="underline flex relative"></span>
        </h3>
      </section>
      <section className="col-span-11 mx-auto">
        <div className=" px-10 pt-4 flex  flex-wrap">
          <section className="flex items-center md:justify-start  w-full md:w-[15%]">
            <a href="#" className="text-[80px] text-[#198754]"><CgWebsite/></a>
          </section>
          <section className="w-full pt-3 md:w-[65%]">
            <h1 className="text-white text-3xl">Front-end Developer</h1>
            <span className="text-white py-1">WeLab | Remote | Jan 2023 - Present</span>
            <p className="py-1 text-white">
              A successful web developer is someone who is not only skilled in coding but also has strong problem-solving and communication skills and can collaborate effectively with a team.
            </p>
          </section>
          <section className=" flex  justify-center w-full md:w-[20%]">
            <div className='w-full pt-3 '>
              <a href="#" className="text-white py-2 flex justify-center items-center bg-green-500"> Full Time </a>
            </div>
          </section>
        </div>

        {/* ==== */}
        <div className=" px-10 pt-4 flex  flex-wrap">
          <section className="flex items-center md:justify-start  w-full md:w-[15%]">
            <a href="#" className="text-[80px] text-[#198754]"><CgWebsite/></a>
          </section>
          <section className="w-full pt-3 md:w-[65%]">
            <h1 className="text-white text-3xl">Front-end Developer</h1>
            <span className="text-white py-1">WeLab | Remote | Jan 2023 - Present</span>
            <p className="py-1 text-white">
              A successful web developer is someone who is not only skilled in coding but also has strong problem-solving and communication skills and can collaborate effectively with a team.
            </p>
          </section>
          <section className=" flex  justify-center w-full md:w-[20%]">
            <div className='w-full pt-3 '>
              <a href="#" className="text-white py-2 flex justify-center items-center bg-green-500"> Full Time </a>
            </div>
          </section>
        </div>
        
        {/* ==== */}
        <div className=" px-10 pt-4 flex  flex-wrap">
          <section className="flex items-center md:justify-start  w-full md:w-[15%]">
            <a href="#" className="text-[80px] text-[#198754]"><CgWebsite/></a>
          </section>
          <section className="w-full pt-3 md:w-[65%]">
            <h1 className="text-white text-3xl">Front-end Developer</h1>
            <span className="text-white py-1">WeLab | Remote | Jan 2023 - Present</span>
            <p className="py-1 text-white">
              A successful web developer is someone who is not only skilled in coding but also has strong problem-solving and communication skills and can collaborate effectively with a team.
            </p>
          </section>
          <section className=" flex  justify-center w-full md:w-[20%]">
            <div className='w-full pt-3 '>
              <a href="#" className="text-white py-2 flex justify-center items-center bg-green-500"> Full Time </a>
            </div>
          </section>
        </div>
      </section>
    </div>
  );
};

export default ExperienceSection;
