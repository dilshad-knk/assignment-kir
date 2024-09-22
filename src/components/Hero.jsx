import React from "react";
import { BsFillTriangleFill } from "react-icons/bs";
import { IoTriangleOutline, IoTriangleSharp } from "react-icons/io5";
import { MdArrowOutward } from "react-icons/md";

const Hero = () => {
  return (
    <div className="relative overflow-hidden pt-10 ps-20 bg-black ">
      <Main />
    </div>
  );
};

export default Hero;

function Main() {
  return (
    <div className="relative z-40 container mx-auto   pt-28 justify-center items-start ">
      <h1 className="text-5xl md:text-8xl font-roboto font-bold text-white mb-6 md:w-2/3">
        We create award winning websites
      </h1>
      <div className="flex  h-72 md:h-96 ">
        <div className="flex-1">
          <p className="text-lg text-gray-300 mb-8 max-w-2xl">
            Based in San Francisco, we're a digital products design &
            development studio that's passionate about creating high-quality
            digital experiences.
          </p>
          <button className="flex items-center text-white border border-white px-6 py-3 rounded-full hover:bg-white hover:text-black transition-colors">
            Explore <MdArrowOutward className="ml-2" size={20} />
          </button>
        </div>
        <div className="flex-1 w-2 h-full rounded-tl-lg shadow-custom-combined flex justify-center items-center bg-gradient-to-l from-blue-950 via-blue-900 relative">

            <div className="h-10 w-10 border  border-white rounded-full absolute top-10 left-24 border-opacity-20">

            </div>
           
            <div className="w-full border-t  border-white absolute top-24  border-opacity-20"></div>

            <div className="h-10 w-1/2 border  border-white rounded-full absolute top-32 left-5 border-opacity-20">

            </div>
            <div className="h-10 w-1/3 border border-white rounded-full absolute top-52 left-5 border-opacity-20">

            </div>
            <div className="h-1/3 w-1/2  border border-white rounded-tl-lg  absolute bottom-0 right-0 border-opacity-20">

            </div>

            <div className="h-10 w-10 border hidden md:block border-white rounded-full absolute bottom-12 right-72 border-opacity-20 bg-white bg-opacity-20">

            </div>
        
            <BsFillTriangleFill className="text-white opacity-10 size-16 absolute bottom-0 right-48 hidden md:block " />
            <BsFillTriangleFill className="text-white opacity-10 size-12 absolute bottom-0 right-28 hidden md:block" />
           
        </div>
      </div>
    </div>
  );
}


