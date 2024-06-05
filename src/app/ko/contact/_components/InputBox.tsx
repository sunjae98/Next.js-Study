import React from "react";

interface ContentProps {
  className?: string;
  children: React.ReactNode;
}

const Content = ({ className, children }: ContentProps) => {
  return (
    <div className={`text-sm font-semibold text-[#343E4B] ${className || ""}`}>
      {children}
    </div>
  );
};

function InputBox() {
  return (
    <div className="w-[576px] h-full border-4 border-[#8C8DEB] rounded-3xl py-[56px] px-[40px]">
      <Content className="mb-2">
        회사 메일
        <span className="text-red-600 font-normal ml-0.5">*</span>
      </Content>
      <input
        type="email"
        id="email"
        placeholder="예) elice@company.com"
        className="w-full p-2 border border-[#C4C4C4] rounded-md placeholder:font-normal mb-6"
        style={{ fontSize: "16px" }}
      />
      <Content className="mb-2">휴대폰 번호</Content>
      <input
        type="tel"
        id="phone"
        placeholder="010-2000-0000"
        className="w-full p-2 border border-[#C4C4C4] rounded-md placeholder:font-normal mb-6"
        style={{ fontSize: "16px" }}
      />
      <Content className="mb-2">비즈니스 분야</Content>
      <select
        id="business-area"
        className="w-full p-2 border border-[#C4C4C4] rounded-md mb-6"
      >
        <option value="">비즈니스 분야를 선택하세요.</option>
        <option value="a">기업</option>
        <option value="b">중소기업 또는 스타트업</option>
        <option value="c">대학교</option>
        <option value="d">초중고</option>
        <option value="e">교육기관</option>
        <option value="f">공공기관</option>
        <option value="g">기타</option>
      </select>
      <Content className="mb-2">직군/직무</Content>
      <select
        id="job-role"
        className="w-full p-2 border border-[#C4C4C4] rounded-md mb-6"
      >
        <option value="">직군/직무를 선택하세요.</option>
        <option value="aa">경영진</option>
        <option value="bb">팀장</option>
        <option value="cc">팀원</option>
        <option value="cc">교육자</option>
        <option value="cc">학생</option>
        <option value="cc">기타</option>
      </select>
      <Content className="mb-2">예상 사용 인원</Content>
      <select
        id="expected-users"
        className="w-full p-2 border border-[#C4C4C4] rounded-md mb-6"
      >
        <option value="">1 - 100</option>
        <option value="1-10">1-100명</option>
        <option value="11-50">101-2000명</option>
        <option value="200+">2001명 이상</option>
      </select>
      <Content className="mb-2">기타 문의 내용</Content>
      <input
        type="text"
        id="other-inquiries"
        placeholder="도입 목적 및 기타 문의사항을 적어주세요."
        className="w-full p-2 border border-[#C4C4C4] rounded-md placeholder:font-normal mb-1"
        style={{ fontSize: "16px" }}
      />
      <div className="text-right text-xs mb-10">0/300</div>
      <div className="mb-4 flex flex-j">
        <input type="checkbox" id="consent" className="mr-2" />
        <div className="text-sm font-medium text-[#343E4B]">
          개인정보 수집 및 이용 동의
          <span className="text-red-600 font-normal ml-1">*</span>
        </div>
      </div>
      <div className="text-sm text-[#343E4B] mb-6">
        제출 버튼을 클릭하면 엘리스 그룹이 연락 목적으로 위 정보를 저장하고
        처리하는데 동의하는 것입니다. 당사의{" "}
        <span className="text-[#7353EA] underline">개인정보 처리방침</span>을
        읽어 보십시오.
      </div>
      <button className="w-full py-2 bg-[#7354EA] text-white text-sm rounded-md hover:bg-[#613DD6]">
        제출하기
      </button>
    </div>
  );
}

export default InputBox;
