import Image from 'next/image';
import Link from 'next/link';

export default function Signin() {
  return (
    <div className=' w-full h-full flex items-center justify-center'>
      <div className=' w-full max-w-sm flex items-center flex-col'>
        <Link href={'/'}>
          <Image
            src={
              'https://cdn-front-door.elice.io/accounts/static/media/elice_logo.3da193278ac05deb.png'
            }
            alt='logo'
            width={154}
            height={46}
            className=' mb-12'
          />
        </Link>
        <div className=' w-full'>
          <form className='flex flex-col gap-4'>
            <input
              className=' rounded-lg px-3.5 text-sm py-4'
              placeholder='이메일'
            />
            <input
              className=' rounded-lg px-3.5 text-sm py-4'
              placeholder='비밀번호'
            />
            <button className=' bg-[#7353ea] rounded-[0.625rem] text-white py-3 font-bold text-base'>
              로그인
            </button>
          </form>

          <div className='flex items-center flex-1 text-[#6e7987] relative l text-center my-4'>
            <div className=' h-px bg-black/10 w-full' />
            <p className=' w-fit text-nowrap px-6'>또는</p>
            <div className=' h-px bg-black/10 w-full' />
          </div>

          <div className=' flex flex-col gap-2'>
            <button className=' bg-[#fae100] items-center justify-center flex relative rounded-[0.625rem] text-[#333333] py-3 font-bold text-base leading-7'>
              <Image
                className=' absolute left-6 '
                src={
                  'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAACZ0lEQVR4nO2Zr0/DQBTHq7BgUCS9SynjH0C02cIMAoFCoxCTOP4BFJoEi5nDbAkKsyDm5mYWTMUUomYsmYX3rsdg6/rr1uu7AS/5JkvWu/tc793ru3eW9W+/wOqOc+Qzdu0x1vZt9uzZbAAag2ZS+Hsg/sNn4FlsQwZ84jjbvs2vEMhn/B3gPlSEbUUf0Bf2qR3c5/zQY/weBp2qQidOBvvEvmGM0sEbrrsHb6tTNnTKynRwzFLgYXlb8GYmVcHPBWPi2Mrgx667C530KgePT6SHLIXgcfmg4Ygc/nsSo9wu1WAHDjQKyKHjCpAt222imE0Nm6RxqjtVGWlUhYyr4Tm/oIbLPQlgjbsORahUFbAuuJLIY6ihiq4CMM8n4JkZdbIUCPg6500DYJSE7BYmUNQgqoIE8A7dp08Nsob6sALszQAQNQE7rsCMHERdM0vH4aTSCXibGUIjSRfa7E0MydGtASBKEmEUEqNTahBViQ/ZWa22tZGhFE5pP3IhfkMOVFALyZw8iYXUUAUUxk5msJkvDQDL9/Ztfr76VBbVNckBU8VYO/FM3GT7O7A5XskhkxUgY+IE0GRZxbzKRKHaUFTYMmklhoWrc9gA9sQTNTwyZLpNmsl7AIqMNYyVT1RNutRDdf7O2oVdJo9pDrMhJpal3Qssm8iZyj69QQ4GLvqIH1HsXwv4l+Upv8j7rq6HZwwsz2OSGCWKQ6zzI2x0RcVbWq6S0iwj4QsTP++mmBddna5467yrZcOVaSLFiPkvn5QW5nQbuseyr2uLFjoMz54SfLrWzSGViZSC8ZfMOypTTXuM/sv2CUL0dS1gcTFwAAAAAElFTkSuQmCC'
                }
                alt='kakao'
                width={22}
                height={22}
              />
              카카오로 로그인
            </button>
            <button className=' bg-white rounded-[0.625rem] items-center justify-center flex relative text-[#333333] py-3 font-bold text-base leading-7'>
              <Image
                className=' absolute left-6 '
                src={
                  'https://cdn-front-door.elice.io/accounts/static/media/google.EOMUMwoHjh9KkTXD.svg'
                }
                alt='kakao'
                width={22}
                height={22}
              />
              구글로 로그인
            </button>
          </div>
        </div>

        <div className=' mt-16 gap-4 text-center'>
          <div className=' gap-1 flex items-center justify-center mb-4'>
            <p className='font-medium text-sm text-[#6e7987]'>
              아직 계정이 없으신가요?{' '}
            </p>
            <Link
              className=' text-[#7453ea] font-medium text-sm'
              href={'/accounts/signup/agreement'}
            >
              회원가입
            </Link>
          </div>
          <p className='font-medium text-sm text-[#6e7987]'>
            기관관리자 기관교육자로 회원 가입하려고 하시나요?
          </p>
          <div className='text-[#7453ea] font-semibold text-sm pt-1'>
            나문희
          </div>
        </div>
      </div>
    </div>
  );
}
