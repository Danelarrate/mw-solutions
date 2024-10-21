'use client'

import { ReactElement } from 'react'
import { Kremlin } from './Kremlin'
import { Graco } from './Graco'
import { Wagner } from './Wagner'

type Brand = {
  name: string
  logo: ReactElement
  description: string
}

const brands: Brand[] = [
  {
    name: 'Sames Kremlin',
    logo: <Kremlin />,
    description:
      'Representamos a esta compañía, líder mundial indiscutido en el sector si de productividad, calidad y ahorro de materiales se trata, siendo nuestra empresa sinónimo de Sames Kremlin en la industria metalmecánica y de la madera de la zona, habiendo vendido e instalado cientos de equipos de la marca.'
  },
  {
    name: 'Wagner',
    logo: <Wagner />,
    description:
      'WAGNER es uno de los proveedores líderes internacionales de sistemas y componentes para el tratamiento industrial de superficies con vasta experiencia en gran cantidad de áreas. Le ofrecemos la solución ideal para su área de aplicación individual, tanto si se trata de instalaciones completas como de componentes individuales'
  },
  {
    name: 'graco',
    logo: <Graco />,
    description:
      'Graco es el mayor fabricante en el mundo de equipos de pulverización de “primera calidad” para la aplicación de pinturas en la construcción. Posee la más amplia línea de productos del mercado para todas las aplicaciones y necesidades de los usuarios. En empresas, contratistas profesionales de la pintura, mantenimiento, para uso hobbysta.'
  }
]

export const Brands = () => {
  return (
    <section
      id='Marcas'
      className='w-full py-12 md:py-24 lg:py-32 bg-gray-100 flex justify-center'
    >
      <div className='container px-4 md:px-6'>
        <h2 className='text-3xl font-bold text-center mb-12 text-black'>
          Nuestras Marcas
        </h2>
        <div className='grid grid-cols-1 xl:grid-cols-3 md:grid-cols-2 gap-8 justify-items-center'>
          {brands.map((brand) => (
            <div
              key={brand.name}
              className='relative group items-center flex  w-full'
            >
              <div className='bg-white p-6 rounded-lg shadow-md transition-all duration-300 transform group-hover:scale-105 w-full flex items-center justify-center min-h-60'>
                {brand.logo}
              </div>

              <div className='absolute inset-0 rounded-lg flex items-center justify-center py-2 px-8 image-paint-brush'>
                <p className=' text-center text-sm'>{brand.description}</p>
              </div>

              <div className='sr-only'>{brand.description}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
