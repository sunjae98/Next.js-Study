import React from "react";
import Consulting from "./_components/Consulting";
import BrandBox from "./_components/BrandBox";
import InfoBox from "./_components/molecules/InfoBox";
import VideoBox from "./_components/VideoBox";

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
