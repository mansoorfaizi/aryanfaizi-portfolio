import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowDown, Mail, Phone, MapPin, Calendar, ChevronRight, Download } from 'lucide-react';
import heroImage from '@/assets/hero-engineering.jpg';
import cvFile from '@/assets/Aryan_Faizi_Resume.pdf';

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToAbout = () => {
    document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleDownloadCV = () => {
    const link = document.createElement('a');
    link.href = cvFile;
    link.download = 'Aryan_Faizi_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const stats = [
    { label: 'Years Experience', value: '5+' },
    { label: 'Projects Completed', value: '50+' },
    { label: 'Client Satisfaction', value: '100%' }
  ];

  return (
    <section id="home" className="relative min-h-screen overflow-hidden">
      {/* Background Engineering Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Civil Engineering Infrastructure"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/70 to-primary/50" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 pt-20">
        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-8 lg:gap-12 items-center min-h-[calc(100vh-5rem)]">
          
          {/* Profile Image - Shows first on mobile */}
          <div className={`order-1 lg:order-2 flex justify-center transition-all duration-1000 delay-300 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <div className="relative">
              <div className="w-48 h-48 sm:w-64 sm:h-64 lg:w-96 lg:h-96 rounded-full bg-gradient-to-br from-primary-foreground/30 to-primary-foreground/10 border-4 border-primary-foreground/40 flex items-center justify-center text-primary-foreground/80 text-sm lg:text-lg font-medium shadow-elevated backdrop-blur-sm relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-br from-primary-foreground/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <span className="relative z-10">Professional Photo</span>
              </div>
              
              {/* Floating Elements */}
              <div className="absolute -top-2 -right-2 lg:-top-4 lg:-right-4 w-4 h-4 lg:w-6 lg:h-6 bg-engineering-safety rounded-full animate-pulse" />
              <div className="absolute -bottom-2 -left-2 lg:-bottom-4 lg:-left-4 w-3 h-3 lg:w-4 lg:h-4 bg-engineering-blueprint rounded-full animate-pulse delay-1000" />
            </div>
          </div>

          {/* Content - Shows second on mobile */}
          <div className="order-2 lg:order-1 space-y-4 lg:space-y-6 text-primary-foreground text-center lg:text-left">
            {/* Name */}
            <div className={`transition-all duration-1000 delay-500 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}>
              <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-4 tracking-tight">
                Aryan Faizi
              </h1>
            </div>

            {/* Professional Titles */}
            <div className={`transition-all duration-1000 delay-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}>
              <div className="flex flex-wrap justify-center lg:justify-start gap-2 mb-4 lg:mb-6">
                {['Civil Engineer', 'Site Engineer', 'Project Delivery'].map((title) => (
                  <span 
                    key={title}
                    className="px-3 py-1 lg:px-4 lg:py-2 bg-primary-foreground/20 backdrop-blur-sm rounded-full text-xs lg:text-sm font-medium border border-primary-foreground/30"
                  >
                    {title}
                  </span>
                ))}
              </div>
            </div>

            {/* Tagline */}
            <div className={`transition-all duration-1000 delay-900 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}>
              <p className="text-lg lg:text-xl leading-relaxed mb-6 lg:mb-8 text-primary-foreground/90">
                Delivering <span className="font-semibold text-engineering-safety">quality outcomes</span> in civil engineering projects with precision, safety, and efficiency
              </p>
            </div>

            {/* Stats */}
            <div className={`grid grid-cols-3 gap-4 lg:gap-6 mb-6 lg:mb-8 transition-all duration-1000 delay-1100 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}>
              {stats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="text-xl lg:text-2xl font-bold text-engineering-safety mb-1">
                    {stat.value}
                  </div>
                  <div className="text-xs text-primary-foreground/70 font-medium">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            {/* Action Buttons */}
            <div className={`flex flex-col lg:flex-row gap-3 lg:gap-4 mb-6 transition-all duration-1000 delay-1300 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}>
              <Button 
                size="lg" 
                className="group bg-primary-foreground text-primary hover:bg-primary-foreground/90 shadow-elevated w-full lg:w-auto"
                onClick={handleDownloadCV}
              >
                <Download className="w-5 h-5 mr-2 group-hover:animate-bounce" />
                Download CV
                <ChevronRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              
              <Button 
                size="lg" 
                className="bg-primary-foreground/20 border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary backdrop-blur-md w-full lg:w-auto"
              >
                <Phone className="w-5 h-5 mr-2" />
                +61 421 901 819
              </Button>
            </div>

            {/* Location & Availability */}
            <div className={`flex flex-col lg:flex-row items-center gap-3 lg:gap-4 text-primary-foreground/80 transition-all duration-1000 delay-1500 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                <span className="text-sm font-medium">Sydney, Australia</span>
              </div>
              <div className="hidden lg:block w-1 h-1 bg-primary-foreground/40 rounded-full" />
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <span className="text-sm font-medium">Available for Projects</span>
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className={`text-center pb-8 transition-all duration-1000 delay-1400 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <button
            onClick={scrollToAbout}
            className="group flex flex-col items-center gap-2 mx-auto hover:scale-110 transition-all duration-300"
            aria-label="Scroll to about section"
          >
            <span className="text-xs text-primary-foreground/60 font-medium tracking-wider uppercase">Scroll Down</span>
            <ArrowDown className="w-5 h-5 text-primary-foreground/60 group-hover:text-primary-foreground transition-colors duration-300 animate-bounce" />
          </button>
        </div>
      </div>

      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-background to-transparent z-10" />
    </section>
  );
};

export default HeroSection;