import React, { HTMLAttributes } from "react";

// 확장된 props 정의
type TitleProps = HTMLAttributes<HTMLHeadingElement> & {
  bgColor?: string;
  textColor?: string;
  children: React.ReactNode;
};

const ColorBox = ({ bgColor, textColor, children }: TitleProps) => {
  const backgroundColorClass = `bg-[${bgColor}]`; // Tailwind CSS는 임의의 값에 대한 처리가 제한적일 수 있음
  const textColorClass = `text-[${textColor}]`;

  return (
    <div className={`${backgroundColorClass} ${textColorClass} p-2 rounded-lg`}>
      {children}
    </div>
  );
};

export default ColorBox;
