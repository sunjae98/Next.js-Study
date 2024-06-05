import Image from 'next/image';
import Link from 'next/link';

export default function Header() {
  return (
    <div className='w-full top-0 fixed justify-center items-center h-16 flex bg-white border-b border-solid border-black/5'>
      <div className='flex w-full justify-between max-w-7xl'>
        <Link href={'/'}>
          <Image
            src='https://elice.io/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Felice_logo.06b34994.png&w=256&q=75'
            alt='elice'
            width={95}
            height={28}
          />
        </Link>
        <div className=' flex gap-4 items-center'>
          <Link
            href={'/accounts/signin'}
            className=' text-sm font-medium text-black bg-[#f5f5f5] flex items-center py-1.5 px-4 rounded-lg h-10'
          >
            로그인
          </Link>
          <Link
            className=' text-sm font-medium text-white bg-[#7353ea] flex items-center py-1.5 px-4 rounded-lg h-10'
            href={'/contact'}
          >
            상담 요청
          </Link>
        </div>
      </div>
    </div>
  );
}
