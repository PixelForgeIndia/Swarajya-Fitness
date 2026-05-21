import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

import {
  Activity,
  Flame,
  Droplets,
  Dumbbell,
  ChevronDown,
  Apple,
  Target,
  Sparkles,
  HeartPulse,
  Zap,
} from 'lucide-react';

import { fadeUp } from '../utils/animations';

import SectionHeading from '../components/ui/SectionHeading';
import Button from '../components/ui/Button';

const tools = [
  {
    id: 0,
    title: 'BMI Calculator',
    subtitle: 'Check your body health instantly',
    icon: Activity,
    gradient: 'from-orange-500 to-red-500',
  },
  {
    id: 1,
    title: 'Calories Calculator',
    subtitle: 'Know your maintenance calories',
    icon: Flame,
    gradient: 'from-yellow-500 to-orange-500',
  },
  {
    id: 2,
    title: 'Water Intake',
    subtitle: 'Daily hydration recommendation',
    icon: Droplets,
    gradient: 'from-cyan-500 to-blue-500',
  },
  {
    id: 3,
    title: 'Protein Intake',
    subtitle: 'Daily muscle recovery intake',
    icon: Apple,
    gradient: 'from-green-500 to-emerald-500',
  },
  {
    id: 4,
    title: 'Body Fat Estimator',
    subtitle: 'Track transformation progress',
    icon: Target,
    gradient: 'from-pink-500 to-purple-500',
  },
  {
    id: 5,
    title: 'Fitness Tips',
    subtitle: 'Habits that build real physique',
    icon: Dumbbell,
    gradient: 'from-orange-500 to-yellow-500',
  },
];

const inputStyle =
  'w-full bg-[#111] border border-white/10 rounded-2xl px-5 py-4 text-white focus:outline-none focus:border-orange-500 transition-all duration-300 placeholder:text-neutral-500';

const ToolCard = ({
  open,
  setOpen,
  icon: Icon,
  title,
  subtitle,
  gradient,
  children,
}) => {
  return (
    <motion.div
      layout
      whileHover={{ y: -4 }}
      transition={{ duration: 0.3 }}
      className="relative overflow-hidden rounded-[30px] border border-white/10 bg-[#111111]/90 backdrop-blur-xl shadow-[0_20px_80px_rgba(0,0,0,0.45)]"
    >
      <div
        className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-[0.07]`}
      />

      <button
        onClick={() => setOpen(!open)}
        className="relative z-10 w-full p-6 md:p-8 flex items-center justify-between text-left"
      >
        <div className="flex items-center gap-5">

          <div
            className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${gradient} flex items-center justify-center shadow-lg`}
          >
            <Icon className="w-8 h-8 text-white" />
          </div>

          <div>
            <h3 className="text-2xl md:text-3xl font-black text-white">
              {title}
            </h3>

            <p className="text-neutral-400 mt-1">
              {subtitle}
            </p>
          </div>
        </div>

        <motion.div
          animate={{
            rotate: open ? 180 : 0,
          }}
        >
          <ChevronDown className="text-white w-7 h-7" />
        </motion.div>
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{
              opacity: 0,
              height: 0,
            }}
            animate={{
              opacity: 1,
              height: 'auto',
            }}
            exit={{
              opacity: 0,
              height: 0,
            }}
            transition={{ duration: 0.4 }}
            className="relative z-10 px-6 md:px-8 pb-8"
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

const ResultCard = ({ title, value, subtitle }) => (
  <motion.div
    initial={{ opacity: 0, y: 15 }}
    animate={{ opacity: 1, y: 0 }}
    className="mt-7 rounded-3xl bg-gradient-to-br from-orange-500/15 to-orange-500/5 border border-orange-500/20 p-7 text-center"
  >
    <p className="text-neutral-400 uppercase tracking-[3px] text-xs mb-3">
      {title}
    </p>

    <div className="text-6xl md:text-7xl font-black text-orange-500">
      {value}
    </div>

    <p className="text-white mt-3 text-lg">
      {subtitle}
    </p>
  </motion.div>
);

const Tools = () => {
  const [openTool, setOpenTool] = useState(0);

  /* BMI */
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [bmi, setBmi] = useState(null);
  const [status, setStatus] = useState('');

  /* Calories */
  const [calories, setCalories] = useState(null);
  const [cWeight, setCWeight] = useState('');
  const [cHeight, setCHeight] = useState('');
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('male');

  /* Water */
  const [waterWeight, setWaterWeight] = useState('');
  const [water, setWater] = useState(null);

  /* Protein */
  const [proteinWeight, setProteinWeight] = useState('');
  const [protein, setProtein] = useState(null);

  /* Body Fat */
  const [fatWeight, setFatWeight] = useState('');
  const [fatHeight, setFatHeight] = useState('');
  const [bodyFat, setBodyFat] = useState(null);

  const calculateBMI = (e) => {
    e.preventDefault();

    const h = height / 100;

    const value = (
      weight /
      (h * h)
    ).toFixed(1);

    setBmi(value);

    if (value < 18.5)
      setStatus('Underweight');

    else if (value < 25)
      setStatus('Healthy');

    else if (value < 30)
      setStatus('Overweight');

    else
      setStatus('Obese');
  };

  const calculateCalories = (e) => {
    e.preventDefault();

    let bmr;

    if (gender === 'male') {
      bmr =
        10 * cWeight +
        6.25 * cHeight -
        5 * age +
        5;
    } else {
      bmr =
        10 * cWeight +
        6.25 * cHeight -
        5 * age -
        161;
    }

    setCalories(Math.round(bmr * 1.55));
  };

  const calculateWater = (e) => {
    e.preventDefault();

    setWater(
      (waterWeight * 0.033).toFixed(1)
    );
  };

  const calculateProtein = (e) => {
    e.preventDefault();

    setProtein(
      (proteinWeight * 1.6).toFixed(0)
    );
  };

  const calculateBodyFat = (e) => {
    e.preventDefault();

    const bmiCalc =
      fatWeight /
      ((fatHeight / 100) *
        (fatHeight / 100));

    const fat =
      (
        1.20 * bmiCalc +
        0.23 * 25 -
        16.2
      ).toFixed(1);

    setBodyFat(fat);
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={fadeUp}
      className="relative overflow-hidden pt-28 pb-28 min-h-screen"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-[#090909]" />

      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-orange-500/10 blur-[140px]" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-purple-500/10 blur-[140px]" />

      <div className="relative z-10 container mx-auto px-4 md:px-6">

        <SectionHeading subtitle="Premium Tools">
          Fitness Intelligence Hub
        </SectionHeading>

        <div className="max-w-4xl mb-16">
          <p className="text-neutral-300 text-lg md:text-xl leading-relaxed">
            More than a gym website. These smart fitness tools help members track progress, calculate goals, improve recovery and stay consistent in their transformation journey.
          </p>
        </div>

        <div className="space-y-8">

          {/* BMI */}
          <ToolCard
            open={openTool === 0}
            setOpen={() =>
              setOpenTool(openTool === 0 ? null : 0)
            }
            {...tools[0]}
          >
            <form
              onSubmit={calculateBMI}
              className="space-y-5"
            >
              <input
                type="number"
                placeholder="Enter Weight (kg)"
                value={weight}
                onChange={(e) =>
                  setWeight(e.target.value)
                }
                className={inputStyle}
                required
              />

              <input
                type="number"
                placeholder="Enter Height (cm)"
                value={height}
                onChange={(e) =>
                  setHeight(e.target.value)
                }
                className={inputStyle}
                required
              />

              <Button
                type="submit"
                className="w-full"
              >
                Calculate BMI
              </Button>
            </form>

            {bmi && (
              <ResultCard
                title="Your BMI"
                value={bmi}
                subtitle={status}
              />
            )}
          </ToolCard>

          {/* Calories */}
          <ToolCard
            open={openTool === 1}
            setOpen={() =>
              setOpenTool(openTool === 1 ? null : 1)
            }
            {...tools[1]}
          >
            <form
              onSubmit={calculateCalories}
              className="space-y-5"
            >
              <input
                type="number"
                placeholder="Weight (kg)"
                value={cWeight}
                onChange={(e) =>
                  setCWeight(e.target.value)
                }
                className={inputStyle}
                required
              />

              <input
                type="number"
                placeholder="Height (cm)"
                value={cHeight}
                onChange={(e) =>
                  setCHeight(e.target.value)
                }
                className={inputStyle}
                required
              />

              <input
                type="number"
                placeholder="Age"
                value={age}
                onChange={(e) =>
                  setAge(e.target.value)
                }
                className={inputStyle}
                required
              />

              <select
                value={gender}
                onChange={(e) =>
                  setGender(e.target.value)
                }
                className={inputStyle}
              >
                <option value="male">
                  Male
                </option>

                <option value="female">
                  Female
                </option>
              </select>

              <Button
                type="submit"
                className="w-full"
              >
                Calculate Calories
              </Button>
            </form>

            {calories && (
              <ResultCard
                title="Daily Calories"
                value={calories}
                subtitle="kcal/day"
              />
            )}
          </ToolCard>

          {/* Water */}
          <ToolCard
            open={openTool === 2}
            setOpen={() =>
              setOpenTool(openTool === 2 ? null : 2)
            }
            {...tools[2]}
          >
            <form
              onSubmit={calculateWater}
              className="space-y-5"
            >
              <input
                type="number"
                placeholder="Weight (kg)"
                value={waterWeight}
                onChange={(e) =>
                  setWaterWeight(e.target.value)
                }
                className={inputStyle}
                required
              />

              <Button
                type="submit"
                className="w-full"
              >
                Calculate Water Intake
              </Button>
            </form>

            {water && (
              <ResultCard
                title="Recommended Water"
                value={`${water}L`}
                subtitle="per day"
              />
            )}
          </ToolCard>

          {/* Protein */}
          <ToolCard
            open={openTool === 3}
            setOpen={() =>
              setOpenTool(openTool === 3 ? null : 3)
            }
            {...tools[3]}
          >
            <form
              onSubmit={calculateProtein}
              className="space-y-5"
            >
              <input
                type="number"
                placeholder="Weight (kg)"
                value={proteinWeight}
                onChange={(e) =>
                  setProteinWeight(e.target.value)
                }
                className={inputStyle}
                required
              />

              <Button
                type="submit"
                className="w-full"
              >
                Calculate Protein
              </Button>
            </form>

            {protein && (
              <ResultCard
                title="Protein Intake"
                value={`${protein}g`}
                subtitle="recommended daily"
              />
            )}
          </ToolCard>

          {/* Body Fat */}
          <ToolCard
            open={openTool === 4}
            setOpen={() =>
              setOpenTool(openTool === 4 ? null : 4)
            }
            {...tools[4]}
          >
            <form
              onSubmit={calculateBodyFat}
              className="space-y-5"
            >
              <input
                type="number"
                placeholder="Weight (kg)"
                value={fatWeight}
                onChange={(e) =>
                  setFatWeight(e.target.value)
                }
                className={inputStyle}
                required
              />

              <input
                type="number"
                placeholder="Height (cm)"
                value={fatHeight}
                onChange={(e) =>
                  setFatHeight(e.target.value)
                }
                className={inputStyle}
                required
              />

              <Button
                type="submit"
                className="w-full"
              >
                Estimate Body Fat
              </Button>
            </form>

            {bodyFat && (
              <ResultCard
                title="Estimated Body Fat"
                value={`${bodyFat}%`}
                subtitle="track your progress"
              />
            )}
          </ToolCard>

          {/* Tips */}
          <ToolCard
            open={openTool === 5}
            setOpen={() =>
              setOpenTool(openTool === 5 ? null : 5)
            }
            {...tools[5]}
          >
            <div className="grid gap-5">

              {[
                {
                  icon: HeartPulse,
                  title: 'Recovery',
                  desc: 'Sleep 7-8 hours daily for proper muscle recovery.',
                },
                {
                  icon: Zap,
                  title: 'Consistency',
                  desc: 'Small consistent progress beats extreme workouts.',
                },
                {
                  icon: Sparkles,
                  title: 'Nutrition',
                  desc: 'Protein + hydration = faster transformation.',
                },
              ].map((tip, index) => (
                <motion.div
                  key={index}
                  whileHover={{
                    scale: 1.02,
                  }}
                  className="rounded-3xl bg-white/[0.03] border border-white/10 p-6"
                >
                  <div className="flex items-start gap-5">

                    <div className="w-14 h-14 rounded-2xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center">
                      <tip.icon className="w-7 h-7 text-orange-500" />
                    </div>

                    <div>
                      <h4 className="text-white text-xl font-bold mb-2">
                        {tip.title}
                      </h4>

                      <p className="text-neutral-400 leading-relaxed">
                        {tip.desc}
                      </p>
                    </div>

                  </div>
                </motion.div>
              ))}

            </div>
          </ToolCard>

        </div>
      </div>
    </motion.div>
  );
};

export default Tools;