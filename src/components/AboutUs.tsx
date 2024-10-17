import { CheckCircle } from 'lucide-react'
import Image from 'next/image'
import venta from '../public/venta.webp'
export const AboutUs = () => {
  return (
    <section id='Nosotros' className='py-12 bg-white'>
      <div className='container mx-auto px-4 md:px-6'>
        <div className='flex flex-col md:flex-row items-center'>
          {/* Left side - Image */}
          <div className='w-full md:w-1/2 mb-8 md:mb-0'>
            <div className='relative h-[400px] w-full'>
              <Image
                src={venta}
                alt='Técnico aplicando pintura'
                layout='fill'
                objectFit='cover'
                className='rounded-lg'
              />
            </div>
          </div>

          {/* Right side - Content */}
          <div className='w-full md:w-1/2 md:pl-12'>
            <h2 className='text-4xl font-bold text-primary mb-6'>CONÓCENOS</h2>
            <div className='space-y-4 text-gray-600'>
              <p>
                Nuestra pasión por la venta de máquinas de pintura nació hace 25
                años siendo asesores técnicos en las firmas más prestigiosas del
                rubro.
              </p>
              <p>
                Conocemos el mercado, las opciones, tecnologías e instalaciones
                de pintado en todos sus aspectos.
              </p>
              <p>
                Hoy nos encontramos con el desafío de potenciar este novedoso
                proyecto, siendo distribuidores Oficiales de firmas con gran
                trayectoria a nivel mundial, además de ofrecer asesoramiento
                integral y fabricación de instalaciones de pintado tanto en
                pintura líquida como en polvo.
              </p>
            </div>
            <ul className='mt-6 space-y-2'>
              {[
                'Repuestos oficiales',
                'Servicio técnico',
                'Instalaciones & mantenimiento'
              ].map((item, index) => (
                <li key={index} className='flex items-center text-primary'>
                  <CheckCircle className='mr-2 h-5 w-5' />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
