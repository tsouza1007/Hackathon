import React, { useState } from "react";
import { motion } from "framer-motion";

const testimonials = [
  {
    quote:
      "We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business.",
    name: "John Smith",
    role: "Marketing Director at XYZ Corp",
  },
  {
    quote:
      "Positivus has been an invaluable partner in our growth strategy. Their expertise in digital marketing has helped us reach new audiences and drive meaningful engagement with our brand.",
    name: "Jane Doe",
    role: "CEO of ABC Ltd",
  },
  {
    quote:
      "Their team is incredibly knowledgeable and always goes above and beyond to deliver results. We highly recommend them to anyone looking to scale their online presence.",
    name: "Michael Brown",
    role: "Head of Digital at TechSolutions",
  },
  {
    quote:
      "Amazing service! Our online engagement has grown tremendously thanks to their strategies. Highly recommend them!",
    name: "Alice Green",
    role: "CMO at GrowthCorp",
  },
];

const TestimonialCarousel: React.FC = () => {
  const [index, setIndex] = useState(0);

  const nextSlide = () => {
    setIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setIndex((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  return (
    <section className="max-w-[1440px] mx-auto px-6 md:px-20 py-16">
      <div className="bg-[#191a23] p-12 rounded-3xl relative overflow-hidden">
        {/* Carousel Wrapper */}
        <div className="flex justify-center items-center relative">
          <motion.div
            className="flex"
            animate={{ translateX: `-${index * 33.33}%` }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          >
            {testimonials.map((testimonial, i) => (
              <div
                key={i}
                className="min-w-[33.33%] px-4 md:px-6 lg:px-10 text-center border border-[#7fc13d] p-8 rounded-xl relative bg-[#191a23]"
              >
                <p className="text-white text-lg">{testimonial.quote}</p>
                <div className="mt-4">
                  <h4 className="text-[#7fc13d] font-bold text-lg">
                    {testimonial.name}
                  </h4>
                  <p className="text-gray-400">{testimonial.role}</p>
                </div>
                {/* Speech Bubble Arrow */}
                <div className="absolute bottom-[-10px] left-1/2 -translate-x-1/2 w-6 h-6 border-b border-l border-[#7fc13d] rotate-45 bg-[#191a23]"></div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Navigation Controls */}
        <div className="flex justify-between items-center mt-8">
          <button onClick={prevSlide} className="text-white text-2xl">
            ←
          </button>
          <div className="flex space-x-2">
            {testimonials.map((_, i) => (
              <span
                key={i}
                className={`h-3 w-3 rounded-full ${
                  i === index ? "bg-[#7fc13d]" : "bg-gray-500"
                }`}
              />
            ))}
          </div>
          <button onClick={nextSlide} className="text-white text-2xl">
            →
          </button>
        </div>
      </div>
    </section>
  );
};

export default TestimonialCarousel;
