import React, { useEffect, useState } from "react";

const ScrollProgressBar: React.FC = () => {
  const [scrollWidth, setScrollWidth] = useState(0);

  const handleScroll = () => {
    const scrollTop = document.documentElement.scrollTop;
    const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrollPercentage = (scrollTop / scrollHeight) * 100;
    setScrollWidth(scrollPercentage);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-1 bg-gray-200">
      <div
        className="h-full bg-lime-400"
        style={{ width: `${scrollWidth}%` }}
      ></div>
    </div>
  );
};

export default ScrollProgressBar;
