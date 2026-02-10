import Hero from './sections/Hero'
import Navbar from './components/Navbar'
import Services from './sections/Services'
import Process from './sections/Process'
import AboutUs from './sections/AboutUs'
import Projects from './sections/Projects'
import Form from './sections/Form'
import { toast, Toaster } from 'sonner'

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


      <Toaster 
      position='top-center'
      richColors
      toastOptions={{
        classNames: {
          toast: "justify-center",
          title: "text-center",
          description: "text-center"
        }
      }}
      />
    </div>

  )
}

export default App