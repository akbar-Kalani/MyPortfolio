
import { FaHome, FaAddressCard } from 'react-icons/fa';
import { MdOutlineMiscellaneousServices } from 'react-icons/md';
import { ImProfile, ImBlog } from 'react-icons/im';
import { IoIosCall, IoMdLogIn } from 'react-icons/io';
import { GiHamburgerMenu } from "react-icons/gi";

import Link from "next/link";
import { useState } from 'react';
const menuItems = [
  {
    href: "/",
    icon: <FaHome />,
    text: "Home",
  },
  {
    href: "/about",
    icon: <FaAddressCard />,
    text: "About",
  },
  {
    href: "/services",
    icon: <MdOutlineMiscellaneousServices />,
    text: "services",
  },
  {
    href: "/portfolio",
    icon: <ImProfile />,
 
    text: "portfolio",
  },
  {
    href: "/blog",
    icon:<ImBlog/>,
    text: "blogs",
  },
  {
    href: "/contact",
    icon:<IoIosCall />,
    text: "contact me",
  },

  {
    href: "/register",
    icon: <IoMdLogIn />,
    text: "class",
  },
];

const Header = ({  }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAside = () => {
    setIsOpen(!isOpen);
  };

  return (
    <ul className={`py-5  z-20 fixed bg-[#343A40] pt-5 w-full px-4 `}>
        
        <div className='flex items-center justify-between font-bold f '>
        <button  onClick={toggleAside}><GiHamburgerMenu/> </button>
         <h2>AKBAR Mohammadi</h2>
        </div>

      {isOpen
        ? menuItems.map((item, index) => (
            <li
              key={index}
              className="my-4 flex border-b  border-gray-400 hover:text-[#2EBF70]"
            >
               <Link href={item.href} className='flex  items-center text-light'>
                {item.icon}
                <span className="ms-3">{item.text}</span>
               </Link>
            </li>
          ))
        : ""}
    </ul>
  );
};

export default Header;
