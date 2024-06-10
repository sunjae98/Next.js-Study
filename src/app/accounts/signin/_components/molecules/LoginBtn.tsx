import React from "react";

interface LoginBtnProps {
  bgColor: string;
  textColor: string;
  logo?: string;
  children: React.ReactNode;
}

const LoginBtn = ({ bgColor, textColor, logo, children }: LoginBtnProps) => {
  return (
    <div
      className="flex items-center justify-center w-full px-[20px] py-[11px] rounded-lg mb-2"
      style={{ backgroundColor: bgColor, color: textColor }}
    >
      <div className="flex justify-between items-center w-full">
        {logo ? (
          <img src={logo} alt="Logo" className="w-6 h-6 mr-2" />
        ) : (
          <div className="w-6 h-6 mr-2"></div>
        )}
        <div className="flex-1 text-center font-semibold text-sm">
          {children}
        </div>
        <div className="w-6 h-6 mr-2"></div>
      </div>
    </div>
  );
};

export default LoginBtn;
