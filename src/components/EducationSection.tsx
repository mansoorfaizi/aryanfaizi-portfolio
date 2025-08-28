import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { GraduationCap, Award, Calendar, MapPin } from 'lucide-react';

const EducationSection = () => {
  const education = [
    {
      degree: 'Bachelor of Civil Engineering',
      institution: 'University of Herat',
      year: '2018',
      location: 'Herat, Afghanistan',
      type: 'Degree',
      description: 'Comprehensive study of civil engineering principles including structural design, water resources, geotechnical engineering, and construction management.',
      coursework: [
        'Structural Analysis and Design',
        'Water Resources Engineering',
        'Geotechnical Engineering',
        'Construction Management',
        'Engineering Mathematics',
        'Materials Science'
      ]
    },
    {
      degree: 'Diploma Certificate – AutoCAD',
      institution: 'Australian Institute of Management',
      year: '2016',
      location: 'Australia',
      type: 'Certificate',
      description: 'Professional certification in AutoCAD software with focus on technical drawing, design documentation, and engineering graphics.',
      coursework: [
        'Technical Drawing Standards',
        '2D and 3D Design Principles',
        'Engineering Documentation',
        'CAD Best Practices',
        'Design Visualization'
      ]
    }
  ];

  return (
    <section id="education" className="py-20 bg-gradient-section">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              Education & Qualifications
            </h2>
            <div className="w-20 h-1 bg-primary mx-auto mb-8"></div>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Strong academic foundation in civil engineering complemented by professional certifications
            </p>
          </div>

          {/* Education Cards */}
          <div className="space-y-8">
            {education.map((edu, index) => (
              <Card key={index} className="bg-gradient-card border-border/50 hover:shadow-card-hover transition-all duration-300 group">
                <CardHeader className="pb-4">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-start gap-3 mb-3">
                        <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                          {edu.type === 'Degree' ? (
                            <GraduationCap className="w-6 h-6 text-primary" />
                          ) : (
                            <Award className="w-6 h-6 text-primary" />
                          )}
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-200 mb-1">
                            {edu.degree}
                          </h3>
                          <p className="text-lg text-muted-foreground font-medium">
                            {edu.institution}
                          </p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex flex-col gap-2 text-sm text-muted-foreground md:text-right">
                      <div className="flex items-center gap-1 md:justify-end">
                        <Calendar className="w-4 h-4" />
                        <span>{edu.year}</span>
                      </div>
                      <div className="flex items-center gap-1 md:justify-end">
                        <MapPin className="w-4 h-4" />
                        <span>{edu.location}</span>
                      </div>
                    </div>
                  </div>
                </CardHeader>

                <CardContent className="pt-0">
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {edu.description}
                  </p>
                  
                  <div>
                    <h4 className="font-semibold text-foreground mb-3">Key Areas of Study:</h4>
                    <div className="grid sm:grid-cols-2 gap-2">
                      {edu.coursework.map((course, courseIndex) => (
                        <div key={courseIndex} className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0"></div>
                          <span className="text-sm text-muted-foreground">{course}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;