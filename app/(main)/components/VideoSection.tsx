import Link from 'next/link';

export function VideoSection() {
  return (
    <section className='relative w-full h-[30rem]'>
      <video
        className='absolute w-full h-full object-cover  block'
        autoPlay
        loop
        muted
        poster='/images/entry/first-section/thumbnail-1920x1080.webp'
        preload='metadata'
      >
        <source src='/videos/entry/thumbnail.webm' type='video/webm'></source>
        <source
          src='https://cdn-front-door.elice.io/landing/static/video/elice_landing_0120.mp4'
          type='video/mp4'
        ></source>
      </video>
      <div className='z-10 relative h-full items-center justify-center flex flex-col'>
        <h1 className=' font-bold text-6xl text-center  '>
          <span className='bg-gradient-to-r from-[#191F28] bg-clip-text from-[20%] to-[80%] text-transparent to-[#7C7C7C]'>
            디지털 전환을 위한
          </span>
          <br />
          <span className='bg-gradient-to-r from-[#6700E6] bg-clip-text from-[20%] to-[80%] text-transparent to-[#B67BFF]'>
            올인원 솔루션
          </span>
        </h1>
        <p className=' text-lg font-bold leading-5 text-[#343e4b] mt-4 text-center break-all'>
          엘리스에서는 교육, 평가, 데이터까지​ DX에 필요한 모든 솔루션을
          제공합니다.
        </p>
        <Link
          href={'/contact'}
          className=' bg-[#7353ea] mt-4 text-lg text-white rounded-lg py-3 px-5 font-bold'
        >
          상담 요청하기
        </Link>
      </div>
    </section>
  );
}
