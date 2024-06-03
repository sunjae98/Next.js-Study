import kakao from "@/../public/kakao.png";
import Image from "next/image";
export default function SocialLoginButton() {
  return (
    <button className="flex items-center px-5 justify-between w-[343px] h-[46px] text-sm font-medium bg-yellow-300 rounded-lg text-center ">
      <Image src={kakao} alt="kakao" width={22} height={22} />
      <p className="w-[281px]">카카오로 로그인</p>
    </button>
  );
}
