import React from 'react'
import HeroSection from '../Components/HeroSection'
import DrishtiServices from '../Components/DrishtiServices'
import WhyChooseUs from '../Components/WhyChooseUs'
import DrishtiGallery from '../Components/DrishtiGallery'
import OwnerSection from '../Components/OwnerSection'
import MostWantedProducts from '../Components/MostWantedProduct'

const Home = () => {
  return (
    <>
    <HeroSection/>
    <DrishtiServices/>
    <WhyChooseUs/>
    <DrishtiGallery/>
    <MostWantedProducts/>
    <OwnerSection/>
    </>
  )
}

export default Home