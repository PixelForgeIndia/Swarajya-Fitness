import { motion } from 'framer-motion';

import {
  Award,
  Flame,
  Target,
} from 'lucide-react';

import { fadeUp } from '../utils/animations';
import SectionHeading from '../components/ui/SectionHeading';

const ownerImage =
  '/images/owner/owner.jpg';

const highlights = [
  {
    icon: Flame,
    value: '20+',
    label: 'Years Experience',
  },
  {
    icon: Target,
    value: '100+',
    label: 'Members Transformed',
  },
  {
    icon: Award,
    value: '100%',
    label: 'Dedication',
  },
];

const Trainers = () => {
  return (
    <motion.section
      initial="hidden"
      animate="visible"
      variants={fadeUp}
      className="
        relative
        overflow-hidden
        bg-[#0b0b0b]
        pt-32
        pb-28
      "
    >

      {/* Background Glow */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-orange-500/10 blur-[120px]" />

      <div className="absolute bottom-0 right-0 w-[450px] h-[450px] bg-orange-500/5 blur-[120px]" />

      <div className="relative z-10 container mx-auto px-4 md:px-6">

        {/* HEADING */}
        <SectionHeading subtitle="Meet The Founder">
          Swarajya&nbsp;&nbsp;&nbsp;Fitness&nbsp;&nbsp;&nbsp;Owner
        </SectionHeading>

        {/* MAIN GRID */}
        <div
          className="
            grid
            lg:grid-cols-2
            gap-16
            items-center
          "
        >

          {/* IMAGE SIDE */}
          <motion.div
            initial={{
              opacity: 0,
              x: -40,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 0.7,
            }}
            viewport={{ once: true }}
            className="relative group"
          >

            {/* Glow */}
            <div
              className="
                absolute
                -inset-[3px]
                rounded-[36px]
                bg-gradient-to-br
                from-orange-500/40
                via-transparent
                to-orange-500/20
                blur-sm
              "
            />

            {/* Image Container */}
            <div
              className="
                relative
                overflow-hidden
                rounded-[32px]
                border
                border-white/10
                bg-[#111]
              "
            >

              <img
                src={ownerImage}
                alt="Gym Owner"
                className="
                  w-full
                  h-auto
                  object-cover
                  object-top
                  transition-all
                  duration-700
                  group-hover:scale-[1.03]
                "
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent pointer-events-none" />

              {/* Floating Badge */}
              <motion.div
                initial={{
                  opacity: 0,
                  y: 20,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  delay: 0.4,
                }}
                viewport={{ once: true }}
                className="
                  absolute
                  bottom-6
                  left-6
                  right-6
                  backdrop-blur-md
                  bg-black/40
                  border
                  border-white/10
                  rounded-3xl
                  p-5
                "
              >

                <p className="text-orange-500 font-bold uppercase tracking-[3px] text-sm mb-2">
                  Professional Fitness Coaching
                </p>

                <h3 className="text-white text-2xl font-black leading-tight">
                  Dedicated To Real
                  Transformation & Strength
                </h3>

              </motion.div>

            </div>

          </motion.div>

          {/* CONTENT SIDE */}
          <motion.div
            initial={{
              opacity: 0,
              x: 40,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 0.7,
            }}
            viewport={{ once: true }}
          >

            <p className="text-orange-500 font-bold uppercase tracking-[4px] mb-4">
              Founder & Coach
            </p>

            <h2
              className="
                text-5xl
                md:text-7xl
                font-black
                text-white
                leading-[0.95]
                mb-6
              "
            >
              Swarajya
              <br />
              Fitness
            </h2>

            <p
              className="
                text-neutral-400
                text-lg
                md:text-xl
                leading-relaxed
                mb-8
              "
            >
              Dedicated to building strength,
              discipline and confidence through
              real bodybuilding principles,
              professional coaching and years of
              transformation experience.
            </p>

            {/* Highlight Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-10">

              {highlights.map(
                (item, index) => (
                  <motion.div
                    key={index}
                    whileHover={{
                      y: -5,
                    }}
                    className="
                      rounded-3xl
                      border
                      border-white/10
                      bg-[#121212]
                      p-6
                    "
                  >

                    <item.icon className="w-8 h-8 text-orange-500 mb-4" />

                    <h3 className="text-4xl font-black text-white mb-2">
                      {item.value}
                    </h3>

                    <p className="text-neutral-400">
                      {item.label}
                    </p>

                  </motion.div>
                )
              )}

            </div>

            {/* Quote */}
            <div
              className="
                border-l-4
                border-orange-500
                pl-5
              "
            >

              <p
                className="
                  text-white
                  text-xl
                  md:text-2xl
                  font-semibold
                  italic
                  leading-relaxed
                "
              >
                “Discipline builds the body.
                Consistency builds the legacy.”
              </p>

            </div>

          </motion.div>

        </div>

      </div>

    </motion.section>
  );
};

export default Trainers;