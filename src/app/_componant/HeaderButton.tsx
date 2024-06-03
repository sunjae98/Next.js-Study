"use client";
import { useState } from "react";
import { FaAngleUp } from "react-icons/fa";
import { FaAngleDown } from "react-icons/fa6";

export default function HeaderButton({
  children,
}: {
  children: React.ReactNode;
}) {
  const [click, setClick] = useState(false);
  const clickbutton = () => {
    setClick(!click);
  };
  return (
    <button
      type="button"
      onClick={clickbutton}
      className="flex gap-3 items-center min-w-16 py-2 px-[11px] text-[1rem]/[28px] font-bold text-button-header rounded-md hover:bg-gray-100"
    >
      {children}
      {click ? <FaAngleUp /> : <FaAngleDown />}
    </button>
  );
}
