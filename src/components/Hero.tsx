// import React from "react";
import Button from "./ui/Button";
import IlustrationHero from "../assets/Illustration.svg";
import Partners from "./Partners";

const Hero = () => {
  return (
    <section className="py-16 px-[55px] max-w-[1450px] mx-auto grid grid-cols-12 gap-[40px] items-center">
      {/* Left Content */}
      <div className="col-span-12 md:col-span-6 flex flex-col gap-6">
        <h1 className="text-5xl font-bold leading-tight disappearing-phone">
          Navigating the digital landscape for success
        </h1>
        <p className="text-lg">
          Our digital marketing agency helps businesses grow and succeed online through a range of services including SEO, PPC, social media marketing, and content creation.
        </p>
        <Button className="w-fit hover:bg-white-600 transition duration-300 ">Book a consultation</Button>
      </div>

      {/* Right Image */}
      <div className="col-span-12 md:col-span-6 flex justify-center">
        <img src={IlustrationHero} alt="Illustration Hero" loading="lazy" className="w-full max-w-[500px]" />
      </div>
      
      {/* Mobile Headline */}
      <h1 className="text-3xl font-bold col-span-12 text-center apparings-phone hidden">
        Navigating the digital landscape for success
      </h1>
      
      {/* Partners Section */}
      <div className="col-span-12">
        <Partners />
      </div>
    </section>
  );
};

export default Hero;
