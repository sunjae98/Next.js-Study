import React from "react";
import Consulting from "./_components/Consulting";
import BrandBox from "./_components/BrandBox";
import InfoOrg from "./_components/InfoOrg";
import VideoBox from "./_components/VideoBox";

export default function Page() {
  return (
    <div>
      <Consulting />
      <BrandBox />
      <InfoOrg />
      <VideoBox />
    </div>
  );
}
