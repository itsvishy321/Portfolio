import React from 'react';
import resumeIcon from "../assets/image/resumelogo.svg"
import myResume from "../assets/Vishal_Verma_Resume.pdf"

function DownloadResumeButton() {
  // Function to handle the download
  const handleDownload = () => {
    // URL of the PDF file
    const pdfUrl = myResume; // Replace with your file's URL
    // Create a temporary link element
    const link = document.createElement('a');
    link.href = pdfUrl;
    link.download = "Vishal_Verma_Redume.pdf"; // Replace with desired download file name
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div>
      <button
            className="form-btn my-[15px] ml-auto flex cursor-pointer items-center justify-center gap-3 rounded-lg bg-border-gradient-onyx px-[20px] py-[16px] text-orange-yellow-crayola shadow-shadow-4 max-md:w-full"
            onClick={handleDownload}
          >
            <img src={resumeIcon}></img>
            <span>Download Resume</span>
            </button>
    </div>
  );
}

export default DownloadResumeButton;
