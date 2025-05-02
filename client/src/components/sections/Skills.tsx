import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { SkillCard } from "@/components/ui/skill-card";
import { 
  Code, 
  Monitor, 
  BarChart3, 
  Lightbulb, 
  Globe, 
  Award 
} from "lucide-react";

const Skills = () => {
  const { ref, controls } = useScrollAnimation();

  return (
    <section id="skills" className="section-padding bg-gray-50 dark:bg-gray-900/50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16" ref={ref}>
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={controls}
            transition={{ duration: 0.5 }}
          >
            My <span className="text-gradient-primary">Skills</span>
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
            I've developed expertise in various technologies and methodologies that allow me to deliver comprehensive solutions.
          </motion.p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Programming & Database */}
          <SkillCard 
            icon={<Code size={28} />}
            title="Programming & Database"
            skills={[
              { name: "JavaScript", percentage: 95 },
              { name: "Python", percentage: 90 },
              { name: "SQL", percentage: 85 },
              { name: "TypeScript", percentage: 88 }
            ]}
            gradientFrom="from-primary"
            gradientTo="to-secondary"
            delay={0.1}
          />
          
          {/* Frontend Development */}
          <SkillCard 
            icon={<Monitor size={28} />}
            title="Frontend Development"
            skills={[
              { name: "React", percentage: 92 },
              { name: "HTML/CSS", percentage: 95 },
              { name: "Tailwind CSS", percentage: 90 },
              { name: "UI/UX Design", percentage: 80 }
            ]}
            gradientFrom="from-secondary"
            gradientTo="to-pink-400"
            delay={0.2}
          />
          
          {/* Data Analysis */}
          <SkillCard 
            icon={<BarChart3 size={28} />}
            title="Data Analysis"
            skills={[
              { name: "Pandas", percentage: 88 },
              { name: "Data Visualization", percentage: 85 },
              { name: "Statistical Analysis", percentage: 80 },
              { name: "Machine Learning", percentage: 75 }
            ]}
            gradientFrom="from-accent"
            gradientTo="to-primary"
            delay={0.3}
          />
          
          {/* AI Tools */}
          <SkillCard 
            icon={<Lightbulb size={28} />}
            title="AI Tools"
            skills={[
              { name: "TensorFlow", percentage: 78 },
              { name: "PyTorch", percentage: 72 },
              { name: "NLP", percentage: 70 },
              { name: "Computer Vision", percentage: 65 }
            ]}
            gradientFrom="from-primary"
            gradientTo="to-secondary"
            delay={0.4}
          />
          
          {/* Sustainability */}
          <SkillCard 
            icon={<Globe size={28} />}
            title="Sustainability"
            skills={[
              { name: "Carbon Footprint Analysis", percentage: 85 },
              { name: "Sustainable Development", percentage: 90 },
              { name: "Green Computing", percentage: 80 },
              { name: "Renewable Energy Knowledge", percentage: 75 }
            ]}
            gradientFrom="from-secondary"
            gradientTo="to-pink-400"
            delay={0.5}
          />
          
          {/* Certifications */}
          <SkillCard 
            icon={<Award size={28} />}
            title="Certifications"
            certifications={[
              "AWS Certified Developer",
              "Google Data Analytics Professional",
              "Microsoft Certified: Azure Developer",
              "TensorFlow Developer Certificate",
              "Sustainability and Development Certificate"
            ]}
            gradientFrom="from-accent"
            gradientTo="to-primary"
            delay={0.6}
          />
        </div>
      </div>
    </section>
  );
};

export default Skills;
