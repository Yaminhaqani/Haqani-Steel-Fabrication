import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cardInfo } from "@/data/cardInfo";
import { motion } from "motion/react";

const Services = () => {
  return (
    <section
      id="services"
      className="bg-linear-to-b from-gray-950 via-gray-800 to-gray-950 pb-6"
    >
      <div className="border border-black py-8 bg-linear-to-r from-gray-600 via-slate-200 to-slate-600">
        <motion.h2
          initial={{ y: -7 }}
          whileInView={{ y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.8 }}
          className="text-2xl md:text-3xl text-center text-gray-950 font-medium"
        >
          OUR EXPERTISE
        </motion.h2>
      </div>

      {/* Cards */}
      <div className="grid gap-6 px-6 mx-auto -mt-6 sm:grid-cols-2 lg:grid-cols-3 max-w-7xl">
        {cardInfo.map((card) => (
          <motion.div
            key={card.id}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ y: -6 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{
              type: "spring",
              stiffness: 200,
              damping: 9,
              duration: 0.4,
            }}
            className=""
          >
            <Card className="h-full bg-linear-to-br from-slate-600/50 via-slate-200 to-slate-600/50 shadow-sm border-2 border-transparent hover:border-orange-600/45 transition-colors duration-500 ease-in-out">
              <CardHeader className="flex flex-col items-center justify-center text-center">
                <img
                  src={card.image}
                  alt={card.title}
                  className="w-10 h-10"
                />
                <CardTitle className="text-base font-semibold">
                  {card.title}
                </CardTitle>
                <CardDescription className="text-sm text-gray-700/75">
                  {card.description}
                </CardDescription>
              </CardHeader>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Services;
