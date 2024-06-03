import EmailLoginBtn from "@/app/_component/EmailLoginBtn";
import KakaoLoginBtn from "@/app/_component/KakaoLoginBtn";

export default function Page() {
  return (
    <main className="flex flex-col">
      <p className="text-xl font-bold mx-auto mb-8">가입 방법을 선택하세요</p>
      <KakaoLoginBtn />
      <EmailLoginBtn />
      <button className="text-[#6E7987] text-xs mx-auto mt-5">더보기</button>
      <div className="flex mt-12 justify-center">
        <p className="text-sm m-0.5">이미 계정이 있으신가요?</p>
        <button className="text-sm m-0.5 text-[#7353EA]">로그인하기</button>
      </div>
    </main>
  );
}
