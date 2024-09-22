import React from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

import profile from '../assets/image.png'

const Testimonials = () => {
  return (
    <div className="text-white flex flex-col md:flex-row  bg-gradient-to-tr from-custom-purple via-45% via-black  to-black ">
      <h2 className="font-bold text-center mb-4 text-4xl md:mx-20"> Testimonials</h2>

      <div className="flex flex-col items-center  pb-8 rounded-lg shadow-lg max-w-lg mx-auto">
       
        <p className="text-lg italic text-white mb-4 text-center">
          "A studio filled with passion, professionalism, and boundless creativity. They exceeded my expectations with their excellent services, high-quality products, and affordable prices. I'm extremely satisfied!"
        </p>

       
        <div className="flex items-center mb-4">
         
          <img
            src={profile}
            alt="Profile"
            className="w-12 h-12 rounded-full  "
          />
         
          <div className="ml-4">
            <p className="text-lg font-bold">John Doe</p>
            <p className="text-sm text-gray-500">CEO, CompanyName</p>
          </div>
        </div>

       
        <div className="flex justify-center gap-5 w-full mt-4">
         
          <div className="flex items-center justify-center w-10 h-10 border rounded-full cursor-pointer hover:bg-gray-300 transition-colors">
            <FaArrowLeft className="text-white" size={13} />
          </div>

          
          <div className="flex items-center justify-center w-10 h-10 rounded-full border cursor-pointer hover:bg-gray-300 transition-colors">
            <FaArrowRight className="text-white" size={13} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
