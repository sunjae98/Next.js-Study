import { HTMLAttributes } from "react";

type TitleProps = HTMLAttributes<HTMLHeadingElement>;

const Title = ({ children, className }: TitleProps) => {
  return (
    <h1 className="bg-[#EEEAFE] px-[12px] py-[8px] text-[#7353EA] font-bold rounded-lg mb-2 w-fit">
      {children}
    </h1>
  );
};

export default Title;
