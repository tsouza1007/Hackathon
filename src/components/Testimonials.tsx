import React from "react";
import SectionHeader from "./SectionHeader";

const Testimonials: React.FC = () => {
  return (
    <React.Fragment>
      <SectionHeader
        title="Testimonials"
        description="Hear from Our Satisfied Clients: Read Our Testimonials to Learn More about Our Digital Marketing Services"
        titleClassName="bg-lime-400 text-3xl"
        descriptionClassName="text-lg"
      />
    </React.Fragment>
  );
};

export default Testimonials;
