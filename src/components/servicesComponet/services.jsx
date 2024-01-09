"use client";



import React, { useState } from "react";
import { SkillList } from "../skill/skills";
import SkillLine from "../skill/skillsIcons/icons";

export const ServicesComponet = () => {
  const [selectedSkill, setSelectedSkill] = useState(null);

  const handleSkillClick = (skill) => {
    setSelectedSkill(skill);
  };

  return (
    <section className="homepage ">
      <div className="flex flex-wrap items-center ">
        <div className="px-10 max-sm:pt-6 w-full">
          <h1 className="fontSkill  font-bold text-3xl w-full ">
            EDUCATION & SKILLS
            <span className="underline flex relative"></span>
          </h1>
          <section className="flex mt-6 justify-evenly flex-wrap">
            <div className="w-full md:w-1/3">
              <section
                className={`skill p-3 bg-[#000000] mt-0 ${selectedSkill === "Web Development" ? "open" : ""
                  }`}
                onClick={() => handleSkillClick("Web Development")}
              >
                <span className="bg-[#198754] text-white p-1 text-xl">
                  2021_2023
                </span>
                <h1 className="my-2 font-bold ">Web Development</h1>
                <p class="text-light">
                  {" "}
                  <a
                    href="https://trainingsitedesign.ir/"
                    target="_blank"
                    class="text-light"
                  >
                    Parnyan
                  </a>{" "}
                  Institute
                </p>
              </section>

              <section
                className={`skill p-3 bg-[#000000] mt-3 ${selectedSkill === "SEO" ? "open" : ""
                  }`}
                onClick={() => handleSkillClick("SEO")}
              >
                <span className="bg-[#198754] text-white p-2 text-xl">
                  2021_2023
                </span>
                <h1 className="my-2 font-bold ">SEO Marketing</h1>
                <p class="text-light">
                  {" "}
                  <a
                    href="https://trainingsitedesign.ir/"
                    target="_blank"
                    class="text-light"
                  >
                    Parnyan
                  </a>{" "}
                  Institute
                </p>
              </section>

              <section
                className={`skill p-3 bg-[#000000] mt-3 ${selectedSkill === "Search" ? "open" : ""
                  }`}
                onClick={() => handleSkillClick("Search")}
              >
                <span className="bg-[#198754] text-white p-2 text-xl">
                  2021_2023
                </span>
                <h1 className="my-2 font-bold ">Search Engine Optimization</h1>
                <p class="text-light">
                  {" "}
                  <a
                    href="https://trainingsitedesign.ir/"
                    target="_blank"
                    class="text-light"
                  >
                    Parnyan
                  </a>{" "}
                  Institute
                </p>
              </section>

              <section
                className={`skill p-3 bg-[#000000] mt-3 ${selectedSkill === "Software" ? "open" : ""
                  }`}
                onClick={() => handleSkillClick("Software")}
              >
                <span className="bg-[#198754] text-white p-1 text-xl">
                  2021_2023
                </span>
                <h1 className="my-2 font-bold ">Software engineer</h1>
                <p class="text-light">
                  {" "}
                  <a
                    href="https://trainingsitedesign.ir/"
                    target="_blank"
                    class="text-light"
                  >
                    Parnyan
                  </a>{" "}
                  Institute
                </p>
              </section>
            </div>

            <div className="w-full md:w-2/3">
              <section className=" mx-4">
                <h1 className="font-bold text-3xl">My Skills</h1>
                <div className={`development ${selectedSkill ? 'hidden' : 'flex flex-wrap'}`}
                >
                  <p className="mt-4">
                    I'm a Freelancer Front-end Developer. I code and create web elements for amazing people around the world. I like to work with new people.
                  </p>
                  <section className="pt-3 w-full">
                  <SkillLine/>
                  </section>
                </div>  
                 {selectedSkill === "Web Development" ? (
                  <div>
                    <p className="mt-4">
                      I'm a Freelancer Front-end Developer. I code and create web
                      elements for amazing people around the world. I like to work
                      with new people.
                    </p>
                    <section className=" pt-3 w-full">
                      <SkillLine/>
                    </section>
                  </div>
                ) : null}


                {selectedSkill === "SEO" ? (
                  <section className="    ">
                    <p className="mt-7  w-full ">
                      <span className="my-2   w-full flex">
                        Continuous learning and keeping track of changes in
                        search engine algorithms has been one of the most
                        important principles since I entered the world of SEO.
                        These experiences have helped me improve my techniques
                        in data analysis, content optimization, and technical
                        improvement of websites.
                      </span>

                      <span className="my-2 flex">
                        So far, I have been able to attract traffic, awareness
                        and customers by improving website rankings in Google
                        and other search engines. Also, the experience of
                        working with multiple teams from content creation,
                        website development, and digital marketing has led me to
                        learn common skills and improve more effective
                        collaboration between different layers of teams.
                      </span>

                      <span className="my-2 flex">
                        My SEO experiences have helped me to be recognized as an
                        effective and influential SEO expert in the digital
                        world. I am ready to use these experiences and my skills
                        to guide websites and businesses to growth and success.
                      </span>
                    </p>
                  </section>
                ) : null}
                {selectedSkill === "Search" ? (
                  <section className="    ">
                    <p className="mt-7  w-full ">
                      <span className="my-2   w-full flex">
                        Search engine optimization is a vital strategy in the digital world. By doing search engine optimization, you improve your website or online content for search engines like Google and increase visibility in search results and help attract quality traffic and potential new customers.
                      </span>
                      <span className="my-2   w-full flex">
                        By combining arbitrary keywords, improving website content and structure, attracting external links, and managing data analytics, you can improve your position and outrank your competitors. As SEO experts, we are on your team to achieve this goal. Support us to improve your traffic and business growth and get SEO in the hands of the most professional team.
                      </span>


                    </p>
                  </section>
                ) : (
                  ""
                )}

                {selectedSkill === "Software" ? (
                  <section className="    ">
                    <p className="mt-7  w-full ">
                      <span className="my-2   w-full flex">
                        Continuous learning and keeping track of changes in
                        search engine algorithms has been one of the most
                        important principles since I entered the world of SEO.
                        These experiences have helped me improve my techniques
                        in data analysis, content optimization, and technical
                        improvement of websites.
                      </span>

                      <span className="my-2 flex">
                        So far, I have been able to attract traffic, awareness
                        and customers by improving website rankings in Google
                        and other search engines. Also, the experience of
                        working with multiple teams from content creation,
                        website development, and digital marketing has led me to
                        learn common skills and improve more effective
                        collaboration between different layers of teams.
                      </span>

                      <span className="my-2 flex">
                        My SEO experiences have helped me to be recognized as an
                        effective and influential SEO expert in the digital
                        world. I am ready to use these experiences and my skills
                        to guide websites and businesses to growth and success.
                      </span>
                    </p>
                  </section>
                ) : (
                  ""
                )}

              </section>
            </div>
          </section>
        </div>
      </div>
    </section>
  );
};
