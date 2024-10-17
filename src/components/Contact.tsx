import { Phone, Mail, MapPin } from 'lucide-react'
export const Contact = () => {
  return (
    <section id='Contacto' className='py-12 bg-black text-white'>
      <div className='container mx-auto px-4 md:px-6 '>
        <div className='flex flex-col md:flex-row justify-center gap-10 md:min-h-96  text-center '>
          {/* Left side - Contact Information */}
          <div className='md:w-fit mb-8 md:mb-0  w-fit   md:mx-0 mx-auto'>
            <h2 className='text-4xl font-bold mb-8  block '>CONTÁCTANOS</h2>
            <ul className='space-y-4 inline-flex flex-col md:justify-end'>
              <li className='inline-flex items-center'>
                <Phone className='mr-2 h-5 w-5 text-primary' />
                <span>+54 911 3373-7606</span>
              </li>
              <li className='inline-flex items-center'>
                <Phone className='mr-2 h-5 w-5 text-primary' />
                <span>+54 911 5606-0071</span>
              </li>
              <li className='inline-flex items-center'>
                <Mail className='mr-2 h-5 w-5 text-primary' />
                <span>info@twinspaint.com.ar</span>
              </li>
              <li className='inline-flex items-center'>
                <MapPin className='mr-2 h-5 w-5 text-primary' />
                <span>Av. Hipólito Yrigoyen 314 | Morón</span>
              </li>
            </ul>
          </div>
          {/* Right side - Google Maps */}
          <div className='w-full md:w-1/2'>
            <div className='w-full h-full'>
              <iframe
                src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3282.593141670064!2d-58.62210548417401!3d-34.64577306721791!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcc76f57e3be0d%3A0x4b41941a6595e747!2sAv.%20Hip%C3%B3lito%20Yrigoyen%20314%2C%20B1708FVH%20Mor%C3%B3n%2C%20Provincia%20de%20Buenos%20Aires%2C%20Argentina!5e0!3m2!1sen!2sus!4v1635789876543!5m2!1sen!2sus'
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
