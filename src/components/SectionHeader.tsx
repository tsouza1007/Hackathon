import React from "react";

interface SectionHeaderProps {
  title: string;
  description: string;
  titleClassName?: string;
  descriptionClassName?: string;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({ title, description, titleClassName, descriptionClassName }) => {
  return (
    <div className="container py-10">
      <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
        <h2 className={`px-4 py-2 font-bold rounded-lg ${titleClassName}`}>
          {title}
        </h2>
        <p className={`${descriptionClassName}`}>{description}</p>
      </div>
    </div>
  );
};

export default SectionHeader;
