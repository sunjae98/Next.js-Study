import React from "react";
import SubBox from "../_components/molecules/SubBox";

const DataBox = () => {
  return (
    <div className="w-[576px] h-full">
      <div className="flex flex-col jusfity-start">
        <div className="text-black text-4xl font-extrabold mb-2 ">
          영업팀 문의
        </div>
        <div className="text-[#343E4B] mb-10">
          몇 가지 정보를 입력해 주시면 엘리스 담당자가 연락을 드리겠습니다.
        </div>
        <SubBox
          imgUrl="https://elice.io/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fplatform.a5f1b242.png&w=96&q=75"
          imgAlt="학습 플랫폼 아이콘"
          title="학습 플랫폼"
          description="코딩 실습, 화상 강의 솔루션, 진도율 관리까지. 디지털 교육의 모든 것을 하나의 플랫폼으로 해결하세요."
          className="mb-8"
        />
        <SubBox
          imgUrl="https://elice.io/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flibrary.326b6852.png&w=96&q=75"
          imgAlt="교육"
          title="교육 컨텐츠"
          description="1,000개 이상의 교육 콘텐츠를 보유한 엘리스라이브러리로 교육을 운영해 보세요."
          className="mb-8"
        />
        <SubBox
          imgUrl="https://elice.io/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fcloud.4f1836bf.png&w=96&q=75"
          imgAlt="GPU"
          title="GPU 클라우드"
          description="사용한 만큼 과금되는 GPU 클라우드로 AI 학습과 연구에 필요한 자원을 유연하게 관리해 보세요."
          className="mb-8"
        />
      </div>
    </div>
  );
};

export default DataBox;
