import Image from 'next/image';
import Link from 'next/link';

export default function Method() {
  return (
    <>
      <h2 className=' font-bold text-xl break-all mb-8'>
        가입 방법을 선택하세요
      </h2>

      <div className=' flex flex-col gap-2 w-full'>
        <button className='bg-[#fae100] flex text-base items-center justify-center relative font-semibold rounded-lg py-3 text-[#333333] disabled:text-black/25 disabled:bg-black/10'>
          <Image
            className=' absolute left-6 '
            src={
              'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAACZ0lEQVR4nO2Zr0/DQBTHq7BgUCS9SynjH0C02cIMAoFCoxCTOP4BFJoEi5nDbAkKsyDm5mYWTMUUomYsmYX3rsdg6/rr1uu7AS/5JkvWu/tc793ru3eW9W+/wOqOc+Qzdu0x1vZt9uzZbAAag2ZS+Hsg/sNn4FlsQwZ84jjbvs2vEMhn/B3gPlSEbUUf0Bf2qR3c5/zQY/weBp2qQidOBvvEvmGM0sEbrrsHb6tTNnTKynRwzFLgYXlb8GYmVcHPBWPi2Mrgx667C530KgePT6SHLIXgcfmg4Ygc/nsSo9wu1WAHDjQKyKHjCpAt222imE0Nm6RxqjtVGWlUhYyr4Tm/oIbLPQlgjbsORahUFbAuuJLIY6ihiq4CMM8n4JkZdbIUCPg6500DYJSE7BYmUNQgqoIE8A7dp08Nsob6sALszQAQNQE7rsCMHERdM0vH4aTSCXibGUIjSRfa7E0MydGtASBKEmEUEqNTahBViQ/ZWa22tZGhFE5pP3IhfkMOVFALyZw8iYXUUAUUxk5msJkvDQDL9/Ztfr76VBbVNckBU8VYO/FM3GT7O7A5XskhkxUgY+IE0GRZxbzKRKHaUFTYMmklhoWrc9gA9sQTNTwyZLpNmsl7AIqMNYyVT1RNutRDdf7O2oVdJo9pDrMhJpal3Qssm8iZyj69QQ4GLvqIH1HsXwv4l+Upv8j7rq6HZwwsz2OSGCWKQ6zzI2x0RcVbWq6S0iwj4QsTP++mmBddna5467yrZcOVaSLFiPkvn5QW5nQbuseyr2uLFjoMz54SfLrWzSGViZSC8ZfMOypTTXuM/sv2CUL0dS1gcTFwAAAAAElFTkSuQmCC'
            }
            alt='kakao'
            width={22}
            height={22}
          />
          카카오로 3초 만에 가입하기
        </button>
        <Link
          href={'/accounts/signup/form'}
          className=' font-semibold flex justify-center text-base bg-[#6666ff]  rounded-lg py-3 text-white disabled:text-black/25 disabled:bg-black/10'
        >
          이메일로 가입하기
        </Link>
      </div>

      <div className=' mt-16'>
        <p className=' text-sm font-medium gap-1'>
          이미 계정이 있으신가요?{' '}
          <Link className=' text-[#6666ff]' href={'/accounts/signin'}>
            로그인하기
          </Link>
        </p>
      </div>
    </>
  );
}
