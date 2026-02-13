import { footerImages } from "@/data/footerImg";
import logo from "@/assets/logo.png";
import { motion } from "motion/react";
import {
  FaFacebookF,
  FaInstagram,
  FaMapLocation,
  FaWhatsapp,
} from "react-icons/fa6";

import { IoMail } from "react-icons/io5";
import { BsFillTelephoneFill } from "react-icons/bs";
import GlassIcons from "@/components/ui/GlassIcons";

const Footer = () => {
  const socials = [
    {
      icon: <FaInstagram />,
      color: "pink",
      label: "Instagram",
      href: "https://www.instagram.com/haqani_fabrication/",
    },
    {
      icon: <FaFacebookF />,
      color: "blue",
      label: "Facebook",
      href: "https://www.facebook.com/share/1NGfqCqRcA/",
    },
    {
      icon: <FaWhatsapp />,
      color: "green",
      label: "WhatsApp",
      href: "https://wa.me/916006336973",
    },
  ];

  return (
    <footer className="relative w-full h-fit text-gray-400 bg-linear-to-b from-gray-950 via-gray-800 to-gray-950 z-0 ">
      <div
        className="relative w-full h-fit flex justify-center items-center rounded-2xl border border-white/20 bg-cover bg-center bg-no-repeat overflow-hidden md:bg-[url('/footerImages/floatinglines-tablet.webp')]
    lg:bg-[url('/footerImages/floatinglines-desktop.webp')] z-10"
        style={{
          backgroundImage: `url(${footerImages.mobile})`,
        }}
      >
        {/* GLASSMORPHIC OVERLAY  */}
        <div className="absolute inset-0 bg-gray-900/55 z-20 overflow-hidden backdrop-blur-xs" />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 p-4 mx-auto z-30">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ type: "spring", stiffness: 120, damping: 8 }}
            className="flex flex-col items-start md:items-center md:justify-center order-3 md:order-1 mb-4"
          >
            <h3 className="font-semibold text-lg mb-2">Contact</h3>
            <div className="flex flex-col gap-2">
              <a
                href="https://www.google.com/maps/place/Haqani+steel+fabrication/@33.8010031,74.9404363,17z/data=!3m1!4b1!4m6!3m5!1s0x38e1f7003906ec79:0xb15ddd5d1ad58f24!8m2!3d33.8010031!4d74.9404363!16s%2Fg%2F11yxxssx8x?entry=ttu&g_ep=EgoyMDI2MDIxMC4wIKXMDSoASAFQAw%3D%3D"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-sm hover:text-amber-600 transition-colors duration-300"
              >
                <span className="mr-2">
                  <FaMapLocation />
                </span>
                IGC, Lasipora, Pulwama, Kashmir - 192301, India
              </a>
              <a
                href="mailto:haqanisteelfabrication@gmail.com"
                className="flex items-center text-sm hover:text-amber-600 transition-colors duration-300"
              >
                <span className="mr-2">
                  <IoMail />
                </span>
                haqanisteelfabrication@gmail.com
              </a>
              <a
                href="tel:+916006336973"
                className="flex items-center text-sm hover:text-amber-600 transition-colors duration-300"
              >
                <span className="mr-2">
                  <BsFillTelephoneFill />
                </span>
                +916006336973
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 120, damping: 8 }}
            className="flex flex-col items-start md:items-center order-1 md:order-2 md:mb-4"
          >
            <div className="w-full flex justify-start md:justify-center overflow-hidden">
              <img className="w-30 h-fit object-cover" src={logo} alt="Logo" />
            </div>
            <div className="flex flex-col gap-2 -mt-3">
              <p className="flex items-center md:text-center text-sm">
                We specialize in high-quality steel fabrication, structural
                steel, welding, and custom iron works designed to meet
                industrial standards with unmatched strength and reliability.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ type: "spring", stiffness: 120, damping: 8 }}
            className="flex flex-col items-start md:items-center md:justify-center order-2 md:order-3"
          >
            <h3 className=" font-semibold text-lg mb-2">Follow Us</h3>
            <div className="h-fit w-fit relative">
              <GlassIcons
                items={socials}
                className="text-[10px] text-black gap-[1em]"
              />
            </div>
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 text-center z-30">
        <motion.a
          href="https://www.linkedin.com/in/yamin-haqani-30868b2b1?originalSubdomain=in"
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="text-xs text-gray-300/90 hover:text-amber-600 transition-colors duration-300"
        >
          © 2025 Yamin Haqani. All rights reserved.
        </motion.a>
      </div>
    </footer>
  );
};

export default Footer;
