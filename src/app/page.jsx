'use client'
import AboutUs from '@/components/About/AboutUs'
import Banner from '@/components/banners/Banner'
import Banner2 from '@/components/banners/Banner2'
import HeroImg from '@/components/banners/HeroImg'
import Navar from '@/components/nav/Navbar'
import Slider from '@/components/gallery/Slider'
import WorkspaceSection from '@/components/About/WorkspaceSection'
import Footer from '@/components/footer/Footer'
import NewProducts from '@/components/products/NewProducts'
import { ShoppingCartProvider } from '@/components/cart/CartContext'


export default function Home() {
  return (

   <section className='overflow-x-hidden min-h-screen max-h-screen scroll-smooth ' >
    <ShoppingCartProvider >
    <Navar />
    <HeroImg />
    <NewProducts />
    <AboutUs />
    <Banner />
    <WorkspaceSection />
    <Slider />
    <Banner2 />
    <Footer />
    </ShoppingCartProvider>
   </section>
  )
}
