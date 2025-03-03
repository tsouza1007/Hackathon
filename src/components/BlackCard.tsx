import React, { useState } from "react";
import { ArrowRight, ArrowLeft } from "lucide-react";

const caseStudies = [
  {
    text: "For a local restaurant, we implemented a targeted PPC campaign that resulted in a 50% increase in website traffic and a 25% increase in sales.",
  },
  {
    text: "For a B2B software company, we developed an SEO strategy that resulted in a first page ranking for key keywords and a 200% increase in organic traffic.",
  },
  {
    text: "For a national retail chain, we created a social media marketing campaign that increased followers by 25% and generated a 20% increase in online sales.",
  },
];

const BlackCard: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % caseStudies.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + caseStudies.length) % caseStudies.length);
  };

  return (
    <div className="w-full px-[100px] py-10 bg-white max-w-[1440px] mx-auto">
      {/* Desktop Layout */}
      <div className="hidden md:grid grid-cols-12 gap-[40px] bg-[#121217] p-10 rounded-2xl">
        {caseStudies.map((item, index) => (
          <div
            key={index}
            className="col-span-4 text-white flex flex-col justify-between"
          >
            <p className="text-lg">{item.text}</p>
            <a href="#" className="flex items-center text-[#A3FF6B] mt-4">
              Learn more <ArrowRight className="ml-2" size={20} />
            </a>
          </div>
        ))}
      </div>

      {/* Mobile Layout */}
      <div className="md:hidden relative">
        <div className="overflow-hidden">
          <div
            className="flex transition-transform duration-300"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {caseStudies.map((item, index) => (
              <div
                key={index}
                className="min-w-full bg-[#121217] p-6 rounded-2xl text-white min-h-[200px] flex flex-col justify-between"
              >
                <p className="text-lg">{item.text}</p>
                <a href="#" className="flex items-center text-[#A3FF6B] mt-4">
                  Learn more <ArrowRight className="ml-2" size={20} />
                </a>
              </div>
            ))}
          </div>
        </div>
        <button
          className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full"
          onClick={handlePrev}
        >
          <ArrowLeft size={20} />
        </button>
        <button
          className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full"
          onClick={handleNext}
        >
          <ArrowRight size={20} />
        </button>
      </div>
    </div>
  );
};

export default BlackCard;
