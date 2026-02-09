import DomeGallery from "@/components/DomeGallery"
import { ProjectImg } from "@/data/ProjectImg";
import { motion } from "motion/react";

const Projects = () => {
  return (
    <section id="projects"
     className="w-full h-fit flex-col items-center bg-linear-to-b from-gray-950 via-gray-800 to-gray-950">
         <div className="w-full pt-8 pb-4 bg-linear-to-r from-gray-600 via-slate-200 to-slate-600">
        <motion.h2
          initial={{opacity:0, y: -7 }}
          whileInView={{opacity:1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.7 }}
          className="text-2xl md:text-3xl text-center text-gray-950 font-medium"
        >
          FEATURED PROJECTS
        </motion.h2>
      </div>
     <div className="w-full h-[55dvh] md:h-[70dvh]">
      <DomeGallery
      images={ProjectImg}
  fit={0.8}
  minRadius={700}
  maxVerticalRotationDeg={0}
  segments={34}
  dragDampening={2}
  grayscale={false}
/>
    </div>
    </section>
  )
}

export default Projects