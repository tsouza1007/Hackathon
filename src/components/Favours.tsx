import React from "react";
import { favoursInfo } from "../data/index.ts";

const Favours: React.FC = () => {
  return (
    <section id="favours" className="py-16 px-4 md:px-[100px] max-w-[1440px] mx-auto">
      <ul className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-[40px] mt-10">
        {favoursInfo.map((favour) => (
          <li
            key={favour.id}
            className="flex flex-col md:flex-row justify-between p-12 md:p-16 rounded-3xl border border-black shadow-[0_4px_0px_0px_rgba(0,0,0,1)]"
            style={{ background: favour.cardColorBackground, minHeight: "250px" }}
          >
            <div className="flex flex-col justify-between">
              <div>
                <h3 className="inline-block px-2 py-1 rounded text-2xl md:text-3xl" style={{ background: favour.namesColorBackground }}>
                  {favour.name}
                </h3>
                <h3 className="inline-block px-2 py-1 rounded text-2xl md:text-3xl mt-2" style={{ background: favour.namesColorBackground }}>
                  {favour.subName}
                </h3>
              </div>
              <div
                className="mt-6 flex items-center cursor-pointer text-lg md:text-xl"
                style={{ color: favour.cardColorBackground === "#191a23" ? "#fff" : "#000" }}
              >
                <span>Learn More</span>
                <svg
                  className="w-5 h-5 ml-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 5l7 7-7 7"
                  ></path>
                </svg>
              </div>
            </div>
            <div className="flex justify-center items-center mt-6 md:mt-0">
              <img src={favour.image} alt={favour.name} className="max-w-[100px] md:max-w-[150px]" />
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Favours;

/* Add the following CSS to your global stylesheet or a CSS module
#favours {
  padding: 0 100px;
  box-sizing: border-box;
}

@media (max-width: 1440px) {
  #favours {
    padding: 0 40px;
  }
}

@media (max-width: 430px) {
  #favours {
    padding: 0 20px;
  }
}
*/
