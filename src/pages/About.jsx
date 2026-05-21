import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { fadeUp } from '../utils/animations';
import SectionHeading from '../components/ui/SectionHeading';

import {
  Dumbbell,
  Trophy,
  Users,
  ShieldCheck,
  Flame,
  Award,
  X,
} from 'lucide-react';

const achievements = [
  {
    title: 'Khandala Shri Bodybuilding',
    year: '2007',
    description:
      'District-level bodybuilding competition participation and recognition.',
    image: '/images/certificates/Khandala.jpg',
  },

  {
    title: 'Rajiv Gandhi Bodybuilding',
    year: '2007',
    description:
      'Participated in Pimpri-Chinchwad bodybuilding championship competition.',
    image: '/images/certificates/rajiv-gandhi.jpg',
  },

  {
    title: 'Powerlifting Competition',
    year: '2008',
    description:
      'Secured 3rd place in Pune District Amateur Powerlifting Association competition.',
    image: '/images/certificates/powerlifting.jpg',
  },

  {
    title: 'Pune District Bodybuilding',
    year: '2008',
    description:
      'Recognition and participation in Pune district-level bodybuilding competition.',
    image: '/images/certificates/pune-district.jpg',
  },
];

const values = [
  {
    icon: <Flame className="text-orange-400" size={36} />,
    title: 'Discipline',
    text: 'We focus on consistency, hard work, and long-term transformation.',
  },

  {
    icon: <Users className="text-orange-400" size={36} />,
    title: 'Community',
    text: 'A motivating and supportive environment for all fitness levels.',
  },

  {
    icon: <ShieldCheck className="text-orange-400" size={36} />,
    title: 'Authentic Training',
    text: 'Real guidance, proper form, and practical fitness knowledge.',
  },
];

const stats = [
  {
    icon: <Award size={28} />,
    value: '15+',
    label: 'Years Experience',
  },

  {
    icon: <Trophy size={28} />,
    value: 'Multiple',
    label: 'Competitions',
  },

  {
    icon: <Dumbbell size={28} />,
    value: '100%',
    label: 'Dedicated Environment',
  },
];

const About = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <>
      <motion.div
        initial="hidden"
        animate="visible"
        variants={fadeUp}
        className="pt-28 overflow-hidden bg-[#0b0b0b] text-white"
      >
        {/* HERO SECTION */}
        <section className="container mx-auto px-6 pb-28">
          <SectionHeading subtitle="About Swarajya Fitness Club">
            More Than Just A Gym
          </SectionHeading>

          <div className="grid lg:grid-cols-2 gap-16 items-center mt-16">
            {/* TEXT */}
            <div className="space-y-7 text-neutral-300 leading-relaxed text-[18px]">
              <p>
                <span className="text-white font-semibold">
                  Swarajya Fitness Club
                </span>{' '}
                was founded with a vision to provide affordable,
                authentic, and result-oriented fitness training
                for the local community.
              </p>

              <p>
                We believe fitness is not a luxury. Whether you are
                a beginner, student, working professional, or
                experienced athlete, our gym provides the right
                atmosphere to grow stronger physically and mentally.
              </p>

              <p>
                Our focus is on discipline, strength, consistency,
                and sustainable progress. No shortcuts. No fake
                promises. Just real training, proper guidance,
                and a motivating fitness environment.
              </p>

              <p>
                From bodybuilding and powerlifting experience to
                daily fitness coaching, Swarajya Fitness Club
                continues to help people build confidence, health,
                and a better lifestyle.
              </p>
            </div>

            {/* OWNER IMAGE */}
            <div
              className="
                relative
                rounded-[32px]
                overflow-hidden
                border
                border-orange-500/20
                shadow-[0_0_60px_rgba(249,115,22,0.15)]
                group
                cursor-pointer
              "
              onClick={() =>
                setSelectedImage(
                  '/images/certificates/gym-owner.jpg'
                )
              }
            >
              <img
                src="/images/certificates/gym-owner.jpg"
                alt="Gym Owner"
                className="
                  w-full
                  h-[620px]
                  object-cover
                  transition-all
                  duration-500
                  group-hover:scale-[1.03]
                "
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
            </div>
          </div>
        </section>

        {/* OWNER SECTION */}
        <section className="bg-[#131313] py-28 border-y border-neutral-800">
          <div className="container mx-auto px-6">
            <div
              className="
                rounded-[36px]
                overflow-hidden
                bg-[#1b1b1b]
                border
                border-neutral-700
              "
            >
              <div className="grid lg:grid-cols-2">
                {/* IMAGE */}
                <div
                  className="relative cursor-pointer group"
                  onClick={() =>
                    setSelectedImage(
                      '/images/certificates/owner-training.jpg'
                    )
                  }
                >
                  <img
                    src="/images/certificates/owner-training.jpg"
                    alt="Founder Training"
                    className="
                      w-full
                      h-full
                      min-h-[650px]
                      object-cover
                      transition-all
                      duration-500
                      group-hover:scale-[1.02]
                    "
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                </div>

                {/* CONTENT */}
                <div className="p-8 lg:p-14 flex flex-col justify-center">
                  <span className="text-orange-400 uppercase tracking-[5px] text-sm font-semibold">
                    Founder & Head Trainer
                  </span>

                  <h2 className="text-5xl font-bold mt-4 mb-7 leading-tight">
                    Mr. Mahadev Kharat
                  </h2>

                  <p className="text-neutral-300 leading-relaxed mb-6 text-lg">
                    With years of experience in bodybuilding,
                    strength training, and fitness coaching,
                    Mr. Mahadev Kharat has dedicated his journey
                    to helping people become stronger, healthier,
                    and more confident.
                  </p>

                  <p className="text-neutral-400 leading-relaxed mb-10 text-lg">
                    He has participated in multiple bodybuilding
                    and powerlifting competitions across Pune
                    district and Maharashtra, earning recognition
                    for his dedication and performance in strength sports.
                  </p>

                  {/* STATS */}
                  <div className="grid sm:grid-cols-3 gap-5">
                    {stats.map((item, i) => (
                      <div
                        key={i}
                        className="
                          bg-[#101010]
                          border
                          border-neutral-700
                          rounded-2xl
                          p-6
                          text-center
                          hover:border-orange-500/40
                          transition-all
                        "
                      >
                        <div className="flex justify-center text-orange-400 mb-4">
                          {item.icon}
                        </div>

                        <h3 className="text-3xl font-bold">
                          {item.value}
                        </h3>

                        <p className="text-sm text-neutral-400 mt-2">
                          {item.label}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* VALUES SECTION */}
        <section className="bg-[#10151b] py-28">
          <div className="container mx-auto px-6">
            <SectionHeading subtitle="Why Choose Us">
              Built On Real Fitness Values
            </SectionHeading>

            <div className="grid md:grid-cols-3 gap-8 mt-16">
              {values.map((val, i) => (
                <motion.div
                  key={i}
                  whileHover={{ y: -6 }}
                  className="
                    bg-[#181f27]
                    border
                    border-[#2a3440]
                    rounded-[28px]
                    p-10
                    transition-all
                    duration-300
                    hover:border-orange-400/50
                  "
                >
                  <div className="mb-7">{val.icon}</div>

                  <h3 className="text-3xl font-bold mb-4">
                    {val.title}
                  </h3>

                  <p className="text-neutral-300 leading-relaxed text-lg">
                    {val.text}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ACHIEVEMENTS SECTION */}
        <section className="bg-[#16110d] py-28 border-t border-neutral-800">
          <div className="container mx-auto px-6">
            <SectionHeading subtitle="Achievements & Legacy">
              Years Of Dedication & Recognition
            </SectionHeading>

            {/* 2 x 2 GRID */}
            <div className="grid md:grid-cols-2 gap-10 mt-16">
              {achievements.map((item, i) => (
                <motion.div
                  key={i}
                  whileHover={{ y: -8 }}
                  onClick={() => setSelectedImage(item.image)}
                  className="
                    bg-[#221913]
                    border
                    border-[#3a2a21]
                    rounded-[32px]
                    overflow-hidden
                    cursor-pointer
                    group
                    transition-all
                    duration-300
                    hover:border-orange-400/40
                  "
                >
                  {/* IMAGE */}
                  <div
                    className="
                      relative
                      w-full
                      aspect-[4/3]
                      overflow-hidden
                      bg-[#140f0c]
                    "
                  >
                    <img
                      src={item.image}
                      alt={item.title}
                      className="
                        w-full
                        h-full
                        object-cover
                        transition-all
                        duration-500
                        group-hover:scale-[1.02]
                      "
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                  </div>

                  {/* CONTENT */}
                  <div className="p-8">
                    <div className="flex items-start justify-between gap-5 mb-5">
                      <h3 className="text-4xl leading-tight font-bold">
                        {item.title}
                      </h3>

                      <span
                        className="
                          bg-orange-500/10
                          text-orange-400
                          px-4
                          py-2
                          rounded-full
                          text-sm
                          whitespace-nowrap
                          border
                          border-orange-500/20
                        "
                      >
                        {item.year}
                      </span>
                    </div>

                    <p className="text-neutral-300 leading-relaxed text-lg">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </motion.div>

      {/* IMAGE MODAL */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="
              fixed
              inset-0
              bg-black/95
              z-[999]
              flex
              items-center
              justify-center
              p-4
              backdrop-blur-md
            "
            onClick={() => setSelectedImage(null)}
          >
            {/* CLOSE BUTTON */}
            <button
              onClick={() => setSelectedImage(null)}
              className="
                absolute
                top-6
                right-6
                bg-white/10
                hover:bg-white/20
                border
                border-white/10
                p-3
                rounded-full
                transition-all
              "
            >
              <X size={30} />
            </button>

            {/* FULL IMAGE */}
            <motion.img
              initial={{ scale: 0.92 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.92 }}
              src={selectedImage}
              alt="Preview"
              className="
                max-w-[96vw]
                max-h-[94vh]
                object-contain
                rounded-2xl
                shadow-[0_0_80px_rgba(0,0,0,0.8)]
              "
            />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default About;