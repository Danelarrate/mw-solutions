import { Phone, Mail, MapPin } from 'lucide-react'
export const Contact = () => {
  return (
    <section id='Contacto' className='py-12 bg-black text-white'>
      <div className='container mx-auto px-4 md:px-6 '>
        <div className='flex flex-col md:flex-row justify-center gap-10 md:min-h-96  text-center '>
          {/* Left side - Contact Information */}
          <div className='md:w-fit mb-8 md:mb-0  w-fit   md:mx-0 mx-auto'>
            <h2 className='text-4xl font-bold mb-8  block  text-left'>
              CONTÁCTANOS
            </h2>
            <ul className='space-y-4 inline-flex flex-col md:justify-end'>
              <li className='inline-flex items-center'>
                <Phone className='mr-2 h-5 w-5 text-primary' />
                <span>+54 9 11 5606-0071</span>
              </li>
              <li className='inline-flex items-center'>
                <Phone className='mr-2 h-5 w-5 text-primary' />
                <span>+54 9 11 4067-4216</span>
              </li>
              <li className='inline-flex items-center'>
                <Mail className='mr-2 h-5 w-5 text-primary' />
                <span>mario.mwsoluciones@outlook.com</span>
              </li>
              <li className='inline-flex items-center'>
                <Mail className='mr-2 h-5 w-5 text-primary' />
                <span>juanignacio.mwsoluciones@outlook.com</span>
              </li>
              <li className='inline-flex items-center'>
                <MapPin className='mr-2 h-5 w-5 text-primary' />
                <span> Kiernan 2081 | Hurlingham</span>
              </li>
            </ul>
          </div>
          {/* Right side - Google Maps */}
          <div className='w-full md:w-1/2'>
            <div className='w-full h-full'>
              <iframe
                src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3284.135160952058!2d-58.636808358003385!3d-34.60074356490024!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcb92fe51d2a97%3A0xdefe30694140c223!2sKiernan%202081!5e0!3m2!1ses!2sar!4v1729294448365!5m2!1ses!2sar'
                width='100%'
                height='100%'
                style={{ border: 0 }}
                allowFullScreen={true}
                loading='lazy'
                referrerPolicy='no-referrer-when-downgrade'
                className='w-full h-full rounded-lg'
                title='Ubicación de la empresa'
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
