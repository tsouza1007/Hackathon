import React from "react";
import SectionHeader from "./SectionHeader";

const ContactUs: React.FC = () => {
  return (
    <React.Fragment>
      <SectionHeader
        title="Contact Us"
        description="Connect with US: Let's Discuss Your Digital Marketing Needs"
        titleClassName="bg-lime-400 text-3xl"
        descriptionClassName="text-lg"
      />
    </React.Fragment>
  );
};

export default ContactUs;
