import Hero from './sections/Hero'
import Navbar from './components/Navbar'
import Services from './sections/Services'
import Process from './sections/Process'
import AboutUs from './sections/AboutUs'
import Projects from './sections/Projects'

const App = () => {
  return (
    <div className=''>
      <Navbar/>
      <Hero/>
      <AboutUs/>
      <Services/>
      <Projects/>
      <Process/>
    </div>

  )
}

export default App