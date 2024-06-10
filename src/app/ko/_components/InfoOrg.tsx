import React from "react";
import InfoBox from "./InfoBox";

const InfoOrg = () => {
  return (
    <div className="px-[116px] w-screen">
      <InfoBox
        labelText="학습 경험 플랫폼"
        bgColor="#EEEAFE"
        textColor="#7353EA"
        title={
          <span>
            학습의 몰입도를 높이는
            <br />
            올인원 교육 플랫폼
          </span>
        }
        subTitle={
          <span>
            실습 위주의 학습 환경부터 효율적인 학생 관리 시스템까지,
            <br />
            학습자와 관리자 모두가 만족하는 차별화 된 학습 플랫폼을 만나 보세요.
          </span>
        }
        imgUrl="https://elice.io/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fsuggestion_1_desktop.11d03eb8.png&w=1200&q=75"
        extraImgUrl="https://elice.io/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flxp_icon.d1d8ac60.png&w=128&q=75"
        extraImgText="엘리스LXP"
        layoutIndex={0}
      />
      <InfoBox
        labelText="교육 콘텐츠 관리"
        bgColor="#E7F8F9"
        textColor="#00BCD4"
        title={
          <span>
            1,000개 이상의 교육 콘텐츠로 구성하는
            <br />
            우리 회사 맞춤 DX 과정
          </span>
        }
        subTitle={
          <span>
            직무별 맞춤 교육부터 산업별 프로젝트 기반 교육, 데이터 분석 및 AI/ML
            모델링까지.
            <br />
            데이터 기반으로 끊임없이 진화하는 콘텐츠를 지금 바로 도입해 보세요.
          </span>
        }
        imgUrl="https://elice.io/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fsuggestion_2_desktop.fd729d25.png&w=1920&q=75"
        extraImgUrl="https://elice.io/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fedu_icon.451de98a.png&w=128&q=75"
        extraImgText="엘리스라이브러리"
        layoutIndex={1}
      />
      <InfoBox
        labelText="디자인 역량 평가"
        bgColor="#E9E9FD"
        textColor="#3539DF"
        title={
          <span>
            개발자 채용부터 DX 역량 평가까지
            <br />
            모두 하나의 플랫폼에서
          </span>
        }
        subTitle={
          <span>
            국내 유수 기업의 DX 역량 평가를 진행하며 쌓아온 데이터를 기반으로
            <br />
            개발자 채용 평가, 재직자 역량 평가, 경진대회 등 다양한 테스트를
            진행해 보세요.
          </span>
        }
        imgUrl="https://elice.io/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fsuggestion_3_desktop.e1b0b33d.png&w=1920&q=75"
        extraImgUrl="https://elice.io/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ftest_icon.0dfd2fca.png&w=128&q=75"
        extraImgText="엘리스테스트"
        layoutIndex={0}
      />
      <InfoBox
        labelText="학습용 클라우드 서비스"
        bgColor="#E1F5FE"
        textColor="#049BE5"
        title={
          <span>
            학습에 최적화된
            <br />
            가장 간편한 GPU 클라우드
          </span>
        }
        subTitle={
          <span>
            원하는 만큼의 GPU 자원을 실시간으로 유연하게 할당받으세요.
            <br />
            AI 학습과 연구부터 수천 명 규모의 머신러닝 경진대회까지 안정적으로
            지원합니다.
          </span>
        }
        imgUrl="https://elice.io/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fsuggestion_4_desktop.17b0a00c.png&w=1920&q=75"
        extraImgUrl="https://elice.io/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fcloud_icon.94151152.png&w=128&q=75"
        extraImgText="엘리스클라우드"
        layoutIndex={1}
      />
    </div>
  );
};

export default InfoOrg;
