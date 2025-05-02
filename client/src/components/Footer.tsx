import { Github, Linkedin, Twitter, Instagram } from "lucide-react";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="py-10 bg-gray-50 dark:bg-gray-900/50">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <a href="#home" className="text-2xl font-bold text-gradient-primary">
              Shivam
            </a>
            <p className="text-muted-foreground mt-2">Programmer & Data Analyst</p>
          </div>
          
          <div className="flex flex-wrap gap-x-8 gap-y-4 justify-center mb-6 md:mb-0">
            <a 
              href="#home" 
              className="hover:text-primary transition-colors"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector("#home")?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Home
            </a>
            <a 
              href="#about" 
              className="hover:text-primary transition-colors"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector("#about")?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              About
            </a>
            <a 
              href="#skills" 
              className="hover:text-primary transition-colors"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector("#skills")?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Skills
            </a>
            <a 
              href="#projects" 
              className="hover:text-primary transition-colors"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Projects
            </a>
            <a 
              href="#experience" 
              className="hover:text-primary transition-colors"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector("#experience")?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Experience
            </a>
            <a 
              href="#contact" 
              className="hover:text-primary transition-colors"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Contact
            </a>
          </div>
          
          <div className="flex gap-4">
            <a 
              href="https://github.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors"
              aria-label="GitHub"
            >
              <Github size={24} />
            </a>
            <a 
              href="https://linkedin.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={24} />
            </a>
            <a 
              href="https://twitter.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors"
              aria-label="Twitter"
            >
              <Twitter size={24} />
            </a>
            <a 
              href="https://instagram.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors"
              aria-label="Instagram"
            >
              <Instagram size={24} />
            </a>
          </div>
        </div>
        
        <div className="border-t border-gray-200 dark:border-gray-800 mt-8 pt-8 text-center">
          <p className="text-muted-foreground">© {year} Shivam Dwivedi. All rights reserved.</p>
          <p className="text-muted-foreground mt-2">
            Made with <span className="text-red-500">❤</span> and cutting-edge technology
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
