import { Card, CardContent } from '@/components/ui/card';
import { Award, Users, Shield, Target } from 'lucide-react';

const AboutSection = () => {
  const highlights = [
    {
      icon: Award,
      title: 'Quality Excellence',
      description: 'Committed to delivering projects that meet the highest standards of quality and safety'
    },
    {
      icon: Users,
      title: 'Team Leadership',
      description: 'Experienced in coordinating multidisciplinary teams and stakeholder engagement'
    },
    {
      icon: Shield,
      title: 'Safety First',
      description: 'Prioritizing safety compliance and risk management in all project activities'
    },
    {
      icon: Target,
      title: 'Precision Delivery',
      description: 'Focused on delivering projects on time, within budget, and to specification'
    }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-section">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              About Me
            </h2>
            <div className="w-20 h-1 bg-primary mx-auto mb-8"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Main Content */}
            <div>
              <div className="prose prose-lg max-w-none">
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  Motivated Site Engineer with extensive experience in water and wastewater infrastructure, 
                  daily site operations, and comprehensive quality assurance. I specialize in coordinating 
                  complex construction activities while maintaining the highest standards of safety and efficiency.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  My expertise spans from interpreting technical design documentation to managing stakeholder 
                  relationships and delivering projects that meet stringent regulatory requirements. I bring 
                  a systematic approach to problem-solving and a commitment to excellence in every aspect 
                  of project delivery.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  With a strong foundation in both theoretical engineering principles and practical site 
                  management, I excel at bridging the gap between design intent and successful project 
                  execution.
                </p>
              </div>
            </div>

            {/* Highlights Grid */}
            <div className="grid sm:grid-cols-2 gap-6">
              {highlights.map((item, index) => (
                <Card key={index} className="bg-gradient-card border-border/50 hover:shadow-card-hover transition-all duration-300 group">
                  <CardContent className="p-6">
                    <div className="flex flex-col items-center text-center">
                      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors duration-300">
                        <item.icon className="w-6 h-6 text-primary" />
                      </div>
                      <h3 className="font-semibold text-foreground mb-2">
                        {item.title}
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;