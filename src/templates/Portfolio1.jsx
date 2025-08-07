import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import {
  FaHome as HomeIcon,
  FaBriefcase as WorkIcon,
  FaCode as CodeIcon,
  FaEnvelope as EmailIcon,
  FaGithub as GitHubIcon,
  FaExternalLinkAlt as LaunchIcon,
  FaSchool as SchoolIcon,
  FaPlusSquare as CreateIcon,
  FaStar as StarIcon,
  FaChartLine as TrendingUpIcon,
  FaLayerGroup as LayersIcon,
  FaPhone as PhoneIcon,
  FaMapMarkerAlt as LocationIcon,
  FaBuilding as BusinessIcon,
  FaBars as MenuIcon,
  FaTimes as CloseIcon
} from 'react-icons/fa';


// Enhanced Design System Constants
const colors = {
  primary: '#6366f1',
  accent: '#8b5cf6',
  background: {
    primary: '#fafafa',
    secondary: '#f5f5f7',
    tertiary: '#f0f0f3',
    card: '#ffffff',
    cardHover: '#fdfdfd'
  },
  gray: {
    50: '#fafafa',
    100: '#f5f5f5',
    200: '#e5e5e5',
    300: '#d4d4d4',
    400: '#a3a3a3',
    500: '#737373',
    600: '#525252',
    700: '#404040',
    800: '#262626',
    900: '#171717'
  }
};

// Enhanced Animation Variants (Faster)
const animations = {
  fadeInUp: {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }
  },
  fadeInLeft: {
    initial: { opacity: 0, x: -30 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }
  },
  fadeInRight: {
    initial: { opacity: 0, x: 30 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }
  },
  scaleIn: {
    initial: { opacity: 0, scale: 0.9 },
    animate: { opacity: 1, scale: 1 },
    transition: { duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }
  },
  slideInFromBottom: {
    initial: { opacity: 0, y: 40 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }
  },
  rotateIn: {
    initial: { opacity: 0, rotate: -5, scale: 0.95 },
    animate: { opacity: 1, rotate: 0, scale: 1 },
    transition: { duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }
  }
};

// Custom Hook for Scroll Animations
const useScrollAnimation = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  return [ref, isInView];
};

// Enhanced Section Component with Visual Separators
const Section = ({ children, className = "", variant = "default", id, sectionTitle }) => {
  const variants = {
    default: 'bg-gray-50',
    alternate: 'bg-white',
    hero: 'bg-gradient-to-br from-gray-50 via-white to-gray-100',
    projects: 'bg-gradient-to-br from-blue-50/30 via-white to-purple-50/20',
    about: 'bg-gradient-to-br from-green-50/20 via-white to-blue-50/30',
    contact: 'bg-gradient-to-br from-purple-50/20 via-white to-pink-50/30'
  };
  
  return (
    <motion.section 
      id={id} 
      className={`relative py-20 sm:py-28 lg:py-32 px-4 sm:px-6 lg:px-8 ${variants[variant]} ${className}`}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      {/* Section Indicator */}
      {sectionTitle && (
        <div className="absolute top-8 left-8 opacity-10">
          <span className="text-6xl font-bold text-gray-900 select-none">
            {sectionTitle}
          </span>
        </div>
      )}
      
      {/* Subtle Divider */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-transparent via-gray-300 to-transparent rounded-full"></div>
      
      <div className="relative z-10 max-w-6xl mx-auto">
        {children}
      </div>
    </motion.section>
  );
};

const SectionTitle = ({ title, subtitle }) => {
  const [ref, isInView] = useScrollAnimation();
  
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
      className="text-center mb-20"
    >
      <motion.h2 
        className="text-3xl sm:text-4xl md:text-5xl font-light mb-6 text-gray-900 tracking-tight"
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.4, delay: 0.1 }}
      >
        {title}
      </motion.h2>
      {subtitle && (
        <motion.p 
          className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4, delay: 0.2 }}
        >
          {subtitle}
        </motion.p>
      )}
    </motion.div>
  );
};

// Enhanced Card Component
const Card = ({ children, className = "", hover = true, animationDelay = 0 }) => {
  const [ref, isInView] = useScrollAnimation();
  
  return (
    <motion.div 
      ref={ref}
      initial={{ opacity: 0, y: 30, scale: 0.98 }}
      animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{ duration: 0.4, delay: animationDelay, ease: [0.25, 0.46, 0.45, 0.94] }}
      className={`
        bg-white/80 backdrop-blur-sm rounded-3xl border border-gray-200/50 shadow-sm transition-all duration-300
        ${hover ? 'hover:shadow-2xl hover:-translate-y-2 hover:border-gray-300/50 hover:bg-white' : ''}
        ${className}
      `}
    >
      {children}
    </motion.div>
  );
};

const Button = ({ children, variant = "primary", size = "md", className = "", onClick, ...props }) => {
  const baseClasses = "inline-flex items-center justify-center font-medium rounded-full transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-indigo-500/20";
  
  const variants = {
    primary: "bg-gray-900 text-white hover:bg-gray-800 shadow-lg hover:shadow-xl",
    secondary: "bg-gray-100 text-gray-900 hover:bg-gray-200",
    ghost: "text-gray-600 hover:text-gray-900 hover:bg-gray-50"
  };
  
  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg"
  };
  
  return (
    <motion.button
      whileHover={{ scale: 1.05, y: -2 }}
      whileTap={{ scale: 0.98 }}
      className={`${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`}
      onClick={onClick}
      {...props}
    >
      {children}
    </motion.button>
  );
};

// Enhanced Floating Navigation
const FloatingNav = ({ activeSection, navItems, scrollToSection }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isAtTop, setIsAtTop] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const isScrollingUp = currentScrollY < lastScrollY;
      
      setIsAtTop(currentScrollY < 50);
      setIsVisible(!isAtTop && (isScrollingUp || currentScrollY > 200));
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY, isAtTop]);

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ 
        opacity: isVisible ? 1 : 0,
        y: isVisible ? 0 : -20
      }}
      transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
      className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50 lg:hidden"
    >
      <nav className="bg-white/90 backdrop-blur-xl border border-gray-200/50 rounded-2xl px-3 py-3 shadow-xl shadow-gray-900/10">
        <div className="flex items-center space-x-2">
          {navItems.map((item) => {
            const IconComponent = item.icon;
            const isActive = activeSection === item.id;
            
            return (
              <motion.button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`relative px-4 py-3 rounded-xl transition-all duration-300 ${
                  isActive
                    ? "text-white bg-gray-900 shadow-lg"
                    : "text-gray-600 hover:text-gray-900 hover:bg-gray-100"
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="flex items-center space-x-2">
                  <IconComponent className="w-5 h-5" />
                  <span className="text-sm font-medium hidden sm:block">{item.label}</span>
                </div>
              </motion.button>
            );
          })}
        </div>
      </nav>
    </motion.div>
  );
};

// Enhanced Side Navigation
const SideNav = ({ activeSection, navItems, scrollToSection }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: 0.3 }}
      className="fixed left-6 top-1/2 transform -translate-y-1/2 z-50 hidden lg:block"
    >
      <nav className="space-y-6">
        {navItems.map((item, index) => {
          const IconComponent = item.icon;
          const isActive = activeSection === item.id;
          
          return (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 0.05 * index }}
              className="group relative"
            >
              <motion.button
                onClick={() => scrollToSection(item.id)}
                className={`w-14 h-14 rounded-2xl flex items-center justify-center transition-all duration-300 ${
                  isActive
                    ? "bg-gray-900 text-white shadow-xl scale-110"
                    : "bg-white/80 backdrop-blur-sm text-gray-600 hover:text-gray-900 hover:bg-white border border-gray-200/50 hover:shadow-xl hover:scale-105"
                }`}
                whileHover={{ scale: isActive ? 1.1 : 1.15 }}
                whileTap={{ scale: 0.95 }}
              >
                <IconComponent className="w-6 h-6" />
              </motion.button>
              
              {/* Enhanced Tooltip */}
              <motion.div 
                className="absolute left-20 top-1/2 transform -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none"
                initial={{ x: -10 }}
                whileHover={{ x: 0 }}
              >
                <div className="bg-gray-900 text-white px-4 py-2 rounded-xl text-sm font-medium whitespace-nowrap shadow-xl">
                  {item.label}
                  <div className="absolute left-0 top-1/2 transform -translate-x-1 -translate-y-1/2 w-2 h-2 bg-gray-900 rotate-45"></div>
                </div>
              </motion.div>
            </motion.div>
          );
        })}
      </nav>
    </motion.div>
  );
};

// Enhanced Project Card Component
const ProjectCard = ({ title, description, tech, icon, index, featured = false }) => {
  const [ref, isInView] = useScrollAnimation();
  
  // Different animation directions based on index
  const getAnimationDirection = (index) => {
    const directions = [
      { x: -50, rotate: -3 },
      { x: 50, rotate: 3 },
      { y: 50, rotate: 0 },
      { x: -50, rotate: 2 }
    ];
    return directions[index % directions.length];
  };

  const animationDir = getAnimationDirection(index);

  return (
    <motion.div
      ref={ref}
      initial={{ 
        opacity: 0, 
        ...animationDir,
        scale: 0.95
      }}
      animate={isInView ? { 
        opacity: 1, 
        x: 0, 
        y: 0, 
        rotate: 0,
        scale: 1 
      } : {}}
      transition={{ 
        duration: 0.4, 
        delay: index * 0.08,
        ease: [0.25, 0.46, 0.45, 0.94]
      }}
      className={`${featured ? 'md:col-span-2' : ''}`}
    >
      <Card hover className="h-full p-8 group" animationDelay={index * 0.05}>
        {featured && (
          <motion.div 
            className="flex justify-between items-center mb-6"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.3, delay: index * 0.05 + 0.15 }}
          >
            <div className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white px-4 py-2 rounded-full flex items-center space-x-2 text-sm shadow-lg">
              <StarIcon className="w-4 h-4" />
              <span className="font-medium">Featured</span>
            </div>
            <LaunchIcon className="w-6 h-6 text-gray-400 group-hover:text-indigo-600 transition-all duration-300 group-hover:scale-110 cursor-pointer" />
          </motion.div>
        )}
        
        <motion.div 
          className="h-28 rounded-2xl mb-6 flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 group-hover:from-indigo-50 group-hover:to-purple-50 transition-all duration-300"
          whileHover={{ scale: 1.03, rotate: 1 }}
        >
          <motion.div 
            className="w-16 h-16 rounded-2xl flex items-center justify-center bg-white shadow-lg group-hover:shadow-xl transition-all duration-300"
            whileHover={{ scale: 1.05, rotate: -1 }}
          >
            {icon}
          </motion.div>
        </motion.div>
        
        <div className="flex items-start justify-between mb-4">
          <motion.h3 
            className="text-xl font-semibold text-gray-900 flex-1"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.3, delay: index * 0.05 + 0.2 }}
          >
            {title}
          </motion.h3>
          {!featured && (
            <LaunchIcon className="w-5 h-5 text-gray-400 group-hover:text-indigo-600 transition-all duration-300 group-hover:scale-110 cursor-pointer" />
          )}
        </div>
        
        <motion.p 
          className="text-gray-600 leading-relaxed mb-6"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.3, delay: index * 0.05 + 0.25 }}
        >
          {description}
        </motion.p>
        
        <motion.div 
          className="flex flex-wrap gap-2"
          initial={{ opacity: 0, y: 10 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.3, delay: index * 0.05 + 0.3 }}
        >
          {tech.map((item, i) => (
            <motion.span 
              key={i} 
              className="px-3 py-1 text-sm font-medium rounded-full bg-gray-100 text-gray-700 hover:bg-indigo-100 hover:text-indigo-700 transition-all duration-300 cursor-default"
              whileHover={{ scale: 1.05 }}
            >
              {item}
            </motion.span>
          ))}
        </motion.div>
      </Card>
    </motion.div>
  );
};

// Enhanced Skill Badge Component
const SkillBadge = ({ skill, level, index }) => {
  const [ref, isInView] = useScrollAnimation();
  
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -30 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.3, delay: index * 0.05 }}
      className="space-y-3"
    >
      <div className="flex justify-between items-center">
        <span className="text-sm font-semibold text-gray-900">{skill}</span>
        <span className="text-xs text-gray-500">{level}%</span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={isInView ? { width: `${level}%` } : {}}
          transition={{ duration: 0.8, delay: index * 0.05 + 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="bg-gradient-to-r from-gray-900 via-gray-700 to-gray-800 h-2 rounded-full relative overflow-hidden"
        >
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
            animate={{ x: [-100, 200] }}
            transition={{ duration: 1.2, repeat: Infinity, ease: "linear" }}
          />
        </motion.div>
      </div>
    </motion.div>
  );
};

// Enhanced Home Component
const Home = () => {
  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div id="home" className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 via-white to-gray-100 overflow-hidden">
      {/* Enhanced background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-indigo-200/20 to-purple-200/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-blue-200/20 to-cyan-200/20 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 text-center px-4 sm:px-6 max-w-4xl mx-auto">
        {/* Enhanced Profile Image/Avatar */}
        <motion.div
          initial={{ scale: 0.5, opacity: 0, rotate: -90 }}
          animate={{ scale: 1, opacity: 1, rotate: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="w-28 h-28 bg-gradient-to-br from-gray-900 to-gray-700 rounded-3xl mx-auto mb-8 flex items-center justify-center shadow-2xl relative overflow-hidden"
        >
          <CreateIcon className="text-white w-8 h-8" />
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
            animate={{ x: [-100, 200] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
          />
        </motion.div>
        
        {/* Enhanced Name */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="text-4xl sm:text-5xl md:text-6xl font-light text-gray-900 mb-6 tracking-tight"
        >
          Shubhayan Bagchi
        </motion.h1>
        
        {/* Enhanced Title with Gradient */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="text-xl bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent font-medium mb-8"
        >
          Frontend Developer & UI/UX Designer
        </motion.div>
        
        {/* Enhanced Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="text-lg text-gray-600 leading-relaxed mb-12 max-w-2xl mx-auto"
        >
          Crafting exceptional digital experiences through innovative design and clean, scalable code. 
          Passionate about creating user-centric solutions that drive business growth.
        </motion.p>

        {/* Enhanced CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 mb-16"
        >
          <Button onClick={scrollToProjects} size="lg">
            View My Work
          </Button>
          
          <div className="flex space-x-4">
            <motion.a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="w-14 h-14 bg-white/80 backdrop-blur-sm border border-gray-200/50 rounded-2xl flex items-center justify-center transition-all duration-300 hover:shadow-xl hover:border-gray-300 hover:bg-white"
            >
              <GitHubIcon className="text-gray-700 w-6 h-6" />
            </motion.a>
            <motion.a
              href="mailto:shubhayanbagchi30@gmail.com"
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="w-14 h-14 bg-white/80 backdrop-blur-sm border border-gray-200/50 rounded-2xl flex items-center justify-center transition-all duration-300 hover:shadow-xl hover:border-gray-300 hover:bg-white"
            >
              <EmailIcon className="text-gray-700 w-6 h-6" />
            </motion.a>
          </div>
        </motion.div>
        
        {/* Enhanced Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="flex flex-col items-center space-y-3"
        >
          <span className="text-gray-500 text-sm font-medium">Scroll to explore</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="w-8 h-12 border-2 border-gray-300 rounded-full flex justify-center relative overflow-hidden"
          >
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              className="w-1.5 h-4 bg-gray-400 rounded-full mt-2"
            />
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

// Enhanced Projects Component
const Projects = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "Full-stack e-commerce solution with advanced features including real-time inventory management, payment processing, and analytics dashboard. Built with modern architecture patterns and optimized for scale.",
      tech: ["React", "TypeScript", "Node.js", "PostgreSQL", "Redis", "Stripe"],
      icon: <CodeIcon className="text-indigo-600 w-8 h-8" />,
      featured: true
    },
    {
      title: "Analytics Dashboard",
      description: "Real-time analytics platform with interactive data visualization, custom reporting, and machine learning insights for business intelligence.",
      tech: ["React", "D3.js", "Python", "TensorFlow"],
      icon: <TrendingUpIcon className="text-emerald-600 w-6 h-6" />
    },
    {
      title: "Design System",
      description: "Comprehensive design system and component library used across multiple products, ensuring consistency and developer productivity.",
      tech: ["React", "Storybook", "Figma", "TypeScript"],
      icon: <LayersIcon className="text-purple-600 w-6 h-6" />
    },
    {
      title: "Mobile Portfolio UI",
      description: "Award-winning mobile application interface with focus on accessibility and user experience optimization.",
      tech: ["React Native", "Expo", "Redux"],
      icon: <CreateIcon className="text-orange-600 w-6 h-6" />
    }
  ];

  return (
    <Section id="projects" variant="projects" sectionTitle="02">
      <SectionTitle 
        title="Featured Projects"
        subtitle="A showcase of my recent work, demonstrating expertise in modern web technologies and design principles."
      />
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} index={index} />
        ))}
      </div>
    </Section>
  );
};

// Enhanced About Component
const About = () => {
  const skills = [
    { skill: "React/Next.js", level: 95 },
    { skill: "TypeScript", level: 90 },
    { skill: "UI/UX Design", level: 85 },
    { skill: "Node.js", level: 80 },
    { skill: "Python", level: 75 },
    { skill: "Cloud Architecture", level: 70 }
  ];

  const highlights = [
    {
      icon: <CreateIcon className="text-purple-600 w-6 h-6" />,
      title: "Design Systems",
      description: "Scalable UI components & design principles"
    },
    {
      icon: <TrendingUpIcon className="text-emerald-600 w-6 h-6" />,
      title: "Performance",
      description: "Optimization & scalable architecture"
    }
  ];

  return (
    <Section id="about" variant="about" sectionTitle="03">
      <SectionTitle 
        title="About Me"
        subtitle="Passionate about creating exceptional digital experiences through innovative design and clean, scalable code."
      />
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
        {/* Enhanced Professional Background */}
        <Card className="h-full p-8" animationDelay={0}>
          <motion.div 
            className="flex items-center space-x-3 mb-6"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <motion.div 
              className="w-12 h-12 bg-gradient-to-br from-gray-900 to-gray-700 rounded-xl flex items-center justify-center shadow-lg"
              whileHover={{ scale: 1.1, rotate: 5 }}
            >
              <SchoolIcon className="text-white w-6 h-6" />
            </motion.div>
            <h3 className="text-xl font-semibold text-gray-900">Professional Background</h3>
          </motion.div>
          <motion.div 
            className="space-y-4 text-gray-600 leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <p>
              I'm a 4th-year B.Tech Computer Science student with 3+ years of hands-on experience 
              in frontend development and UI/UX design. I specialize in creating scalable, 
              user-centric web applications that drive business results.
            </p>
            <p>
              My expertise spans the full development lifecycle, from conceptual design and 
              prototyping to deployment and optimization. I'm passionate about emerging 
              technologies and continuously learning new skills to stay ahead of industry trends.
            </p>
          </motion.div>
        </Card>
        
        {/* Enhanced Technical Skills */}
        <Card className="h-full p-8" animationDelay={0.2}>
          <motion.div 
            className="flex items-center space-x-3 mb-6"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <motion.div 
              className="w-12 h-12 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-xl flex items-center justify-center shadow-lg"
              whileHover={{ scale: 1.1, rotate: -5 }}
            >
              <CodeIcon className="text-white w-6 h-6" />
            </motion.div>
            <h3 className="text-xl font-semibold text-gray-900">Technical Skills</h3>
          </motion.div>
          <div className="space-y-6">
            {skills.map((item, index) => (
              <SkillBadge key={index} {...item} index={index} />
            ))}
          </div>
        </Card>
      </div>

      {/* Enhanced Highlights */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {highlights.map((highlight, index) => {
          const [ref, isInView] = useScrollAnimation();
          
          return (
            <motion.div
              key={index}
              ref={ref}
              initial={{ opacity: 0, y: 50, rotate: index % 2 === 0 ? -5 : 5 }}
              animate={isInView ? { opacity: 1, y: 0, rotate: 0 } : {}}
              transition={{ duration: 0.7, delay: index * 0.15 }}
            >
              <Card className="p-6 text-center h-full group" hover animationDelay={index * 0.1}>
                <motion.div 
                  className="w-14 h-14 mx-auto mb-4 bg-gradient-to-br from-gray-50 to-gray-100 group-hover:from-indigo-50 group-hover:to-purple-50 rounded-2xl flex items-center justify-center transition-all duration-300"
                  whileHover={{ scale: 1.1, rotate: 10 }}
                >
                  {highlight.icon}
                </motion.div>
                <h4 className="font-semibold text-gray-900 mb-2">{highlight.title}</h4>
                <p className="text-sm text-gray-600">{highlight.description}</p>
              </Card>
            </motion.div>
          );
        })}
      </div>
    </Section>
  );
};

// Enhanced Contact Component
const Contact = () => {
  const contactInfo = [
    {
      icon: <EmailIcon className="text-indigo-600 w-6 h-6" />,
      label: "Email",
      value: "shubhayanbagchi30@gmail.com",
      href: "mailto:shubhayanbagchi30@gmail.com"
    },
    {
      icon: <GitHubIcon className="text-gray-700 w-6 h-6" />,
      label: "GitHub",
      value: "github.com/shubhayan",
      href: "https://github.com"
    },
    {
      icon: <LocationIcon className="text-emerald-600 w-6 h-6" />,
      label: "Location",
      value: "Kolkata, West Bengal, IN",
      href: null
    }
  ];

  const availability = [
    { status: "available", label: "Available for full-time roles", color: "emerald" },
    { status: "open", label: "Open to consulting projects", color: "indigo" },
    { status: "remote", label: "Remote-friendly", color: "purple" }
  ];

  return (
    <Section id="contact" variant="contact" sectionTitle="04">
      <SectionTitle 
        title="Let's Work Together"
        subtitle="I'm actively seeking new opportunities and exciting projects. Let's discuss how we can create something amazing together."
      />
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
        {/* Enhanced Contact Information */}
        <Card className="h-full p-8" animationDelay={0}>
          <motion.h3 
            className="text-xl font-semibold text-gray-900 mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Get In Touch
          </motion.h3>
          <div className="space-y-6 mb-8">
            {contactInfo.map((info, index) => {
              const [ref, isInView] = useScrollAnimation();
              
              return (
                <motion.div 
                  key={index} 
                  ref={ref}
                  className="flex items-center space-x-4 group"
                  initial={{ opacity: 0, x: -30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <motion.div 
                    className="w-12 h-12 bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl flex items-center justify-center group-hover:from-indigo-50 group-hover:to-purple-50 transition-all duration-300"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                  >
                    {info.icon}
                  </motion.div>
                  <div>
                    <div className="text-sm text-gray-500">{info.label}</div>
                    {info.href ? (
                      <a href={info.href} className="text-gray-900 hover:text-indigo-600 transition-colors font-medium">
                        {info.value}
                      </a>
                    ) : (
                      <div className="text-gray-900 font-medium">{info.value}</div>
                    )}
                  </div>
                </motion.div>
              );
            })}
          </div>
          
          <motion.div 
            className="pt-6 border-t border-gray-100"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h4 className="font-semibold text-gray-900 mb-4">Quick Response</h4>
            <p className="text-gray-600 text-sm">
              I typically respond to emails within 24 hours. For urgent inquiries, 
              feel free to reach out via LinkedIn or GitHub.
            </p>
          </motion.div>
        </Card>
        
        {/* Enhanced Availability */}
        <Card className="h-full p-8" animationDelay={0.2}>
          <motion.div 
            className="flex items-center space-x-3 mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <motion.div 
              className="w-12 h-12 bg-gradient-to-br from-emerald-600 to-teal-600 rounded-xl flex items-center justify-center shadow-lg"
              whileHover={{ scale: 1.1, rotate: -5 }}
            >
              <BusinessIcon className="text-white w-6 h-6" />
            </motion.div>
            <h3 className="text-xl font-semibold text-gray-900">Current Availability</h3>
          </motion.div>
          
          <div className="space-y-6 mb-8">
            {availability.map((item, index) => {
              const [ref, isInView] = useScrollAnimation();
              
              return (
                <motion.div 
                  key={index} 
                  ref={ref}
                  className="flex items-center space-x-4"
                  initial={{ opacity: 0, x: 30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <motion.div 
                    className={`w-4 h-4 rounded-full ${
                      item.color === 'emerald' ? 'bg-emerald-500' :
                      item.color === 'indigo' ? 'bg-indigo-500' : 'bg-purple-500'
                    } shadow-lg`}
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                  <span className="text-gray-700 font-medium">{item.label}</span>
                </motion.div>
              );
            })}
          </div>
          
          <motion.div 
            className="pt-6 border-t border-gray-100"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h4 className="font-semibold text-gray-900 mb-4">Open to Opportunities</h4>
            <p className="text-gray-600 text-sm leading-relaxed">
              I'm actively seeking full-time frontend developer positions and exciting 
              freelance projects. Let's discuss how we can create something amazing together.
            </p>
          </motion.div>
        </Card>
      </div>
      
      {/* Enhanced CTA */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        viewport={{ once: true }}
        className="text-center"
      >
        <motion.a
          href="mailto:shubhayanbagchi30@gmail.com"
          whileHover={{ scale: 1.05, y: -2 }}
          whileTap={{ scale: 0.98 }}
          className="inline-flex items-center space-x-3 px-8 py-4 bg-gray-900 text-white rounded-full font-medium shadow-xl hover:shadow-2xl transition-all duration-300"
        >
          <EmailIcon className="w-5 h-5" />
          <span>Start a Conversation</span>
        </motion.a>
      </motion.div>
    </Section>
  );
};

// Main Portfolio Component
const Portfolio = () => {
  const [activeSection, setActiveSection] = useState("home");

  const navItems = [
    { id: "home", label: "Home", icon: HomeIcon },
    { id: "projects", label: "Projects", icon: CodeIcon },
    { id: "about", label: "About", icon: WorkIcon },
    { id: "contact", label: "Contact", icon: EmailIcon },
  ];

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  // Enhanced scroll spy effect
  useEffect(() => {
    const sections = navItems.map(item => item.id);
    const observers = [];

    sections.forEach(sectionId => {
      const element = document.getElementById(sectionId);
      if (element) {
        const observer = new IntersectionObserver(
          ([entry]) => {
            if (entry.isIntersecting) {
              setActiveSection(sectionId);
            }
          },
          { 
            threshold: 0.5,
            rootMargin: '-10% 0px -10% 0px'
          }
        );
        observer.observe(element);
        observers.push(observer);
      }
    });

    return () => {
      observers.forEach(observer => observer.disconnect());
    };
  }, [navItems]);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Enhanced Navigation */}
      <FloatingNav 
        activeSection={activeSection}
        navItems={navItems}
        scrollToSection={scrollToSection}
      />
      
      <SideNav 
        activeSection={activeSection}
        navItems={navItems}
        scrollToSection={scrollToSection}
      />

      {/* Main Content */}
      <main className="w-full">
        <Home />
        <Projects />
        <About />
        <Contact />
      </main>

      {/* Enhanced Footer */}
      <motion.footer
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="bg-white border-t border-gray-200 text-gray-600 py-16"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Enhanced Brand */}
            <motion.div 
              className="space-y-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center space-x-3">
                <motion.div 
                  className="w-12 h-12 bg-gradient-to-br from-gray-900 to-gray-700 rounded-2xl flex items-center justify-center shadow-lg"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                >
                  <CreateIcon className="text-white w-5 h-5" />
                </motion.div>
                <span className="font-semibold text-xl text-gray-900">Shubhayan Bagchi</span>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed">
                Frontend Developer & UI/UX Designer passionate about creating 
                exceptional digital experiences.
              </p>
            </motion.div>

            {/* Enhanced Quick Links */}
            <motion.div 
              className="space-y-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <h4 className="font-semibold text-gray-900">Quick Links</h4>
              <div className="space-y-3">
                {navItems.map((item, index) => (
                  <motion.button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className="block text-gray-600 hover:text-indigo-600 transition-colors text-sm font-medium"
                    whileHover={{ x: 5 }}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    {item.label}
                  </motion.button>
                ))}
              </div>
            </motion.div>

            {/* Enhanced Connect */}
            <motion.div 
              className="space-y-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h4 className="font-semibold text-gray-900">Connect</h4>
              <div className="space-y-4">
                <motion.a 
                  href="mailto:shubhayanbagchi30@gmail.com"
                  className="flex items-center space-x-3 text-gray-600 hover:text-indigo-600 transition-colors text-sm group"
                  whileHover={{ x: 5 }}
                >
                  <EmailIcon className="w-5 h-5 group-hover:scale-110 transition-transform" />
                  <span>shubhayanbagchi30@gmail.com</span>
                </motion.a>
                <motion.a 
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-3 text-gray-600 hover:text-indigo-600 transition-colors text-sm group"
                  whileHover={{ x: 5 }}
                >
                  <GitHubIcon className="w-5 h-5 group-hover:scale-110 transition-transform" />
                  <span>GitHub Profile</span>
                </motion.a>
              </div>
            </motion.div>
          </div>

          <motion.div 
            className="border-t border-gray-200 mt-16 pt-8 text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <p className="text-gray-500 text-sm">
              © 2024 Shubhayan Bagchi. All rights reserved.
            </p>
          </motion.div>
        </div>
      </motion.footer>
    </div>
  );
};

export default Portfolio;