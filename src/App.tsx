// import React from "react";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Favors from "./components/Favours";
import Services from "./components/Services";
import Things from "./components/Things";
// import Studies from "./components/Studies";
import CaseStudies from "./components/CaseStudies";
import WorkingProcess from "./components/WorkingProcess";
import BlackCard from "./components/BlackCard";
import Accordion from "./components/Accordain";
import Team from "./components/Team";
import TeamCard from "./components/TeamCard";
import Testimonials from "./components/Testimonials";
import TestimonialCarousel from "./components/TestimonialCarousel";
import ContactUs from "./components/ContactUs";
import ContactPage from "./components/ContactPage"; 
import Footer from "./components/Footer";
import ScrollProgressBar from "./components/ScrollProgressBar";
import React from "react";
// import Process from "./components/process/Process";
// import Team from "./components/team/Team";
// import Testimonials from "./components/testimonials/Testimonials";
// import Contact from "./components/сontact/Contact";
// import Footer from "./components/footer/Footer";

function App() {
  return (
    <React.Fragment>
      {/* // makes it in A single container so that you don't have to wrap everything in a div, readability for dev, no extra divs in the DOM 
      //while converting from jsx to js, it will throw an error if fragment or div is not used since this function contains multiple elements */}
      <Navbar />
      <ScrollProgressBar />
      <Hero />
      <Services />
      <Favors />
      <Things />
      <CaseStudies />
      <BlackCard />
      <WorkingProcess />
      <Accordion />
      <Team />
      <TeamCard />
      <Testimonials />
      <TestimonialCarousel />
      <ContactUs />
      <ContactPage />
      <Footer />
      {/* <Process />
      <Contact />
      <Footer /> */}
    </React.Fragment>
  );
}

export default App;