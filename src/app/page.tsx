import Header from "@/app/_component/Header";
import Section1 from "@/app/_component/_section/Section1";
import Section2 from "@/app/_component/_section/Section2";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col justify-between">
      <Header />
      <Section1 />
      <Section2 />
    </main>
  );
}
