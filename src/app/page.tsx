import Header from "@/app/_component/Header";
import Section1 from "@/app/_component/_section/Section1";
import Section2 from "@/app/_component/_section/Section2";
import Section3 from "@/app/_component/_section/Section3";
import Section4 from "@/app/_component/_section/Section4";
import Section5 from "@/app/_component/_section/Section5";
import Section6 from "@/app/_component/_section/Section6";

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
        first_content="실습 위주의 학습 환경부터 효율적인 학생 관리 시스템까지,"
        second_content="학습자와 관리자 모두가 만족하는 차별화 된 학습 플랫폼을 만나 보세요."
        nav_text="엘리스LXP"
        img_src="/lxp_icon.webp"
      />
      <Section4
        tag="교육 콘텐츠 관리"
        first_title="1,000개 이상의 교육 콘텐츠로 구성하는​"
        second_title="우리 회사 맞춤 DX 과정"
        first_content="직무별 맞춤 교육부터 산업별 프로젝트 기반 교육, 데이터 분석 및 AI/ML 모델링까지."
        second_content="데이터 기반으로 끊임없이 진화하는 콘텐츠를 지금 바로 도입해 보세요."
        nav_text="엘리스라이브러리"
        img_src="/edu_icon.webp"
      />
      <Section5
        tag="디지털 역량 평가"
        first_title="개발자 채용부터 DX 역량 평가까지​"
        second_title="모두 하나의 플랫폼에서"
        first_content="국내 유수 기업의 DX 역량 평가를 진행하며 쌓아온 데이터를 기반으로"
        second_content="개발자 채용 평가, 재직자 역량 평가, 경진대회 등 다양한 테스트를 진행해 보세요."
        nav_text="엘리스테스트"
        img_src="/test_icon.webp"
      />
      <Section6
        tag="교육 콘텐츠 관리"
        first_title="1,000개 이상의 교육 콘텐츠로 구성하는​"
        second_title="우리 회사 맞춤 DX 과정"
        first_content="직무별 맞춤 교육부터 산업별 프로젝트 기반 교육, 데이터 분석 및 AI/ML 모델링까지."
        second_content="데이터 기반으로 끊임없이 진화하는 콘텐츠를 지금 바로 도입해 보세요."
        nav_text="엘리스클라우드"
        img_src="/cloud_icon.webp"
      />
    </main>
  );
}
