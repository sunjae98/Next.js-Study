import React from "react";
import ArrowSVG from "../../../../public/svg/rightarrow.svg";
import Title from "@/app/_components/Title";
import SubTitle from "@/app/_components/SubTitle";
import ColorBox from "@/app/_components/ColorBox";

interface InfoBoxProps {
  BoxText: string;
  Title: string;
  SubTitle: string;
  ImgUrl: string;
  ImgText: string;
  LayoutNum: number;
}

const InfoBox = () => {
  return (
    <div className="w-full h-screen flex flex-row justify-center items-center">
      <img
        src="https://elice.io/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fsuggestion_1_desktop.11d03eb8.png&w=1200&q=75"
        style={{ width: "578px", height: "578px" }}
        className="rounded-3xl mr-16"
      />
      <div className="flex flex-col">
        <ColorBox>학습 경험 플랫폼</ColorBox>
        <Title>
          학습의 몰입도를 높이는 <br />
          올인원 교육 플랫폼
        </Title>
        <SubTitle>
          실습 위주의 학습 환경부터 효율적인 학생 관리 시스템까지,
          <br />
          학습자와 관리자 모두가 만족하는 차별화 된 학습 플랫폼을 만나 보세요.
        </SubTitle>
        <div className="flex flex-row items-center rounded-3xl bg-gray-50 w-full px-[24px] py-[16px]">
          <img
            src="https://elice.io/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flxp_icon.d1d8ac60.png&w=128&q=75"
            style={{ width: "52px", height: "52px" }}
            className="mr-4"
          />
          <div className="font-semibold text-lg">엘리스LXP</div>
          <ArrowSVG className="w-[35px] h-[35px]" />
        </div>
      </div>
    </div>
  );
};

export default InfoBox;
