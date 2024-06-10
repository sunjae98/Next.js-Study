import { ReactNode } from "react";

export default function layout({ children }: { children: ReactNode }) {
  return (
    <>
      <div className="h-screen bg-[#f5f5f5]"> {children}</div>
    </>
  );
}
