import { useState, useEffect } from 'react';
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
  const [currentPage, setCurrentPage] = useState('home');

  const navigate = (page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    const style = document.createElement('style');
    style.innerHTML = `
      @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;700;900&display=swap');
      body { font-family: 'Inter', sans-serif; background-color: #111; color: white; overflow-x: hidden; }
      ::-webkit-scrollbar { width: 8px; }
      ::-webkit-scrollbar-track { background: #0a0a0a; }
      ::-webkit-scrollbar-thumb { background: #333; border-radius: 4px; }
      ::-webkit-scrollbar-thumb:hover { background: #f97316; }
      ::selection { background: #f97316; color: white; }
    `;
    document.head.appendChild(style);
    return () => document.head.removeChild(style);
  }, []);

  const renderPage = () => {
    switch (currentPage) {
      case 'home': return <Home navigate={navigate} />;
      case 'about': return <About />;
      case 'memberships': return <Memberships navigate={navigate} />;
      case 'gallery': return <Gallery />;
      case 'tools': return <Tools />;
      case 'trainers': return <Trainers />;
      case 'contact': return <Contact />;
      default: return <Home navigate={navigate} />;
    }
  };

  return (
    <div className="min-h-screen bg-[#111] selection:bg-orange-500 selection:text-white">
      <CustomCursor />
      <Navbar currentPage={currentPage} navigate={navigate} />
      <main className="w-full">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentPage}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.4 }}
          >
            {renderPage()}
          </motion.div>
        </AnimatePresence>
      </main>
      <Footer navigate={navigate} />
      <MobileStickyCTA navigate={navigate} />
    </div>
  );
}