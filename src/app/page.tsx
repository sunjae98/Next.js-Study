import { SlideSection } from './components/SlideSection';
import { VideoSection } from './components/VideoSection';

export default function Home() {
  return (
    <main className='flex h-full flex-col items-center pt-16'>
      <VideoSection />
      <SlideSection />
    </main>
  );
}
