import React from "react";
import { SiTailwindcss, SiBootstrap } from "react-icons/si";
import { TbBrandNextjs, TbBrandGithubFilled, TbApi, TbBrandReact } from "react-icons/tb";
import { FaHtml5, FaSass, FaCss3, FaFigma, FaGit, FaWordpress } from "react-icons/fa6";
import { IoLogoJavascript } from "react-icons/io";

const SkillLine = () => {
  return (
    <div className=" items-center space-x-4">


      <section className="">
        <span className="border-b-2 border-[#234180] rounded-md shadow-sm shadow-[#000000] flex pt-1 ">
          <TbBrandReact className="text-blue-400 text-2xl" title="React" />
        </span>
        <span className="border-b-2 border-[#234180] rounded-md shadow-sm shadow-[#000000] flex pt-1" >
          <TbBrandNextjs className="text-blue-600 text-2xl" title="Next.js" />
        </span>
        <span className="border-b-2 border-[#234180] rounded-md shadow-sm shadow-[#000000] flex pt-1  " >
          <IoLogoJavascript className="text-yellow-500 text-2xl" title="JavaScript" />
        </span>
        <span className="border-b-2 border-[#234180] rounded-md shadow-sm shadow-[#000000] flex pt-1  " >
          <SiTailwindcss className="text-blue-500 text-2xl" title="Tailwind CSS" />
        </span>
        <span className="border-b-2 border-[#234180] rounded-md shadow-sm shadow-[#000000] flex pt-1 " >
          <SiBootstrap className="text-purple-500 text-2xl" title="Bootstrap" />
        </span>
        <span className="border-b-2 border-[#234180] rounded-md shadow-sm shadow-[#000000] flex pt-1   " >
          <TbApi className="text-indigo-600 text-2xl" title="API" />
        </span>
        <span className="border-b-2 border-[#234180] rounded-md shadow-sm shadow-[#000000] flex pt-1  " >
          <TbBrandGithubFilled className="text-gray-900 text-2xl" title="GitHub" />
        </span>
        <span className="border-b-2 border-[#234180] rounded-md shadow-sm shadow-[#000000] flex pt-1  " >
          <FaFigma className="text-purple-700 text-2xl" title="Figma" />
        </span>
        <span className="border-b-2 border-[#234180] rounded-md shadow-sm shadow-[#000000] flex pt-1  " >
          <FaGit className="text-red-600 text-2xl" title="Git" />
        </span>
        <span className="border-b-2 border-[#234180] rounded-md shadow-sm shadow-[#000000] flex pt-1  " >
        <FaHtml5 className="text-orange-500 text-2xl" title="HTML5" />
        </span>
         <span className="border-b-2 border-[#234180] rounded-md shadow-sm shadow-[#000000] flex pt-1  " >
         <FaSass className="text-pink-500 text-2xl" title="Sass" />
         </span>
         <span className="border-b-2 border-[#234180] rounded-md shadow-sm shadow-[#000000] flex pt-1  " >
         <FaCss3 className="text-blue-300 text-2xl" title="CSS3" />
         </span>
         <span className="border-b-2 border-[#234180] rounded-md shadow-sm shadow-[#000000] flex pt-1  " >
         <FaWordpress className="text-blue-300 text-2xl" title="WordPress" />
         </span>
       
       
      </section>




    </div>
  );
};

export default SkillLine;
