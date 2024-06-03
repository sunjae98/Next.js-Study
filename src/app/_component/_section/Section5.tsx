import Image from "next/image";

interface TextProps {
  tag: string;
  first_title: string;
  second_title: string;
  first_content: string;
  second_content: string;
  nav_text: string;
  img_src: string;
}

export default function Section5({
  tag,
  first_title,
  second_title,
  first_content,
  second_content,
  nav_text,
  img_src,
}: TextProps) {
  return (
    <div className="w-full h-full flex justify-between items-center p-14">
      <div className="flex flex-1 p-8">
        <Image
          src="/suggestion_3.webp"
          alt="page logo"
          layout="responsive"
          objectFit="contain"
          width={100}
          height={100}
          className="rounded-3xl"
        />
      </div>
      <div className="flex flex-col flex-1 p-8">
        <div className="flex rounded-lg w-32 h-10 bg-[#EEEAFE] justify-center items-center text-[#3539DF] font-bold">
          {tag}
        </div>
        <h2 className="flex text-4xl font-bold mt-3 mb-3">
          {first_title}
          <br />
          {second_title}
        </h2>
        <p className="flex text-[#4E5968]">
          {first_content}
          <br />
          {second_content}
        </p>
        <div className="flex w-full h-20 rounded-2xl bg-[#FAFAFA] justify-between mt-10 p-4">
          <div className="flex">
            <Image
              src={img_src}
              alt="page logo"
              layout="intrinsic"
              width={48}
              height={20}
              className="rounded-xl"
            />
            <p className="flex font-bold text-lg w-24 justify-center items-center ml-2">
              {nav_text}
            </p>
          </div>
          <div className="flex justify-center items-center">
            <svg
              focusable="false"
              aria-hidden="true"
              viewBox="0 0 24 24"
              data-testid="NavigateNextIcon"
              width="38"
              height="38"
            >
              <path d="M10 6 8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"></path>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}
