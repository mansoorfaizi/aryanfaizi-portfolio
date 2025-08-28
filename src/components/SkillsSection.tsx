import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { 
  Hammer, 
  Droplets, 
  ClipboardCheck, 
  Calendar, 
  Calculator, 
  Settings 
} from 'lucide-react';

const SkillsSection = () => {
  const skillCategories = [
    {
      title: 'Technical Engineering',
      icon: Hammer,
      color: 'engineering-blue',
      skills: [
        { name: 'Civil & Structural Engineering', level: 95 },
        { name: 'Water & Wastewater Infrastructure', level: 90 },
        { name: 'Site Management & Coordination', level: 88 },
        { name: 'Construction Materials & Methods', level: 85 }
      ]
    },
    {
      title: 'Quality & Compliance',
      icon: ClipboardCheck,
      color: 'steel',
      skills: [
        { name: 'Quality Control & Testing', level: 92 },
        { name: 'Safety Compliance & Management', level: 90 },
        { name: 'Regulatory Standards & Codes', level: 87 },
        { name: 'Risk Assessment & Mitigation', level: 85 }
      ]
    },
    {
      title: 'Project Management',
      icon: Calendar,
      color: 'blueprint',
      skills: [
        { name: 'Project Planning & Monitoring', level: 88 },
        { name: 'Stakeholder Management', level: 85 },
        { name: 'Team Leadership & Coordination', level: 83 },
        { name: 'Documentation & Reporting', level: 90 }
      ]
    },
    {
      title: 'Technical Tools',
      icon: Settings,
      color: 'safety',
      skills: [
        { name: 'AutoCAD', level: 85 },
        { name: 'Cost Estimation & Analysis', level: 80 },
        { name: 'Technical Drawing Interpretation', level: 88 },
        { name: 'Engineering Software', level: 75 }
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
              Comprehensive skill set spanning technical engineering, project management, and quality assurance
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
                  <div className="space-y-6">
                    {category.skills.map((skill, skillIndex) => (
                      <div key={skillIndex}>
                        <div className="flex justify-between items-center mb-2">
                          <span className="font-medium text-foreground text-sm">
                            {skill.name}
                          </span>
                          <span className="text-sm text-muted-foreground">
                            {skill.level}%
                          </span>
                        </div>
                        <Progress 
                          value={skill.level} 
                          className="h-2"
                        />
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Additional Skills */}
          <div className="mt-16">
            <Card className="bg-gradient-card border-border/50 shadow-card-hover">
              <CardHeader>
                <h3 className="text-xl font-bold text-foreground text-center">
                  Core Competencies
                </h3>
              </CardHeader>
              <CardContent>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
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
                    <div key={index} className="flex items-center gap-2 p-3 rounded-lg bg-secondary/30 hover:bg-secondary/50 transition-colors duration-200">
                      <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                      <span className="text-sm font-medium text-foreground">{competency}</span>
                    </div>
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