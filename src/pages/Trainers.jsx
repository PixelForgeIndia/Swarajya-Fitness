import { motion } from 'framer-motion';

import { fadeUp } from '../utils/animations';
import SectionHeading from '../components/ui/SectionHeading';

const trainerImages = [
  '/images/trainer/1.jpeg',
  '/images/trainer/2.jpeg',
  '/images/trainer/3.jpeg',
  '/images/trainer/4.jpeg',
  '/images/trainer/5.jpeg',
];

const Trainers = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={fadeUp}
      className="
        pt-32
        pb-24
        bg-[#0b0b0b]
        min-h-screen
      "
    >

      <div className="container mx-auto px-4 md:px-6">

        {/* HEADING */}
        <SectionHeading subtitle="Expert Guidance">
          Meet Your Coach
        </SectionHeading>

        {/* TOP SECTION */}
        <div
          className="
            grid
            lg:grid-cols-2
            gap-10
            items-center
            mb-16
          "
        >

          {/* MAIN IMAGE */}
          <div
            className="
              relative
              overflow-hidden
              rounded-[32px]
              border
              border-white/10
              bg-[#111]
              h-full
              group
            "
          >

            <img
              src={trainerImages[0]}
              alt="Trainer"
              className="
                w-full
                h-full
                max-h-[720px]
                object-cover
                object-center
                block
                transition-all
                duration-700
                group-hover:scale-105
              "
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />

          </div>

          {/* CONTENT */}
          <div>

            <p className="text-orange-500 font-semibold mb-3 uppercase tracking-widest">
              Professional Coach
            </p>

            <h2 className="text-5xl md:text-6xl font-black text-white leading-tight mb-6">
              Swarajya
              <br />
              Gym Coach
            </h2>

            <p className="text-neutral-400 text-lg leading-relaxed mb-8">
              Dedicated to helping members build
              strength, confidence and discipline
              through professional training and
              modern fitness techniques.
            </p>

            <div className="grid grid-cols-2 gap-5">

              <div className="bg-[#121212] border border-white/10 rounded-3xl p-6">
                <h3 className="text-4xl font-black text-orange-500 mb-2">
                  20+
                </h3>

                <p className="text-neutral-400">
                  Years Experience
                </p>
              </div>

              <div className="bg-[#121212] border border-white/10 rounded-3xl p-6">
                <h3 className="text-4xl font-black text-orange-500 mb-2">
                  100+
                </h3>

                <p className="text-neutral-400">
                  Members Trained
                </p>
              </div>

            </div>

          </div>

        </div>

        {/* IMAGE GALLERY */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">

          {trainerImages.slice(1).map((img, i) => (

            <motion.div
              key={i}
              initial={{
                opacity: 0,
                y: 30,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.5,
                delay: i * 0.1,
              }}
              viewport={{ once: true }}
              className="
                relative
                overflow-hidden
                rounded-[28px]
                border
                border-white/10
                group
                bg-[#111]
              "
            >

              <img
                src={img}
                alt="Trainer"
                className="
                  w-full
                  h-[320px]
                  object-cover
                  object-center
                  transition-all
                  duration-700
                  group-hover:scale-105
                "
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

            </motion.div>

          ))}

        </div>

      </div>

    </motion.div>
  );
};

export default Trainers;