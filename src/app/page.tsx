import { AboutUs } from '@/components/AboutUs'
import { Brands } from '@/components/Brands'
import { CabinSection } from '@/components/CabinSection'
import { Contact } from '@/components/Contact'
import { Hero } from '@/components/Hero'
import { WhyUs } from '@/components/WhyUs'

export default function Home() {
  return (
    <main className=' min-h-dvh'>
      <Hero />
      <WhyUs />
      <AboutUs />
      <Brands />
      <CabinSection />
      <Contact />
    </main>
  )
}
