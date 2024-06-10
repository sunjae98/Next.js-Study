import React from "react";
import mailSVG from "@/../public/svg/mail.svg";
import lockSVG from "@/../public/svg/lock.svg";

const SigninBox = () => {
  return (
    <div className="flex flex-col items-center justify-center h-full">
      <img
        src="/icon/elice_logo.png"
        alt="logo"
        className="w-auto h-[46px] mb-6 mt-16" // Tailwind에서 mt-[64px]를 mt-16로 변경
      />
      <input
        type="email"
        id="email"
        placeholder="예) elice@company.com"
        className="w-full max-w-xs px-4 py-3 border border-gray-400 rounded-md placeholder:font-normal bg-no-repeat bg-[url('/svg/mail.svg')] bg-left-center pl-10 mb-4"
        style={{ fontSize: "16px" }} // Tailwind에서 fontSize 조정은 인라인으로 유지
      />
      <input
        type="password"
        id="password"
        placeholder="비밀번호"
        className="w-full max-w-xs px-4 py-3 border border-gray-400 rounded-md placeholder:font-normal bg-no-repeat bg-[url('/svg/lock.svg')] bg-left-center pl-10"
        style={{ fontSize: "16px" }} // Tailwind에서 fontSize 조정은 인라인으로 유지
      />
    </div>
  );
};

export default SigninBox;
