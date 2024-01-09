
import { FaHome, FaAddressCard } from 'react-icons/fa';
import { MdOutlineMiscellaneousServices } from 'react-icons/md';
import { ImProfile, ImBlog } from 'react-icons/im';
import { IoIosCall, IoMdLogIn } from 'react-icons/io';
import Link from "next/link";
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

const Navigation = ({ isOpen }) => {
   
  return (
    <ul className="py-5 px-4 ">
      {isOpen
        ? menuItems.map((item, index) => (
            <li
              key={index}
              className="my-4 flex border-b  border-gray-400 hover:text-[#2EBF70]"
            >
               <Link href={item.href}>
                {item.icon}
               </Link>
            </li>
          ))
        : menuItems.map((item, index) => (
            <li
              key={index}
              className="my-3 col-12 border-b border-gray-400 hover:text-[#2EBF70]"
            >
              <Link href={item.href} className="flex  items-center text-light">
                {item.icon}
                <span className="ms-3">{item.text}</span>
              </Link>
            </li>
          ))}
    </ul>
  );
};

export default Navigation;
