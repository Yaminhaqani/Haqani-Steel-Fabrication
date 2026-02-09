import Hero from './sections/Hero'
import Navbar from './components/Navbar'
import Services from './sections/Services'
import Process from './sections/Process'
import AboutUs from './sections/AboutUs'
import Projects from './sections/Projects'
import Form from './sections/Form'

const App = () => {
  return (
    <div className='w-full h-fit overflow-x-hidden'>
      <Navbar/>
      <Hero/>
      <AboutUs/>
      <Services/>
      <Projects/>
      <Process/>
      <Form/>
    </div>

  )
}

export default App