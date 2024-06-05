import InputBox from "./_components/InputBox";
import DataBox from "./_components/DataBox";

export default function Page() {
  return (
    <div className="flex items-center justify-center">
      <div className="flex flex-row justify-between mt-14">
        <div className="mr-14">
          <DataBox />
        </div>
        <div>
          <InputBox />
        </div>
      </div>
    </div>
  );
}
