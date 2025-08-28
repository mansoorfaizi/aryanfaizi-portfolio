import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { 
  Hammer, 
  ClipboardCheck, 
  Calendar, 
  Settings,
  CheckCircle,
  Award
} from 'lucide-react';

const SkillsSection = () => {
  const skillCategories = [
    {
      title: 'Technical Engineering',
      icon: Hammer,
      color: 'engineering-blue',
      skills: [
        'Civil & Structural Engineering',
        'Water & Wastewater Infrastructure', 
        'Site Management & Coordination',
        'Construction Materials & Methods'
      ]
    },
    {
      title: 'Quality & Compliance',
      icon: ClipboardCheck,
      color: 'steel',
      skills: [
        'Quality Control & Testing',
        'Safety Compliance & Management',
        'Regulatory Standards & Codes',
        'Risk Assessment & Mitigation'
      ]
    },
    {
      title: 'Project Management',
      icon: Calendar,
      color: 'blueprint',
      skills: [
        'Project Planning & Monitoring',
        'Stakeholder Management',
        'Team Leadership & Coordination',
        'Documentation & Reporting'
      ]
    },
    {
      title: 'Technical Tools',
      icon: Settings,
      color: 'safety',
      skills: [
        'AutoCAD',
        'Cost Estimation & Analysis',
        'Technical Drawing Interpretation',
        'Engineering Software'
      ]
    }
  ];

  const getIconColor = (color: string) => {
    switch (color) {
      case 'engineering-blue': return 'text-engineering-blue';
      case 'steel': return 'text-engineering-steel';
      case 'blueprint': return 'text-engineering-blueprint';
      case 'safety': return 'text-engineering-safety';
      default: return 'text-primary';
    }
  };

  const getBgColor = (color: string) => {
    switch (color) {
      case 'engineering-blue': return 'bg-engineering-blue/10';
      case 'steel': return 'bg-engineering-steel/10';
      case 'blueprint': return 'bg-engineering-blueprint/10';
      case 'safety': return 'bg-engineering-safety/10';
      default: return 'bg-primary/10';
    }
  };

  return (
    <section id="skills" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              Technical Expertise
            </h2>
            <div className="w-20 h-1 bg-primary mx-auto mb-8"></div>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Professional expertise across technical engineering, project management, and quality assurance disciplines
            </p>
          </div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {skillCategories.map((category, categoryIndex) => (
              <Card key={categoryIndex} className="bg-gradient-card border-border/50 hover:shadow-card-hover transition-all duration-300 group">
                <CardHeader className="pb-6">
                  <div className="flex items-center gap-3">
                    <div className={`w-12 h-12 rounded-lg ${getBgColor(category.color)} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                      <category.icon className={`w-6 h-6 ${getIconColor(category.color)}`} />
                    </div>
                    <h3 className="text-xl font-bold text-foreground">
                      {category.title}
                    </h3>
                  </div>
                </CardHeader>

                <CardContent className="pt-0">
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <span 
                        key={skillIndex} 
                        className={`px-4 py-2 rounded-full text-sm font-medium border transition-all duration-200 hover:scale-105 ${getBgColor(category.color)} ${getIconColor(category.color)} border-current/20 hover:shadow-soft`}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Core Competencies */}
          <div className="mt-16">
            <Card className="bg-gradient-hero text-primary-foreground border-0 shadow-elevated">
              <CardHeader className="text-center">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <Award className="w-6 h-6" />
                  <h3 className="text-xl font-bold">
                    Core Competencies
                  </h3>
                </div>
                <p className="text-primary-foreground/80 text-sm">
                  Key areas of professional expertise and specialization
                </p>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 justify-center">
                  {[
                    'Infrastructure Development',
                    'Construction Supervision',
                    'Regulatory Compliance',
                    'Technical Documentation',
                    'Cost Management',
                    'Quality Assurance',
                    'Safety Management',
                    'Stakeholder Communication',
                    'Problem Solving'
                  ].map((competency, index) => (
                    <span 
                      key={index} 
                      className="px-4 py-2 rounded-full text-sm font-medium bg-primary-foreground/20 text-primary-foreground border border-primary-foreground/30 hover:bg-primary-foreground/30 transition-all duration-200 hover:scale-105 backdrop-blur-sm"
                    >
                      {competency}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;