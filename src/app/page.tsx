import Header from "@/app/_component/Header";
import Section1 from "@/app/_component/_section/Section1";
import Section2 from "@/app/_component/_section/Section2";
import Section3 from "@/app/_component/_section/Section3";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col justify-between">
      <Header />
      <Section1 />
      <Section2 />
      <Section3
        tag="학습 경험 플랫폼"
        first_title="학습의 몰입도를 높이는"
        second_title="올인원 교육 플랫폼"
        first_content="실습 위주의 학습 환경부터 효율적인 학생 관리 시스템까지"
        second_content="학습자와 관리자 모두가 만족하는 차별화 된 학습 플랫폼을 만나 보세요"
        nav_text="엘리스LXP"
      />
    </main>
  );
}
