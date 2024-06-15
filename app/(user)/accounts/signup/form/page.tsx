import Link from 'next/link';

export default function Form() {
  return (
    <>
      <h2 className=' font-bold text-xl break-all mb-8'>계정을 생성하세요</h2>

      <div className=' flex flex-col gap-2 w-full'></div>

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
