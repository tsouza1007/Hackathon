import React from "react";
import { Button } from "@/components/ui/button"; // Assuming you have a button component
import logo from "@/assets/images/logo.png"; // Replace with your actual logo

const Navbar: React.FC = () => {
  return (
    <header className="col-span-12 mx-auto px-[0px] md:px-[0px] lg:px-[100px] py-6">
      <nav className="grid grid-cols-12 items-center gap-[40px]">
      
        <div className="col-span-4 md:col-span-3 lg:col-span-2">
          <img src={logo} alt="Logo" className="w-[120px]" />
        </div>

        {/* Navigation Links */}
        <div className="hidden md:flex col-span-6 lg:col-span-8 justify-center space-x-8 text-lg font-medium text-black">
          <a href="#" className="hover:text-gray-600 transition">About us</a>
          <a href="#" className="hover:text-gray-600 transition">Services</a>
          <a href="#" className="hover:text-gray-600 transition">Use Cases</a>
          <a href="#" className="hover:text-gray-600 transition">Pricing</a>
          <a href="#" className="hover:text-gray-600 transition">Blog</a>
        </div>

        {/* Button */}
        <div className="col-span-4 md:col-span-3 lg:col-span-2 flex justify-end">
          <Button variant="outline" size="lg">Request a quote</Button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
