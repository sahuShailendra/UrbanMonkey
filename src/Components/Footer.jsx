import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaPinterestP,
  FaYoutube,
  FaSpotify,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#8f8e8e] text-black px-6 md:px-12 py-12">
      {/* Main Footer Links */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-8">
        {/* COOL STUFF */}
        <div>
          <h3 className="font-bold text-lg mb-4">COOL STUFF</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#">about us</a>
            </li>
            <li>
              <a href="#">blog</a>
            </li>
            <li>
              <a href="#">shop all</a>
            </li>
            <li>
              <a href="#">new arrivals</a>
            </li>
            <li>
              <a href="#">hats and caps</a>
            </li>
            <li>
              <a href="#">apparel</a>
            </li>
            <li>
              <a href="#">eyewear</a>
            </li>
            <li>
              <a href="#">accessories</a>
            </li>
            <li>
              <a href="#">collabs</a>
            </li>
            <li>
              <a href="#">rewards</a>
            </li>
            <li>
              <a href="#">loop waitlist</a>
            </li>
          </ul>
        </div>

        {/* BORING STUFF */}
        <div>
          <h3 className="font-bold text-lg mb-4">BORING STUFF</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#">track order</a>
            </li>
            <li>
              <a href="#">returns</a>
            </li>
          </ul>
        </div>

        {/* LEGAL */}
        <div>
          <h3 className="font-bold text-lg mb-4">LEGAL</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#">terms and conditions</a>
            </li>
            <li>
              <a href="#">privacy policy</a>
            </li>
            <li>
              <a href="#">shipping policy</a>
            </li>
            <li>
              <a href="#">returns policy</a>
            </li>
          </ul>
        </div>

        {/* LET'S CONNECT */}
        <div>
          <h3 className="font-bold text-lg mb-4">LET'S CONNECT</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#">whatsapp</a>
            </li>
            <li>
              <a href="#">email</a>
            </li>
            <li>
              <a href="#">contact us</a>
            </li>
          </ul>
        </div>

        {/* STORE LOCATOR */}
        <div>
          <h3 className="font-bold text-lg mb-4">STORE LOCATOR</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#">mumbai</a>
            </li>
            <li>
              <a href="#">bangalore</a>
            </li>
          </ul>
        </div>
      </div>

      {/* Social Media */}
      <div className="mt-10">
        <h3 className="font-bold text-lg mb-4">UM SOCIAL MEDIA</h3>
        <div className="flex flex-wrap gap-4">
          <a
            href="#"
            className="p-3 bg-gray-200 rounded-full hover:bg-gray-300"
          >
            <FaFacebookF />
          </a>
          <a
            href="#"
            className="p-3 bg-gray-200 rounded-full hover:bg-gray-300"
          >
            <FaInstagram />
          </a>
          <a
            href="#"
            className="p-3 bg-gray-200 rounded-full hover:bg-gray-300"
          >
            <FaPinterestP />
          </a>
          <a
            href="#"
            className="p-3 bg-gray-200 rounded-full hover:bg-gray-300"
          >
            <FaYoutube />
          </a>
          <a
            href="#"
            className="p-3 bg-gray-200 rounded-full hover:bg-gray-300"
          >
            <FaSpotify />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
