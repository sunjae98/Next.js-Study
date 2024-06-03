import Image from "next/image";
import Logo2 from "../../public/logo2.webp";
import Logo3 from "../../public/logo3.webp";
import Logo4 from "../../public/logo4.webp";
import Logo5 from "../../public/logo5.webp";
import AutoSlide from "./_componant/AutoSlide";
import { FaChevronRight } from "react-icons/fa";
import desktop from "../../public/desktop.webp";
import desktop2 from "../../public/desktop2.webp";
import desktop3 from "../../public/desktop3.webp";
import desktop4 from "../../public/desktop4.webp";
import Header from "./_componant/Header";

export default function Home() {
  return (
    <div>
      <Header />
      <video
        className="w-[1265px] h-[556px] object-cover pt-16"
        autoPlay
        loop
        muted
      >
        <source src="/landing.mp4" type="video/mp4" />
      </video>
      <div className="flex flex-col justify-center items-center absolute top-[19.5rem] left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-[3.5rem] font-extrabold leading-tight text-center">
        <p className="text-transparent bg-clip-text bg-gradient-to-b from-black to-gray-400">
          디지털 전환을 위한
        </p>
        <p className="text-transparent bg-clip-text bg-gradient-to-b from-violet-600 via-violet-600">
          올인원 솔루션
        </p>
        <p className="text-lg mt-4 font-semibold">
          엘리스에서는 교육, 평가, 데이터까지​ DX에 필요한 모든 솔루션을
          제공합니다.
        </p>
        <button
          type="button"
          className="w-[150px] mt-4 text-white text-lg/[28px] font-semibold py-[10px] leading-7 height-[38px] bg-elice-pubble rounded-md hover:bg-violet-600"
        >
          상담 요청하기
        </button>
      </div>
      <div className="py-32">
        <p className="text-center text-4xl font-extrabold mb-16">
          엘리스와 함께한 고객
        </p>
        <AutoSlide />
      </div>
      <div className="flex items-center gap-14 py-20 px-6">
        <Image
          src={desktop}
          alt="desktop"
          width={578}
          height={576}
          className="rounded-2xl"
        />
        <div className="flex flex-col ">
          <div className="py-2 px-3 text-md font-semibold w-[130px] mb-2 bg-violet-100 text-violet-600 rounded-xl">
            학습 경험 플렛폼
          </div>
          <div className="text-4xl font-bold w-[578px]">
            <p>학습의 몰입도를 높이는</p>
            <p>올인원 교육 플랫폼</p>
          </div>
          <div className="text-base mt-2 text-gray-500">
            <p>실습 위주의 학습 환경부터 효율적인 학생 관리 시스템까지,</p>
            <p>
              학습자와 관리자 모두가 만족하는 차별화 된 학습 플랫폼을 만나
              보세요.
            </p>
          </div>
          <div className="flex py-4 px-6 items-center gap-4 bg-gray-50 mt-8 rounded-xl">
            <Image src={Logo2} alt="logo2" width={52} height={52} />
            <div className="flex flex-1 font-semibold text-lg items-center justify-between">
              <p>엘리스LXP</p>
              <FaChevronRight />
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center gap-14 py-20 px-6">
        <div className="flex flex-col ">
          <div className="py-2 px-3 text-md font-semibold w-[130px] mb-2 bg-cyan-50 text-cyan-500 rounded-xl">
            교육 콘텐츠 관리
          </div>
          <div className="text-4xl font-bold w-[578px]">
            <p>1,000개 이상의 교육 콘텐츠로 구성하는</p>
            <p>우리 회사 맞춤 DX 과정</p>
          </div>
          <div className="text-base mt-2 text-gray-500">
            <p>
              직무별 맞춤 교육부터 산업별 프로젝트 기반 교육, 데이터 분석 및
              AI/ML 모델링까지.
            </p>
            <p>
              데이터 기반으로 끊임없이 진화하는 콘텐츠를 지금 바로 도입해
              보세요.
            </p>
          </div>
          <div className="flex py-4 px-6 items-center gap-4 bg-gray-50 mt-8 rounded-xl">
            <Image src={Logo3} alt="logo3" width={52} height={52} />
            <div className="flex flex-1 font-semibold text-lg items-center justify-between">
              <p>엘리스라이브러리</p>
              <FaChevronRight />
            </div>
          </div>
        </div>
        <Image
          src={desktop2}
          alt="desktop2"
          width={578}
          height={576}
          className="rounded-2xl"
        />
      </div>
      <div className="flex items-center gap-14 py-20 px-6">
        <Image
          src={desktop3}
          alt="desktop3"
          width={578}
          height={576}
          className="rounded-2xl"
        />
        <div className="flex flex-col ">
          <div className="py-2 px-3 text-md font-semibold w-[130px] mb-2 bg-violet-100 text-blue-700 rounded-xl">
            디지털 역량 평가
          </div>
          <div className="text-4xl font-bold w-[578px]">
            <p>개발자 채용부터 DX 역량 평가까지​</p>
            <p>모두 하나의 플랫폼에서</p>
          </div>
          <div className="text-base mt-2 text-gray-500">
            <p>
              국내 유수 기업의 DX 역량 평가를 진행하며 쌓아온 데이터를 기반으로
            </p>
            <p>
              개발자 채용 평가, 재직자 역량 평가, 경진대회 등 다양한 테스트를
              진행해 보세요.
            </p>
          </div>
          <div className="flex py-4 px-6 items-center gap-4 bg-gray-50 mt-8 rounded-xl">
            <Image src={Logo4} alt="logo4" width={52} height={52} />
            <div className="flex flex-1 font-semibold text-lg items-center justify-between">
              <p>엘리스테스트</p>
              <FaChevronRight />
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center gap-14 py-20 px-6">
        <div className="flex flex-col ">
          <div className="py-2 px-3 text-md font-semibold w-[171px] mb-2 bg-sky-100 text-sky-500 rounded-xl">
            학습용 클라우드 서비스
          </div>
          <div className="text-4xl font-bold w-[578px]">
            <p>학습에 최적화된</p>
            <p>가장 간편한 GPU 클라우드</p>
          </div>
          <div className="text-base mt-2 text-gray-500">
            <p>원하는 만큼의 GPU 자원을 실시간으로 유연하게 할당받으세요.</p>
            <p>
              AI 학습과 연구부터 수천 명 규모의 머신러닝 경진대회까지 안정적으로
              지원합니다.
            </p>
          </div>
          <div className="flex py-4 px-6 items-center gap-4 bg-gray-50 mt-8 rounded-xl">
            <Image src={Logo5} alt="logo5" width={52} height={52} />
            <div className="flex flex-1 font-semibold text-lg items-center justify-between">
              <p>엘리스클라우드</p>
              <FaChevronRight />
            </div>
          </div>
        </div>
        <Image
          src={desktop4}
          alt="desktop4"
          width={578}
          height={576}
          className="rounded-2xl"
        />
      </div>
    </div>
  );
}
