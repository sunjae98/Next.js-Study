import Link from 'next/link';

export default function Agreement() {
  return (
    <>
      <h2 className=' font-bold text-xl break-all mb-8'>
        약관에 동의해 주세요
      </h2>

      <div className='w-full relative'>
        <form className='gap-4 flex flex-col'>
          <div className='bg-white w-full border border-solid rounded border-black/5 flex flex-col'>
            <div className='py-4 px-5 border-b border-solid border-black/5'>
              <label className='cursor-pointer gap-5 inline-flex items-center bg-transparent'>
                <input type='checkbox'></input>
                <span>모두 동의하기</span>
              </label>
            </div>
            <ul className=' p-5 '>
              <li className=' gap-4 flex'>
                <input type='checkbox'></input>
                <span>만 14세 이상입니다</span>
              </li>
            </ul>
          </div>
          <button className='bg-[#6666ff] text-sm font-semibold rounded-lg py-2 text-white disabled:text-black/25 disabled:bg-black/10'>
            동의하기
          </button>
        </form>
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
