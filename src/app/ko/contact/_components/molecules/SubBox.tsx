import React from "react";

interface SubBoxProps {
  imgUrl: string;
  imgAlt: string;
  title: string;
  description: string;
  className?: string;
}

const SubBox = ({
  imgUrl,
  imgAlt,
  title,
  description,
  className,
}: SubBoxProps) => {
  return (
    <div className={`flex flex-row ${className || ""}`}>
      <img
        src={imgUrl}
        alt={imgAlt}
        style={{ width: "48px", height: "48px" }}
        className="mr-4"
      />
      <div className="flex flex-col">
        <div className="font-semibold">{title}</div>
        <div className="text-[#4B5562]">{description}</div>
      </div>
    </div>
  );
};

export default SubBox;
