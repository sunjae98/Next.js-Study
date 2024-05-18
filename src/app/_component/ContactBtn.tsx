interface NavProps {
  name: string;
}

export default function ContactBtn({ name }: NavProps) {
  return (
    <div className="w-20 h-9 text-sm text-white font-bold bg-pointColor rounded-lg flex justify-center items-center  m-2">
      {name}
    </div>
  );
}
