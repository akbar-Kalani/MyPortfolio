import React from 'react';
import { CgWebsite } from "react-icons/cg";
import { MdOutlineDeveloperMode } from "react-icons/md";
import { TbSeo, TbApi } from "react-icons/tb";

const ServiceCard = ({ icon, title, description , iconColor }) => (
  <div className=" bg-[#000000] px-4 w-full md:w-[45%] m-6  py-3 ">
    <div className=" flex flex-wrap  ">
      <div className=" px-4">
        <a href="#" className=" text-5xl"  style={{ color: iconColor }}>{icon}</a>
      </div>
      <div className="col-9">
        <h3 className="font-bold text-2xl">{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  </div>
);



const WhatIDo = () => {
return (
  <div className=" px-10 pt-4 homepage">
    <section className="">
      <h3 className="font-bold text-4xl proflietext uppercase">WHAT I DO?
      <span className="underline relative flex"></span>
      </h3>
    </section>

    <section className="col-11 mx-auto py-5">
      <div className=" flex flex-wrap items-center ">

        <ServiceCard
          icon={<CgWebsite/>}
          title="Web Development"
          description="Web development is a constantly evolving field, and web developers must stay up-to-date with the latest technologies and best practices in order to deliver high-quality, cutting-edge websites."
          iconColor="blue"  
        />

        <ServiceCard
           icon={<MdOutlineDeveloperMode/>}
          title="Desktop App"
          description="Web development is a constantly evolving field, and web developers must stay up-to-date with the latest technologies and best practices in order to deliver high-quality, cutting-edge websites."
          iconColor="green" 
        />

        <ServiceCard
           icon={<TbSeo/>}
          title="SEO Marketing"
          description="Search Engine Optimization (SEO) is the practice of optimizing websites and its content to improve its ranking and visibility on search engines like Google, Bing, Yahoo, etc. The goal of SEO is to increase organic traffic to a website from search engines."
          iconColor="red"
        />

        <ServiceCard
          icon={<TbApi/>}
          title="API"
          description="Search Engine Optimization (SEO) is the practice of optimizing websites and its content to improve its ranking and visibility on search engines like Google, Bing, Yahoo, etc. The goal of SEO is to increase organic traffic to a website from search engines."
          iconColor="purple"
        />

      </div>
    </section>
  </div>
);
  }
                                
   export default WhatIDo;