import { Cog, Drill, Settings, Wrench } from 'lucide-react'

export const WhyUs = () => {
  const services = [
    {
      icon: <Settings className='size-16 ' />,
      title: 'Repuestos oficiales',
      description:
        'Disponemos de repuestos originales para mantener tus equipos funcionando al 100%.'
    },
    {
      icon: <Wrench className='size-16 ' />,
      title: 'Servicio técnico',
      description: 'Soporte especializado para reparar y optimizar tus equipos.'
    },
    {
      icon: <Drill className='size-16 ' />,
      title: 'Instalaciones',
      description:
        'Instalaciones profesionales que garantizan un rendimiento óptimo.'
    },
    {
      icon: <Cog className='size-16 ' />,
      title: 'Mantenimiento',
      description:
        'Mantenimiento preventivo para extender la vida útil de tus equipos.'
    }
  ]
  return (
    <section className='py-16 bg-[#F5F2F0] shadow-top-primary z-10'>
      <div className='container mx-auto px-4'>
        <h2 className='text-3xl font-bold text-center mb-12 text-[#967F71]'>
          Nuestros Servicios
        </h2>
        <div className='grid grid-cols-1 xl:grid-cols-4 md:grid-cols-2 justify-items-center gap-8 m-auto'>
          {services.map((service, index) => (
            <div
              key={index}
              className='bg-white aspect-square max-h-[300px] flex justify-center items-center  p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300'
            >
              <div className='flex flex-col items-center text-center'>
                <div className='text-[#967F71] mb-4'>{service.icon}</div>
                <h3 className='text-xl font-semibold mb-2 text-[#6B5B4F]'>
                  {service.title}
                </h3>
                <p className='text-[#8C7A6B]'>{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
