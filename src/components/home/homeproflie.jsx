import React, { useEffect } from "react";
import MyCVComponent from "./donwloadcv/donwloadcv";
import TypingAnimation from "./TypingAnimation/TypingAnimation";


const Homeproflie = ( ) => {
  return (
    <section className="w-[400px] md:w-[500px]  ">
      <div className="max-sm:mt-8">
        <span className="  font-semibold my-3 flex">Hello, I am</span>
        <h1 className="text-4xl font-bold proflietext uppercase">
          {" "}
          Akbar Mohammadi
        </h1>
        <h3 className="flex ">
          <span className="ityped my-3  text-success flex items-center ">  I am Passionatem  <TypingAnimation/> </span>
        </h3>
      
        <p className="my-3">
          A website with good design should not only look good, but it should
          also be functional, providing the user with a positive experience.
        </p>
         <MyCVComponent/>
      </div>

       
    </section>
  );
};

export default Homeproflie;
