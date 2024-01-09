  import React from 'react'
  
  const Footer = () => {
    return (
      <div className='bg-red-800 flex justify-end w-full homepage'>
     <div className="text-center py-5">
          <span className="text-gray-600">&copy; Copyright 2023 - Developed by akbar M Kalani</span>
        </div>
        <div className="fixed bottom-5 right-5 text-right">
          <a href="#top" className="text-4xl text-gray-800 hover:text-blue-500">
            <i className="bi bi-arrow-up-square-fill"></i>
          </a>
        </div>
      </div>
    )
  }
  
  export default Footer
  