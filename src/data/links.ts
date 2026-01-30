import type { IconType } from "react-icons"
import { IoRocketOutline } from "react-icons/io5";
import { CiHome, CiMail, CiSettings, CiUser } from "react-icons/ci";

export interface NavLink {
  name: string
  href: string
  icon: IconType
}

export const navLinks: NavLink[] = [
    {
        name: "Home",
        href: "#home",
        icon: CiHome,
    },
    {
        name: "About",
        href: "#about",
        icon: CiUser,
    },
    {
        name: "Services",
        href: "#services",
        icon: CiSettings,
    },
    {
        name: "Projects",
        href: "#projects",
        icon: IoRocketOutline,
    },
    {
        name: "Contact",
        href: "#contact",
        icon: CiMail,
    },

]