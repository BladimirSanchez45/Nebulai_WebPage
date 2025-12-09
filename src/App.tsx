import './App.css'
import Mainpage from './pages/mainpage'
import Navbar from './components/navbar'
import Services from './pages/services'
import AboutUs from './pages/aboutus'
import Contact from './pages/contact'

function App() {
  return (
    <>
      <Navbar />
      <Mainpage />
      <Services />
      <AboutUs />
      <Contact />
    </>
  )
}

export default App
