import React, { useState } from "react";
import { accordionData } from "../data/index";
import { Plus, Minus } from "lucide-react";

const Accordion: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="container mx-auto p-6">
      <div className="space-y-3">
        {accordionData.map((item, index) => (
          <div
            key={index}
            className={`border rounded-2xl overflow-hidden shadow-md transition-all duration-300 ${
              openIndex === index ? "bg-lime-300" : "bg-gray-100"
            } shadow-lg`}
          >
            <button
              onClick={() => toggleAccordion(index)}
              className="w-full flex justify-between items-center p-8 font-semibold text-left"
            >
              <span className="flex items-center">
                <span className="text-4xl font-extralight mr-2">{item.number}</span>
                <span className="text-2xl pl-3">{item.title}</span>
              </span>
              <span
                className={`transform transition-transform duration-[1s] ${
                  openIndex === index ? "rotate-180" : ""
                }`}
              >
                {openIndex === index ? <Minus size={20} /> : <Plus size={20} />}
              </span>
            </button>

            {openIndex === index && (
              <>
                <hr className="border-black mx-4" />
                <div className="p-8 text-gray-700">{item.content}</div>
              </>
            )}
            <div className="shadow-[0_4px_0px_0px_rgba(0,0,0,1)] rounded-b-2xl"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Accordion;

/* Add the following CSS to your global stylesheet or a CSS module
.container {
  max-width: 1440px;
  padding: 0 100px;
  box-sizing: border-box;
}

@media (max-width: 1440px) {
  .container {
    padding: 0 40px;
  }
}

@media (max-width: 430px) {
  .container {
    padding: 0 20px;
  }
}
*/
