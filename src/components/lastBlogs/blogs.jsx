import React from 'react';
import styles from "@/components/development/myportfolio/filter.module.css"
import Link from 'next/link';
const BlogSection = () => {

                                  
  const blogItems = [
    { imageSrc: '/blog1.jpg',
     date: '02/FEB/2023',
      commentCount: 1,
       title: 'The Power of Effort: Fueling Success.',
       text:"Success is fueled by relentless effort and unwavering motivation. Every step, every challenge overcome, contributes to the journey. The importance lies not just in reaching goals but in the transformative power of sustained dedication."
 },
    { imageSrc: '/linkedin.jpg', 
    date: '12/FEB/2023', 
    commentCount: 1, 
    title: 'Attract visitors on LinkedIn' ,
     text:"Visitors to your profile page will only see the first three lines of your summary and should click on see more to see a more comprehensive description. In other words, the first three lines are the most important in the summary. If you can grab users' attention with the first three lines, the more likely they will continue to read more."
},
    { imageSrc: '/blog3.jpg', 
    date: '29/FEB/2023', 
    commentCount: 1, 
    title: 'AI: Transforming Our World',
  text:"In today's tech-driven era, Artificial Intelligence (AI) shapes our lives. From smart assistants to personalized recommendations, AI enhances efficiency and decision-making. Its importance lies in revolutionizing industries, solving complex problems, and creating a future where machines augment human capabilities. AI isn't just a tool; it's a transformative force driving innovation and progress" },
    { imageSrc: '/blog4.jpg', 
    date: '29/FEB/2023', 
    commentCount: 1, 
    title: 'Performance Optimization.' ,
     text: " Page load times significantly impact user satisfaction and search engine rankings. Professional frontend programmers employ techniques like code splitting, lazy loading, and optimizing images to enhance the performance of their applications. Regularly auditing and addressing performance bottlenecks contribute to a smoother user experience."},
  ];

  return (
    <section className="w-full  pb-10 px-4 homepage">
      <div className=" w-full py-1">
        <h3 className="text-4xl font-bold  px-3" id="blog">
          LATEST BLOG.
          <span className="underline relative flex"></span>
          
        </h3>
      </div>

      <div className=" flex flex-wrap overflow-hidden px-0 mx-0">
        {blogItems.map((item, index) => (
          <section key={index} className=" w-full md:w-2/4 my-4">
            <figure className={`${styles.figure}  w-100  m-4 relative`} >
              <img src={item.imageSrc} alt="blog" className={`${styles.imgCover}   `} />

              <figcaption className={` ${styles.caption} overflow-hidden  bg-dark p-2 w-[75%] bottom-0  right-0 bg-[#212529] absolute`}>
                <span className="text-light">
                  {item.date} - WEBSITE - {item.commentCount} COMMENT
                </span>
                <a href="#" className="text-light">
                  <span className='font-bold flex'>{item.title}</span>
                   <p className={` ${styles.description} `}>   {item.text}</p>
                </a>
              </figcaption>
            </figure>
          </section>
        ))}

      
          <div  className="py-3  w-full flex justify-center items-center">
          <button className=" ms-6 allBtn mt-6 bg-[#2EBF70] hover:bg-[#ffffff] hover:text-[#2EBF70]" >
            <span className="flex items-center h-full w-full justify-center"> <Link href=""> More Blogs</Link> </span>
          </button>
            
          </div>
       
      </div>
    </section>
  );
};

export default BlogSection;
