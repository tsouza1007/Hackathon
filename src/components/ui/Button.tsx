import React from "react";

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  variant?: "primary" | "ghost";
}

const Button: React.FC<ButtonProps> = ({ children, onClick, className, variant="primary" }) => {
  return (
    <button className={`border rounded-lg px-5 py-3 transition-colors duration-300 ${className} ${variant==="ghost" ? 'bg-white text-black border-black hover:bg-black hover:text-white':'bg-black text-white hover:bg-white hover:text-black'}`} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
