import Link from 'next/link';
import React from 'react';
import {
    FaLinkedin,
    FaGithub,
    FaInstagram,
    FaSquareYoutube,
    FaSquareTwitter,
  } from "react-icons/fa6";
                                
function Contact() {
  return (
    <section className="py-8 px-6 homepage">
      <div className="container mx-auto">
        <div className="py-5">
          <h3 className="text-2xl proflietext uppercase font-semibold" id="contact">
            GET IN TOUCH ME.
            <span className="underline relative flex"></span>
          </h3>
        </div>
        <section className="flex flex-wrap justify-center">
          <div className=" w-full md:w-1/4 m-3 bg-[#000000] p-6 rounded-lg shadow-lg">
            <div className="mb-6">
              <h3 className="text-2xl font-semibold">
                What's your story? Get in touch
              </h3>
              <p className="">
                Always available for freelancing if the right project comes along. Feel free to contact me.
              </p>
            </div>
            <ul className="space-y-2">
              <li>
                <a href="https://linkedin.com/in/akbar-kalani-m" className="  flex items-center">
                   <FaLinkedin className='text-5xl' />  <span className='px-6'>LinkedIn</span> 
                </a>
              </li>
              <li>
                <a href="https://www.facebook.com/profile.php?id=100076116802424" className="  flex-1 flex   items-center">
                 < FaSquareYoutube className='text-5xl' /> <span className='px-6'>Youtube</span>
                </a>
              </li>
              <li>
                <a href="https://instagram.com/code_by_akbar" className="  flex items-center">
                 <FaInstagram className='text-5xl' />  <span className='px-6'>Instagram</span>
                </a>
              </li>
              <li>
                <a href="https://github.com/akbarmkalani" className="  flex items-center">
                 <FaGithub className='text-5xl' />  <span className='px-6'>GitHub</span>
                </a>
              </li>
            </ul>
          </div>
          <div className="w-full md:w-2/3 m-3 bg-[#000000] p-6 rounded-lg shadow-lg">
            <div className="mb-4">
              <h4 className="text-2xl font-semibold">Say Something</h4>
            </div>
            <form>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input type="text" className="py-2 px-3 border rounded-lg w-full focus:outline-none focus:ring focus:border-blue-500" placeholder="Name" />
                <input type="text" className="py-2 px-3 border rounded-lg w-full focus:outline-none focus:ring focus:border-blue-500" placeholder="Email" />
                <input type="text" className="py-2 px-3 border rounded-lg w-full focus:outline-none focus:ring focus:border-blue-500" placeholder="Subject" />
                <textarea className="py-2 px-3 border rounded-lg w-full focus:outline-none focus:ring focus:border-blue-500" placeholder="Your Message" rows="4"></textarea>
              </div>
              <div className="mt-4 flex justify-center">
                
                <button className=" ms-6 allBtn mt-6 bg-[#2EBF70] hover:bg-[#ffffff] hover:text-[#2EBF70]" >
            <span className="flex items-center h-full w-full justify-center"> <Link href=""> Send Message</Link> </span>
          </button>
              </div>
            </form>
          </div>
        </section>
        
      </div>
    </section>
  );
}

export default Contact;
