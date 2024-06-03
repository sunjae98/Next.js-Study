import SubmitBtn from "@/app/_component/SubmitBtn";
import Link from "next/link";
import Image from "next/image";
import InputName from "@/app/_component/InputName";
import InputEmail from "@/app/_component/InputEmail";
import InputPw from "@/app/_component/InputPw";

export default function Page() {
  return (
    <main className="flex flex-col">
      <p className="text-xl font-bold mx-auto mb-8">계정을 생성하세요</p>
      <InputName />
      <InputEmail />
      <InputPw />
      <button className="text-sm mx-auto mb-7">
        영문, 숫자, 특수문자를 조합하여 8자 이상으로 구성해주세요.
      </button>
      <SubmitBtn text="회원가입" />
      <div className="flex mt-12 justify-center">
        <p className="text-sm m-0.5">이미 계정이 있으신가요?</p>
        <Link href="/accounts/signin">
          <button className="text-sm m-0.5 text-[#7353EA] hover:underline">
            로그인하기
          </button>
        </Link>
      </div>
    </main>
  );
}
