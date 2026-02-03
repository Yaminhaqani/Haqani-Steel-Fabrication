import type { IconType } from "react-icons";
import {
  FaClipboardCheck,
  FaDraftingCompass,
  FaIndustry,
  FaTools,
} from "react-icons/fa";

interface process {
  id: number;
  title: string;
  description: string;
  icon: IconType;
}

export const pebProcess: process[] = [
  {
    id: 1,
    title: "Design & Engineering",
    description:
      "Custom-designed main gates refined through structural engineering.",
    icon: FaDraftingCompass,
  },
  {
    id: 2,
    title: "Fabrication",
    description:
      "Heavy-duty steel fabrication for bridges and large-scale projects.",
    icon: FaIndustry,
  },
  {
    id: 3,
    title: "Quality Check",
    description:
      "Precision welded steel frames for roofing and support systems.",
    icon: FaClipboardCheck,
  },
  {
    id: 4,
    title: "On-site Installation",
    description:
      "Complete PEB fabrication and professional roofing installation.",
    icon: FaTools,
  },
];
