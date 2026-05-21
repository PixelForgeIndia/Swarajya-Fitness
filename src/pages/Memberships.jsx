import { motion } from 'framer-motion';
import {
  CheckCircle2,
  Sparkles,
  Crown,
  Flame,
} from 'lucide-react';

import { MEMBERSHIPS } from '../data/brand';
import { fadeUp } from '../utils/animations';

import Button from '../components/ui/Button';
import SectionHeading from '../components/ui/SectionHeading';

const Memberships = ({ navigate }) => {
  // UPDATED PRICES
  const updatedPlans = MEMBERSHIPS.map((plan) => {
    // 3 MONTH PLAN
    if (plan.title.includes('3')) {
      return {
        ...plan,
        price: '₹2100',

        features: [
          'Everything in Monthly',
          'Workout Planning Support',
          'Basic Diet Guidance',
          'More Savings Than Monthly Plan',
        ],
      };
    }

    // 12 MONTH PLAN
    if (plan.title.includes('12')) {
      return {
        ...plan,
        price: '₹8400',

        features: [
          'Everything in 3 Month Plan',
          'Personal Fitness Attention',
          'Transformation Guidance',
          'Best Value Membership',
        ],
      };
    }

    // 1 MONTH PLAN
    return {
      ...plan,

      features: [
        'Full Gym Access',
        'Strength & Cardio Training',
        'Trainer Supervision',
        'Beginner Friendly Environment',
      ],
    };
  });

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={fadeUp}
      className="
        pt-32
        pb-28
        min-h-screen
        bg-gradient-to-b
        from-[#0b0b0b]
        via-[#111111]
        to-[#16110d]
        overflow-hidden
      "
    >
      <div className="container mx-auto px-6">
        {/* HEADING */}
        <SectionHeading subtitle="Pricing Plans">
          Simple. Honest. Affordable.
        </SectionHeading>

        {/* SPECIAL OFFER */}
        <motion.div
          whileHover={{ scale: 1.01 }}
          className="
            relative
            overflow-hidden
            bg-gradient-to-r
            from-orange-500/15
            via-orange-400/10
            to-orange-500/15
            border
            border-orange-500/30
            rounded-[24px]
            p-5
            md:p-6
            mb-12
            flex
            flex-col
            lg:flex-row
            items-start
            lg:items-center
            justify-between
            gap-5
            backdrop-blur-xl
            shadow-[0_0_40px_rgba(249,115,22,0.10)]
          "
        >
          {/* GLOW */}
          <div className="absolute top-0 left-0 w-40 h-40 bg-orange-500/10 blur-[90px]" />
          <div className="absolute bottom-0 right-0 w-40 h-40 bg-orange-400/10 blur-[90px]" />

          <div className="relative z-10 flex items-start gap-5">
            <div
              className="
                w-14
                h-14
                rounded-2xl
                bg-orange-500/20
                border
                border-orange-500/20
                flex
                items-center
                justify-center
                shrink-0
              "
            >
              <Flame className="text-orange-400" size={28} />
            </div>

            <div>
              <h3 className="text-2xl md:text-3xl font-black text-white mb-2">
                First Month ₹1000 Only
              </h3>

              <p className="text-neutral-300 text-sm md:text-base leading-relaxed">
                Start your fitness journey today and train in a
                motivating environment with professional guidance.
                Renewal from next month at just ₹700/month.
              </p>
            </div>
          </div>

          <div className="relative z-10">
            <Button
              onClick={() => navigate('contact')}
              className="
                px-7
                py-3.5
                text-base
                rounded-2xl
                shadow-[0_0_25px_rgba(249,115,22,0.25)]
              "
            >
              Claim Offer
            </Button>
          </div>
        </motion.div>

        {/* MEMBERSHIP GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {updatedPlans.map((plan, i) => (
            <motion.div
              key={i}
              whileHover={{
                y: -8,
                scale: 1.015,
              }}
              transition={{
                type: 'spring',
                stiffness: 250,
                damping: 18,
              }}
              className={`
                relative
                overflow-hidden
                rounded-[32px]
                p-[1px]
                group
                ${
                  plan.popular
                    ? 'bg-gradient-to-br from-orange-500/60 via-orange-400/30 to-transparent'
                    : 'bg-gradient-to-br from-white/10 via-white/5 to-transparent'
                }
              `}
            >
              {/* INNER CARD */}
              <div
                className="
                  relative
                  h-full
                  rounded-[32px]
                  bg-[rgba(20,20,20,0.88)]
                  backdrop-blur-2xl
                  border
                  border-white/5
                  p-6
                  md:p-7
                  flex
                  flex-col
                  overflow-hidden
                "
              >
                {/* GLOW EFFECTS */}
                <div
                  className="
                    absolute
                    -top-10
                    -right-10
                    w-40
                    h-40
                    bg-orange-500/10
                    blur-[90px]
                    opacity-0
                    group-hover:opacity-100
                    transition-all
                    duration-500
                  "
                />

                <div
                  className="
                    absolute
                    bottom-0
                    left-0
                    w-40
                    h-40
                    bg-orange-400/10
                    blur-[90px]
                    opacity-0
                    group-hover:opacity-100
                    transition-all
                    duration-500
                  "
                />

                {/* POPULAR BADGE */}
                {plan.popular && (
                  <div
                    className="
                      absolute
                      top-5
                      right-5
                      bg-orange-500
                      text-white
                      text-xs
                      font-bold
                      uppercase
                      tracking-widest
                      py-2
                      px-4
                      rounded-full
                      flex
                      items-center
                      gap-2
                      shadow-[0_0_20px_rgba(249,115,22,0.4)]
                    "
                  >
                    <Crown size={14} />
                    Popular
                  </div>
                )}

                {/* ICON */}
                <div
                  className="
                    w-14
                    h-14
                    rounded-2xl
                    bg-orange-500/10
                    border
                    border-orange-500/20
                    flex
                    items-center
                    justify-center
                    mb-7
                  "
                >
                  <Sparkles className="text-orange-400" size={26} />
                </div>

                {/* TITLE */}
                <h3 className="text-2xl md:text-3xl font-black text-white mb-4">
                  {plan.title}
                </h3>

                {/* PRICE */}
                <div className="mb-4">
                  <span className="text-5xl md:text-6xl font-black text-orange-400">
                    {plan.price}
                  </span>

                  {plan.title.includes('Month') &&
                    !plan.title.includes('12') && (
                      <span className="text-neutral-400 text-lg">
                        {' '}
                        / plan
                      </span>
                    )}
                </div>

                {/* SUBTITLE */}
                <p className="text-white font-semibold mb-2 text-lg">
                  {plan.subtitle}
                </p>

                {/* NOTE */}
                <p
                  className="
                    text-neutral-400
                    mb-7
                    pb-7
                    border-b
                    border-white/10
                    leading-relaxed
                    text-sm
                    md:text-base
                  "
                >
                  {plan.note}
                </p>

                {/* FEATURES */}
                <ul className="space-y-4 mb-8 flex-1">
                  {plan.features.map((feature, idx) => (
                    <li
                      key={idx}
                      className="
                        flex
                        items-start
                        text-neutral-200
                        text-[15px]
                        md:text-[16px]
                        leading-relaxed
                      "
                    >
                      <div
                        className="
                          w-6
                          h-6
                          rounded-full
                          bg-orange-500/10
                          border
                          border-orange-500/20
                          flex
                          items-center
                          justify-center
                          mr-4
                          shrink-0
                          mt-0.5
                        "
                      >
                        <CheckCircle2
                          className="text-orange-400"
                          size={14}
                        />
                      </div>

                      {feature}
                    </li>
                  ))}
                </ul>

                {/* BUTTON */}
                <Button
                  variant={plan.popular ? 'primary' : 'outline'}
                  className="
                    w-full
                    mt-auto
                    py-3.5
                    rounded-2xl
                    text-base
                    md:text-lg
                    font-semibold
                    transition-all
                    duration-300
                    hover:scale-[1.02]
                  "
                  onClick={() => navigate('contact')}
                >
                  Enquire Now
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Memberships;