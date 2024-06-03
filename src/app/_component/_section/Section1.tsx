import Image from "next/image";
import ContactBtn from "../ContactBtn";

export default function Section1() {
  return (
    <div className="max-w-full h-[492px] bg-cover bg-center mt-16 flex flex-col justify-center items-center relative">
      <video
        src="https://cdn-front-door.elice.io/landing/static/video/elice_landing_0120.mp4"
        autoPlay
        muted
        loop
        playsInline
        controls={false}
        className="absolute w-full h-full object-cover"
      ></video>
      <div className="absolute w-full h-full flex flex-col justify-center items-center">
        <div className="text-[56px] font-bold text-transparent bg-gradient-to-b from-gray-900 to-gray-400 bg-clip-text -m-2">
          디지털 전환을 위한
        </div>
        <div className="text-[56px] font-bold text-transparent bg-gradient-to-b from-purple-900 to-purple-400 bg-clip-text -m-2">
          올인원 솔루션
        </div>
        <div className="h-12 text-lg font-bold items-center flex">
          엘리스에서는 교육, 평가, 데이터까지​ DX에 필요한 모든 솔루션을
          제공합니다.
        </div>
        <ContactBtn name="상담 요청하기" size="10" />
      </div>
    </div>
  );
}
