import React from "react";
import ArrowSVG from "@/../public/svg/rightarrow.svg";
import Title from "@/app/_components/Title";
import SubTitle from "@/app/_components/SubTitle";
import ColorBox from "@/app/ko/_components/molecules/ColorBox";

interface InfoBoxProps {
  labelText: string;
  bgColor: string;
  textColor: string;
  title: React.ReactNode;
  subTitle: React.ReactNode;
  imgUrl: string;
  extraImgUrl: string;
  extraImgText: string;
  layoutIndex: number;
}

const InfoBox = ({
  labelText,
  bgColor,
  textColor,
  title,
  subTitle,
  imgUrl,
  extraImgUrl,
  extraImgText,
  layoutIndex,
}: InfoBoxProps) => {
  const layoutDirection = layoutIndex === 1 ? "flex-row-reverse" : "flex-row";
  return (
    <div
      className={`flex h-[740px] justify-between items-center w-full px-[24px] my-8 ${layoutDirection}`}
    >
      <div className="flex-1 flex justify-end">
        <img
          src={imgUrl}
          alt="Main visual"
          style={{ width: "578px", height: "578px" }}
          className="rounded-3xl"
        />
      </div>
      <div className="w-16"></div> {/* 가운데 공간을 두기 위한 빈 div */}
      <div className="flex-1 flex flex-col">
        <ColorBox bgColor={bgColor} textColor={textColor}>
          {labelText}
        </ColorBox>
        <Title>{title}</Title>
        <SubTitle>{subTitle}</SubTitle>
        <div className="flex justify-between items-center rounded-3xl bg-gray-50 w-full px-[24px] py-[16px]">
          <div className="flex-1 flex flex-row items-center">
            <img
              src={extraImgUrl}
              alt="Extra visual"
              style={{ width: "52px", height: "52px" }}
              className="mr-4"
            />
            <div className="font-semibold text-lg">{extraImgText}</div>
          </div>
          <ArrowSVG className="w-[35px] h-[35px]" />
        </div>
      </div>
    </div>
  );
};

export default InfoBox;
