import React, { useState, useEffect } from 'react';
import { Menu, X, Moon, Sun } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [theme, setTheme] = useState('light');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    if (document.documentElement.classList.contains('dark')) {
      setTheme('dark');
    } else {
      setTheme('light');
    }

    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => {
    if (theme === 'light') {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
      setTheme('dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
      setTheme('light');
    }
  };

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Projects', href: '/projects' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <nav className={`fixed w-full top-0 z-50 transition-all duration-300 ${scrolled ? 'glass-panel border-b border-glass-border shadow-sm' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0">
            <a href="/" className="font-bold text-2xl tracking-tight text-primary">Nigel<span className="text-text-main">.</span></a>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navLinks.map((link) => (
                <a key={link.name} href={link.href} className="text-text-muted hover:text-primary transition-colors px-3 py-2 rounded-md text-sm font-medium">
                  {link.name}
                </a>
              ))}
              <button onClick={toggleTheme} className="p-2 text-text-muted hover:text-primary transition-colors rounded-full glass-panel-hover border border-transparent">
                {theme === 'light' ? <Moon size={18} /> : <Sun size={18} />}
              </button>
            </div>
          </div>
          <div className="-mr-2 flex md:hidden items-center gap-4">
            <button onClick={toggleTheme} className="p-2 text-text-muted hover:text-primary">
              {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
            </button>
            <button onClick={() => setIsOpen(!isOpen)} className="text-text-muted hover:text-primary p-2">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>
      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden glass-panel border-t border-glass-border shadow-xl absolute w-full left-0 top-20 rounded-b-2xl">
          <div className="px-4 pt-2 pb-6 space-y-2 sm:px-3 flex flex-col items-center">
            {navLinks.map((link) => (
              <a key={link.name} href={link.href} className="text-text-main hover:text-primary block px-3 py-3 rounded-md text-lg font-medium w-full text-center">
                {link.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
