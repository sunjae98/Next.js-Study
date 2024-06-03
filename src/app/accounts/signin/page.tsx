import Image from "next/image";
import { MdLockOutline } from "react-icons/md";
import { MdOutlineEmail } from "react-icons/md";
import logo from "../../../../public/elice_logo.png";
import Inputarea from "./_componant/Inputarea";
import Link from "next/link";
import google from "@/../public/google.svg";
import kakao from "@/../public/kakao.png";

export default function signin() {
  return (
    <div className="bg-gray-100 w-[100vw] h-[100vh] py-16 px-4 ">
      <div className="mx-[445px]">
        <div className="flex flex-col items-center justify-center gap-y-4 ">
          <Image src={logo} alt="elice" height={48} className="mb-[2rem]" />
          <Inputarea />
          <Inputarea />
          <div className="w-[343px]">
            <Link
              href="/"
              className="text-violet-500 text-sm hover:underline hover:underline-offset-1"
            >
              비밀번호를 잃어버리셨나요?
            </Link>
          </div>
          <button className="w-[343px] h-[46px] bg-violet-600 rounded-lg text-white text-center">
            로그인
          </button>
        </div>
        <div className="flex items-center  justify-center my-4">
          <hr className="w-1/3" />
          <p className="mx-9 text-sm text-gray-500">또는</p>
          <hr className="w-1/3" />
        </div>
        <div className="flex flex-col items-center justify-center gap-y-2 text-xs">
          <button className="flex items-center px-5 justify-between w-[343px] h-[46px] text-sm font-semibold bg-yellow-300 rounded-lg text-center ">
            <Image src={kakao} alt="kakao" width={22} height={22} />
            <p className="w-[281px]">카카오로 로그인</p>
          </button>
          <button className="flex items-center px-5 justify-between w-[343px] h-[46px] text-sm font-semibold bg-white rounded-lg text-center ">
            <Image src={google} alt="google" width={22} height={22} />
            <p className="w-[281px]">구글로 로그인</p>
          </button>
          <p className="text-gray-500 mt-1">더보기</p>
        </div>
      </div>
    </div>
  );
}
