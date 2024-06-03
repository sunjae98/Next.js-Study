"use client";
import { useState } from "react";
import { MdLockOutline } from "react-icons/md";
import { MdOutlineEmail } from "react-icons/md";

export type inputElement = {
  placeText: string;
  typeText: string;
};

export default function Inputarea() {
  const [isFocused, setIsFocused] = useState(false);
  return (
    <div className="flex items-center border border-gray-300 pl-[14px] pr-1 h-[52px] w-[343px] rounded-lg bg-white hover:border-black">
      <MdOutlineEmail className="w-5 h-5 opacity-50" />
      <input
        type="text"
        className="w-[309px] py-4 px-3 h-[48px] outline-none placeholder-small "
        placeholder="이메일"
      />
    </div>
  );
}
