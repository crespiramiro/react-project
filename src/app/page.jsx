'use client'
import AboutUs from '@/components/About/AboutUs'
import CardsContainer from '@/components/CardsContainer'
import HeroImg from '@/components/HeroImg'
import Navar from '@/components/Navbar'


export default function Home() {
  return (
   <section>
    <Navar />
    <HeroImg />
    <CardsContainer />
    <AboutUs />
   </section>
  )
}
