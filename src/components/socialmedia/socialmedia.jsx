import Link from "next/link";
import {
  FaLinkedin,
  FaGithub,
  FaInstagram,
  FaSquareYoutube,
  FaSquareTwitter,
} from "react-icons/fa6";

export const SocialLinks = ({ isOpen }) => {
  const socialItems = [
    {
      href: "https://instagram.com/code_by_akbar",
      icon: <FaInstagram style={{ color: "red" }} />, // Set the color to red
    },
    {
      href: "/",
      icon: <FaSquareTwitter style={{ color: "blue" }} />, // Set the color to blue
      text: "Instagram",
    },
    {
      href: "https://github.com/akbarmkalani",
      icon: <FaGithub style={{ color: "black" }} />, // Set the color to black
      text: "GitHub",
    },
    {
      href: "https://linkedin.com/in/akbar-kalani-m",
      icon: <FaLinkedin style={{ color: "#0077B5" }} />, // Set the color to LinkedIn's blue
    },
    {
      href: "https://youtube.com/@cod_by_akbar",
      icon: <FaSquareYoutube style={{ color: "red" }} />, // Set the color to red
    },
  ];

  return (
    <section>
      {isOpen ? (
        ""
      ) : (
        <div className="flex justify-center">
          <ul className="flex justify-center">
            {socialItems.map((item, index) => (
              <li
                key={index}
                className="my-3 w-[50px] border-gray-400 hover:text-[#2EBF70]"
              >
                <Link
                  href={item.href}
                  className="flex justify-center text-4xl items-center"
                >
                  {item.icon}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </section>
  );
};
