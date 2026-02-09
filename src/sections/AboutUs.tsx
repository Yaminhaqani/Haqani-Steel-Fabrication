import { AboutUSImg } from "@/data/AboutUSImg";
import { motion } from "motion/react";

const AboutUs = () => {
  return (
    <section
      id="about"
      className="w-full h-fit bg-linear-to-b from-gray-950 via-gray-800 to-gray-950"
    >
      <div className="w-full h-fit pt-4 pb-3 bg-linear-to-r from-gray-600 via-slate-200 to-slate-600">
        <motion.h2
          initial={{opacity:0, y: -15 }}
          whileInView={{opacity:1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.7 }}
          className="text-2xl md:text-3xl text-center text-gray-950 font-medium"
        >
          ABOUT HAQANI STEEL FABRICATION
        </motion.h2>
      </div>

      <div className="w-full h-fit grid gap-6 px-6 mx-auto items-center py-3 sm:grid-cols-2 max-w-7xl">
        <motion.div
          initial={{ x: -20, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{
            type: "spring",
            stiffness: 300,
            damping: 9,
            duration: 0.6,
          }}
        >
          <p className="text-sm md:text-md lg:text-lg text-slate-300">
            Established in 2022, Haqani Steel Fabrication has been delivering
            reliable steel fabrication solutions with a strong focus on quality
            and precision. Over the years, we have successfully completed a wide
            range of fabrication projects including iron window frames, gates,
            and structural steel works.
            <br />
            Our commitment to quality, safety and client satisfaction is the
            bedrock of our reputation.
            <br />
            <strong>Trusted by residential & commercial clients.</strong>
          </p>
        </motion.div>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{
            type: "spring",
            stiffness: 150,
            damping: 9,
            duration: 0.6,
          }}
          className="border-none rounded-3xl overflow-hidden"
        >
          <img
            src={AboutUSImg.desktop}
            srcSet={`${AboutUSImg.mobile} 960w,
                           ${AboutUSImg.tablet} 1024w,
                           ${AboutUSImg.desktop} 1200w`}
            sizes="(max-width: 640px) 100vw, 50vw"
            alt="Steel fabrication work by Haqani Steel Fabrication"
            loading="lazy"
            fetchPriority="auto"
            className="w-full h-full object-cover object-center  transition-transform duration-500 ease-out scale-102 md:hover:scale-105"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default AboutUs;
