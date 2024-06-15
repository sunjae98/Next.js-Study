import { ReactNode } from 'react';

export default function Layout({ children }: { children: ReactNode }) {
  return <main className='bg-black/5 w-full h-screen'>{children}</main>;
}
