import FloatingButtons from './Components/FloatingButtons'
import Footer from './Components/Footer'
import Navbar from './Components/Navbar'
import ScrollToTop from './Components/ScrollToTop'
import About from './Pages/About';
import Contact from './Pages/Contact';
import Home from './Pages/Home';
import { Route, Routes } from "react-router-dom"
import Gallery from './Pages/Gallery';
import PartyWearLehenga from './Pages/PartyWearLehnga';
import GownCollection from './Pages/Gown';
import DesignerSaree from './Pages/DesignerSaree';
import Blouse from './Pages/Blouse';
import RoyalPickSection from './Pages/RoyalPickSection';
import Suits from './Pages/Suits';
import Dresess from './Pages/Dresess';


function App() {
  
  return (
    <>
    <ScrollToTop/>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/about' element={<About/>} />
      <Route path='/contact' element={<Contact/>} />
      <Route path='/royal-pick' element={<RoyalPickSection/>} />
        <Route path='/gallery' element={<Gallery/>} />

        <Route path='/collection/party-wear-lehenga' element={<PartyWearLehenga/>} />
        <Route path='/collection/gowns' element={<GownCollection/>} />
        <Route path='/collection/designer-sarees' element={<DesignerSaree/>} />
        <Route path='/collection/designer-blouses' element={<Blouse/>} />
        <Route path='/collection/suits' element={<Suits/>} />
         <Route path='/collection/dresses' element={<Dresess/>} />
    </Routes>
    <Footer/>
    <FloatingButtons/>
    </>
  )
}

export default App
