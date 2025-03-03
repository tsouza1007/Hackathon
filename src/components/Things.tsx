import React from "react";
import IllustrationProposal from "/Users/taniya/Desktop/Dev/fin/fin/src/assets/IllustrationProposal.svg";

const Things: React.FC = () => {
  return (
    <section className="mt-20 mb-30 flex justify-center">
      <div className="flex items-center justify-between w-full max-w-5xl bg-gray-100 rounded-3xl p-10 relative">
        {/* Left Content */}
        <div className="max-w-md">
          <h3 className="text-2xl font-semibold text-gray-900">
            Let’s make things happen
          </h3>
          <p className="text-gray-700 mt-4">
            Contact us today to learn more about how our digital marketing
            services can help your business grow and succeed online.
          </p>
          <a href="#contact">
            <button className="mt-6 bg-black text-white px-6 py-3 rounded-lg text-sm font-medium">
              Get your free proposal
            </button>
          </a>
        </div>

        {/* Right Illustration */}
        <div className="absolute right-10 hidden md:block">
          <img src={IllustrationProposal} alt="Illustration" className="w-60" />
        </div>
      </div>
    </section>
  );
};

export default Things;
