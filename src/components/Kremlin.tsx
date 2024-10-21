import Image from 'next/image'
import sames from '../public/sames.png'
export const Kremlin = () => {
  return (
    <div className='inline-flex justify-center items-baseline uppercase text-xl font-bold'>
      <span className=' translate-y-1/4'>
        <span className='animate-wiggle h-10 w-10 inline-block mx-1'>
          <Image src={sames} alt='sames logo' fill={true} />
        </span>
      </span>
      Sames
    </div>
  )
}
