import BrandAnimation from "./molecules/BrandAnimation";
import BrandReverseAnimation from "./molecules/BrandReverseAnimation";

const BrandBox = () => {
  return (
    <div className="w-full h-[500px] py-[120px] justify-center items-center">
      <div className="text-black text-4xl font-extrabold text-center mb-[40px]">
        엘리스와 함께한 고객
      </div>
      <BrandAnimation />
      <BrandReverseAnimation />
    </div>
  );
};

export default BrandBox;
