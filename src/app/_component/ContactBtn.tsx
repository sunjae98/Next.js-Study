interface NavProps {
  name: string;
  size: string;
}

export default function ContactBtn({ name, size }: NavProps) {
  return (
    <div
      className={`p-4 pl-6 pr-6 h-${size} text-sm text-white font-bold bg-pointColor rounded-lg flex justify-center items-center m-2`}
    >
      {name}
    </div>
  );
}
