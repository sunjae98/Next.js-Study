import React from "react";
import Consulting from "./_component/Consulting";
import BrandBox from "./_component/BrandBox";
import InfoBox from "./_component/molecules/InfoBox";
import VideoBox from "./_component/VideoBox";

export default function Page() {
  return (
    <div>
      <Consulting />
      <BrandBox />
      <InfoBox />
      <VideoBox />
    </div>
  );
}
