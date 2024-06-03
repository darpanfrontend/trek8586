import Image from 'next/image';
import TopScrollAnim from './components/js/TopScrollAnim';

export default async function Home(): Promise<JSX.Element> {
  return (
    <>
      <TopScrollAnim />
    </>
  )
}