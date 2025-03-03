import React from "react";
import SectionHeader from "./SectionHeader";

const CaseStudies: React.FC = () => {
  return (
    <React.Fragment>
      <SectionHeader
        title="Case Studies"
        description="Explore Real-Life Examples of Our Proven Digital Marketing Success through Our Case Studies"
        titleClassName="bg-lime-400 text-3xl"
        descriptionClassName="text-lg"
      />
    </React.Fragment>
  );
};

export default CaseStudies;
