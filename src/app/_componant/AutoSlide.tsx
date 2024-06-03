"use client";
import samesung from "../../../public/samsung.webp";
import posco from "../../../public/posco.webp";
import lg from "../../../public/lg_ensol.webp";
import nc from "../../../public/nc.webp";
import Image from "next/image";

export default function AutoSlider() {
  return (
    <div className="mainSkill pb-16 relative overflow-hidden">
      <div className="flex flex-row mb-10 absolute animate-slider">
        <Image className="w-100 h-full mx-10" src={samesung} alt="h" />
        <Image className="w-100 h-full mr-10" src={posco} alt="c" />
        <Image className="w-100 h-full mr-10" src={lg} alt="j" />
        <Image className="w-100 h-full mr-10" src={nc} alt="r" />

        <Image className="w-100 h-full mx-10" src={samesung} alt="h" />
        <Image className="w-100 h-full mr-10" src={posco} alt="c" />
        <Image className="w-100 h-full mr-10" src={lg} alt="j" />
        <Image className="w-100 h-full mr-10" src={nc} alt="r" />
        <Image className="w-100 h-full mx-10" src={samesung} alt="h" />
        <Image className="w-100 h-full mr-10" src={posco} alt="c" />
      </div>
    </div>
  );
}
