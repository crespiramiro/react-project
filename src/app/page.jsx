'use client'
import AboutUs from '@/components/About/AboutUs'
import Banner from '@/components/banners/Banner'
import Banner2 from '@/components/banners/Banner2'
import HeroImg from '@/components/HeroImg'
import Navar from '@/components/Navbar'
import Slider from '@/components/gallery/Slider'
import WorkspaceSection from '@/components/About/WorkspaceSection'
import Footer from '@/components/Footer'
import NewProducts from '@/components/NewProducts'


export default function Home() {
  return (
   <section className='overflow-x-hidden min-h-screen max-h-screen scroll-smooth ' >
    <Navar />
    <HeroImg />
    <NewProducts />
    <AboutUs />
    <Banner />
    <WorkspaceSection />
    <Slider />
    <Banner2 />
    <Footer />
   </section>
  )
}
