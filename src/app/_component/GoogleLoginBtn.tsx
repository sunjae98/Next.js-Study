import Image from "next/image";

export default function GoogleLoginBtn() {
  return (
    <button className="flex bg-white p-5 w-80 h-11 rounded-lg font-bold text-sm items-center mb-2">
      <Image
        src="https://cdn-front-door.elice.io/accounts/static/media/google.EOMUMwoHjh9KkTXD.svg"
        alt="kakao"
        width={22}
        height={22}
      />
      <p className="mx-auto">구글로 로그인</p>
    </button>
  );
}
