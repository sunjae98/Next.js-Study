import { ReactNode } from "react";
import Navbar from "./_component/Navbar";

export default function layout({ children }: { children: ReactNode }) {
  return (
    <div>
      <Navbar />
      {children}
    </div>
  );
}
