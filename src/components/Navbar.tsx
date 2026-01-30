import logo from "@/assets/logoo.png";
import { AnimatePresence, motion } from "motion/react";
import type { Variants } from "motion/react";
import { useState } from "react";
import { navLinks } from "../data/links";

const Navbar = () => {
  const [clicked, setClicked] = useState(false);

  const containerVariants: Variants = {
    // DESKTOP
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.15,
      },
    },

    /* MOBILE */
    hiddenMobile: {
      x: "-100%",
    },
    visibleMobile: {
      x: 0,
      transition: {
        type: "spring",
        stiffness: 260,
        damping: 20,
        staggerChildren: 0.12,
        delayChildren: 0.15,
      },
    },

    exit: {
      x: "-100%",
      transition: {
        duration: 0.25,
      },
    },
  };

  const itemVariant: Variants = {
    hidden: {
      opacity: 0,
      y: -10,
      scale: 0.9,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 7,
      },
    },

    hiddenMobile: {
      opacity: 0,
      y: -10,
      scale: 0.9,
    },
    visibleMobile: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 6,
      },
    },
  };

  return (
    <motion.nav
     initial={{y:-60}}
    animate={{y:0}}
    transition={{type:"spring", stiffness: 120, damping: 6}}
     className="flex justify-between bg-linear-to-r from-gray-900 to-gray-700 overflow-hidden border h-14 md:h-16">
      <div className="h-full w-20 overflow-hidden ml-0.5 md:ml-2">
        <img
          src={logo}
          alt="logo"
          className="h-full w-full object-contain scale-300"
        />
      </div>

      {/* DESKTOP MENU */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="hidden md:flex h-full gap-7 mr-2 items-center border border-white"
      >
        {navLinks.map((link) => {
          const Icon = link.icon;
          return (
            <motion.a
              variants={itemVariant}
              whileHover={{ scale: 1.1 }}
              key={link.name}
              href={link.href}
              className="text-gray-300 font-light flex flex-col items-center hover:text-gray-400"
            >
              <Icon size={18} />
              {link.name}
            </motion.a>
          );
        })}
      </motion.div>

      {/* HAMBURGER */}
      <motion.div
        whileTap={{ scale: 0.9 }}
        transition={{ type: "spring", stiffness: 300, damping: 8 }}
        onClick={() => setClicked((prev) => !prev)}
        className=" flex flex-col justify-center gap-1 h-full w-8 mr-0.5 md:mr-2 md:hidden"
      >
        <motion.div
          initial={{ rotate: 0, y: 0 }}
          animate={clicked ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
          transition={{ duration: 0.2 }}
          className="w-full h-1 bg-gray-300 rounded-3xl"
        ></motion.div>

        <motion.div
          initial={{ opacity: 1 }}
          animate={clicked ? { opacity: 0 } : { opacity: 1 }}
          transition={{ duration: 0.2 }}
          className="w-full h-1 bg-gray-300 rounded-3xl"
        ></motion.div>

        <motion.div
          initial={{ rotate: 0, y: 0 }}
          animate={clicked ? { rotate: -45, y: -10 } : { rotate: 0, y: 0 }}
          transition={{ duration: 0.2 }}
          className="w-full h-1 bg-gray-300 rounded-3xl"
        ></motion.div>
      </motion.div>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {clicked && (
          <motion.div
            variants={containerVariants}
            initial="hiddenMobile"
            animate={clicked ? "visibleMobile" : "hiddenMobile"}
            exit="exit"
            className="absolute top-14 left-0 w-70 bg-linear-to-r from-gray-900 to-gray-700 md:hidden overflow-hidden z-50"
          >
            <div className="flex flex-col items-center gap-6 py-6">
              {navLinks.map((link) => {
                const Icon = link.icon;

                return (
                  <motion.a
                    key={link.name}
                    href={link.href}
                    variants={itemVariant}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setClicked(false)}
                    className="flex items-center gap-3 pl-2 text-gray-300 text-lg hover:text-gray-400 w-full"
                  >
                    <Icon size={22} />
                    <span>{link.name}</span>
                  </motion.a>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
