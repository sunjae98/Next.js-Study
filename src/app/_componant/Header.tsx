import Image from "next/image";
import elice_logo from "../../../public/elice_logo.png";
import HeaderButton from "./HeaderButton";
import Link from "next/link";
export default function Header() {
  return (
    <div className="fixed w-full z-50 bg-white flex justify-between items-center h-16 px-6 outline-double outline-1 outline-gray-200 ">
      <Image
        src={elice_logo}
        alt="logo"
        width={95}
        height={28}
        className="mr-6"
      />
      <HeaderButton>제품</HeaderButton>
      <HeaderButton>솔루션</HeaderButton>
      <HeaderButton>리소스</HeaderButton>
      <HeaderButton>엘리스 AI</HeaderButton>
      <div className="ml-auto">
        <Link href="/accounts/signin">
          <button
            type="button"
            className="min-w-16 bg-login-button-color text-sm/[28px] font-semibold py-[6px] px-4 height-[38px] rounded-md mr-4 hover:bg-gray-200"
          >
            로그인
          </button>
        </Link>
        <button
          type="button"
          className="min-w-16 text-white text-sm/[28px] font-semibold py-[6px] px-4 height-[38px] bg-elice-pubble rounded-md hover:bg-violet-600"
        >
          상담 요청
        </button>
      </div>
    </div>
  );
}
