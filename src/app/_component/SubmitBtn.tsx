interface TextProps {
  text: string;
}

export default function SubmitBtn({ text }: TextProps) {
  return (
    <button className="flex bg-pointColor hover:bg-hoverColor text-white p-5 w-80 h-11 rounded-lg font-bold text-sm items-center mt-2 transition duration-300">
      <p className="mx-auto">{text}</p>
    </button>
  );
}
