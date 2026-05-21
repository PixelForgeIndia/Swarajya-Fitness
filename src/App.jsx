import { useEffect } from 'react';
import {
  Routes,
  Route,
  useLocation,
  useNavigate,
} from 'react-router-dom';

import { AnimatePresence, motion } from 'framer-motion';

import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import MobileStickyCTA from './components/layout/MobileStickyCTA';
import CustomCursor from './components/layout/CustomCursor';

import Home from './pages/Home';
import About from './pages/About';
import Memberships from './pages/Memberships';
import Gallery from './pages/Gallery';
import Trainers from './pages/Trainers';
import Tools from './pages/Tools';
import Contact from './pages/Contact';

export default function App() {
  const location = useLocation();

  const navigate = useNavigate();

  // SCROLL TO TOP ONLY WHEN PAGE CHANGES
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }, [location.pathname]);

  // GLOBAL STYLES
  useEffect(() => {
    const style = document.createElement('style');

    style.innerHTML = `
      @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;700;900&display=swap');

      body {
        font-family: 'Inter', sans-serif;
        background-color: #0a0d12;
        color: white;
        overflow-x: hidden;
      }

      ::-webkit-scrollbar {
        width: 8px;
      }

      ::-webkit-scrollbar-track {
        background: #0a0a0a;
      }

      ::-webkit-scrollbar-thumb {
        background: #333;
        border-radius: 4px;
      }

      ::-webkit-scrollbar-thumb:hover {
        background: #f97316;
      }

      ::selection {
        background: #f97316;
        color: white;
      }
    `;

    document.head.appendChild(style);

    return () => document.head.removeChild(style);
  }, []);

  return (
    <div className="min-h-screen bg-[#0a0d12] selection:bg-orange-500 selection:text-white">

      <CustomCursor />

      <Navbar />

      <main className="w-full">

        <AnimatePresence mode="wait">

          <motion.div
            key={location.pathname}
            initial={{
              opacity: 0,
              y: 10,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              y: -10,
            }}
            transition={{
              duration: 0.35,
            }}
          >

            <Routes>

              <Route
                path="/"
                element={<Home navigate={navigate} />}
              />

              <Route
                path="/about"
                element={<About />}
              />

              <Route
                path="/memberships"
                element={<Memberships navigate={navigate} />}
              />

              <Route
                path="/gallery"
                element={<Gallery />}
              />

              <Route
                path="/trainers"
                element={<Trainers />}
              />

              <Route
                path="/tools"
                element={<Tools />}
              />

              <Route
                path="/contact"
                element={<Contact />}
              />

            </Routes>

          </motion.div>

        </AnimatePresence>

      </main>

      <Footer navigate={navigate} />

      <MobileStickyCTA navigate={navigate} />

    </div>
  );
}