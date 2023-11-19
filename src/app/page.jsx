'use client'
import AboutUs from '@/components/About/AboutUs'
import Banner from '@/components/banners/Banner'
import Banner2 from '@/components/banners/Banner2'
import CardsContainer from '@/components/newIn/CardsContainer'
import HeroImg from '@/components/HeroImg'
import Navar from '@/components/Navbar'
import Slider from '@/components/gallery/Slider'
import WorkspaceSection from '@/components/About/WorkspaceSection'
import Footer from '@/components/Footer'


export default function Home() {
  return (
   <section className='overflow-x-hidden' >
    <Navar />
    <HeroImg />
    <CardsContainer />
    <AboutUs />
    <Banner />
    <WorkspaceSection />
    <Slider />
    <Banner2 />
    <Footer />
   </section>
  )
}
