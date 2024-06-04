import Image from 'next/image';
import TopScrollAnim from './components/js/TopScrollAnim';

export default async function Home(): Promise<JSX.Element> {
  return (
    <>
    <div className='fixed w-full top-0 left-0 z-[100] p-8'>
      <div className='relative h-[50px] w-full text-center'>
        <Image
          src="/logo-white.png"
          fill={true}
          alt="Picture of the author"
          className='w-full object-contain'
          />
      </div>
    </div>
      <TopScrollAnim />
    </>
  )
}