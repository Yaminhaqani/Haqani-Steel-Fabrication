import Hero from './sections/Hero'
import Navbar from './components/Navbar'
import Services from './sections/Services'
import Process from './sections/Process'

const App = () => {
  return (
    <div className=''>
      <Navbar/>
      <Hero/>
      <Services/>
      <Process/>
    </div>

  )
}

export default App