import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Mail, Phone, MapPin, Download, Linkedin, Github } from 'lucide-react';
import cvFile from '@/assets/Aryan_Faizi_Resume.pdf';

const ContactSection = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'aryan22rahib@gmail.com',
      href: 'mailto:aryan22rahib@gmail.com',
      type: 'email'
    },
    {
      icon: Phone,
      label: 'Mobile',
      value: '+61 421 901 819',
      href: 'tel:+61421901819',
      type: 'phone'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Sydney, Australia',
      href: '#',
      type: 'location'
    }
  ];

  const handleDownloadCV = () => {
    const link = document.createElement('a');
    link.href = cvFile;
    link.download = 'Aryan_Faizi_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="contact" className="py-20 bg-gradient-section">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              Get In Touch
            </h2>
            <div className="w-20 h-1 bg-primary mx-auto mb-8"></div>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Ready to discuss your next engineering project? I'd love to hear from you and explore how we can work together.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Contact Information */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-foreground mb-6">
                Contact Information
              </h3>
              
              {contactInfo.map((contact, index) => (
                <Card key={index} className="bg-gradient-card border-border/50 hover:shadow-card-hover transition-all duration-300 group">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                        <contact.icon className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground font-medium">
                          {contact.label}
                        </p>
                        {contact.type === 'location' ? (
                          <p className="text-foreground font-medium">
                            {contact.value}
                          </p>
                        ) : (
                          <a 
                            href={contact.href}
                            className="text-foreground font-medium hover:text-primary transition-colors duration-200"
                          >
                            {contact.value}
                          </a>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}

              {/* Social Links */}
              <Card className="bg-gradient-card border-border/50">
                <CardHeader>
                  <h4 className="text-lg font-semibold text-foreground">
                    Professional Networks
                  </h4>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="flex gap-4">
                    <Button
                      variant="outline" 
                      size="sm"
                      className="flex items-center gap-2"
                      onClick={() => console.log('LinkedIn profile')}
                    >
                      <Linkedin className="w-4 h-4" />
                      LinkedIn
                    </Button>
                    <Button
                      variant="outline"
                      size="sm" 
                      className="flex items-center gap-2"
                      onClick={() => console.log('GitHub profile')}
                    >
                      <Github className="w-4 h-4" />
                      GitHub
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Call to Action */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-foreground mb-6">
                Let's Work Together
              </h3>
              
              <Card className="bg-gradient-hero text-primary-foreground border-0 shadow-elevated">
                <CardContent className="p-8">
                  <h4 className="text-xl font-bold mb-4">
                    Looking for an experienced Site Engineer?
                  </h4>
                  <p className="mb-6 text-primary-foreground/90 leading-relaxed">
                    I'm available for new opportunities in civil engineering, 
                    site management, and infrastructure projects. Let's discuss 
                    how I can contribute to your team's success.
                  </p>
                  
                  <div className="space-y-4">
                    <Button 
                      size="lg" 
                      variant="secondary"
                      className="w-full shadow-card-hover"
                      onClick={() => window.location.href = 'mailto:aryan22rahib@gmail.com'}
                    >
                      <Mail className="w-5 h-5 mr-2" />
                      Send Email
                    </Button>
                    
                    <Button 
                      size="lg"
                      className="w-full bg-primary-foreground/20 border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary backdrop-blur-sm"
                      onClick={handleDownloadCV}
                    >
                      <Download className="w-5 h-5 mr-2" />
                      Download CV
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Availability */}
              <Card className="bg-gradient-card border-border/50">
                <CardContent className="p-6">
                  <div className="text-center">
                    <div className="w-3 h-3 bg-green-500 rounded-full mx-auto mb-2 animate-pulse"></div>
                    <p className="text-sm font-medium text-foreground">
                      Available for new opportunities
                    </p>
                    <p className="text-xs text-muted-foreground mt-1">
                      Currently based in Sydney, Australia
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;