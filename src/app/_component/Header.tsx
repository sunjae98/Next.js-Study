import Image from "next/image";
import ContactBtn from "./ContactBtn";
import SigninBtn from "./SigninBtn";
import Navbar from "./Navbar";

export default function Header() {
  return (
    <div className="w-full h-16 bg-white justify-center items-center flex border-b border-solid border-gray-150 fixed top-0 left-0 z-10">
      <div className="w-[1280px] justify-between items-center flex border-none ">
        <div className="w-[600px] flex items-center">
          <div className="w-24 h-9 m-2 relative">
            <Image
              src="/elice_logo.webp"
              alt="page logo"
              layout="fill"
              objectFit="contain"
              priority
            />
          </div>
          <div className="m-4">
            <Navbar />
          </div>
        </div>
        <div className="flex">
          <SigninBtn />
          <ContactBtn name="상담 요청" size="9" />
        </div>
      </div>
    </div>
  );
}
