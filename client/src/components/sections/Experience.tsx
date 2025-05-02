import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { ExperienceCard } from "@/components/ui/experience-card";

const experiences = [
  {
    position: "Senior Developer",
    company: "TechInnovate Solutions",
    period: "2019 - Present",
    location: "New York, NY",
    description: "Leading development teams for enterprise-level web applications with a focus on scalability and performance optimization.",
    responsibilities: [
      "Architected cloud-native applications using AWS services",
      "Implemented CI/CD pipelines for automated testing and deployment",
      "Developed data visualization dashboards for business intelligence"
    ],
    technologies: ["React", "Node.js", "AWS", "MongoDB"],
    side: "left",
    borderColor: "border-primary"
  },
  {
    position: "Data Analyst",
    company: "DataVision Analytics",
    period: "2016 - 2019",
    location: "San Francisco, CA",
    description: "Analyzed large datasets to identify patterns and trends, providing actionable insights for business growth and operational efficiency.",
    responsibilities: [
      "Built predictive models for customer behavior analysis",
      "Created automated reporting systems for executive dashboards",
      "Developed ETL pipelines for data warehousing"
    ],
    technologies: ["Python", "SQL", "Tableau", "Pandas"],
    side: "right",
    borderColor: "border-secondary"
  },
  {
    position: "Junior Web Developer",
    company: "WebTech Solutions",
    period: "2014 - 2016",
    location: "Chicago, IL",
    description: "Developed responsive websites and web applications for a diverse client base, focusing on usability and cross-browser compatibility.",
    responsibilities: [
      "Implemented front-end interfaces using modern JavaScript frameworks",
      "Collaborated with design teams to translate mockups into functional websites",
      "Optimized website performance and SEO"
    ],
    technologies: ["JavaScript", "HTML/CSS", "jQuery", "PHP"],
    side: "left",
    borderColor: "border-accent"
  }
];

const Experience = () => {
  const { ref, controls } = useScrollAnimation();

  return (
    <section id="experience" className="section-padding bg-gray-50 dark:bg-gray-900/50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16" ref={ref}>
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={controls}
            transition={{ duration: 0.5 }}
          >
            Work <span className="text-gradient-primary">Experience</span>
          </motion.h2>
          <motion.div 
            className="w-24 h-1 bg-gradient-primary mx-auto rounded-full"
            initial={{ opacity: 0, width: 0 }}
            animate={controls}
            transition={{ duration: 0.5, delay: 0.2 }}
          ></motion.div>
          <motion.p 
            className="mt-4 max-w-xl mx-auto text-muted-foreground"
            initial={{ opacity: 0, y: 20 }}
            animate={controls}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            My professional journey has equipped me with diverse skills and experiences in development and data analysis.
          </motion.p>
        </div>
        
        {/* Timeline Layout */}
        <div className="relative max-w-4xl mx-auto">
          {/* Timeline Line */}
          <div className="absolute left-0 md:left-1/2 top-0 h-full w-1 bg-gradient-to-b from-primary to-secondary ml-4 md:ml-0 md:-translate-x-1/2"></div>
          
          {experiences.map((experience, index) => (
            <ExperienceCard
              key={index}
              position={experience.position}
              company={experience.company}
              period={experience.period}
              location={experience.location}
              description={experience.description}
              responsibilities={experience.responsibilities}
              technologies={experience.technologies}
              side={experience.side}
              borderColor={experience.borderColor}
              delay={0.2 * index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
