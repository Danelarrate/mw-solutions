import { CheckCircle } from 'lucide-react'
import Image from 'next/image'
import cabincar from '../public/cabincar.jpg'
export const CabinSection = () => {
  return (
    <section className='py-12 bg-white'>
      <div className='container mx-auto px-4 md:px-6'>
        <div className='flex flex-col md:flex-row items-center'>
          {/* Left side - Image */}
          <div className='w-full bg-black md:w-1/2 mb-8 md:mb-0 relative'>
            <div className=' xl:h-[600px] md:h-96 w-full xl:absolute xl:top-[-330px] shadow-xl'>
              <Image
                src={cabincar}
                alt='Técnico en cabina de pintura'
                layout='fill'
                objectFit='cover'
                className='rounded-lg'
              />
            </div>
          </div>

          {/* Right side - Content */}
          <div className='w-full md:w-1/2 md:pl-12'>
            <h2 className='text-4xl font-bold text-primary mb-6'>
              CABINAS DE PINTURA
            </h2>
            <div className='space-y-4 text-gray-600'>
              <p>
                Realizamos instalaciones de Pintura en plantas de producción y
                espacios de trabajo.
              </p>
              <p>
                Asesoramos a nuestros clientes para que realicen una inversión
                adecuada acorde a sus necesidades y demandas. Nos enfocamos en
                optimizar sus resultados y sus procesos de trabajo.
              </p>
            </div>
            <ul className='mt-6 space-y-2'>
              {[
                'Cabinas para pintura líquida',
                'Cabinas para pintura en polvo',
                'Hornos estáticos y continuos',
                'Cabinas y equipos para plásticos',
                'Instalaciones personalizadas'
              ].map((item, index) => (
                <li key={index} className='flex items-center text-primary'>
                  <CheckCircle className='mr-2 h-5 w-5' />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <button className='mt-8 p-2 bg-primary bg-opacity-100 text-white hover:bg-opacity-100'>
              SOLICITA TU COTIZACIÓN
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
