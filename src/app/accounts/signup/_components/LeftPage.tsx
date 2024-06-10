import React from "react";

const LeftPage = () => {
  return (
    <div className="flex items-center justify-center w-full h-screen bg-[#7353EA]">
      <div className="text-center">
        <div className="text-white font-md text-xl mb-4">{"/*elice*/"}</div>
        <div className="text-white font-semibold text-2xl mb-10">
          엘리스에서 Run it, Learn it
        </div>
        <img
          src="https://cdn-front-door.elice.io/accounts/static/media/signup_run.02df36bb0dac45b7.png"
          alt="run"
          className="w-[200px] h-auto mx-auto"
        />
      </div>
    </div>
  );
};

export default LeftPage;
