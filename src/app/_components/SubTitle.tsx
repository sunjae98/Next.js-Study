import { HTMLAttributes } from "react";

type TitleProps = HTMLAttributes<HTMLHeadingElement>;

const SubTitle = ({ children, className }: TitleProps) => {
  return <h1 className="text-[#4E5968] mb-6">{children}</h1>;
};

export default SubTitle;
