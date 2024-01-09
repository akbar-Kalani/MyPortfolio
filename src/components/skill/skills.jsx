import React from "react";

import { SiTailwindcss, SiBootstrap } from "react-icons/si";
import { TbBrandNextjs, TbBrandGithubFilled, TbApi, TbBrandReact } from "react-icons/tb";
import { FaHtml5, FaSass, FaCss3, FaFigma, FaGit, FaWordpress } from "react-icons/fa6";
import { IoLogoJavascript } from "react-icons/io";

import "./style.css"
export const SkillList = () => {
  return (
    <div className="body-part-2  flex justify-center  w-3/55">
      <div className="hoodie-guy mt-7 "></div>
      <div className="circle  ">
        <span className="flex justify-center items-center" style={{  "--i": 1 }}>
        <TbBrandReact className="text-blue-400 text-6xl" title="React" />
        </span>
        <span className="flex justify-center items-center" style={{ "--i": 2 }}>
        <TbBrandNextjs className="text-blue-600 text-6xl" title="Next.js" />
        </span>
        <span className="flex justify-center items-center" style={{ "--i": 3 }}>
        <IoLogoJavascript className="text-yellow-500 text-6xl" title="JavaScript" />
        </span>
        <span className="flex justify-center items-center" style={{ "--i": 4 }}>  
        <SiTailwindcss className="text-blue-500 text-6xl" title="Tailwind CSS" />
        </span>
        <span className="flex justify-center items-center" style={{ "--i": 5 }}>
        <SiBootstrap className="text-purple-500 text-6xl" title="Bootstrap" />
        </span>
        <span className="flex justify-center items-center" style={{ "--i": 6 }}>
        <TbApi className="text-indigo-600 text-6xl" title="API" />
        </span>
        <span className="flex justify-center items-center" style={{ "--i": 7 }}>
        <TbBrandGithubFilled className="text-gray-900 text-6xl" title="GitHub" />
        </span>
        <span className="flex justify-center items-center" style={{ "--i": 8 }}>
        <FaFigma className="text-purple-700 text-6xl" title="Figma" />
        </span>
        <span className="flex justify-center items-center" style={{ "--i": 9 }}>
        <FaGit className="text-red-600 text-6xl" title="Git" />
        </span>
        <span className="flex justify-center items-center" style={{ "--i": 10 }}>
        <FaHtml5 className="text-orange-500 text-6xl" title="HTML5" />
        </span>
        <span className="flex justify-center items-center" style={{ "--i": 11 }}>
        <FaSass className="text-pink-500 text-6xl" title="Sass" />
        </span>
        <span className="flex justify-center items-center" style={{ "--i": 12 }}>
        <FaCss3 className="text-blue-300 text-6xl" title="CSS3" />
        </span>
        <span className="flex justify-center items-center" style={{ "--i": 13 }}>
        <FaWordpress className="text-blue-300 text-6xl" title="WordPress" />
        </span>



      
        
      </div>
      <div className="background-circle"></div>
    </div>
  );
};
