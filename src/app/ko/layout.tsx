import { ReactNode } from "react";
import Navbar from "@/app/_components/Navbar";

export default function layout({ children }: { children: ReactNode }) {
  return (
    <div>
      <Navbar />
      <div style={{ paddingTop: "64px" }}> {children}</div>
    </div>
  );
}
