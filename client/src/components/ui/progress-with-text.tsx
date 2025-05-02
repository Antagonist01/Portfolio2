import { useState, useEffect } from "react";
import { motion, useSpring } from "framer-motion";
import { Progress } from "@/components/ui/progress";

interface ProgressWithTextProps {
  name: string;
  percentage: number;
  color: string;
  delay?: number;
  animate?: boolean;
}

export const ProgressWithText = ({
  name,
  percentage,
  color,
  delay = 0,
  animate = true
}: ProgressWithTextProps) => {
  const springValue = useSpring(0, {
    stiffness: 100,
    damping: 30,
    duration: 1.5
  });
  
  useEffect(() => {
    if (animate) {
      const timer = setTimeout(() => {
        springValue.set(percentage);
      }, delay * 1000);
      return () => clearTimeout(timer);
    } else {
      springValue.set(0);
    }
  }, [percentage, delay, animate, springValue]);

  const [displayValue, setDisplayValue] = useState(0);
  
  useEffect(() => {
    const unsubscribe = springValue.on("change", (latest) => {
      setDisplayValue(Math.round(latest));
    });
    return unsubscribe;
  }, [springValue]);

  return (
    <div className="transform-gpu">
      <div className="flex justify-between mb-1">
        <motion.span
          key={`name-${animate}`}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay }}
          className="font-medium"
        >
          {name}
        </motion.span>
        <motion.span
          key={`percentage-${animate}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: delay + 0.5 }}
          className="font-semibold"
        >
          {displayValue}%
        </motion.span>
      </div>
      <motion.div
        key={`progress-${animate}`}
        initial={{ width: 0, opacity: 0 }}
        animate={{ width: "100%", opacity: 1 }}
        transition={{ duration: 0.5, delay }}
        className="transform-gpu"
      >
        <Progress 
          value={displayValue} 
          className={`h-2 ${color} transition-transform duration-1000 ease-out`}
          aria-label={`${name} progress: ${percentage}%`}
        />
      </motion.div>
    </div>
  );
};
