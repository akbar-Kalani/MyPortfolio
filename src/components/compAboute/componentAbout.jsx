import Link from "next/link";
import React from "react";

const ComponentAbout = () => {
  return (
    <section className="w-full homepage">
      <div className="flex justify-evenly flex-wrap px-5 mt-14 items-center">
        <figure className="w-full flex justify-center md:w-2/5 ">
          <img
            src="/animation.gif"
            width={560}
            height={450}
            alt="Picture of the author"
            className=" max-sm:w-[430px] md:w-[560px] "
          />
        </figure>
        <section className="w-full md:w-2/5 ">
          <h1 className="text-3xl my-6 font-bold proflietext uppercase">ABOUT ME. <span className="underline relative flex"></span></h1>
          <h2 className="text-3xl mt-2 lineUnder">I'm a Freelancer Front-end Developer</h2>
          <p className="mt-5">
            I'm a Freelancer Front-end Developer.I'm from Afghanistan. I code
            and create web elements for amazing people around the world. I like
            work with new people. New people new Experiences.
          </p>
           <div className="flex my-7   flex-wrap">
           <button className="allBtn mt-6 bg-[#2EBF70] hover:bg-[#ffffff] hover:text-[#2EBF70]">
            <span className="flex items-center h-full w-full justify-center">Contact Me</span>
          </button>
          <button className=" ms-6 allBtn mt-6 bg-[#2EBF70] hover:bg-[#ffffff] hover:text-[#2EBF70]" >
            <span className="flex items-center h-full w-full justify-center"> <Link href={"portfolio"}>Portfolio</Link> </span>
          </button>
           </div>
        </section>
      </div>
    </section>
  );
};

export default ComponentAbout;
