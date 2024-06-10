"use client";
import React, { useState } from "react";
import LargeBtn from "./../../signin/_components/molecules/LargeBtn";

const AgreeBox = () => {
  const [isTermsAgreed, setIsTermsAgreed] = useState(false);
  const [isPrivacyAgreed, setIsPrivacyAgreed] = useState(false);

  const handleTermsChange = (event: any) => {
    setIsTermsAgreed(event.target.checked);
  };

  const handlePrivacyChange = (event: any) => {
    setIsPrivacyAgreed(event.target.checked);
  };

  const isButtonDisabled = !isTermsAgreed || !isPrivacyAgreed;

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 py-12">
      <div className="font-bold text-xl mb-4">약관에 동의해 주세요</div>
      <div className="bg-white p-4 w-[340px] rounded-md shadow mb-2">
        <label className="flex items-center space-x-2 cursor-pointer">
          <input
            type="checkbox"
            className="form-checkbox h-5 w-5 text-purple-600"
          />
          <span className="text-gray-700">모두 동의합니다.</span>
        </label>
      </div>
      <div className="bg-white p-4 w-[340px] rounded-md shadow">
        <label className="block mb-2 cursor-pointer">
          <input
            type="checkbox"
            className="form-checkbox h-5 w-5 text-purple-600 mr-2"
          />
          만 14세 이상입니다.
        </label>
        <label className="block mb-2 cursor-pointer">
          <input
            type="checkbox"
            className="form-checkbox h-5 w-5 text-purple-600 mr-2"
            checked={isTermsAgreed}
            onChange={handleTermsChange}
          />
          이용약관 동의
        </label>
        <label className="block mb-2 cursor-pointer">
          <input
            type="checkbox"
            className="form-checkbox h-5 w-5 text-purple-600 mr-2"
            checked={isPrivacyAgreed}
            onChange={handlePrivacyChange}
          />
          개인정보 수집 및 이용에 관한 동의
        </label>
        <label className="block cursor-pointer">
          <input
            type="checkbox"
            className="form-checkbox h-5 w-5 text-purple-600 mr-2"
          />
          광고 전송 및 권유에 관한 선택적 동의
        </label>
      </div>
      <div className="w-[340px] mt-4">
        <LargeBtn
          bgColor={isButtonDisabled ? "#ccc" : "#7354ea"} // 조건에 따라 버튼 색상 변경
          textColor="white"
          disabled={isButtonDisabled}
        >
          동의하기
        </LargeBtn>
      </div>
    </div>
  );
};

export default AgreeBox;
