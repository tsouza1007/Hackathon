import React from "react";
import SectionHeader from "./SectionHeader";

const Services: React.FC = () => {
  return (
    <React.Fragment>
      <SectionHeader
        title="Services"
        description="At our digital marketing agency, we offer a range of services to help businesses grow and succeed online. These services include:"
        titleClassName="bg-lime-400 text-3xl"
        descriptionClassName="text-lg"
      />
    </React.Fragment>
  );
};

export default Services;
