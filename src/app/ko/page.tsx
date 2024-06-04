import React from "react";
import Consulting from "./_component/Consulting";
import BrandAnimation from "./_component/BrandAnimation";
import BrandReverseAnimation from "./_component/BrandReverseAnimation";
import InfoBox from "./_component/InfoBox";

export default function Page() {
  return (
    <div>
      <Consulting />
      <BrandAnimation />
      <BrandReverseAnimation />
    </div>
  );
}
