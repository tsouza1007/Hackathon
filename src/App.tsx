import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Favors from "./components/Favours";
import Services from "./components/Services";

import CaseStudiesCarousel from "./components/CaseStudiesCarousel";
import CaseStudies from "./components/CaseStudies";
import WorkingProcess from "./components/WorkingProcess";
import Accordion from "./components/Accordain";
import Team from "./components/Team";
import TeamCard from "./components/TeamCard";
import Testimonials from "./components/Testimonials";
import TestimonialCarousel from "./components/TestimonialCarousel";
import ContactUs from "./components/ContactUs";
import ContactPage from "./components/ContactPage"; 
import ScrollProgressBar from "./components/ScrollProgressBar";
import React from "react";
import ProposalCard from "./components/ProposalCard";

function App() {
  return (
    <React.Fragment>
      <Navbar />
      <ScrollProgressBar />
      <Hero />
      <Services />
      <Favors />
      <ProposalCard />
      <CaseStudies />
      <CaseStudiesCarousel />
      <WorkingProcess />
      <Accordion />
      <Team />
      <TeamCard />
      <Testimonials />
      <TestimonialCarousel />
      <ContactUs />
      <ContactPage />
     
    </React.Fragment>
  );
}

export default App;