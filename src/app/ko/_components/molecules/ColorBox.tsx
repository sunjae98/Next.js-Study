import React, { HTMLAttributes } from "react";

// 확장된 props 정의
type TitleProps = HTMLAttributes<HTMLHeadingElement> & {
  bgColor: string;
  textColor: string;
  children: React.ReactNode;
};

const ColorBox = ({ bgColor, textColor, children }: TitleProps) => {
  return (
    <div
      className="p-2 rounded-lg w-fit font-semibold mb-3"
      style={{ backgroundColor: bgColor, color: textColor }}
    >
      {children}
    </div>
  );
};

export default ColorBox;
