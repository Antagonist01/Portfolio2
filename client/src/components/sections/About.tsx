import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Card } from "@/components/ui/card";
import { Clock, Code, Laptop } from "lucide-react";

const About = () => {
  const { ref, controls } = useScrollAnimation();

  return (
    <section id="about" className="section-padding relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-gradient-primary rounded-full opacity-5 blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-secondary rounded-full opacity-5 blur-3xl"></div>
      
      <div className="container mx-auto px-6">
        <div className="text-center mb-16" ref={ref}>
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={controls}
            transition={{ duration: 0.5 }}
          >
            About <span className="text-gradient-primary">Me</span>
          </motion.h2>
          <motion.div 
            className="w-24 h-1 bg-gradient-primary mx-auto rounded-full"
            initial={{ opacity: 0, width: 0 }}
            animate={controls}
            transition={{ duration: 0.5, delay: 0.2 }}
          ></motion.div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image Column */}
          <motion.div 
            className="relative mx-auto"
            initial={{ opacity: 0, x: -50 }}
            animate={controls}
            transition={{ duration: 0.6, delay: 0.1 }}
            ref={ref}
          >
            <div className="relative w-72 h-72 md:w-80 md:h-80 overflow-hidden rounded-2xl shadow-xl transform transition-transform hover:scale-105 hover:rotate-2 duration-300">
              {/* SVG Placeholder for profile image */}
              <svg 
                className="w-full h-full bg-gradient-to-br from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-800"
                viewBox="0 0 400 400"
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M200 220C244.183 220 280 184.183 280 140C280 95.8172 244.183 60 200 60C155.817 60 120 95.8172 120 140C120 184.183 155.817 220 200 220Z" fill="currentColor" opacity="0.2"/>
                <path d="M326.875 358.438C326.875 301.562 270 255.625 200 255.625C130 255.625 73.125 301.562 73.125 358.438V368.75H326.875V358.438Z" fill="currentColor" opacity="0.2"/>
              </svg>
              
              {/* Gradient Border */}
              <div 
                className="absolute inset-0 border-4 border-transparent bg-gradient-to-br from-primary to-secondary rounded-2xl" 
                style={{ 
                  mask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                  WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                  WebkitMaskComposite: "xor",
                  maskComposite: "exclude" 
                }}
              ></div>
            </div>
            
            {/* Decorative Elements */}
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-gradient-secondary rounded-xl -z-10 opacity-20"></div>
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-gradient-primary rounded-xl -z-10 opacity-20"></div>
          </motion.div>
          
          {/* Content Column */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={controls}
            transition={{ duration: 0.6, delay: 0.1 }}
            ref={ref}
          >
            <h3 className="text-2xl font-bold mb-4">
              I'm a <span className="text-gradient-secondary">Programmer & Data Analyst</span>
            </h3>
            <p className="mb-6 leading-relaxed">
              With a passion for problem-solving and a keen eye for detail, I specialize in developing sustainable solutions that meet real-world challenges. My approach combines technical expertise with creative thinking to build applications that not only function flawlessly but also provide exceptional user experiences.
            </p>
            <p className="mb-8 leading-relaxed">
              I'm constantly expanding my knowledge and skills, staying up-to-date with the latest technologies and industry trends. My goal is to create software that makes a positive impact, focusing on efficiency, sustainability, and innovation.
            </p>
            
            {/* Stats Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8">
              {/* Projects Completed */}
              <Card className="glass p-6 rounded-xl text-center hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <Code className="h-6 w-6 text-white" />
                </div>
                <h4 className="text-3xl font-bold text-gradient-primary">25</h4>
                <p className="text-sm text-muted-foreground">Projects Completed</p>
              </Card>
              
              {/* Years Experience */}
              <Card className="glass p-6 rounded-xl text-center hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="h-6 w-6 text-white" />
                </div>
                <h4 className="text-3xl font-bold text-gradient-secondary">5</h4>
                <p className="text-sm text-muted-foreground">Years Experience</p>
              </Card>
              
              {/* Technologies */}
              <Card className="glass p-6 rounded-xl text-center hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-accent rounded-full flex items-center justify-center mx-auto mb-4">
                  <Laptop className="h-6 w-6 text-white" />
                </div>
                <h4 className="text-3xl font-bold text-accent">15</h4>
                <p className="text-sm text-muted-foreground">Technologies</p>
              </Card>
            </div>
            
            {/* Skills Tags */}
            <div className="flex flex-wrap gap-2 mt-8">
              <span className="px-3 py-1 bg-gradient-primary text-white text-sm rounded-full">React</span>
              <span className="px-3 py-1 bg-gradient-to-r from-secondary to-primary text-white text-sm rounded-full">TypeScript</span>
              <span className="px-3 py-1 bg-gradient-secondary text-white text-sm rounded-full">Node.js</span>
              <span className="px-3 py-1 bg-gradient-to-r from-secondary to-accent text-white text-sm rounded-full">Data Analysis</span>
              <span className="px-3 py-1 bg-gradient-accent text-white text-sm rounded-full">Python</span>
              <span className="px-3 py-1 bg-gradient-primary text-white text-sm rounded-full">SQL</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
