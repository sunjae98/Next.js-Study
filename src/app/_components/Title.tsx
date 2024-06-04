import { HTMLAttributes } from "react";

type TitleProps = HTMLAttributes<HTMLHeadingElement>;

const Title = ({ children }: TitleProps) => {
  return <h1 className="font-[750] text-4xl mb-2">{children}</h1>;
};

export default Title;
