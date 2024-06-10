import Link from "next/link";
import Button from "@/app/_components/Button";

export default function Consulting() {
  return (
    <div className="relative w-full h-[490px] overflow-hidden">
      <video
        src="https://cdn-front-door.elice.io/landing/static/video/elice_landing_0120.mp4"
        autoPlay
        muted
        loop
        playsInline
        controls={false}
        className="w-full h-full object-cover"
      />
      <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center">
        <span className="text-black text-6xl font-extrabold text-center mb-2">
          디지털 전환을 위한
        </span>
        <span className="text-purple-600 text-6xl font-extrabold text-center mb-4">
          올인원 솔루션
        </span>
        <div className="font-semibold text-lg text-gray-700">
          엘리스에서는 교육, 평가, 데이터까지 DX에 필요한 모든 솔루션을
          제공합니다.
        </div>
        <Link href="/ko/contact">
          <Button className="bg-[#7354EA] text-lg text-white mt-[16px] px-[22px] py-[8px] font-medium rounded-lg hover:bg-[#613DD6]">
            상담 요청하기
          </Button>
        </Link>
      </div>
    </div>
  );
}
