import Header from "@/app/_component/Header";
import Image from "next/image";
import { faker } from "@faker-js/faker";
import SubmitBtn from "@/app/_component/SubmitBtn";

export default function Page() {
  const images = Array.from({ length: 3 }, (_, index) => ({
    id: index,
    src: faker.image.urlLoremFlickr(),
    alt: faker.lorem.word(),
  }));
  return (
    <>
      <Header />
      <main className="flex justify-center">
        <div className="flex w-[1260px] h-dvh">
          <div className="flex flex-1 flex-col justify-between mt-28 m-4 ">
            <div className="mb-10">
              <h2 className="text-4xl font-bold mb-2">영업팀 문의</h2>
              <p className="mb-8">
                몇가지 정보를 입력해 주시면 엘리스 담당자가 연락을 드리겠습니다
              </p>
              <div className="flex flex-col m-6">
                <p className="flex font-bold">학습 플랫폼</p>
                <p className="flex">
                  코딩 실습, 화상 강의 솔루션, 진도율 관리까지. 디지털 교육의
                  모든 것을 하나의 플<br />
                  랫폼으로 해결하세요.
                </p>
              </div>
              <div className="flex flex-col m-6">
                <p className="flex font-bold">교육 컨텐츠</p>
                <p className="flex">
                  1,000개 이상의 교육 콘텐츠를 보유한 엘리스라이브러리로 교육을
                  운영해 보세요.
                </p>
              </div>
              <div className="flex flex-col m-6">
                <p className="flex font-bold">GPU 클라우드</p>
                <p className="flex">
                  사용한 만큼 과금되는 GPU 클라우드로 AI 학습과 연구에 필요한
                  자원을 유연하게.
                  <br />
                  관리해 보세요
                </p>
              </div>
            </div>
            <div className="flex">
              <div className="mb-10">
                <p className="text-3xl font-bold mb-2">엘리스와 함께한 고객</p>
                <div className="flex w-20 gap-2 m-1">
                  {images.map((image) => (
                    <div className="flex-shrink-0" key={image.id}>
                      <Image
                        src={image.src}
                        alt={image.alt}
                        width={150}
                        height={80}
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-1 flex-col justify-center mt-28 border-4 border-[#7353EA] m-4 rounded-3xl p-3">
            <div className="flex flex-col">
              <p className="font-bold mb-1">회사 메일</p>
              <input
                placeholder="예) elice@company.com"
                className="flex p-4 h-10 items-center border border-[#C0C0C0] rounded-lg mb-3"
              ></input>
            </div>
            <div className="flex flex-col">
              <p className="font-bold mb-1">휴대폰 번호</p>
              <input
                placeholder="예) elice@company.com"
                className="flex p-4 h-10 items-center border border-[#C0C0C0] rounded-lg mb-3"
              ></input>
            </div>
            <div className="flex flex-col">
              <p className="font-bold mb-1">비즈니스 분야</p>
              <input
                placeholder="비즈니스 분야를 선택하세요"
                className="flex p-4 h-10 items-center border border-[#C0C0C0] rounded-lg mb-3"
              ></input>
            </div>
            <div className="flex flex-col">
              <p className="font-bold mb-1">직군/직무</p>
              <input
                placeholder="직군/직무를 선택하세요."
                className="flex p-4 h-10 items-center border border-[#C0C0C0] rounded-lg mb-3"
              ></input>
            </div>
            <div className="flex flex-col">
              <p className="font-bold mb-1">예상 사용 인원</p>
              <input
                placeholder="1 - 100"
                className="flex p-4 h-10 items-center border border-[#C0C0C0] rounded-lg mb-3"
              ></input>
            </div>
            <div className="flex flex-col">
              <p className="font-bold mb-1">기타 문의 내용</p>
              <input
                placeholder="도입 목적 및 기타 문의사항을 적어주세요."
                className="flex p-4 h-10 items-center border border-[#C0C0C0] rounded-lg mb-3"
              ></input>
            </div>
            <div className="flex items-center mt-10 mb-2">
              <input type="checkbox" className="flex ml-2" />
              <p className="flex text-sm ml-2">개인정보 수집 및 이용 동의</p>
            </div>
            <p className="flex text-sm m-2 mb-4">
              제출 버튼을 클릭하면 엘리스 그룹이 연락 목적으로 위 정보를
              저장하고 처리하는데 동의
              <br />
              하는 것입니다. 당사의 개인정보 처리방침을 읽어 보십시오.
            </p>
            <div className="flex mx-auto">
              <SubmitBtn text="제출하기" />
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
