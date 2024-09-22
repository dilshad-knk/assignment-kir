import React from "react";
import { MdOutlineArrowOutward } from "react-icons/md";

const Who = () => {
  return (
    <div className="flex flex-col md:flex-row text-white justify-between px-5 pt-10 gap-7 md:gap-12 md:mx-20 md:mb-20 md:mt-20 ">
      <div>
        <p className="font-bold text-center mb-4 text-4xl md:mx-20 text-nowrap">Who are we ?</p>
        <div className="mt-5 h-14 rounded-full bg-custom-purple hidden md:block"></div>
      </div>
      <div>
        <p className="text-2xl">
          We create mind-blowing visuals,brands,websites and products{" "}
          <span className="text-slate-600">
            that helps statrtups and innivative comapanies gain more exposure
          </span>
        </p>
        <button className=" mt-4 flex bg-indigo-600 text-white px-4 py-2 rounded-full text-sm items-center hover:bg-indigo-700 transition-colors">
         Learn More<MdOutlineArrowOutward className="ml-2 tex-white" size={16} />
        </button>
      </div>
    </div>
  );
};

export default Who;
