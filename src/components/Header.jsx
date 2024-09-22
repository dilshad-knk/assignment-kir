import React, { useState } from 'react';
import { MdOutlineArrowOutward, MdMenu, MdClose } from 'react-icons/md';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = ['Menu item', 'Menu item', 'Menu item', 'Menu item'];

  return (
    <nav className="flex justify-between items-center z-50  absolute w-full z-10 px-4 md:px-6 lg:px-8 py-4">
      <div className="text-2xl md:text-3xl font-bold text-white ">Wefo</div>
      
     
      <div className="hidden md:flex space-x-6  border border-white border-opacity-50 rounded-full p-2 ">
        {menuItems.map((item, index) => (
          <span key={index} className="text-sm text-white rounded-full hover:bg-white hover:bg-opacity-10 p-2 cursor-pointer">{item}</span>
        ))}
      </div>

      <button className="hidden md:flex bg-indigo-600 text-white px-4 py-2 rounded-full text-sm items-center hover:bg-indigo-700 transition-colors">
        Start a project <MdOutlineArrowOutward className="ml-2" size={16} />
      </button>
      
      {/* mobile */}
     
      <div className="md:hidden">
        <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-white">
          {isMenuOpen ? <MdClose size={24} /> : <MdMenu size={24} />}
        </button>
      </div>
      
     
      {isMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-black z-50    py-4 md:hidden">
          {menuItems.map((item, index) => (
            <div key={index} className="px-6 py-2 hover:bg-custom-purple">
              <span className="text-sm text-gray-300 hover:text-white cursor-pointer">{item}</span>
            </div>
          ))}
        </div>
      )}
      
    </nav>
  );
};

export default Header;