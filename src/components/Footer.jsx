import React from "react";
import {
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaDribbble,
  FaBehance,
} from "react-icons/fa";
import ContactForm from "./ContactForm";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white px-9 md:pt-20 md:px-20 ">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between">
          <div className="mb-4 md:mb-2 ">
            <p className="font-bold text-center my-4  text-4xl md:my-4">
              Feel free to connect with us!
            </p>
            <div className="hidden md:block">
              <ul className="mb-6 flex space-x-4">
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    <FaTwitter />
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    <FaInstagram />
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    <FaLinkedin />
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    <FaDribbble />
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    <FaBehance />
                  </a>
                </li>
              </ul>
              <p>0972 663 633</p>
              <p>hello@wefo.com</p>
            </div>
          </div>
          <ContactForm />
        </div>
      </div>

      <div className="md:hidden flex flex-col items-center p-10">
        <ul className="mb-6 flex space-x-4">
          <li>
            <a href="#" className="text-gray-400 hover:text-white">
              <FaTwitter />
            </a>
          </li>
          <li>
            <a href="#" className="text-gray-400 hover:text-white">
              <FaInstagram />
            </a>
          </li>
          <li>
            <a href="#" className="text-gray-400 hover:text-white">
              <FaLinkedin />
            </a>
          </li>
          <li>
            <a href="#" className="text-gray-400 hover:text-white">
              <FaDribbble />
            </a>
          </li>
          <li>
            <a href="#" className="text-gray-400 hover:text-white">
              <FaBehance />
            </a>
          </li>
        </ul>
        <p>0972 663 633</p>
        <p>hello@wefo.com</p>
      </div>

      <div className="flex items-center md:py-5  py-2 justify-between border-t">
        <div>Wefo</div>
        <div>
          <ul className="flex gap-3">
            <li>
              <a href="#" className="text-gray-400 hover:text-white">
                Privacy
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-400 hover:text-white">
                Terms
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-400 hover:text-white">
                Security
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
