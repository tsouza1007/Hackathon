import React from "react";
import SectionHeader from "./SectionHeader";

const Team: React.FC = () => {
  return (
    <React.Fragment>
      <SectionHeader
        title="Team"
        description="Meet the skilled and experienced team behind our successful digital marketing strategies"
        titleClassName="bg-lime-400 text-3xl"
        descriptionClassName="text-lg"
      />
    </React.Fragment>
  );
};

export default Team;
