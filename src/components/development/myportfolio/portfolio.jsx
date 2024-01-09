// components/Portfolio.js

import Head from 'next/head';
 import styles from '@/components/development/myportfolio/filter.module.css'
import Link from 'next/link';
const projects = [
  { url: 'https://adminpanel1-jgeku9tpi-m-akbar12.vercel.app/', 
  imgSrc: '/adminpanel.png',
   title: 'Admin panel' },
  { url: 'https://todo-list-nx191vub9-m-akbar12.vercel.app/', 
  imgSrc: '/todo.png',
   title: 'Todo List' },
  { url: 'https://akbarmkalani.github.io/weather-api/', 
  imgSrc: '/Weather.png',
   title: 'Weather App' },
  { url: 'https://akbarmkalani.github.io/gamer/', 
  imgSrc: '/game.png',
   title: 'NFT' },
  { url: 'https://akbarmkalani.github.io/sampel-goce/', 
  imgSrc: '/ent.png',
   title: 'Game ' },
  { url: 'https://akbarmkalani.github.io/cart-shopping/', 
  imgSrc: '/cartShop.png',
   title: 'Cart Shop' },
];

const Portfolio = () => {
  return (
    <div className="w-full portfolio mt-[-50px]  py-5 px-4 bg-danger homepage" id="portfolio">
    
      <div className=" col-12 px-3">
        <h3 className="text-light text-4xl font-bold">
        MY PORTFOLIO.
          <span className="underline relative flex"></span>
        </h3>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 my-5">
        {projects.map((project, index) => (
          <section key={index} className="relative">
            <figure className={` bg-white rounded-lg  shadow-md`}>
              <a href={project.url} className="block" target="_blank">
                <img src={project.imgSrc} alt="project" className={` ${styles.imgCover} w-full h-64 object-cover` } />
                <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-lg font-bold text-center text-light z-1">
                  {project.title}
                </span>
              </a>
            </figure>
          </section>
        ))}
      </div>
      <section className="flex justify-center">
      <button className=" ms-6 allBtn mt-6 bg-[#2EBF70] hover:bg-[#ffffff] hover:text-[#2EBF70]" >
            <span className="flex items-center h-full w-full justify-center"> <Link href="">More</Link> </span>
          </button>
      </section>
    </div>
  );
};

export default Portfolio;
