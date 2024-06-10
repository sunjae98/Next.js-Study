import React from "react";
import Link from "next/link";
import MailSVG from "@/../public/svg/mail.svg";
import LockSVG from "@/../public/svg/lock.svg";
import LoginBtn from "./molecules/LoginBtn";

const SigninBox = () => {
  return (
    <div className="flex flex-col items-center justify-center h-full space-y-4">
      <img
        src="/icon/elice_logo.png"
        alt="logo"
        className="w-auto h-[46px] mb-10 mt-20"
        style={{ maxWidth: "343px" }} // 이미지의 최대 너비 설정
      />
      <div className="relative w-[343px]">
        {" "}
        {/* 너비 고정 */}
        <MailSVG className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 z-10" />
        <input
          type="email"
          id="email"
          placeholder="이메일"
          className="w-full px-3 py-4 border border-gray-400 rounded-md placeholder:font-normal pl-10 bg-[#fafafa]"
          style={{ fontSize: "13px" }}
        />
      </div>
      <div className="relative w-[343px]">
        {" "}
        {/* 너비 고정 */}
        <LockSVG className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 z-10" />
        <input
          type="password"
          id="password"
          placeholder="비밀번호"
          className="w-full px-3 py-4 border border-gray-400 rounded-md placeholder:font-normal pl-10 bg-[#fafafa]"
          style={{ fontSize: "13px" }}
        />
      </div>
      <div className="text-sm text-left text-[#7354EA]  w-[343px]">
        비밀번호를 잊어버리셨나요?
      </div>
      <div className="w-[343px]">
        <LoginBtn bgColor="#7354ea" textColor="white">
          로그인
        </LoginBtn>
        <LoginBtn
          bgColor="#FAE100"
          textColor="#343E4B"
          logo="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAACZ0lEQVR4nO2Zr0/DQBTHq7BgUCS9SynjH0C02cIMAoFCoxCTOP4BFJoEi5nDbAkKsyDm5mYWTMUUomYsmYX3rsdg6/rr1uu7AS/5JkvWu/tc793ru3eW9W+/wOqOc+Qzdu0x1vZt9uzZbAAag2ZS+Hsg/sNn4FlsQwZ84jjbvs2vEMhn/B3gPlSEbUUf0Bf2qR3c5/zQY/weBp2qQidOBvvEvmGM0sEbrrsHb6tTNnTKynRwzFLgYXlb8GYmVcHPBWPi2Mrgx667C530KgePT6SHLIXgcfmg4Ygc/nsSo9wu1WAHDjQKyKHjCpAt222imE0Nm6RxqjtVGWlUhYyr4Tm/oIbLPQlgjbsORahUFbAuuJLIY6ihiq4CMM8n4JkZdbIUCPg6500DYJSE7BYmUNQgqoIE8A7dp08Nsob6sALszQAQNQE7rsCMHERdM0vH4aTSCXibGUIjSRfa7E0MydGtASBKEmEUEqNTahBViQ/ZWa22tZGhFE5pP3IhfkMOVFALyZw8iYXUUAUUxk5msJkvDQDL9/Ztfr76VBbVNckBU8VYO/FM3GT7O7A5XskhkxUgY+IE0GRZxbzKRKHaUFTYMmklhoWrc9gA9sQTNTwyZLpNmsl7AIqMNYyVT1RNutRDdf7O2oVdJo9pDrMhJpal3Qssm8iZyj69QQ4GLvqIH1HsXwv4l+Upv8j7rq6HZwwsz2OSGCWKQ6zzI2x0RcVbWq6S0iwj4QsTP++mmBddna5467yrZcOVaSLFiPkvn5QW5nQbuseyr2uLFjoMz54SfLrWzSGViZSC8ZfMOypTTXuM/sv2CUL0dS1gcTFwAAAAAElFTkSuQmCC"
        >
          카카오로 로그인
        </LoginBtn>
        <LoginBtn
          bgColor="white"
          textColor="#343E4B"
          logo="https://cdn-front-door.elice.io/accounts/static/media/google.EOMUMwoHjh9KkTXD.svg"
        >
          구글로 로그인
        </LoginBtn>
        <div className="text-xs text-[#6E7987] mt-4 text-center">더보기</div>
        <div className="text-sm text-[#6E7987] mt-20 text-center">
          아직 계정이 없으신가요?
          <span>
            <Link
              href="/accounts/signup"
              className="text-[#7354EA] hover:underline"
            >
              회원가입
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
};

export default SigninBox;
