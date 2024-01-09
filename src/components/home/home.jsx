import React from "react";
import Homeproflie from "./homeproflie";
import HomeImage from "./homeImage";

export const HomePage = ({ toggleDarkMode, isDarkMode }) => {
  return (
    <div
      className="  homepage  
   "
    >
     
      <section className="flex mt-0 flex-wrap-reverse  justify-evenly items-center">
        <Homeproflie />
        <HomeImage />
      </section>
    </div>
  );
};
