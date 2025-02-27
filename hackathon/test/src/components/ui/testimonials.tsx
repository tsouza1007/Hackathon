import React from "react";
import arrowleft from "../../assets/arrowleft.png";
import arrowright from "../../assets/arrowright.png";
import stars from "../../assets/starstestimonials.png";

// Custom Hook to Detect Mobile Screens
const useIsMobile = () => {
  const [isMobile, setIsMobile] = React.useState(window.innerWidth < 1024);

  React.useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 1024);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return isMobile;
};

export default function Testimonials() {
  const isMobile = useIsMobile();

  return (
    <div className="w-full flex flex-col items-center justify-center mt-16">
      {/* Title & Description */}
      <div className="w-full flex flex-col lg:flex-row items-center lg:justify-start">
        <div
          className="flex items-center justify-center bg-[#B9FF66] text-black text-center rounded-md"
          style={{ height: isMobile ? 46 : "auto", width: isMobile ? 231 : 255 }}
        >
          <h1 className="text-3xl lg:text-4xl font-bold">Testimonials</h1>
        </div>
        <p className="text-center lg:text-start lg:ml-4 lg:w-1/2 text-lg mt-4 lg:mt-0">
          Hear from Our Satisfied Clients: Read Our Testimonials to Learn More about Our Digital Marketing Services.
        </p>
      </div>

      {/* Testimonial Cards */}
      <div className="mt-8 w-full bg-[#191A23] rounded-3xl px-6 py-8">
        <div className="flex overflow-x-auto gap-5 pb-4">
          {[1, 2, 3].map((_, index) => (
            <div key={index} className="relative w-[390px] border border-[#B9FF66] bg-[#191A23] rounded-3xl p-6">
              <p className="text-white text-sm lg:text-base">
                We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence.
              </p>
              <div className="pl-4 mt-4">
                <h4 className="text-[#B9FF66] font-bold">John Smith</h4>
                <p className="text-white text-sm lg:text-base">Marketing Director at XYZ Corp</p>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Arrows & Stars */}
        <div className="flex justify-center items-center mt-8 mb-6">
          <button>
            <img src={arrowleft} alt="Previous" className="w-5 h-5" />
          </button>
          <img src={stars} alt="Stars" className="mx-4 h-8" />
          <button>
            <img src={arrowright} alt="Next" className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
}
