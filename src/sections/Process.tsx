import { pebProcess } from "@/data/pebProcess";
import { motion } from "motion/react";

const Process = () => {
  const container = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section className="w-full h-fit bg-linear-to-r from-gray-600 via-slate-200 to-slate-600">
      <div className="w-full h-fit pt-8 pb-4">
        <motion.h2
          initial={{opacity:0, y: -7 }}
          whileInView={{opacity:1, y: 0 }}
          viewport={{ once: true, amount: 0.7 }}
          transition={{ duration: 0.7 }}
          className="text-2xl md:text-3xl text-center text-gray-950 font-medium"
        >
          THE PEB FABRICATION PROCESS
        </motion.h2>
      </div>

      <div className="relative max-w-6xl mx-auto py-4 md:px-4 md:py-0">
        {/* Horizontal line from tab */}
        {/* <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="hidden md:block absolute top-6 left-0 w-full h-0.5 bg-slate-400 origin-left"
        /> */}

        {/* Horizontal animated line from tab */}
          <motion.svg
          className="hidden md:block absolute top-6 left-0 w-full h-1 rounded"
          viewBox="0 0 1000 2"
          preserveAspectRatio="none"
        >
            
          <motion.line
            x1="0"    //Start at far left
            y1="1"    //Vertically centered
            x2="1000" //End at far right
            y2="1"    //Same vertical level
            stroke="#94a3b8" //color of the line
            strokeWidth="2"  //thickness of the line
            initial={{ pathLength: 0 }}  //invisible line, 0 = line is not drawn and 1 = line is fully drawn
            whileInView={{ pathLength: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
          />
        </motion.svg>

        {/* Vertical animated line (mobile only) */}
<motion.svg
  className="block md:hidden absolute left-1/2 -translate-x-1/2 top-0 h-full w-2"
  viewBox="0 0 2 1000"
  preserveAspectRatio="none"
>
  <motion.line
    x1="1"
    y1="0"
    x2="1"
    y2="1000"
    stroke="#94a3b8"
    strokeWidth="0.8"
    initial={{ pathLength: 0 }}
    whileInView={{ pathLength: 1 }}
    viewport={{ once: true, amount: 0.4 }}
    transition={{ duration: 0.8, ease: "easeInOut" }}
  />
</motion.svg>

        {/* Steps */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10"
        >
          {pebProcess.map((step, index) => {
            const Icon = step.icon;

            return (
              <motion.div
                key={index}
                variants={item}
                className="relative flex flex-col items-center text-center"
              >
                {/* Icon */}
                <div className="z-10 flex items-center justify-center w-12 h-12 rounded-full bg-slate-900 text-white mb-4">
                  <Icon size={20} />
                </div>

                {/* Content */}
                <h3 className="text-sm font-semibold uppercase mb-2">
                  {step.title}
                </h3>

                <p className="text-xs text-slate-700 max-w-55">
                  {step.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Process;
