import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";

interface ExperienceCardProps {
  position: string;
  company: string;
  period: string;
  location: string;
  description: string;
  responsibilities: string[];
  technologies: string[];
  side: "left" | "right";
  borderColor: string;
  delay?: number;
}

export const ExperienceCard = ({
  position,
  company,
  period,
  location,
  description,
  responsibilities,
  technologies,
  side,
  borderColor,
  delay = 0
}: ExperienceCardProps) => {
  const getGradientClass = () => {
    switch (borderColor) {
      case "border-primary":
        return "text-gradient-primary";
      case "border-secondary":
        return "text-gradient-secondary";
      case "border-accent":
        return "text-accent";
      default:
        return "text-gradient-primary";
    }
  };

  const gradientClass = getGradientClass();

  return (
    <div className="relative mb-12 md:mb-24">
      <div className="flex flex-col md:flex-row items-start">
        {/* Timeline Dot */}
        <div className={`absolute left-0 md:left-1/2 w-9 h-9 bg-background dark:bg-gray-800 border-4 ${borderColor} rounded-full ml-0 md:-ml-4 z-10`}></div>
        
        {/* Content for large screens - left side */}
        {side === "left" && (
          <motion.div 
            className="hidden md:block w-1/2 pr-12 text-right"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <h3 className={`text-xl font-bold ${gradientClass}`}>{position}</h3>
            <h4 className="text-lg font-semibold mb-2">{company}</h4>
            <p className="text-sm text-muted-foreground mb-2">{period} | {location}</p>
          </motion.div>
        )}
        
        {/* Spacer for large screens */}
        {side === "left" && <div className="hidden md:block w-1/2"></div>}
        
        {/* Content for mobile - full width */}
        <motion.div 
          className="md:hidden pl-12 mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <h3 className={`text-xl font-bold ${gradientClass}`}>{position}</h3>
          <h4 className="text-lg font-semibold mb-2">{company}</h4>
          <p className="text-sm text-muted-foreground mb-2">{period} | {location}</p>
        </motion.div>
        
        {/* Content for large screens - right side content for left card */}
        {side === "left" && (
          <motion.div 
            className="pl-12 md:pl-12 md:w-1/2"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: delay + 0.2 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <Card className="glass p-6 rounded-xl hover:shadow-lg transition-all duration-300">
              <p className="mb-4">
                {description}
              </p>
              <ul className="text-sm list-disc list-inside text-muted-foreground mb-4">
                {responsibilities.map((responsibility, index) => (
                  <li key={index}>{responsibility}</li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-2">
                {technologies.map((tech) => (
                  <span key={tech} className="px-2 py-1 bg-gray-100 dark:bg-gray-800 text-foreground text-xs rounded-full">
                    {tech}
                  </span>
                ))}
              </div>
            </Card>
          </motion.div>
        )}
        
        {/* Content for large screens - right side */}
        {side === "right" && (
          <>
            {/* Hidden on mobile, visible on md and up */}
            <motion.div 
              className="hidden md:block w-1/2"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: delay + 0.2 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <Card className="glass p-6 rounded-xl mr-12 hover:shadow-lg transition-all duration-300">
                <p className="mb-4">
                  {description}
                </p>
                <ul className="text-sm list-disc list-inside text-muted-foreground mb-4 md:list-outside md:ml-auto md:mr-0 md:text-right">
                  {responsibilities.map((responsibility, index) => (
                    <li key={index}>{responsibility}</li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-2 md:justify-end">
                  {technologies.map((tech) => (
                    <span key={tech} className="px-2 py-1 bg-gray-100 dark:bg-gray-800 text-foreground text-xs rounded-full">
                      {tech}
                    </span>
                  ))}
                </div>
              </Card>
            </motion.div>
            
            {/* Content for large screens - left side for right card */}
            <motion.div 
              className="hidden md:block w-1/2 pl-12"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <h3 className={`text-xl font-bold ${gradientClass}`}>{position}</h3>
              <h4 className="text-lg font-semibold mb-2">{company}</h4>
              <p className="text-sm text-muted-foreground mb-2">{period} | {location}</p>
            </motion.div>
            
            {/* Mobile view for right card content */}
            <motion.div 
              className="pl-12 md:hidden"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: delay + 0.2 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <Card className="glass p-6 rounded-xl hover:shadow-lg transition-all duration-300">
                <p className="mb-4">
                  {description}
                </p>
                <ul className="text-sm list-disc list-inside text-muted-foreground mb-4">
                  {responsibilities.map((responsibility, index) => (
                    <li key={index}>{responsibility}</li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-2">
                  {technologies.map((tech) => (
                    <span key={tech} className="px-2 py-1 bg-gray-100 dark:bg-gray-800 text-foreground text-xs rounded-full">
                      {tech}
                    </span>
                  ))}
                </div>
              </Card>
            </motion.div>
          </>
        )}
      </div>
    </div>
  );
};
