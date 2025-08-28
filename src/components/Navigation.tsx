import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X, Download, ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
      
      // Update active section based on scroll position
      const sections = ['home', 'about', 'experience', 'education', 'skills', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { href: '#home', label: 'Home', id: 'home' },
    { href: '#about', label: 'About', id: 'about' },
    { href: '#experience', label: 'Experience', id: 'experience' },
    { href: '#education', label: 'Education', id: 'education' },
    { href: '#skills', label: 'Skills', id: 'skills' },
    { href: '#contact', label: 'Contact', id: 'contact' },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsMobileMenuOpen(false);
  };

  const handleDownloadCV = () => {
    console.log('CV download requested');
  };

  return (
    <>
      <header
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out',
          isScrolled
            ? 'bg-background/80 backdrop-blur-xl shadow-engineering border-b border-border/50'
            : 'bg-transparent'
        )}
      >
        <nav className="container mx-auto px-6">
          <div className={cn(
            'flex items-center justify-between transition-all duration-300',
            isScrolled ? 'py-3' : 'py-6'
          )}>
            {/* Logo with animation */}
            <div className="relative group">
              <div className={cn(
                'font-bold transition-all duration-300 cursor-pointer',
                isScrolled ? 'text-lg text-primary' : 'text-xl text-primary-foreground'
              )}
              onClick={() => scrollToSection('#home')}
              >
                <span className="relative z-10">Aryan Faizi</span>
                <div className="absolute inset-0 bg-primary/10 rounded-lg scale-0 group-hover:scale-100 transition-transform duration-200" />
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-1">
              {navItems.map((item) => (
                <button
                  key={item.href}
                  onClick={() => scrollToSection(item.href)}
                  className={cn(
                    'relative px-4 py-2 rounded-lg font-medium transition-all duration-300 group',
                    activeSection === item.id
                      ? isScrolled
                        ? 'text-primary bg-primary/10'
                        : 'text-primary-foreground bg-primary-foreground/20'
                      : isScrolled
                        ? 'text-foreground hover:text-primary hover:bg-primary/5'
                        : 'text-primary-foreground/80 hover:text-primary-foreground hover:bg-primary-foreground/10'
                  )}
                >
                  <span className="relative z-10">{item.label}</span>
                  {activeSection === item.id && (
                    <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-primary/10 rounded-lg" />
                  )}
                </button>
              ))}
              
              <div className="ml-6 pl-6 border-l border-current/20">
                <Button
                  onClick={handleDownloadCV}
                  variant={isScrolled ? "default" : "secondary"}
                  size="sm"
                  className={cn(
                    'group shadow-elevated transition-all duration-300',
                    !isScrolled && 'bg-primary-foreground text-primary hover:bg-primary-foreground/90'
                  )}
                >
                  <Download className="w-4 h-4 mr-2 group-hover:animate-bounce" />
                  Download CV
                  <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </div>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="sm"
              className={cn(
                'lg:hidden relative overflow-hidden',
                isScrolled ? 'text-foreground' : 'text-primary-foreground'
              )}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <div className="relative w-5 h-5">
                <Menu className={cn(
                  'absolute inset-0 transition-all duration-300',
                  isMobileMenuOpen ? 'rotate-90 opacity-0' : 'rotate-0 opacity-100'
                )} />
                <X className={cn(
                  'absolute inset-0 transition-all duration-300',
                  isMobileMenuOpen ? 'rotate-0 opacity-100' : '-rotate-90 opacity-0'
                )} />
              </div>
            </Button>
          </div>
        </nav>
      </header>

      {/* Mobile Navigation Drawer */}
      <div className={cn(
        'fixed inset-0 z-40 lg:hidden',
        isMobileMenuOpen ? 'pointer-events-auto' : 'pointer-events-none'
      )}>
        {/* Backdrop */}
        <div 
          className={cn(
            'absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-300',
            isMobileMenuOpen ? 'opacity-100' : 'opacity-0'
          )}
          onClick={() => setIsMobileMenuOpen(false)}
        />
        
        {/* Drawer */}
        <div className={cn(
          'absolute right-0 top-0 h-full w-80 max-w-[85vw] bg-background border-l border-border shadow-2xl transition-transform duration-300 ease-out',
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        )}>
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-border">
            <div className="font-bold text-lg text-primary">Navigation</div>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMobileMenuOpen(false)}
              className="h-8 w-8 p-0"
            >
              <X className="w-4 h-4" />
            </Button>
          </div>
          
          {/* Navigation Items */}
          <div className="flex flex-col p-6 space-y-1">
            {navItems.map((item, index) => (
              <button
                key={item.href}
                onClick={() => scrollToSection(item.href)}
                className={cn(
                  'flex items-center px-4 py-3 rounded-lg text-left font-medium transition-all duration-200 group',
                  activeSection === item.id
                    ? 'bg-primary/10 text-primary border-l-4 border-primary'
                    : 'text-foreground hover:bg-secondary/50 hover:text-primary',
                  isMobileMenuOpen ? 'translate-x-0 opacity-100' : 'translate-x-4 opacity-0'
                )}
                style={{ transitionDelay: `${index * 50}ms` }}
              >
                <span className="relative">
                  {item.label}
                  {activeSection === item.id && (
                    <div className="absolute -bottom-0.5 left-0 w-full h-0.5 bg-primary rounded-full" />
                  )}
                </span>
                <ChevronRight className="w-4 h-4 ml-auto opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-200" />
              </button>
            ))}
          </div>
          
          {/* Divider */}
          <div className="mx-6 border-t border-border" />
          
          {/* Download Button */}
          <div className="p-6">
            <Button
              onClick={handleDownloadCV}
              className={cn(
                'w-full shadow-soft group transition-all duration-300',
                isMobileMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
              )}
              style={{ transitionDelay: '300ms' }}
            >
              <Download className="w-4 h-4 mr-2 group-hover:animate-bounce" />
              Download CV
              <ChevronRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
          
          {/* Footer */}
          <div className="absolute bottom-0 left-0 right-0 p-6 border-t border-border bg-secondary/30">
            <div className="text-center text-sm text-muted-foreground">
              <div className="font-medium">Aryan Faizi</div>
              <div className="text-xs">Civil Engineer</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navigation;