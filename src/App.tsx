import { lazy, Suspense } from "react";
import { Toaster } from "sonner";

import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import FloatingButton from "./components/FloatingButton";

// Lazy-loaded sections
const AboutUs = lazy(() => import("./sections/AboutUs"));
const Services = lazy(() => import("./sections/Services"));
const Projects = lazy(() => import("./sections/Projects"));
const Process = lazy(() => import("./sections/Process"));
const Form = lazy(() => import("./sections/Form"));
const Footer = lazy(() => import("./components/Footer"));

const App = () => {
  return (
    <div className="relative">
      <div className="w-full h-fit overflow-x-hidden">
        <Navbar />
        <Hero />

        <Suspense
          fallback={
            <div className="min-h-75 flex items-center justify-center text-gray-400">
              Loading...
            </div>
          }
        >
          <AboutUs />
          <Services />
          <Projects />
          <Process />
          <Form />
          <Footer />
        </Suspense>
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
