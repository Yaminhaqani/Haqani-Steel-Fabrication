import { BsFillTelephoneFill } from "react-icons/bs";
import { FaMapLocation, FaWhatsapp } from "react-icons/fa6";
import GlassIcons from "./ui/GlassIcons";
import { MdContactPhone } from "react-icons/md";
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";

const FloatingButton = () => {
  const [visible, setVisible] = useState(false);

  const items = [
    { icon: <FaWhatsapp />, color: "green", label: "Whatsapp", href: "https://wa.me/917889757436", },
    { icon: <BsFillTelephoneFill />, color: "purple", label: "Call", href:"tel:+917889757436" },
    { icon: <FaMapLocation />, color: "blue", label: "Location", href:"https://maps.app.goo.gl/3Q4F8Wovr19J1ctRA" },
  ];

  return (
    // FIX 1: Changed 'bottom-30' to 'bottom-32' (or use bottom-[120px])
    // FIX 2: Ensure this is the ONLY place 'fixed' is defined
    <div className="fixed bottom-32 md:bottom-10 right-4 z-50">
      <div className="relative">
        <AnimatePresence>
          {visible && (
            <motion.div
              initial={{ opacity: 0, y: 10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 10, scale: 0.95 }}
              transition={{ type: "spring", stiffness: 120, damping: 18 }}
              className="absolute w-50 bottom-full right-0 mb-3"
            >
              <GlassIcons items={items} className="text-xs text-black" />
            </motion.div>
          )}
        </AnimatePresence>

        <div className="relative group">
          <motion.button
            aria-label="Contact us"
            type="button"
            onClick={() => setVisible((v) => !v)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="rounded-full bg-green-600/80 text-white p-4 shadow-lg mt-3"
          >
            <MdContactPhone size={22} />
          </motion.button>
          
           {/* Tooltip */}
          <span className="pointer-events-none absolute right-full mr-3 top-1/2 -translate-y-1/2 rounded-md bg-black/80 px-2 py-1 text-xs text-white opacity-0 scale-95 transition-all group-hover:opacity-100 group-hover:scale-100">
            Contact
          </span>
        </div>
      </div>
    </div>
  );
};

export default FloatingButton;