import React from "react";

interface SectionHeaderProps {
  title: string;
  description: string;
  className?: string;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({ title, description, className }) => {
  return (
    <header className={`mx-auto flex flex-col items-center gap-2 ${className}`}>
      <h3 className="text-xl font-semibold text-center">{title}</h3>
      <p className="text-center text-gray-600 opacity-80">{description}</p>
    </header>
  );
};

export default SectionHeader;
