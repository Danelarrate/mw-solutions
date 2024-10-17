import Link from 'next/link'
import { Logo } from './Logo'
export const Navbar = () => {
  return (
    <nav className='px-2  fixed inline-flex justify-between items-center top-0 left-0 w-full h-20 navColor text-white z-20'>
      <Logo classNameTop='top' classNameBottom='bot' height={50} width={50} />
      <ul className='inline-flex gap-10 font-bold navText'>
        <li>
          <Link href={'#Nosotros'}>Nosotros</Link>
        </li>
        <li>
          <Link href={'#Marcas'}>Marcas</Link>
        </li>
        <li>
          <Link href={'#Contacto'}>Contacto</Link>
        </li>
      </ul>
    </nav>
  )
}
