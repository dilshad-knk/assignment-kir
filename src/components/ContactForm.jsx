import React from "react";
import { MdOutlineArrowOutward } from "react-icons/md";

const ContactForm = () => {
  return (
    <div className="max-w-lg mx-auto  p-8">
      <form>
        <div className="relative mb-5">
          <label className="text-white font-bold">
            Name<span className="text-red-500"> *</span>
          </label>
          <input
            type="text"
            placeholder="Enter your name"
            className="w-full border-b border-white border-opacity-15 text-gray-600 placeholder-gray-400 placeholder-opacity-50 bg-transparent  py-2 focus:outline-none"
          />
        </div>

        <div className="relative mb-5">
          <label className="text-white font-bold">
            Email<span className="text-red-500"> *</span>
          </label>
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full text-gray-600 placeholder-gray-400 placeholder-opacity-50 bg-transparent border-b border-white border-opacity-15 py-2 focus:outline-none"
          />
        </div>

        <div className="relative mb-4">
          <label className="text-white font-bold">Message</label>
          <textarea
            placeholder="Enter your message"
            className="w-full h-32 text-gray-600 placeholder-gray-400 bg-transparent border-none py-2 focus:outline-none"
          ></textarea>
        </div>

        <hr className="border-white border-opacity-20 my-6" />

        <button className=" mt-4 flex bg-indigo-600 text-white px-4 py-2 rounded-full text-sm items-center hover:bg-indigo-700 transition-colors">
          Send
          <MdOutlineArrowOutward className="ml-2 tex-white" size={16} />
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
