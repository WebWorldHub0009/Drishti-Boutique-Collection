import FloatingButtons from './Components/FloatingButtons'
import Footer from './Components/Footer'
import Navbar from './Components/Navbar'
import ScrollToTop from './Components/ScrollToTop'
import Home from './Pages/Home';
import { Route, Routes } from "react-router-dom"

function App() {
  
  return (
    <>
    <ScrollToTop/>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>} />
    </Routes>
    <Footer/>
    <FloatingButtons/>
    </>
  )
}

export default App
