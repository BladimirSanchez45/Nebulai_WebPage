import './App.css'
import Mainpage from './pages/mainpage'
import Navbar from './components/navbar'
import Services from './pages/services'
import AboutUs from './pages/aboutus'
import Contact from './pages/contact'
import Footer from './components/footer'

function App() {
  return (
    <div className="bg-paper text-ink">
      <Navbar />
      <main>
        <Mainpage />
        <Services />
        <AboutUs />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
