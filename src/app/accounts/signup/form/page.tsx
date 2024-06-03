import SubmitBtn from "@/app/_component/SubmitBtn";
import Link from "next/link";
import Image from "next/image";

export default function Page() {
  return (
    <main className="flex flex-col">
      <p className="text-xl font-bold mx-auto mb-8">계정을 생성하세요</p>
      <div className="flex p-4 w-80 h-14 items-center bg-[#fafafa] border border-[#C0C0C0] rounded-xl mb-3">
        <Image
          className="mr-2"
          src="/name_icon.png"
          alt="name"
          width={24}
          height={24}
        />
        <input
          className="focus:outline-none focus:border-none bg-[#fafafa]"
          placeholder="이름"
        />
      </div>
      <div className="flex p-4 w-80 h-14 items-center bg-[#fafafa] border border-[#C0C0C0] rounded-xl mb-3">
        <Image
          className="mr-2"
          src="/email_icon.png"
          alt="name"
          width={24}
          height={24}
        />
        <input
          className="focus:outline-none focus:border-none bg-[#fafafa]"
          placeholder="이메일"
        />
      </div>
      <div className="flex p-4 w-80 h-14 items-center bg-[#fafafa] border border-[#C0C0C0] rounded-xl mb-3">
        <Image
          className="mr-2"
          src="/pw_icon.png"
          alt="name"
          width={24}
          height={24}
        />
        <input
          className="focus:outline-none focus:border-none bg-[#fafafa]"
          placeholder="비밀번호"
        />
      </div>
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
