import Image from 'next/image';
import Link from 'next/link';

export default function Header() {
  return (
    <div className='w-full top-0 fixed justify-center flex bg-white border-b border-solid border-black/5'>
      <div className='flex w-full justify-between px-5 py-4 max-w-5xl'>
        <Link href={'/'}>
          <Image
            src='https://elice.io/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Felice_logo.06b34994.png&w=256&q=75'
            alt='elice'
            width={95}
            height={28}
          />
        </Link>
        <Link
          className=' text-sm font-medium text-white bg-[#7353ea] flex items-center py-1 px-2.5 rounded-lg'
          href={'/contact'}
        >
          상담 요청
        </Link>
      </div>
    </div>
  );
}
