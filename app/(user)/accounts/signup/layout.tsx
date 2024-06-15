import Image from 'next/image';
import { ReactNode } from 'react';

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <main className='relative flex-1 w-full h-full'>
      <div className='flex w-full h-full'>
        <EliceDesc />
        <div className=' flex-1'>
          <div className=' flex flex-1 items-center h-full justify-center py-16 w-full'>
            <div className=' w-full max-w-[21rem] mx-auto flex flex-col justify-center h-full items-center'>
              {children}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

function EliceDesc() {
  return (
    <div className=' bg-[#6666ff] flex-1 flex flex-col items-center justify-center'>
      <Image
        src={
          'data:image/png;base64,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'
        }
        alt='logo'
        width={108}
        height={32}
        className=' mb-4'
      />
      <h6 className=' font-bold text-2xl text-white'>
        엘리스에서 Run it, Learn it
      </h6>
      <Image
        src={
          'https://cdn-front-door.elice.io/accounts/static/media/signup_run.02df36bb0dac45b7.png'
        }
        alt='rabbit'
        width={200}
        height={123}
        className=' mt-20'
      />
    </div>
  );
}
