import React from "react";
import { teamMembers } from "../data/index";
import Button from "./ui/Button";

const TeamCard: React.FC = () => {
  return (
    <section id="team" className="py-16 px-4 md:px-[100px] max-w-[1440px] mx-auto">
      <div className="flex flex-col md:flex-row items-center justify-between">
        {/* <h2 className="text-3xl md:text-5xl font-bold flex items-center">
          <span className="bg-lime-300 px-3 py-1 rounded-lg mr-2">Team</span>
          Meet the skilled and experienced team behind our successful digital marketing strategies
        </h2> */}
      </div>
      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-[40px] mt-10">
        {teamMembers.map((member) => (
          <li
            key={member.id}
            className="p-8 rounded-3xl border border-black shadow-[0_4px_0px_0px_rgba(0,0,0,1)] bg-white"
          >
            <div className="flex flex-col items-center">
              <div className="relative w-24 h-24 rounded-full overflow-hidden bg-lime-300">
                <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
              </div>
              <h3 className="text-xl font-bold mt-4">{member.name}</h3>
              <p className="text-gray-600">{member.role}</p>
              <hr className="w-full my-4 border-black" />
              <p className="text-gray-700 text-center">{member.description}</p>
            </div>
          </li>
        ))}
      </ul>
      <div className="flex justify-end mt-10">
        <Button className="px-20">See all team</Button>
      </div>
    </section>
  );
};

export default TeamCard;
