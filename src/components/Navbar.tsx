import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, ShoppingBag } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { cn } from '../lib/utils';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Accueil', path: '/' },
    { name: 'Collection', path: '/collection' },
    { name: 'À propos', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav 
      className={cn(
        "fixed top-0 left-0 w-full z-50 transition-all duration-500 px-6 py-4 md:px-12",
        isScrolled ? "glass-nav py-3" : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex-1 hidden md:flex gap-8 items-center">
          {navLinks.slice(0, 2).map((link) => (
            <Link 
              key={link.path} 
              to={link.path}
              className={cn(
                "text-xs uppercase tracking-[0.2em] font-medium transition-colors hover:text-solar",
                location.pathname === link.path ? "text-solar" : "text-ink"
              )}
            >
              {link.name}
            </Link>
          ))}
        </div>

        <Link to="/" className="flex-shrink-0">
          <h1 className="text-2xl md:text-3xl tracking-[0.3em] font-light uppercase text-ink">
            Felisea
          </h1>
        </Link>

        <div className="flex-1 flex justify-end items-center gap-6">
          <div className="hidden md:flex gap-8 items-center mr-8">
            {navLinks.slice(2).map((link) => (
              <Link 
                key={link.path} 
                to={link.path}
                className={cn(
                  "text-xs uppercase tracking-[0.2em] font-medium transition-colors hover:text-solar",
                  location.pathname === link.path ? "text-solar" : "text-ink"
                )}
              >
                {link.name}
              </Link>
            ))}
          </div>
          
          <button className="p-2 hover:text-solar transition-colors">
            <ShoppingBag size={20} strokeWidth={1.5} />
          </button>
          
          <button 
            className="md:hidden p-2"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} strokeWidth={1.5} /> : <Menu size={24} strokeWidth={1.5} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-ivory border-b border-solar/10 p-8 flex flex-col gap-6 md:hidden"
          >
            {navLinks.map((link) => (
              <Link 
                key={link.path} 
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={cn(
                  "text-lg font-serif italic tracking-wide",
                  location.pathname === link.path ? "text-solar" : "text-ink"
                )}
              >
                {link.name}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
