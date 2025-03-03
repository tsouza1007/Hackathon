import React from "react";
import arrowSimple from "../assets/icons/arrowSimple.svg";

export interface LabelInfo {
  title: string;
  color: "#fff" | "#b9ff66" | "#191a23";
}

const LabelArrow: React.FC<LabelInfo> = ({ title, color }) => {
  return (
    <a href="#" className="flex items-center">
      <p style={{ color: color }}>{title}</p>
      <img src={arrowSimple} alt="arrow Simple" className="ml-4" />
    </a>
  );
};

export default LabelArrow;
