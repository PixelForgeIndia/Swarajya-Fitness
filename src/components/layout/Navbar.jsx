import { useState, useEffect } from 'react';

import {
  motion,
  AnimatePresence,
} from 'framer-motion';

import {
  Menu,
  X,
} from 'lucide-react';

import {
  Link,
  useLocation,
  useNavigate,
} from 'react-router-dom';

import { NAV_LINKS } from '../../data/brand';

import Button from '../ui/Button';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const [scrolled, setScrolled] = useState(false);

  const location = useLocation();

  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener('scroll', handleScroll);

    return () =>
      window.removeEventListener(
        'scroll',
        handleScroll
      );
  }, []);

  // ROUTE CHECK
  const isActive = (path) => {
    if (path === 'home') {
      return location.pathname === '/';
    }

    return location.pathname === `/${path}`;
  };

  // ROUTE CONVERT
  const getPath = (id) => {
    return id === 'home'
      ? '/'
      : `/${id}`;
  };

  return (
    <>
      {/* NAVBAR */}
      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-[#0a0a0a]/88 backdrop-blur-2xl border-b border-white/10 py-3'
            : 'bg-transparent py-5'
        }`}
      >

        <div className="container mx-auto px-4 md:px-6">

          <div className="flex items-center justify-between">

            {/* LOGO */}
            <Link
              to="/"
              className="cursor-pointer shrink-0 pr-6"
            >

              <h1
                className="
                  text-[24px]
                  md:text-[34px]
                  font-black
                  uppercase
                  tracking-tight
                  leading-none
                  text-white
                  whitespace-nowrap
                "
              >
                Swarajya{' '}

                <span className="text-orange-500 ml-1">
                  Gym
                </span>
              </h1>

            </Link>

            {/* DESKTOP NAV */}
            <div className="hidden lg:flex items-center gap-8">

              {NAV_LINKS.map((link) => (
                <Link
                  key={link.id}
                  to={getPath(link.id)}
                  className={`relative uppercase text-[13px] tracking-[2px] font-semibold transition-all duration-300 hover:text-orange-500 ${
                    isActive(link.id)
                      ? 'text-orange-500'
                      : 'text-neutral-300'
                  }`}
                >

                  {link.name}

                  {isActive(link.id) && (
                    <motion.div
                      layoutId="navbar-indicator"
                      className="absolute -bottom-2 left-0 w-full h-[2px] bg-orange-500 rounded-full"
                    />
                  )}

                </Link>
              ))}

            </div>

            {/* RIGHT CTA */}
            <div className="hidden lg:flex items-center">

              <Button
                onClick={() =>
                  navigate('/contact')
                }
                className="
                  !rounded-2xl
                  !px-6
                  !py-3
                  !text-sm
                "
              >
                Join Now
              </Button>

            </div>

            {/* MOBILE MENU BUTTON */}
            <div className="flex lg:hidden items-center">

              <button
                className="
                  w-11
                  h-11
                  rounded-2xl
                  flex
                  items-center
                  justify-center
                  border
                  bg-white/5
                  border-white/10
                "
                onClick={() =>
                  setIsOpen(!isOpen)
                }
              >

                {isOpen ? (
                  <X className="w-6 h-6 text-white" />
                ) : (
                  <Menu className="w-6 h-6 text-white" />
                )}

              </button>

            </div>

          </div>

        </div>

      </nav>

      {/* MOBILE MENU */}
      <AnimatePresence>

        {isOpen && (
          <motion.div
            initial={{
              opacity: 0,
              y: -20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              y: -20,
            }}
            transition={{
              duration: 0.35,
            }}
            className="
              fixed
              inset-0
              z-40
              lg:hidden
              bg-[#090909]/95
              backdrop-blur-2xl
            "
          >

            <div className="pt-28 px-6 pb-10">

              <div className="flex flex-col gap-6">

                {NAV_LINKS.map((link) => (
                  <Link
                    key={link.id}
                    to={getPath(link.id)}
                    onClick={() =>
                      setIsOpen(false)
                    }
                    className={`text-left text-[28px] font-black uppercase tracking-tight transition-all ${
                      isActive(link.id)
                        ? 'text-orange-500'
                        : 'text-white'
                    }`}
                  >
                    {link.name}
                  </Link>
                ))}

              </div>

              {/* CTA */}
              <div className="mt-12">

                <Button
                  onClick={() => {
                    navigate('/contact');

                    setIsOpen(false);
                  }}
                  className="
                    w-full
                    !rounded-2xl
                    !py-4
                    text-lg
                  "
                >
                  Start Your Journey
                </Button>

              </div>

            </div>

          </motion.div>
        )}

      </AnimatePresence>
    </>
  );
};

export default Navbar;