import Hero from "./sections/Hero";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Services from "./sections/Services";
import Process from "./sections/Process";
import AboutUs from "./sections/AboutUs";
import Projects from "./sections/Projects";
import Form from "./sections/Form";
import { toast, Toaster } from "sonner";
import { Suspense } from "react";
import FloatingButton from "./components/FloatingButton";

const App = () => {
  return (
    <div className="relative">
      <div className="w-full h-fit overflow-x-hidden">
        <Navbar />
        <Hero />
        <AboutUs />

        <Suspense
          fallback={
            <div className="min-h-75 flex items-center justify-center text-gray-400">
              Loading...
            </div>
          }
        >
          <Services />
          <Projects />
          <Process />
        </Suspense>

        <Form />
        
        <Footer />
      </div>
      <FloatingButton />
       <Toaster
          position="top-center"
          richColors
          toastOptions={{
            classNames: {
              toast: "justify-center",
              title: "text-center",
              description: "text-center",
            },
          }}
        />
    </div>
  );
};

export default App;
