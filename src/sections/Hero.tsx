
import { motion} from "motion/react";
import type { Variants } from "motion/react";
import { heroImages } from "../data/heroImg";
import { Button } from "@/components/ui/button";


const Hero = () => {

const containerVariants: Variants = {
  hidden: { opacity: 0, y: -50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      when: "beforeChildren", // Ensures the box finishes its move before text starts
      staggerChildren: 0.3,   // The "gap" between h1 and p animations
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, x: 50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {type:"spring"},
  },
};

  return (
    <section className="w-full h-[60dvh] md:h-[60dvh] lg:h-[76dvh] relative overflow-hidden bg-black">
        <motion.img
          key={heroImages.desktop} 
          src={heroImages.desktop}
          srcSet={`${heroImages.mobile} 768w,
           ${heroImages.tablet} 1280w,
           ${heroImages.desktop} 1920w`}
           sizes="100vw"
          alt="hero image"
          fetchPriority="high"
          className="absolute w-full h-full object-cover object-[center_30%]  transition-transform duration-500 ease-out md:hover:scale-105"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }} // Fade duration
        />

      <div className="absolute inset-0 bg-linear-to-b from-black/40 via-black/15 to-black/40 pointer-events-none" />

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">

        <motion.div
  variants={containerVariants}
  initial="hidden"
  animate="visible"
  className="space-y-2 absolute top-15 md:top-40 lg:left-30 lg:top-18 py-2 md:py-4 left-1/2 -translate-x-1/2 w-[93dvw] md:w-[70dvw] lg:w-fit px-2 backdrop-blur-xs bg-black/5 border border-white/10 shadow-xl rounded-2xl"
>
  <motion.h1 
    variants={itemVariants}
    className="text-3xl md:text-5xl text-white tracking-tight drop-shadow-[0_2px_12px_rgba(0,0,0,0.6)] text-left"
  >
    SHAPING THE FUTURE <br/> WITH STEEL
  </motion.h1>

  <motion.p 
    variants={itemVariants}
    className="text-sm tracking-tight text-left text-gray-200/90 max-w-2xl mx-auto font-light drop-shadow-md"
  >
    Premium quality fabrication for all needs.
  </motion.p>
  <motion.p 
    variants={itemVariants}
    className="text-sm tracking-tight text-left text-gray-200/90 max-w-2xl mx-auto font-light drop-shadow-md"
  >
    Precision engineering you can trust.
  </motion.p>
  <div className="flex gap-3.5 w-fit">
    {/* asChild lets the child element become the real DOM node while keeping styles. */}
    <Button asChild  variant="orange"><a href="#services">Services</a></Button>
    <Button variant="orangeOutline"><a href="#projects">Projects</a></Button>
  </div>
</motion.div>

        
      </div>
      
    </section>
  );
};

export default Hero;