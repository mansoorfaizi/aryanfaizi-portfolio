import { Button } from '@/components/ui/button';
import { ArrowDown, Mail, Phone } from 'lucide-react';
import heroImage from '@/assets/hero-engineering.jpg';

const HeroSection = () => {
  const scrollToAbout = () => {
    document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Civil Engineering Infrastructure"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/70 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-background/20 via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center text-primary-foreground">
        <div className="max-w-4xl mx-auto">
          {/* Professional Photo Placeholder */}
          <div className="w-32 h-32 mx-auto mb-8 rounded-full bg-primary-foreground/20 border-4 border-primary-foreground/30 flex items-center justify-center text-primary-foreground/70 text-sm font-medium">
            Professional Photo
          </div>

          {/* Name and Title */}
          <h1 className="text-5xl md:text-7xl font-bold mb-4 tracking-tight">
            Aryan Faizi
          </h1>
          <div className="text-xl md:text-2xl mb-6 text-primary-foreground/90 font-medium">
            Civil Engineer | Site Engineer | Project Delivery Specialist
          </div>

          {/* Tagline */}
          <p className="text-lg md:text-xl mb-8 text-primary-foreground/80 max-w-3xl mx-auto leading-relaxed">
            Delivering quality outcomes in civil engineering projects with precision, safety, and efficiency
          </p>

          {/* Contact Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button 
              size="lg" 
              variant="secondary" 
              className="shadow-elevated"
              onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <Mail className="w-5 h-5 mr-2" />
              Get In Touch
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10"
            >
              <Phone className="w-5 h-5 mr-2" />
              +61 421 901 819
            </Button>
          </div>

          {/* Scroll Indicator */}
          <button
            onClick={scrollToAbout}
            className="group animate-bounce hover:animate-none transition-all duration-300"
            aria-label="Scroll to about section"
          >
            <ArrowDown className="w-8 h-8 mx-auto text-primary-foreground/60 group-hover:text-primary-foreground transition-colors duration-200" />
          </button>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-background to-transparent z-10" />
    </section>
  );
};

export default HeroSection;