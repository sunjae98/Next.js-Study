'use client';
import { animated, useSpring } from '@react-spring/web';
import Image from 'next/image';

const CompanyW = 192;
const CompanyNum = 3;
const gap = 6 * 4;
const List = (CompanyW + gap) * CompanyNum;

export function Company() {
  return (
    <div className=' flex'>
      <Image
        src={
          'https://elice.io/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Fgi40ur0nnzqe%2F4aRBrX3tIN8wyJUxy2qIO6%2F670bd3ed2080e37efcd661ca40c6564a%2Fsk_cnc.png&w=384&q=75'
        }
        alt='sk'
        width={192}
        height={80}
      />
      <Image
        src={
          'https://elice.io/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Fgi40ur0nnzqe%2F6zbyAjoYsQPRvVH9CpA8Jf%2Fc9dbe4f57020b5136a8431799c335a9d%2Fsamsung_sds.png&w=384&q=75'
        }
        alt='sk'
        width={192}
        height={80}
      />
      <Image
        src={
          'https://elice.io/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Fgi40ur0nnzqe%2F6zbyAjoYsQPRvVH9CpA8Jf%2Fc9dbe4f57020b5136a8431799c335a9d%2Fsamsung_sds.png&w=384&q=75'
        }
        alt='sk'
        width={192}
        height={80}
      />
    </div>
  );
}

export function SlideSection() {
  const from = '0px';
  const to = `-${List}px`;
  const spring = useSpring({
    from: { transform: `translateX(${from})` },
    to: { transform: `translateX(${to})` },
    loop: true,
    config: {
      duration: 70000,
    },
  });
  return (
    <animated.div className='flex w-full' style={spring}>
      <Company />
      <Company />
      <Company />
      <Company />
    </animated.div>
  );
}
