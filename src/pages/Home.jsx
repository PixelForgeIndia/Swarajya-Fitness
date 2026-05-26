import { motion } from 'framer-motion';
import {
  ArrowRight,
  MessageCircle,
  Users,
  ShieldCheck,
  Dumbbell,
  Clock,
  CheckCircle2,
} from 'lucide-react';

import { fadeUp, staggerContainer } from '../utils/animations';

import Button from '../components/ui/Button';
import SectionHeading from '../components/ui/SectionHeading';

const Home = ({ navigate }) => {
  return (
    <div className="w-full bg-[#0a0d12] text-white overflow-hidden">

      {/* HERO SECTION */}
      <section className="relative min-h-screen flex items-center overflow-hidden">

        {/* BACKGROUND */}
        <div className="absolute inset-0 z-0">

          {/* MAIN HERO IMAGE */}
          <img
            src="https://images.unsplash.com/photo-1605296867304-46d5465a13f1?q=80&w=2400&auto=format&fit=crop"
            alt="Gym Motivation"
            className="
              w-full
              h-full
              object-cover
              object-center
              scale-105
            "
          />

          {/* CLEAN OVERLAY */}
          <div className="absolute inset-0 bg-black/45" />

          {/* LEFT CONTENT VISIBILITY */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#0a0d12]/92 via-[#0a0d12]/55 to-transparent" />

          {/* ORANGE GLOW */}
          <div className="absolute top-0 left-0 w-[550px] h-[550px] bg-orange-500/25 blur-[130px]" />

        </div>

        {/* CONTENT */}
        <div className="container mx-auto px-6 relative z-20 pt-28 pb-16">

          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="max-w-3xl"
          >

            {/* LABEL */}
            <motion.div
              variants={fadeUp}
              className="flex items-center gap-3 mb-6"
            >

              <span className="h-[2px] w-10 bg-orange-500" />

              <span className="text-orange-400 font-bold tracking-[0.22em] uppercase text-xs sm:text-sm">
                Real Strength • Real Transformation
              </span>

            </motion.div>

            {/* HEADING */}
            <motion.h1
              variants={fadeUp}
              className="
                text-5xl
                sm:text-6xl
                md:text-7xl
                lg:text-[7rem]
                font-black
                uppercase
                tracking-[-0.05em]
                leading-[0.92]
                mb-8
              "
            >

              Build
              <br />

              Strength.
              <br />

              Build
              <br />

              <span className="text-orange-500">
                Confidence.
              </span>

            </motion.h1>

            {/* DESCRIPTION */}
            <motion.p
              variants={fadeUp}
              className="
                text-base
                md:text-xl
                text-neutral-200
                max-w-2xl
                leading-relaxed
                mb-10
              "
            >

              Push your limits in a high-energy fitness environment
              designed for real transformation, discipline, and confidence.
              Train with expert guidance and become the strongest version of yourself.

            </motion.p>

            {/* BUTTONS */}
            <motion.div
              variants={fadeUp}
              className="flex flex-wrap gap-4"
            >

              <Button
                onClick={() => navigate('memberships')}
                className="
                  group
                  shadow-[0_0_35px_rgba(249,115,22,0.35)]
                "
              >

                Join Now

                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />

              </Button>

              <Button
                variant="outline"
                onClick={() =>
                  window.open(
                    `https://wa.me/919762674241?text=Hi%20Swarajya%20Gym,%0A%0AI%20want%20to%20know%20more%20about%20your%20gym%20and%20membership%20plans.`,
                    '_blank'
                  )
                }
                className="
                  bg-white/10
                  border-white/20
                  backdrop-blur-md
                  text-white
                  hover:bg-white/20
                "
              >

                <MessageCircle className="mr-2 w-5 h-5 text-green-400" />

                WhatsApp Us

              </Button>

            </motion.div>

          </motion.div>

        </div>

      </section>

      {/* STATS */}
      <section className="relative py-20 bg-[#11161d] overflow-hidden">

        {/* BACKGROUND IMAGE */}
        <div className="absolute inset-0 opacity-[0.08]">

          <img
            src="https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=80&w=2000&auto=format&fit=crop"
            alt="Gym Background"
            className="w-full h-full object-cover"
          />

        </div>

        <div className="container mx-auto px-6 relative z-10">

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">

            {[
              {
                icon: Users,
                title: '1000+',
                sub: 'Happy Members',
              },

              {
                icon: ShieldCheck,
                title: '20 Years',
                sub: 'Fitness Experience',
              },

              {
                icon: Dumbbell,
                title: 'Modern',
                sub: 'Gym Equipment',
              },

              {
                icon: Clock,
                title: '6AM - 11PM',
                sub: 'Open Daily',
              },

            ].map((stat, i) => (
              <motion.div
                key={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                whileHover={{
                  y: -8,
                  scale: 1.02,
                }}
                className="
                  bg-[#171c24]/90
                  backdrop-blur-md
                  border
                  border-white/5
                  rounded-3xl
                  p-7
                  text-center
                  shadow-xl
                  hover:border-orange-500/30
                  hover:shadow-[0_0_30px_rgba(249,115,22,0.12)]
                  transition-all
                  duration-500
                "
              >

                <stat.icon className="w-8 h-8 text-orange-500 mx-auto mb-4" />

                <h3 className="text-3xl font-black text-white mb-2">
                  {stat.title}
                </h3>

                <p className="text-sm text-neutral-400">
                  {stat.sub}
                </p>

              </motion.div>
            ))}

          </div>

        </div>

      </section>

     {/* WHY CHOOSE US SECTION */}
<section className="relative py-28 overflow-hidden">

  {/* BACKGROUND */}
  <div className="absolute inset-0">

    <img
      src="/images/Background/1.png"
      alt="Workout Background"
      className="
        w-full
        h-full
        object-cover
        scale-105
      "
    />

    {/* DARK PREMIUM OVERLAY */}
<div className="absolute inset-0 bg-gradient-to-br from-[#050505]/65 via-[#0b0b0b]/55 to-[#111827]/65" />
    {/* ORANGE GLOW */}
    <div className="absolute top-0 left-0 w-full h-full bg-orange-500/5" />

  </div>

  {/* BLUR CIRCLES */}
  <div className="absolute top-20 left-10 w-72 h-72 bg-orange-500/10 blur-[120px] rounded-full" />

  <div className="absolute bottom-10 right-10 w-80 h-80 bg-orange-400/10 blur-[140px] rounded-full" />

  <div className="container mx-auto px-6 relative z-10">

    <div className="flex flex-col lg:flex-row items-center gap-16">

     {/* EMPTY SPACE FOR BETTER LAYOUT */}
<div className="hidden lg:block lg:w-1/2" />

      {/* RIGHT CONTENT */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
        className="w-full lg:w-1/2"
      >

        {/* SUBTITLE */}
        <p className="text-orange-500 uppercase tracking-[0.3em] font-semibold mb-4">
          Why Choose Us
        </p>

        {/* HEADING */}
        <h2 className="text-5xl md:text-6xl font-black text-white leading-tight mb-6">
          Train With
          <span className="text-orange-500"> Discipline.</span>
        </h2>

        {/* DESCRIPTION */}
        <p className="text-neutral-300 text-lg leading-relaxed mb-10 max-w-xl">
          Swarajya Gym Club provides a
          motivating atmosphere, modern
          equipment and expert guidance to
          help every member become stronger,
          healthier and more confident.
        </p>

        {/* FEATURES */}
        <div className="space-y-6">

          {[
            {
              title: 'Beginner Friendly Training',
              desc:
                'Our trainers guide every member personally from the very first day.',
            },

            {
              title: 'Affordable Membership Plans',
              desc:
                'Flexible and honest pricing suitable for students and professionals.',
            },

            {
              title: '20+ Years Experience',
              desc:
                'Helping people transform physically and mentally through disciplined fitness.',
            },

          ].map((item, i) => (

            <div
              key={i}
              className="
                group
                bg-white/5
                backdrop-blur-xl
                rounded-3xl
                p-6
                border
                border-white/10
                hover:border-orange-500/40
                hover:bg-white/10
                transition-all
                duration-500
              "
            >

              <div className="flex gap-5">

                {/* ICON */}
                <div
                  className="
                    w-14
                    h-14
                    rounded-2xl
                    bg-orange-500/15
                    border
                    border-orange-500/20
                    flex
                    items-center
                    justify-center
                    shrink-0
                  "
                >

                  <CheckCircle2 className="w-7 h-7 text-orange-500" />

                </div>

                {/* TEXT */}
                <div>

                  <h4 className="text-2xl font-bold text-white mb-2">
                    {item.title}
                  </h4>

                  <p className="text-neutral-400 leading-relaxed">
                    {item.desc}
                  </p>

                </div>

              </div>

            </div>
          ))}

        </div>

        {/* BUTTON */}
        <Button
          onClick={() => navigate('about')}
          className="
            mt-10
            bg-orange-500
            hover:bg-orange-600
            text-white
            px-8
            py-6
            rounded-2xl
            text-lg
            font-semibold
            shadow-[0_0_35px_rgba(249,115,22,0.35)]
            transition-all
            duration-500
          "
        >
          Know More
        </Button>

      </motion.div>

    </div>

  </div>

</section>

      {/* MEMBERSHIP */}
      <section className="relative py-28 bg-[#11161d] overflow-hidden">

        {/* BACKGROUND IMAGE */}
        <div className="absolute inset-0 opacity-[0.06]">

          <img
            src="https://images.unsplash.com/photo-1518611012118-696072aa579a?q=80&w=2200&auto=format&fit=crop"
            alt="Fitness Background"
            className="w-full h-full object-cover"
          />

        </div>

        <div className="container mx-auto px-6 text-center relative z-10">

          <SectionHeading subtitle="Membership Plans">
            Affordable Pricing
          </SectionHeading>

          <p className="text-neutral-400 max-w-2xl mx-auto mt-4 mb-14">
            Flexible plans designed for students, beginners,
            and long-term fitness transformation.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">

            {[
              {
                title: '1 Month',
                price: '₹1000',
                subtitle: 'Best for beginners',
                note: 'Renew at ₹700/month',
                features: [
                  'Full Gym Access',
                  'Strength & Cardio Training',
                  'Trainer Supervision',
                  'Beginner Friendly Environment',
                ],
                popular: true,
              },

              {
                title: '3 Months',
                price: '₹2100',
                subtitle: 'Best value',
                note: 'Save more with quarterly plan',
                features: [
                  'Everything in Monthly',
                  'Workout Planning Support',
                  'Basic Diet Guidance',
                  'More Savings Than Monthly Plan',
                ],
              },

              {
                title: '12 Months',
                price: '₹8400',
                subtitle: 'Transformation plan',
                note: 'Most economical choice',
                features: [
                  'Everything in 3 Month Plan',
                  'Personal Fitness Attention',
                  'Transformation Guidance',
                  'Best Value Membership',
                ],
              },
            ].map((plan, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                whileHover={{
                  y: -10,
                  scale: 1.02,
                }}
                className={`
                  relative
                  bg-[#171c24]/92
                  backdrop-blur-md
                  rounded-[2rem]
                  p-8
                  border
                  ${
                    plan.popular
                      ? 'border-orange-500 shadow-[0_0_35px_rgba(249,115,22,0.18)]'
                      : 'border-white/5'
                  }
                  text-left
                  transition-all
                  duration-500
                `}
              >

                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-orange-500 text-white text-xs font-bold uppercase tracking-wider py-1 px-4 rounded-full">
                    Most Popular
                  </div>
                )}

                <h3 className="text-3xl font-black text-white mb-3">
                  {plan.title}
                </h3>

                <div className="mb-3">

                  <span className="text-5xl font-black text-orange-500">
                    {plan.price}
                  </span>

                </div>

                <p className="text-sm font-medium text-white mb-1">
                  {plan.subtitle}
                </p>

                <p className="text-xs text-neutral-500 mb-6 pb-6 border-b border-white/10">
                  {plan.note}
                </p>

                <ul className="space-y-4 mb-8">

                  {plan.features.map((feature, idx) => (
                    <li
                      key={idx}
                      className="flex items-center text-sm text-neutral-300"
                    >

                      <CheckCircle2 className="w-4 h-4 text-orange-500 mr-3 shrink-0" />

                      {feature}

                    </li>
                  ))}

                </ul>

                <Button
                  className="w-full"
                  variant={plan.popular ? 'primary' : 'outline'}
                  onClick={() => navigate('memberships')}
                >
                  View Plans
                </Button>

              </motion.div>
            ))}

          </div>

        </div>

      </section>

    </div>
  );
};

export default Home;