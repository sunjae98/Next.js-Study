import KakaoLoginBtn from "@/app/_component/KakaoLoginBtn";
import SubmitBtn from "@/app/_component/SubmitBtn";
import Link from "next/link";

export default function Page() {
  return (
    <main className="flex flex-col">
      <p className="text-xl font-bold mx-auto mb-8">가입 방법을 선택하세요</p>
      <KakaoLoginBtn />
      <Link href="/accounts/signup/form">
        <SubmitBtn text="이메일로 가입하기" />
      </Link>
      <button className="text-[#6E7987] text-xs mx-auto mt-5">더보기</button>
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
