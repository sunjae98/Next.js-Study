import { ReactNode } from 'react';
import Header from './components/Header';

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <Header />
      <main className='flex h-full flex-col items-center mt-16'>
        {children}
      </main>
    </>
  );
}
