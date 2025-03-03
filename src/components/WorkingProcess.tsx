import React from "react";
import SectionHeader from "./SectionHeader";

const WorkingProcess: React.FC = () => {
  return (
    <React.Fragment>
      <SectionHeader
        title="Our Working Process"
        description="Step-by-Step Guide to Achieving Your Business Goals"
        titleClassName="bg-lime-400 text-3xl"
        descriptionClassName="text-lg"
      />
    </React.Fragment>
  );
};

export default WorkingProcess;
