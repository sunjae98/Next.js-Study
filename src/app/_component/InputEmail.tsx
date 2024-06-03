import Image from "next/image";

export default function InputEmail() {
  return (
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
  );
}
