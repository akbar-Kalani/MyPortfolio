import React from "react";
function MyCVComponent() {
    const handleDownload = () => {
       
        const cvUrl = '/folder/akbar-cv.pdf';
        
        // Create a link element
        const link = document.createElement('a');
        link.href = cvUrl;
        link.target = '_blank';
        
        // Set the link's download attribute to force download.
        link.download = 'akbar_cv.pdf';
    
     
        link.click();
      };
      return (
        <div className="">
          <button className="allBtn mt-6 bg-[#2EBF70] hover:bg-[#ffffff] hover:text-[#2EBF70]" onClick={handleDownload}>
            <span className="flex items-center h-full w-full justify-center">Download CV</span>
          </button>
        </div>
      );
    }
    
   
    
    
    
  
  export default MyCVComponent;
  