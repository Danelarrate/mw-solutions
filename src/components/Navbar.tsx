import Link from 'next/link'
import { Logo } from './Logo'
export const Navbar = () => {
  return (
    <nav className='px-2  fixed inline-flex justify-between items-center top-0 left-0 w-full h-20 navColor  z-20'>
      <div className='inline-flex'>
        <Logo
          classNameTop='topLogo'
          classNameBottom='botLogo'
          height={50}
          width={50}
        />
        <span className='self-center text-lg leading-4 font-semibold whitespace-nowrap text-inherit md:inline hidden'>
          Soluciones<br></br>de pintado
        </span>
      </div>
      <ul className='inline-flex gap-10 font-bold text-inherit'>
        <li className='text-inherit'>
          <Link className='text-inherit' href={'#Nosotros'}>
            Nosotros
          </Link>
        </li>
        <li className='text-inherit'>
          <Link className='text-inherit' href={'#Marcas'}>
            Marcas
          </Link>
        </li>
        <li className='text-inherit'>
          <Link className='text-inherit' href={'#Contacto'}>
            Contacto
          </Link>
        </li>
      </ul>
    </nav>
  )
}
