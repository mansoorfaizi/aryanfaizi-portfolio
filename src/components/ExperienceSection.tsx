import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { CalendarDays, MapPin, Building2 } from 'lucide-react';

const ExperienceSection = () => {
  const experiences = [
    {
      title: 'Site Engineer',
      company: 'West Region Delivery Team',
      location: 'Sydney, Australia',
      period: 'Aug 2024 – Present',
      description: 'Leading construction activities coordination, ensuring safety compliance, interpreting complex engineering drawings, and managing comprehensive stakeholder engagement for major infrastructure projects.',
      responsibilities: [
        'Coordinate construction activities and daily site operations',
        'Ensure compliance with safety regulations and quality standards',
        'Interpret technical drawings and design documentation',
        'Manage stakeholder relationships and communication',
        'Monitor project progress and resolve on-site challenges'
      ],
      current: true
    },
    {
      title: 'Evaluation & Monitoring Engineer',
      company: 'Ministry of Communications and IT',
      location: 'Kabul, Afghanistan',
      period: 'Jul 2020 – Jul 2024',
      description: 'Developed strategic plans for large-scale infrastructure projects, monitored implementation progress, prepared comprehensive technical reports, and resolved complex on-site engineering challenges.',
      responsibilities: [
        'Developed strategic plans for infrastructure projects',
        'Monitored project implementation and progress tracking',
        'Prepared detailed technical and progress reports',
        'Resolved engineering challenges and technical issues',
        'Conducted site inspections and quality assessments'
      ],
      current: false
    },
    {
      title: 'QC and Lab Manager',
      company: 'Ultra Design and Research Construction',
      location: 'Sydney, Australia',
      period: 'Jun 2018 – Jun 2020',
      description: 'Conducted comprehensive quality control testing, managed laboratory operations, prepared technical reports, implemented workflow improvements, and provided accurate cost estimation services.',
      responsibilities: [
        'Conducted laboratory and field quality control tests',
        'Prepared comprehensive QC reports and documentation',
        'Implemented process improvements and workflow optimization',
        'Managed cost estimation and budget planning',
        'Ensured compliance with Australian construction standards'
      ],
      current: false
    }
  ];

  return (
    <section id="experience" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              Professional Experience
            </h2>
            <div className="w-20 h-1 bg-primary mx-auto mb-8"></div>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              A comprehensive track record of delivering successful engineering projects across diverse environments and challenges
            </p>
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-4 md:left-1/2 md:transform md:-translate-x-px top-0 bottom-0 w-px bg-border"></div>

            {experiences.map((exp, index) => (
              <div key={index} className="relative mb-12 md:mb-16">
                {/* Timeline Dot */}
                <div className="absolute left-2 md:left-1/2 md:transform md:-translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 border-background shadow-engineering z-10"></div>

                {/* Content Card */}
                <div className={`ml-12 md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:pr-12' : 'md:ml-auto md:pl-12'}`}>
                  <Card className="bg-gradient-card border-border/50 hover:shadow-card-hover transition-all duration-300 group">
                    <CardHeader className="pb-4">
                      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-3">
                        <div>
                          <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-200">
                            {exp.title}
                          </h3>
                          <div className="flex items-center gap-2 text-muted-foreground mt-1">
                            <Building2 className="w-4 h-4" />
                            <span className="font-medium">{exp.company}</span>
                          </div>
                        </div>
                        {exp.current && (
                          <Badge variant="secondary" className="bg-engineering-blue/10 text-engineering-blue border-engineering-blue/20">
                            Current
                          </Badge>
                        )}
                      </div>
                      
                      <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <CalendarDays className="w-4 h-4" />
                          <span>{exp.period}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <MapPin className="w-4 h-4" />
                          <span>{exp.location}</span>
                        </div>
                      </div>
                    </CardHeader>

                    <CardContent className="pt-0">
                      <p className="text-muted-foreground mb-4 leading-relaxed">
                        {exp.description}
                      </p>
                      
                      <div>
                        <h4 className="font-semibold text-foreground mb-2">Key Responsibilities:</h4>
                        <ul className="space-y-1">
                          {exp.responsibilities.map((resp, respIndex) => (
                            <li key={respIndex} className="text-sm text-muted-foreground flex items-start gap-2">
                              <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                              <span>{resp}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;