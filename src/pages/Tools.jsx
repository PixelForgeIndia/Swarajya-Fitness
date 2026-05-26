import { useState } from 'react';

import {
  Activity,
  Flame,
 Target,
  ChevronDown,
} from 'lucide-react';

import SectionHeading from '../components/ui/SectionHeading';
import Button from '../components/ui/Button';

const tools = [
  {
    id: 0,
    title: 'BMI Calculator',
    subtitle: 'Check your body mass index',
    icon: Activity,
    gradient: 'from-orange-500 to-red-500',
  },
  {
    id: 1,
    title: 'Maintenance Calories',
    subtitle: 'Calories needed to maintain weight',
    icon: Flame,
    gradient: 'from-yellow-500 to-orange-500',
  },
  {
    id: 2,
    title: 'Goal Calories',
    subtitle: 'Calories for fat loss or muscle gain',
    icon: Target,
    gradient: 'from-pink-500 to-purple-500',
  },
];

const inputStyle =
  'w-full bg-[#111] border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-orange-500 placeholder:text-neutral-500';

const activityLevels = [
  {
    label: 'Sedentary',
    value: 1.2,
  },
  {
    label: 'Light Activity',
    value: 1.375,
  },
  {
    label: 'Moderate Activity',
    value: 1.55,
  },
  {
    label: 'Very Active',
    value: 1.725,
  },
  {
    label: 'Athlete',
    value: 1.9,
  },
];

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
    <div className="rounded-2xl border border-white/10 bg-[#111] overflow-hidden">

      <button
        onClick={() => setOpen(!open)}
        className="w-full p-5 flex items-center justify-between text-left"
      >
        <div className="flex items-center gap-4">

          <div
            className={`w-14 h-14 rounded-xl bg-gradient-to-br ${gradient} flex items-center justify-center shrink-0`}
          >
            <Icon className="w-7 h-7 text-white" />
          </div>

          <div>
            <h3 className="text-xl md:text-2xl font-bold text-white">
              {title}
            </h3>

            <p className="text-neutral-400 text-sm mt-1">
              {subtitle}
            </p>
          </div>

        </div>

        <ChevronDown
          className={`text-white w-5 h-5 transition-transform duration-200 ${
            open ? 'rotate-180' : ''
          }`}
        />
      </button>

      {open && (
        <div className="px-5 pb-5">
          {children}
        </div>
      )}

    </div>
  );
};

const ResultCard = ({
  title,
  value,
  subtitle,
}) => (
  <div className="mt-6 rounded-2xl border border-orange-500/20 bg-orange-500/10 p-6 text-center">

    <p className="text-neutral-400 uppercase tracking-[2px] text-xs mb-3">
      {title}
    </p>

    <div className="text-5xl md:text-6xl font-black text-orange-500">
      {value}
    </div>

    <p className="text-white mt-3 text-sm md:text-base">
      {subtitle}
    </p>

  </div>
);

const Tools = () => {

  const [openTool, setOpenTool] = useState(0);

  /* BMI */
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [bmi, setBmi] = useState(null);
  const [status, setStatus] = useState('');

  /* Maintenance */
  const [mWeight, setMWeight] = useState('');
  const [mHeight, setMHeight] = useState('');
  const [mAge, setMAge] = useState('');
  const [mGender, setMGender] = useState('male');
  const [mActivity, setMActivity] = useState('1.55');
  const [maintenanceCalories, setMaintenanceCalories] =
    useState(null);

  /* Goal */
  const [gWeight, setGWeight] = useState('');
  const [gHeight, setGHeight] = useState('');
  const [gAge, setGAge] = useState('');
  const [gGender, setGGender] = useState('male');
  const [gActivity, setGActivity] = useState('1.55');
  const [goal, setGoal] = useState('cut');
  const [goalCalories, setGoalCalories] =
    useState(null);

  /* Official Mifflin-St Jeor Formula */
  const calculateBMR = (
    weight,
    height,
    age,
    gender
  ) => {

    if (gender === 'male') {
      return (
        10 * weight +
        6.25 * height -
        5 * age +
        5
      );
    }

    return (
      10 * weight +
      6.25 * height -
      5 * age -
      161
    );
  };

  /* BMI */
  const calculateBMI = (e) => {
    e.preventDefault();

    const w = parseFloat(weight);
    const h = parseFloat(height) / 100;

    if (!w || !h) {
      return;
    }

    const result =
      w / (h * h);

    const rounded =
      result.toFixed(1);

    setBmi(rounded);

    if (result < 18.5) {
      setStatus('Underweight');
    } else if (result < 25) {
      setStatus('Healthy Weight');
    } else if (result < 30) {
      setStatus('Overweight');
    } else {
      setStatus('Obese');
    }
  };

  /* Maintenance Calories */
  const calculateMaintenance = (
    e
  ) => {
    e.preventDefault();

    const w = parseFloat(mWeight);
    const h = parseFloat(mHeight);
    const a = parseFloat(mAge);
    const activity =
      parseFloat(mActivity);

    if (!w || !h || !a) {
      return;
    }

    const bmr =
      calculateBMR(
        w,
        h,
        a,
        mGender
      );

    const calories =
      bmr * activity;

    setMaintenanceCalories(
      Math.round(calories)
    );
  };

  /* Goal Calories */
  const calculateGoalCalories = (
    e
  ) => {
    e.preventDefault();

    const w = parseFloat(gWeight);
    const h = parseFloat(gHeight);
    const a = parseFloat(gAge);
    const activity =
      parseFloat(gActivity);

    if (!w || !h || !a) {
      return;
    }

    const bmr =
      calculateBMR(
        w,
        h,
        a,
        gGender
      );

    const maintenance =
      bmr * activity;

    let target;

    /* Clean direct results */

    if (goal === 'cut') {
      target =
        maintenance - 500;
    } else {
      target =
        maintenance + 250;
    }

    setGoalCalories(
      Math.round(target)
    );
  };

  return (
    <div className="bg-[#090909] min-h-screen pt-24 pb-24">

      <div className="container mx-auto px-4 md:px-6">

        <SectionHeading subtitle="Fitness Tools">
          Gym Member Calculators
        </SectionHeading>

        <div className="max-w-3xl mb-12">
          <p className="text-neutral-400 text-base md:text-lg leading-relaxed">
            Accurate fitness calculators based on
            official fitness equations used by
            coaches and nutrition professionals.
          </p>
        </div>

        <div className="space-y-6">

          {/* BMI */}
          <ToolCard
            open={openTool === 0}
            setOpen={() =>
              setOpenTool(
                openTool === 0
                  ? null
                  : 0
              )
            }
            {...tools[0]}
          >

            <form
              onSubmit={calculateBMI}
              className="space-y-4"
            >

              <input
                type="number"
                placeholder="Weight (kg)"
                value={weight}
                onChange={(e) =>
                  setWeight(
                    e.target.value
                  )
                }
                className={inputStyle}
                required
              />

              <input
                type="number"
                placeholder="Height (cm)"
                value={height}
                onChange={(e) =>
                  setHeight(
                    e.target.value
                  )
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
                title="BMI"
                value={bmi}
                subtitle={status}
              />
            )}

          </ToolCard>

          {/* Maintenance Calories */}
          <ToolCard
            open={openTool === 1}
            setOpen={() =>
              setOpenTool(
                openTool === 1
                  ? null
                  : 1
              )
            }
            {...tools[1]}
          >

            <form
              onSubmit={
                calculateMaintenance
              }
              className="space-y-4"
            >

              <input
                type="number"
                placeholder="Weight (kg)"
                value={mWeight}
                onChange={(e) =>
                  setMWeight(
                    e.target.value
                  )
                }
                className={inputStyle}
                required
              />

              <input
                type="number"
                placeholder="Height (cm)"
                value={mHeight}
                onChange={(e) =>
                  setMHeight(
                    e.target.value
                  )
                }
                className={inputStyle}
                required
              />

              <input
                type="number"
                placeholder="Age"
                value={mAge}
                onChange={(e) =>
                  setMAge(
                    e.target.value
                  )
                }
                className={inputStyle}
                required
              />

              <select
                value={mGender}
                onChange={(e) =>
                  setMGender(
                    e.target.value
                  )
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

              <select
                value={mActivity}
                onChange={(e) =>
                  setMActivity(
                    e.target.value
                  )
                }
                className={inputStyle}
              >
                {activityLevels.map(
                  (item) => (
                    <option
                      key={item.value}
                      value={item.value}
                    >
                      {item.label}
                    </option>
                  )
                )}
              </select>

              <Button
                type="submit"
                className="w-full"
              >
                Calculate Calories
              </Button>

            </form>

            {maintenanceCalories && (
              <ResultCard
                title="Maintenance Calories"
                value={`${maintenanceCalories} kcal`}
                subtitle="Calories needed daily to maintain your current weight"
              />
            )}

          </ToolCard>

          {/* Goal Calories */}
          <ToolCard
            open={openTool === 2}
            setOpen={() =>
              setOpenTool(
                openTool === 2
                  ? null
                  : 2
              )
            }
            {...tools[2]}
          >

            <form
              onSubmit={
                calculateGoalCalories
              }
              className="space-y-4"
            >

              <input
                type="number"
                placeholder="Weight (kg)"
                value={gWeight}
                onChange={(e) =>
                  setGWeight(
                    e.target.value
                  )
                }
                className={inputStyle}
                required
              />

              <input
                type="number"
                placeholder="Height (cm)"
                value={gHeight}
                onChange={(e) =>
                  setGHeight(
                    e.target.value
                  )
                }
                className={inputStyle}
                required
              />

              <input
                type="number"
                placeholder="Age"
                value={gAge}
                onChange={(e) =>
                  setGAge(
                    e.target.value
                  )
                }
                className={inputStyle}
                required
              />

              <select
                value={gGender}
                onChange={(e) =>
                  setGGender(
                    e.target.value
                  )
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

              <select
                value={gActivity}
                onChange={(e) =>
                  setGActivity(
                    e.target.value
                  )
                }
                className={inputStyle}
              >
                {activityLevels.map(
                  (item) => (
                    <option
                      key={item.value}
                      value={item.value}
                    >
                      {item.label}
                    </option>
                  )
                )}
              </select>

              <select
                value={goal}
                onChange={(e) =>
                  setGoal(
                    e.target.value
                  )
                }
                className={inputStyle}
              >
                <option value="cut">
                  Fat Loss
                </option>

                <option value="bulk">
                  Muscle Gain
                </option>
              </select>

              <Button
                type="submit"
                className="w-full"
              >
                Calculate Goal Calories
              </Button>

            </form>

            {goalCalories && (
              <ResultCard
                title={
                  goal === 'cut'
                    ? 'Fat Loss Calories'
                    : 'Muscle Gain Calories'
                }
                value={`${goalCalories} kcal`}
                subtitle={
                  goal === 'cut'
                    ? 'Recommended daily calories for fat loss'
                    : 'Recommended daily calories for muscle gain'
                }
              />
            )}

          </ToolCard>

        </div>

      </div>

    </div>
  );
};

export default Tools;