import GoogleLoginBtn from "@/app/_component/GoogleLoginBtn";
import InputEmail from "@/app/_component/InputEmail";
import InputPw from "@/app/_component/InputPw";
import KakaoLoginBtn from "@/app/_component/KakaoLoginBtn";
import SubmitBtn from "@/app/_component/SubmitBtn";
import Image from "next/image";
import Link from "next/link";

export default function Page() {
  return (
    <main className="h-dvh bg-[#F5F5F5] flex flex-col justify-center items-center">
      <div className="flex flex-col h-5/6">
        <Image
          src="/elice_logo.webp"
          alt="page logo"
          width={150}
          height={100}
          className="flex mx-auto mb-10"
        />
        <InputEmail />
        <InputPw />
        <Link href="/accounts/signin">
          <button className="text-sm m-0.5 text-[#7353EA] hover:underline mb-3">
            비밀번호를 잊어버리셨나요?
          </button>
        </Link>
        <SubmitBtn text="로그인" />
        <div className="flex mt-4 mb-4 justify-center items-center">
          <span className="w-32 border" />
          <p className="text-[#6E7987] text-xs ml-4 mr-4">또는</p>
          <span className="w-32 border" />
        </div>
        <KakaoLoginBtn />
        <GoogleLoginBtn />
        <button className="text-[#6E7987] text-xs mx-auto mt-3">더보기</button>
        <div className="flex mt-14 justify-center">
          <p className="text-sm m-0.5 text-[#6E7987]">
            아직 계정이 없으신가요?
          </p>
          <Link href="/accounts/signup/method">
            <button className="text-sm m-0.5 text-[#7353EA] hover:underline">
              회원가입
            </button>
          </Link>
        </div>
        <p className="text-sm m-0.5 text-[#6E7987] mt-3">
          기관관리자 ・ 기관교육자로 회원 가입하려고 하시나요?
        </p>
        <button className="text-sm m-0.5 text-[#7353EA] hover:underline">
          문의하기
        </button>
      </div>
    </main>
  );
}
