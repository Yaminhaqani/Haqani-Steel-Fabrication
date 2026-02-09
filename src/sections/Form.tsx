import { motion } from "motion/react";


const Form = () => {
  return (
    <section
      id="contact"
      className="w-full bg-linear-to-r from-gray-600 via-slate-200 to-slate-600"
    >
         <div className="w-full pt-8 pb-4">
        <motion.h2
          initial={{opacity:0, y: -7 }}
          whileInView={{opacity:1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.7 }}
          className="text-2xl md:text-3xl text-center text-gray-950 font-medium"
        >
          CONTACT US
        </motion.h2>
      </div>
    </section>
  );
};

export default Form;
