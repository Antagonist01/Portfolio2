import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { ProjectCard } from "@/components/ui/project-card";
import { Button } from "@/components/ui/button";

const projectsData = [
  {
    title: "Carbon Footprint Calculator",
    description: "An interactive web application that helps users calculate and track their carbon footprint with personalized recommendations.",
    image: "https://images.unsplash.com/photo-1569163139599-0f4958250853?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
    tags: ["React", "Node.js", "D3.js"],
    liveUrl: "#",
    codeUrl: "#",
    gradient: "primary"
  },
  {
    title: "SEO Tag Inspector",
    description: "A Chrome extension that analyzes webpage metadata, providing insights and recommendations for SEO optimization.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
    tags: ["JavaScript", "Chrome API", "HTML/CSS"],
    liveUrl: "#",
    codeUrl: "#",
    gradient: "secondary"
  },
  {
    title: "Interactive To-Do List",
    description: "A feature-rich task management application with drag-and-drop functionality, categories, and progress tracking.",
    image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
    tags: ["React", "TypeScript", "Firebase"],
    liveUrl: "#",
    codeUrl: "#",
    gradient: "accent"
  },
  {
    title: "Modern Chair Product Page",
    description: "An e-commerce product page with 3D visualization, color customization, and responsive design for optimal user experience.",
    image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
    tags: ["Three.js", "JavaScript", "CSS3"],
    liveUrl: "#",
    codeUrl: "#",
    gradient: "primary"
  }
];

const Projects = () => {
  const { ref, controls } = useScrollAnimation();

  return (
    <section id="projects" className="section-padding relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-gradient-primary rounded-full opacity-5 blur-3xl"></div>
      <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-gradient-secondary rounded-full opacity-5 blur-3xl"></div>
      
      <div className="container mx-auto px-6">
        <div className="text-center mb-16" ref={ref}>
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={controls}
            transition={{ duration: 0.5 }}
          >
            Featured <span className="text-gradient-primary">Projects</span>
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
            Explore some of my recent work. These projects demonstrate my skills and approach to problem-solving.
          </motion.p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              description={project.description}
              image={project.image}
              tags={project.tags}
              liveUrl={project.liveUrl}
              codeUrl={project.codeUrl}
              gradient={project.gradient}
              delay={0.1 * (index + 1)}
            />
          ))}
        </div>
        
        {/* View All Projects Button */}
        <motion.div 
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          animate={controls}
          transition={{ duration: 0.5, delay: 0.6 }}
          ref={ref}
        >
          <Button className="px-8 py-6 bg-gradient-primary hover:shadow-lg transition-all">
            View All Projects
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
