import { motion } from 'framer-motion';
import { TRAINERS } from '../data/brand';
import { fadeUp } from '../utils/animations';
import SectionHeading from '../components/ui/SectionHeading';

const Trainers = () => (
  <motion.div
    initial="hidden"
    animate="visible"
    variants={fadeUp}
    className="pt-32 pb-24 container mx-auto px-6 min-h-screen"
  >
    <SectionHeading subtitle="Expert Guidance">Meet Your Coaches.</SectionHeading>
    <div className="grid md:grid-cols-3 gap-8">
      {TRAINERS.map((trainer, i) => (
        <div key={i} className="group cursor-pointer">
          <div className="relative overflow-hidden rounded-xl mb-4 aspect-[4/5]">
            <div className="absolute inset-0 bg-gradient-to-t from-[#111] via-transparent to-transparent z-10 opacity-80 group-hover:opacity-60 transition-opacity" />
            <img
              src={trainer.img}
              alt={trainer.name}
              className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 grayscale group-hover:grayscale-0"
            />
          </div>
          <h3 className="text-2xl font-bold text-white mb-1">{trainer.name}</h3>
          <p className="text-orange-500 font-medium mb-1">{trainer.role}</p>
          <p className="text-sm text-neutral-400">Experience: {trainer.exp}</p>
        </div>
      ))}
    </div>
  </motion.div>
);

export default Trainers;