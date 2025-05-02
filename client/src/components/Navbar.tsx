import { useState, useEffect } from "react";
import { useTheme } from "@/components/ThemeProvider";
import { Github, Linkedin, Sun, Moon, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [mounted, setMounted] = useState(false);

  // Mount check
  useEffect(() => {
    setMounted(true);
  }, []);

  // Toggle mobile menu
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Handle scroll event for navbar background
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      // Determine active section
      const sections = ["home", "about", "skills", "projects", "experience", "contact"];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Early return if not mounted to prevent hydration mismatch
  if (!mounted) {
    return null;
  }

  // Navbar items
  const navItems = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Experience", href: "#experience" },
    { name: "Contact", href: "#contact" },
  ];

  // Handle smooth scroll and close mobile menu
  const handleNavClick = (href: string) => {
    setIsMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? "glass shadow-md" : ""}`}>
      <nav className="container mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <a href="#home" className="text-2xl font-bold text-gradient-primary">
          Shivam
        </a>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={(e) => {
                e.preventDefault();
                handleNavClick(item.href);
              }}
              className={`hover:text-primary transition-colors relative ${
                activeSection === item.href.substring(1) ? "text-primary" : ""
              }`}
            >
              {item.name}
              {activeSection === item.href.substring(1) && (
                <span className="absolute bottom-[-4px] left-0 w-full h-0.5 bg-gradient-primary rounded-full"></span>
              )}
            </a>
          ))}
        </div>
        
        {/* Right Side Controls */}
        <div className="flex items-center space-x-4">
          {/* GitHub Icon */}
          <a 
            href="https://github.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors"
          >
            <Github size={24} />
          </a>
          
          {/* LinkedIn Icon */}
          <a 
            href="https://linkedin.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors"
          >
            <Linkedin size={24} />
          </a>
          
          {/* Theme Toggle */}
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleTheme}
            className="w-9 h-9"
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? (
              <Sun className="h-4 w-4" />
            ) : (
              <Moon className="h-4 w-4" />
            )}
          </Button>
          
          {/* Contact Button (Desktop) */}
          <a 
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick("#contact");
            }}
            className="hidden md:block"
          >
            <Button className="bg-gradient-primary hover:shadow-lg transition-all">
              Get in Touch
            </Button>
          </a>
          
          {/* Mobile Menu Button */}
          <button 
            onClick={toggleMobileMenu}
            className="md:hidden text-gray-600 dark:text-gray-300 focus:outline-none"
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>
      
      {/* Mobile Navigation Menu */}
      <div className={`md:hidden px-6 py-4 glass ${isMobileMenuOpen ? "block" : "hidden"}`}>
        <div className="flex flex-col space-y-4">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={(e) => {
                e.preventDefault();
                handleNavClick(item.href);
              }}
              className={`hover:text-primary transition-colors ${
                activeSection === item.href.substring(1) ? "text-primary" : ""
              }`}
            >
              {item.name}
            </a>
          ))}
          <a 
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick("#contact");
            }}
            className="px-4 py-2 rounded-full bg-gradient-primary text-white font-medium text-center"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
