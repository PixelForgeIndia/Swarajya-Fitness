import { useMemo, useState } from 'react';
import { motion } from 'framer-motion';

import {
  Dumbbell,
  HeartPulse,
  Activity,
  Shield,
  Trophy,
  Bike,
} from 'lucide-react';

import { fadeUp } from '../utils/animations';
import SectionHeading from '../components/ui/SectionHeading';

const categories = [
  {
    id: 'all',
    label: 'All',
    icon: Dumbbell,
  },
  {
    id: 'strength',
    label: 'Strength',
    icon: Trophy,
  },
  {
    id: 'upper-body',
    label: 'Upper Body',
    icon: Activity,
  },
  {
    id: 'lower-body',
    label: 'Lower Body',
    icon: Shield,
  },
  {
    id: 'cardio',
    label: 'Cardio',
    icon: HeartPulse,
  },
  {
    id: 'free-weights',
    label: 'Free Weights',
    icon: Dumbbell,
  },
  {
    id: 'functional',
    label: 'Functional',
    icon: Bike,
  },
];

const galleryImages = [

  // UPPER BODY

  {
    image: '/images/GYM/machines/1.jpeg',
    category: 'upper-body',
    title: 'Back Machine',
  },
  {
    image: '/images/GYM/machines/2.jpeg',
    category: 'upper-body',
    title: 'Cable Pull Down',
  },
  {
    image: '/images/GYM/machines/6.jpeg',
    category: 'upper-body',
    title: 'Shoulder Machine',
  },
  {
    image: '/images/GYM/machines/8.jpeg',
    category: 'upper-body',
    title: 'Bicep Curl',
  },
  {
    image: '/images/GYM/machines/9.jpeg',
    category: 'upper-body',
    title: 'Chest Press',
  },
  {
    image: '/images/GYM/machines/11.jpeg',
    category: 'upper-body',
    title: 'Upper Body Machine',
  },

  // LOWER BODY

  {
    image: '/images/GYM/machines/3.jpeg',
    category: 'lower-body',
    title: 'Hamstring Machine',
  },
  {
    image: '/images/GYM/machines/4.jpeg',
    category: 'lower-body',
    title: 'Leg Extension',
  },
  {
    image: '/images/GYM/machines/15.jpeg',
    category: 'lower-body',
    title: 'Leg Press',
  },
  {
    image: '/images/GYM/machines/10.jpeg',
    category: 'lower-body',
    title: 'Free Squats',
  },

  // STRENGTH

  {
    image: '/images/GYM/machines/5.jpeg',
    category: 'strength',
    title: 'Gym Equipment',
  },
  {
    image: '/images/GYM/machines/7.jpeg',
    category: 'strength',
    title: 'Workout Setup',
  },
  {
    image: '/images/GYM/machines/12.jpeg',
    category: 'strength',
    title: 'Modern Gym',
  },
  {
    image: '/images/GYM/machines/13.jpeg',
    category: 'strength',
    title: 'Professional Equipment',
  },
  {
    image: '/images/GYM/machines/14.jpeg',
    category: 'strength',
    title: 'Soft Machines',
  },
  {
    image: '/images/GYM/machines/16.jpeg',
    category: 'strength',
    title: 'Inclined Press',
  },

  // CARDIO

  {
    image: '/images/GYM/cardio/1.jpeg',
    category: 'cardio',
    title: 'Cardio Zone',
  },

  // FREE WEIGHTS

  {
    image: '/images/GYM/dumbells and plates/1.jpeg',
    category: 'free-weights',
    title: 'Dumbbell Training',
  },
  {
    image: '/images/GYM/dumbells and plates/2.jpeg',
    category: 'free-weights',
    title: 'Rods And Plates',
  },
  {
    image: '/images/GYM/dumbells and plates/3.jpeg',
    category: 'free-weights',
    title: 'Strength Dumbbells',
  },

  // FUNCTIONAL

  {
    image: '/images/GYM/machines/7.jpeg',
    category: 'functional',
    title: 'Functional Training',
  },
];

const Gallery = () => {

  const [activeCategory, setActiveCategory] =
    useState('all');

  const filteredImages = useMemo(() => {

    if (activeCategory === 'all') {
      return galleryImages;
    }

    return galleryImages.filter(
      (img) =>
        img.category === activeCategory
    );

  }, [activeCategory]);

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={fadeUp}
      className="
        pt-24
        md:pt-32
        pb-20
        md:pb-24
        min-h-screen
        bg-[#0b0b0b]
        overflow-hidden
      "
    >

      <div className="container mx-auto px-4 md:px-6">

        {/* HEADING */}

        <SectionHeading subtitle="Inside Swarajya Gym">
          Our Training Ground
        </SectionHeading>

        {/* TEXT */}

        <div className="max-w-3xl mb-8 md:mb-10">

          <p className="text-neutral-400 leading-relaxed text-base md:text-lg">
            Explore premium strength machines,
            cardio setups, free weights and
            professional training equipment
            designed for every fitness level.
          </p>

        </div>

        {/* FILTERS */}

        <div className="
          flex
          gap-3
          mb-10
          overflow-x-auto
          scrollbar-hide
          pb-2
        ">

          {categories.map((item) => {

            const Icon = item.icon;

            return (
              <button
                key={item.id}
                onClick={() =>
                  setActiveCategory(item.id)
                }
                className={`
                  flex
                  items-center
                  gap-2
                  px-4
                  md:px-5
                  py-3
                  rounded-2xl
                  border
                  transition-all
                  duration-300
                  whitespace-nowrap
                  shrink-0
                  ${
                    activeCategory === item.id
                      ? 'bg-orange-500 border-orange-500 text-white'
                      : 'bg-[#151515] border-white/10 text-neutral-300 hover:border-orange-500'
                  }
                `}
              >

                <Icon className="w-4 h-4" />

                <span className="text-sm font-medium">
                  {item.label}
                </span>

              </button>
            );
          })}

        </div>

      </div>

      {/* MOBILE SAFE FLOATING STRIP */}

      <div className="overflow-hidden mb-10 md:mb-14">

        <motion.div
          animate={{
            x: ['0%', '-40%'],
          }}
          transition={{
            repeat: Infinity,
            duration: 30,
            ease: 'linear',
          }}
          className="flex gap-4 w-max"
        >

          {[...galleryImages.slice(0, 8),
            ...galleryImages.slice(0, 8)].map(
            (img, i) => (

              <div
                key={i}
                className="
                  relative
                  w-[220px]
                  md:w-[280px]
                  h-[150px]
                  md:h-[190px]
                  rounded-2xl
                  md:rounded-3xl
                  overflow-hidden
                  shrink-0
                  border
                  border-white/10
                "
              >

                <img
                  src={img.image}
                  alt={img.title}
                  loading="lazy"
                  className="
                    w-full
                    h-full
                    object-cover
                  "
                />

                <div className="
                  absolute
                  inset-0
                  bg-gradient-to-t
                  from-black/70
                  via-black/10
                  to-transparent
                " />

                <div className="
                  absolute
                  bottom-3
                  left-3
                  md:bottom-4
                  md:left-4
                ">

                  <p className="
                    text-white
                    font-semibold
                    text-sm
                    md:text-lg
                  ">
                    {img.title}
                  </p>

                </div>

              </div>
            )
          )}

        </motion.div>

      </div>

      {/* GRID */}

      <div className="container mx-auto px-4 md:px-6">

        <div className="
          grid
          grid-cols-1
          sm:grid-cols-2
          lg:grid-cols-3
          gap-5
          md:gap-6
        ">

          {filteredImages.map((img, i) => (

            <motion.div
              key={i}
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.4,
                delay: i * 0.03,
              }}
              className="
                group
                relative
                overflow-hidden
                rounded-[24px]
                md:rounded-[28px]
                border
                border-white/10
                bg-[#121212]
                hover:shadow-[0_0_40px_rgba(249,115,22,0.20)]
                transition-all
                duration-500
              "
            >

              {/* IMAGE */}

              <div className="overflow-hidden">

                <img
                  src={img.image}
                  alt={img.title}
                  loading="lazy"
                  className="
                    w-full
                    h-[240px]
                    sm:h-[260px]
                    object-cover
                    transition-all
                    duration-700
                    group-hover:scale-105
                    brightness-90
                    group-hover:brightness-110
                  "
                />

              </div>

              {/* OVERLAY */}

              <div className="
                absolute
                inset-0
                bg-gradient-to-t
                from-black/80
                via-black/20
                to-transparent
                opacity-90
              " />

              {/* CONTENT */}

              <div className="
                absolute
                bottom-0
                left-0
                w-full
                p-4
                md:p-5
              ">

                <p className="
                  text-white
                  text-lg
                  md:text-xl
                  font-bold
                ">
                  {img.title}
                </p>

                <p className="
                  text-orange-400
                  text-xs
                  md:text-sm
                  capitalize
                  mt-1
                ">
                  {img.category.replace('-', ' ')}
                </p>

              </div>

            </motion.div>
          ))}

        </div>

      </div>

    </motion.div>
  );
};

export default Gallery;