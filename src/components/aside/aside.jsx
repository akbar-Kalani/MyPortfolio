"use client";
import React, { useState } from "react";
import styles from "./style.css";
import Navigation from "./menu/menu";
import { SocialLinks } from "../socialmedia/socialmedia";
import Darkmode from "./darkMode/darkmode";
import NavigationMenu from "./menu/menu";
 const Aside = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAside = () => {
    setIsOpen(!isOpen);
  };

  return (
    <section className="border-r fixed top-0 left-0 hidden md:flex flex-wrap ">
      {isOpen ? (
        <div>
        
          <button
            className="pt-3 w-[50px] items-center flex justify-end "
            onClick={toggleAside}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="36"
              height="36"
              fill="currentColor"
              class="bi bi-chevron-double-right"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M3.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L9.293 8 3.646 2.354a.5.5 0 0 1 0-.708z"
              />
              <path
                fillRule="evenodd"
                d="M7.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L13.293 8 7.646 2.354a.5.5 0 0 1 0-.708z"
              />
            </svg>
          </button>
          < NavigationMenu isOpen={true} />
          <SocialLinks isOpen={isOpen} />
        </div>
      ) : (
        <aside
          className={`w-[400px] ${styles.sidebar} ${isOpen ? styles.open : ""}`}
        >
          <div className="bg-[#2EBF70] tapBox h-[170px]">
           
          </div>
          <figure className=" rounded-[50%] profileImg flex justify-center flex-wrap">
            <img
              src="/prof.jpg"
              alt="Profile"
              className="w-[100px]   rounded-[50%] h-[100px]"
            />
            <figcaption className="w-full">
              <h1 className="text-center  proflietext uppercase font-extrabold mt-3 text-2xl">
                {" "}
                Akbar Mohammadi{" "}
              </h1>
            </figcaption>
          </figure>
          <Navigation isOpen={isOpen} />
          <SocialLinks isOpen={isOpen} />
        </aside>
      )}
    </section>
  );
};
export default Aside