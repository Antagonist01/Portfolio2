import { ReactNode, useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Card } from "@/components/ui/card";
import { ProgressWithText } from "@/components/ui/progress-with-text";
import { Check } from "lucide-react";

interface Skill {
  name: string;
  percentage: number;
}

interface SkillCardProps {
  icon: ReactNode;
  title: string;
  skills?: Skill[];
  certifications?: string[];
  gradientFrom: string;
  gradientTo: string;
  delay?: number;
}

export const SkillCard = ({
  icon,
  title,
  skills,
  certifications,
  gradientFrom,
  gradientTo,
  delay = 0
}: SkillCardProps) => {
  // Create a ref for the skill card element
  const ref = useRef(null);
  
  // Use framer-motion's useInView hook to detect when the card is in viewport
  const isInView = useInView(ref, { 
    once: false, // Set to false to trigger every time it enters viewport
    margin: "-10% 0px -10% 0px" // Margin around the element for triggering
  });
  
  // State to track if animation should play
  const [shouldAnimate, setShouldAnimate] = useState(false);
  const [key, setKey] = useState(0); // Key to force re-render of children
  
  // Effect to reset animation when card comes into/out of view
  useEffect(() => {
    if (isInView) {
      setShouldAnimate(true);
      setKey(prev => prev + 1); // Increment key to force re-render of ProgressWithText
    } else {
      setShouldAnimate(false);
    }
  }, [isInView]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 50 }}
      transition={{ duration: 0.5, delay }}
    >
      <Card className="glass p-8 rounded-xl hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
        <div className={`w-14 h-14 bg-gradient-to-r ${gradientFrom} ${gradientTo} rounded-full flex items-center justify-center mb-6`}>
          {icon}
        </div>
        <h3 className="text-xl font-bold mb-4">{title}</h3>
        
        {skills && (
          <div className="space-y-4">
            {skills.map((skill, index) => (
              <ProgressWithText
                key={`${skill.name}-${key}`} // Use compound key with the state key
                name={skill.name}
                percentage={shouldAnimate ? skill.percentage : 0} // Reset to 0 when not in view
                color={`bg-gradient-to-r ${gradientFrom} ${gradientTo}`}
                delay={0.1 * index}
                animate={shouldAnimate} // Pass animation state
              />
            ))}
          </div>
        )}
        
        {certifications && (
          <ul className="space-y-3">
            {certifications.map((certification) => (
              <li key={certification} className="flex items-center gap-2">
                <Check className={`h-5 w-5 text-accent`} />
                <span>{certification}</span>
              </li>
            ))}
          </ul>
        )}
      </Card>
    </motion.div>
  );
};
