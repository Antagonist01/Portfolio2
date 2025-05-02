import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { ExternalLink, Code } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  tags: string[];
  liveUrl: string;
  codeUrl: string;
  gradient: "primary" | "secondary" | "accent";
  delay?: number;
}

export const ProjectCard = ({
  title,
  description,
  image,
  tags,
  liveUrl,
  codeUrl,
  gradient,
  delay = 0
}: ProjectCardProps) => {
  // Define color classes based on gradient
  const getGradientClass = () => {
    switch (gradient) {
      case "primary":
        return "text-gradient-primary";
      case "secondary":
        return "text-gradient-secondary";
      case "accent":
        return "text-accent";
      default:
        return "text-gradient-primary";
    }
  };

  const gradientClass = getGradientClass();

  // Define tag color classes
  const getTagColorClass = (index: number) => {
    const colors = [
      "bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200",
      "bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200",
      "bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200",
      "bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200",
      "bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200",
      "bg-indigo-100 dark:bg-indigo-900 text-indigo-800 dark:text-indigo-200",
      "bg-pink-100 dark:bg-pink-900 text-pink-800 dark:text-pink-200",
      "bg-teal-100 dark:bg-teal-900 text-teal-800 dark:text-teal-200"
    ];
    return colors[index % colors.length];
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true, margin: "-100px" }}
    >
      <Card className="glass rounded-xl overflow-hidden hover:shadow-lg transition-all duration-300 group">
        <div className="h-48 overflow-hidden">
          <img 
            src={image} 
            alt={title} 
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>
        <div className="p-6">
          <h3 className={`text-xl font-bold mb-2 ${gradientClass}`}>{title}</h3>
          <p className="text-muted-foreground mb-4">
            {description}
          </p>
          <div className="flex flex-wrap gap-2 mb-4">
            {tags.map((tag, index) => (
              <span 
                key={tag} 
                className={`px-2 py-1 ${getTagColorClass(index)} text-xs rounded-full`}
              >
                {tag}
              </span>
            ))}
          </div>
          <div className="flex gap-4">
            <a 
              href={liveUrl} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-primary hover:text-secondary transition-colors flex items-center gap-1"
            >
              <ExternalLink size={18} />
              Live Demo
            </a>
            <a 
              href={codeUrl} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1"
            >
              <Code size={18} />
              Source Code
            </a>
          </div>
        </div>
      </Card>
    </motion.div>
  );
};
