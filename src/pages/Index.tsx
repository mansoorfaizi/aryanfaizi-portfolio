import { useEffect } from 'react';
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import ExperienceSection from '@/components/ExperienceSection';
import EducationSection from '@/components/EducationSection';
import SkillsSection from '@/components/SkillsSection';
import ContactSection from '@/components/ContactSection';

const Index = () => {
  useEffect(() => {
    // Update page metadata
    document.title = 'Aryan Faizi - Civil Engineer | Site Engineer | Project Delivery Specialist';
    
    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 
        'Professional civil engineer specializing in water & wastewater infrastructure, site management, and quality control. Based in Sydney, Australia.'
      );
    }

    // Update Open Graph data
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) {
      ogTitle.setAttribute('content', 'Aryan Faizi - Civil Engineer Portfolio');
    }

    const ogDescription = document.querySelector('meta[property="og:description"]');
    if (ogDescription) {
      ogDescription.setAttribute('content', 
        'Professional portfolio of Aryan Faizi, experienced Site Engineer specializing in civil engineering projects and infrastructure development.'
      );
    }
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main>
        <HeroSection />
        <AboutSection />
        <ExperienceSection />
        <EducationSection />
        <SkillsSection />
        <ContactSection />
      </main>

      {/* Footer */}
      <footer className="bg-primary text-primary-foreground py-8">
        <div className="container mx-auto px-6 text-center">
          <p className="text-sm text-primary-foreground/80">
            © 2024 Aryan Faizi. All rights reserved. | 
            <span className="ml-2">Professional Civil Engineer</span>
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;