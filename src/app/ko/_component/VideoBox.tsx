import React from "react";
import PlaySVG from "@/../public/svg/playbtn.svg";

const VideoBox = () => {
  return (
    <div className="relative w-full h-[923px] overflow-hidden">
      <video
        src="https://cdn-front-door.elice.io/landing/static/video/elice_background.mp4"
        autoPlay
        muted
        loop
        playsInline
        controls={false}
        className="w-full h-full object-cover"
      />
      <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center">
        <div className="text-white text-4xl font-extrabold text-center mb-6">
          엘리스를 경험한 고객의 이야기
        </div>
        <div className="flex flex-row items-center border p-1 rounded-3xl">
          <PlaySVG className="w-[24px] h-[24px]" />
          <div className="text-white font-light text-xs mr-2">Play video</div>
        </div>
      </div>
    </div>
  );
};

export default VideoBox;
