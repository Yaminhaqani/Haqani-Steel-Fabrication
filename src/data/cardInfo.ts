export interface ServiceCard {
  id: number
  title: string
  description: string
  image: string
}

export const cardInfo: ServiceCard[] = [
  {
    id: 1,
    title: "Main Gates",
    description: "Custom-designed main gates for residential and commercial properties. Durable and stylish.",
    image: "/cardImages/gate.webp",
  },
  {
    id: 2,
    title: "Bridges & Structural Steel",
    description: "Heavy-duty steel fabrication for bridges and large-scale infrastructure projects.",
    image: "/cardImages/bridge.webp",
  },
  {
    id: 3,
    title: "Welding Trusses",
    description: "Precision-welded steel trusses for robust roofing and support systems.",
    image: "/cardImages/truss.webp",
  },
  {
    id: 4,
    title: "Iron Window Frames",
    description: "Secure and aesthetically pleasing iron frames for all window types.",
    image: "/cardImages/window.webp",
  },
  {
    id: 5,
    title: "Tractor Trolleys",
    description: "Robust and high-capacity tractor trolleys built for agricultural demands.",
    image: "/cardImages/trolly.webp",
  },
  {
    id: 6,
    title: "PEB & Roofing",
    description: "Complete PEB fabrication process and professional roofing sheet installation.",
    image: "/cardImages/roof.webp",
  },
]