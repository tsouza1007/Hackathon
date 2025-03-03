import React from "react";
import AmazonLogo from "../assets/partners/Company logo-1.svg";
import DribbleLogo from "../assets/partners/Company logo-2.svg";
import HubSpotLogo from "../assets/partners/Company logo-3.svg";
import NetflixLogo from "../assets/partners/Company logo-4.svg";
import NotionLogo from "../assets/partners/Company logo-5.svg";
import ZoomLogo from "../assets/partners/Company logo.svg";

const Partners: React.FC = () => {
  return (
    <div className="grid grid-cols-6 md:grid-cols-12 gap-4 md:gap-10 items-center py-10">
      <div className="col-span-3 md:col-span-2 flex justify-center">
        <img src={AmazonLogo} alt="Amazon" className="h-8 md:h-12 m-2" />
      </div>
      <div className="col-span-3 md:col-span-2 flex justify-center">
        <img src={DribbleLogo} alt="Dribble" className="h-8 md:h-12 m-2" />
      </div>
      <div className="col-span-3 md:col-span-2 flex justify-center">
        <img src={HubSpotLogo} alt="HubSpot" className="h-8 md:h-12 m-2" />
      </div>
      <div className="col-span-3 md:col-span-2 flex justify-center">
        <img src={NetflixLogo} alt="Netflix" className="h-8 md:h-12 m-2" />
      </div>
      <div className="col-span-3 md:col-span-2 flex justify-center">
        <img src={NotionLogo} alt="Notion" className="h-8 md:h-12 m-2" />
      </div>
      <div className="col-span-3 md:col-span-2 flex justify-center">
        <img src={ZoomLogo} alt="Zoom" className="h-8 md:h-12 m-2" />
      </div>
    </div>
  );
};

export default Partners;
