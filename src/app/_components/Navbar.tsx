import Image from "next/image";
import Link from "next/link";
import Button from "@/app/_components/Button";
import logo from "@/../public/icon/elice_logo.png";
import DownSVG from "@/../public/svg/down.svg";

export default function Navbar() {
  return (
    <header className="w-full h-[64px] border-b-[1px] flex items-center justify-between px-12 fixed top-0 left-0 right-0 bg-white z-50">
      <div className="flex flex-1 min-w-0">
        <Link href="/ko" className="flex items-center shrink-0">
          <Image src={logo} alt="logo" width={95} height={28} layout="fixed" />
        </Link>
        <div className="flex flex-1 justify-start ml-8">
          <Button className="flex items-center font-semibold px-[11px] py-[8px] rounded-lg hover:bg-gray-100">
            제품
            <DownSVG className="ml-2" />
          </Button>
          <Button className="flex items-center font-semibold px-[11px] py-[8px] rounded-lg hover:bg-gray-100">
            솔루션
            <DownSVG className="ml-2" />
          </Button>
          <Button className="flex items-center font-semibold px-[11px] py-[8px] rounded-lg hover:bg-gray-100">
            리소스
            <DownSVG className="ml-2" />
          </Button>
          <Button className="flex items-center font-semibold px-[11px] py-[8px] rounded-lg hover:bg-gray-100">
            엘리스 AI
            <DownSVG className="ml-2" />
          </Button>
        </div>
      </div>
      <div className="flex space-x-4">
        <Link href="/accounts/signin">
          <Button className="bg-gray-100 text-sm px-4 py-[9px] font-medium rounded-lg hover:bg-gray-200">
            로그인
          </Button>
        </Link>
        <Link href="/ko/contact">
          <Button className="bg-[#7354EA] text-sm text-white px-4 py-[9px] font-medium rounded-lg hover:bg-[#613DD6]">
            상담 요청
          </Button>
        </Link>
      </div>
    </header>
  );
}
