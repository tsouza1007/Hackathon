import React from "react";
// import { Button } from "./button";

function HeroSection() {
  return (
    <section className="col-span-12 gap-6 w-full items-center">
      {/* Left Section */}
      <div className="col-span-12 md:col-span-6">
        <p className="text-h1Mobile md:text-h1 text-black font-bold leading-tight">
          Navigating the <br /> digital landscape <br /> for success
        </p>
        
        <div className="block md:hidden my-[35px]">
          <img
            src="/images/microphone_illustration.png"
            alt="microphone illustration"
            className="w-full"
          />
        </div>
        
        <p className="text-p text-black my-[35px]">
          Our digital marketing agency helps businesses grow and succeed online
          through a range of services including SEO, PPC, social media
          marketing, and content creation.
        </p>

        
        
        {/* <Button
          text="Book a consultation"
          classes="bg-secondary text-white text-[18px] w-full md:w-[231px] hover:text-black"
        /> */}
      </div>
      
            

      {/* Right Section */}
      <div className="hidden md:block col-span-6">
        <img
          src="/images/microphone_illustration.png"
          alt="microphone illustration"
          className="w-full"
        />
      </div>
    </section>
  );
}

export default HeroSection;
