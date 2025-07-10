import React from 'react'
import AboutHero from '../Components/AboutHero'
import AboutMain from '../Components/AboutMain'
import VisionMission from '../Components/VisionMission'
import TestimonialSlider from '../Components/MainTestimonials'
import FAQ from "../Components/FAQ"

import ProductShowcase from '../Components/ProductShowCase'

const About = () => {
  return (
    <>
    <AboutHero/>
    <AboutMain/>
    <ProductShowcase/>
    <VisionMission/>
    <TestimonialSlider/>
    <FAQ/>
    
    </>
  )
}

export default About