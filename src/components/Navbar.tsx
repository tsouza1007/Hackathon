import React, { useState } from "react";
import Logo from "../assets/Logo.svg";
import { IoMenuOutline, IoCloseOutline } from "react-icons/io5";
import Button from "./ui/Button";

const Navbar: React.FC = () => {
  const [showNav, setShowNav] = useState(false);

  return (
    <header className="navbar">
      <nav className="container mx-auto px-4 md:px-[55px] py-4 grid grid-cols-12 gap-4 md:gap-10 items-center">
        <a href="#" className="col-span-6 md:col-span-2">
          <img src={Logo} alt="logo Positivus" />
        </a>
        <div className={`navbar__links col-span-12 md:col-span-10 flex justify-end items-center ${showNav ? "block" : "hidden"} md:flex`}>
          <ul className="flex flex-col md:flex-row gap-4 md:gap-10 mr-10">
            <li>
              <a href="#team">About us</a>
            </li>
            <li>
              <a href="#favors">Services</a>
            </li>
            <li>
              <a href="#studies">Use Cases</a>
            </li>
            <li>
              <a href="#process">Pricing</a>
            </li>
            <li>
              <a href="#testimonials">Blog</a>
            </li>
          </ul>
          <a href="#contact">
            <Button variant="ghost" className="">Request a quote</Button>
          </a>
        </div>
        <div className="navbar__menu col-span-6 md:col-span-2 flex justify-end md:hidden" onClick={() => setShowNav(!showNav)}>
          {showNav ? <IoCloseOutline /> : <IoMenuOutline />}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
