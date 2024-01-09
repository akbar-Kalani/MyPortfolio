/* import React from 'react'
import { MdDarkMode } from "react-icons/md";
import { CiLight } from "react-icons/ci";


const Darkmode = ( { setIsDarkMode, isDarkMode}) => {
    const toggleDarkMode = () => {
        setIsDarkMode(!isDarkMode);
      };
  return (
    <section className="w-full position-fixed top-0 left-0">
    <button className="mt-3 mx-3" onClick={toggleDarkMode}>
      {isDarkMode ?
        <MdDarkMode/>
      : <CiLight/>}
    </button>
  </section>
  )
}

export default Darkmode
 */