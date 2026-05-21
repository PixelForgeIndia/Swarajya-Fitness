import { useState } from 'react';
import { motion } from 'framer-motion';

import {
  Dumbbell,
  Flame,
  Users,
  HeartPulse,
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
    id: 'machines',
    label: 'Machines',
    icon: Dumbbell,
  },
  {
    id: 'cardio',
    label: 'Cardio',
    icon: HeartPulse,
  },
  {
    id: 'workout',
    label: 'Workout',
    icon: Flame,
  },
  {
    id: 'members',
    label: 'Members',
    icon: Users,
  },
];

const galleryImages = [
  {
    image:
      'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1200&auto=format&fit=crop',
    category: 'machines',
    title: 'Strength Zone',
  },
  {
    image:
      'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=1200&auto=format&fit=crop',
    category: 'workout',
    title: 'Heavy Training',
  },
  {
    image:
      'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=1200&auto=format&fit=crop',
    category: 'cardio',
    title: 'Cardio Section',
  },
  {
    image:
      'https://images.unsplash.com/photo-1518611012118-696072aa579a?q=80&w=1200&auto=format&fit=crop',
    category: 'members',
    title: 'Fitness Community',
  },
  {
    image:
      'https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?q=80&w=1200&auto=format&fit=crop',
    category: 'machines',
    title: 'Machine Workout',
  },
  {
    image:
      'https://images.unsplash.com/photo-1599058917765-a780eda07a3e?q=80&w=1200&auto=format&fit=crop',
    category: 'workout',
    title: 'Power Training',
  },
  {
    image:
      'https://images.unsplash.com/photo-1549060279-7e168fcee0c2?q=80&w=1200&auto=format&fit=crop',
    category: 'cardio',
    title: 'Treadmill Area',
  },
  {
    image:
      'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=80&w=1200&auto=format&fit=crop',
    category: 'members',
    title: 'Group Workout',
  },
];

const Gallery = () => {
  const [activeCategory, setActiveCategory] =
    useState('all');

  const filteredImages =
    activeCategory === 'all'
      ? galleryImages
      : galleryImages.filter(
          (img) =>
            img.category ===
            activeCategory
        );

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={fadeUp}
      className="
        pt-32
        pb-24
        min-h-screen
        bg-[#0b0b0b]
        overflow-hidden
      "
    >

      <div className="container mx-auto px-4 md:px-6">

        {/* HEADING */}
        <SectionHeading subtitle="Inside Swarajya">
          Our Training Ground
        </SectionHeading>

        {/* TOP TEXT */}
        <div className="max-w-3xl mb-10">

          <p className="text-neutral-400 leading-relaxed text-lg">
            Explore the atmosphere, machines,
            workouts and transformation energy
            inside Swarajya Fitness Club.
          </p>

        </div>

        {/* FILTERS */}
        <div className="flex flex-wrap gap-3 mb-12">

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
                  px-5
                  py-3
                  rounded-2xl
                  border
                  transition-all
                  duration-300
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

      {/* FLOATING IMAGE STRIP */}
      <div className="overflow-hidden mb-14">

        <motion.div
          animate={{
            x: ['0%', '-50%'],
          }}
          transition={{
            repeat: Infinity,
            duration: 40,
            ease: 'linear',
          }}
          className="flex gap-5 w-max"
        >

          {[...galleryImages, ...galleryImages].map(
            (img, i) => (
              <div
                key={i}
                className="
                  relative
                  w-[280px]
                  h-[190px]
                  rounded-3xl
                  overflow-hidden
                  shrink-0
                  border
                  border-white/10
                "
              >

                <img
                  src={img.image}
                  alt={img.title}
                  className="
                    w-full
                    h-full
                    object-cover
                  "
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

                <div className="absolute bottom-4 left-4">

                  <p className="text-white font-bold text-lg">
                    {img.title}
                  </p>

                </div>

              </div>
            )
          )}

        </motion.div>

      </div>

      {/* MAIN GRID */}
      <div className="container mx-auto px-4 md:px-6">

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">

          {filteredImages.map((img, i) => (
            <motion.div
              key={i}
              initial={{
                opacity: 0,
                y: 30,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.4,
                delay: i * 0.05,
              }}
              className="
                group
                relative
                overflow-hidden
                rounded-[28px]
                border
                border-white/10
                bg-[#121212]
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
                    h-[260px]
                    object-cover
                    transition-all
                    duration-700
                    group-hover:scale-110
                  "
                />

              </div>

              {/* OVERLAY */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-90" />

              {/* CONTENT */}
              <div className="absolute bottom-0 left-0 w-full p-5">

                <div className="flex items-center justify-between gap-3">

                  <div>

                    <p className="text-white text-xl font-bold">
                      {img.title}
                    </p>

                    <p className="text-orange-400 text-sm capitalize mt-1">
                      {img.category}
                    </p>

                  </div>

                  <div className="
                    w-11
                    h-11
                    rounded-2xl
                    bg-orange-500/20
                    border
                    border-orange-500/30
                    flex
                    items-center
                    justify-center
                    text-orange-500
                  ">
                    →
                  </div>

                </div>

              </div>

            </motion.div>
          ))}

        </div>

      </div>

    </motion.div>
  );
};

export default Gallery;