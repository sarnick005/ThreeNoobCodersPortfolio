import React, { useState, useEffect, useRef } from "react";
import {
  ChevronRight,
  Star,
  Shield,
  Zap,
  Users,
  Award,
  Phone,
  Mail,
  MapPin,
  Menu,
  X,
  CheckCircle,
  ArrowRight,
  Globe,
  Clock,
  Heart,
  Target,
  Lightbulb,
  Rocket,
  TrendingUp,
  Code,
  Palette,
  Database,
  BarChart3,
  Headphones,
  ArrowUp,
  Play,
  Sparkles,
  Eye,
  MessageCircle,
} from "lucide-react";

// Framer Motion alternative - Custom animation hooks
const useInView = (threshold = 0.1) => {
  const [isInView, setIsInView] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        }
      },
      { threshold }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [threshold]);

  return [ref, isInView];
};

const useScrollProgress = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const progress = window.scrollY / totalHeight;
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return scrollProgress;
};

// Animated Counter Component
const AnimatedCounter = ({ end, duration = 2000, suffix = "" }) => {
  const [count, setCount] = useState(0);
  const [ref, isInView] = useInView();

  useEffect(() => {
    if (!isInView) return;

    let startTime;
    const animate = (currentTime) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);

      setCount(Math.floor(progress * end));

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [isInView, end, duration]);

  return (
    <span ref={ref} className="tabular-nums">
      {count}
      {suffix}
    </span>
  );
};

// Floating Elements Component
const FloatingElements = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-emerald-400 rounded-full animate-pulse opacity-60"></div>
      <div className="absolute top-3/4 right-1/4 w-1 h-1 bg-green-400 rounded-full animate-ping opacity-40"></div>
      <div className="absolute top-1/2 left-3/4 w-3 h-3 bg-teal-400 rounded-full animate-bounce opacity-30"></div>
      <div className="absolute top-1/3 right-1/3 w-1.5 h-1.5 bg-emerald-300 rounded-full animate-pulse opacity-50"></div>
    </div>
  );
};

// Scroll Progress Component
const ScrollProgress = () => {
  const progress = useScrollProgress();

  return (
    <div className="fixed top-0 left-0 w-full h-1 bg-gray-200 z-50">
      <div
        className="h-full bg-gradient-to-r from-emerald-600 to-green-600 transition-all duration-300"
        style={{ width: `${progress * 100}%` }}
      />
    </div>
  );
};

// Scroll to Top Button
const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 500);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-8 right-8 p-3 bg-gradient-to-r from-emerald-600 to-green-600 text-white rounded-full shadow-lg hover:shadow-2xl transition-all duration-300 z-40 ${
        isVisible
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-10 pointer-events-none"
      }`}
    >
      <ArrowUp className="w-5 h-5" />
    </button>
  );
};

// Navigation Component
const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Why Us", href: "#features" },
    { name: "Testimonials", href: "#testimonials" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <>
      <nav
        className={`fixed w-full z-50 transition-all duration-500 ${
          scrolled
            ? "bg-white/90 backdrop-blur-xl shadow-lg border-b border-gray-100"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            {/* Logo */}
            <div className="flex items-center group cursor-pointer">
              <div className="relative">
                <div className="bg-gradient-to-r from-emerald-600 to-green-600 p-2.5 rounded-xl shadow-lg group-hover:shadow-xl transition-all duration-300">
                  <Rocket className="h-7 w-7 text-white transform group-hover:scale-110 transition-transform duration-300" />
                </div>
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-emerald-400 rounded-full animate-pulse"></div>
              </div>
              <div className="ml-3">
                <span className="text-xl font-bold bg-gradient-to-r from-emerald-700 to-green-800 bg-clip-text text-transparent">
                  TechBangla
                </span>
                <div className="text-xs text-gray-500 font-medium">
                  Digital Solutions
                </div>
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-1">
              {navItems.map((item, index) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="relative px-4 py-2 text-gray-700 hover:text-emerald-700 transition-all duration-300 font-medium group"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {item.name}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-emerald-700 to-green-800 group-hover:w-full transition-all duration-300"></span>
                </a>
              ))}
            </div>

            {/* CTA Button */}
            <div className="hidden lg:flex items-center space-x-4">
              <button className="relative overflow-hidden bg-gradient-to-r from-emerald-700 to-green-800 text-white px-6 py-2.5 rounded-full font-semibold hover:shadow-lg hover:shadow-emerald-500/25 transition-all duration-300 group">
                <span className="relative z-10">Get Started</span>
                <div className="absolute inset-0 bg-gradient-to-r from-green-800 to-emerald-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
            </div>

            {/* Mobile menu button */}
            <button
              className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>

          {/* Mobile Navigation */}
          <div
            className={`lg:hidden transition-all duration-300 overflow-hidden ${
              isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
            }`}
          >
            <div className="bg-white rounded-2xl shadow-xl p-6 mb-4 border border-gray-100">
              {navItems.map((item, index) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="block py-3 text-gray-700 hover:text-emerald-600 transition-colors duration-200 font-medium border-b border-gray-100 last:border-b-0"
                  onClick={() => setIsOpen(false)}
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  {item.name}
                </a>
              ))}
              <button className="w-full mt-4 bg-gradient-to-r from-emerald-700 to-green-800 text-white py-3 rounded-full font-semibold">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </nav>
      <ScrollProgress />
    </>
  );
};

// Hero Section Component
const HeroSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  const words = ["Transform", "Innovate", "Accelerate", "Optimize"];

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % words.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-50 via-white to-emerald-50 pt-24"
    >
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-emerald-300/15 rounded-full blur-3xl animate-pulse"></div>
        <div
          className="absolute top-40 right-20 w-96 h-96 bg-green-300/10 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute bottom-20 left-1/4 w-64 h-64 bg-teal-300/15 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "2s" }}
        ></div>
      </div>

      <FloatingElements />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-8">
          {/* Announcement Banner */}
          <div
            className={`inline-flex items-center space-x-2 bg-white/90 backdrop-blur-sm border border-emerald-200 rounded-full px-6 py-3 shadow-lg transition-all duration-1000 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-4"
            }`}
          >
            <Sparkles className="w-4 h-4 text-emerald-600" />
            <span className="text-sm font-medium text-gray-700">
              New: Digital Solutions for Bengal Businesses
            </span>
            <ChevronRight className="w-4 h-4 text-gray-400" />
          </div>

          {/* Main Headline */}
          <div
            className={`space-y-6 transition-all duration-1000 delay-200 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-gray-900 leading-tight tracking-tight">
              <span className="block">We Help You</span>
              <span className="relative inline-block">
                <span className="bg-gradient-to-r from-emerald-700 via-green-700 to-emerald-800 bg-clip-text text-transparent">
                  {words[currentIndex]}
                </span>
                <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-emerald-700 to-green-700 transform scale-x-0 animate-pulse"></span>
              </span>
              <span className="block">Your Business</span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Partner with Kolkata's leading digital innovators to unlock your
              business potential through
              <span className="font-semibold text-gray-800">
                {" "}
                cutting-edge technology
              </span>
              ,
              <span className="font-semibold text-gray-800">
                {" "}
                strategic innovation
              </span>
              , and
              <span className="font-semibold text-gray-800">
                {" "}
                unmatched expertise
              </span>
              .
            </p>
          </div>

          {/* CTA Buttons */}
          <div
            className={`flex flex-col sm:flex-row gap-4 justify-center items-center transition-all duration-1000 delay-400 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            <button className="group relative overflow-hidden bg-gradient-to-r from-emerald-700 to-green-800 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-2xl hover:shadow-emerald-500/25 transition-all duration-300 flex items-center">
              <span className="relative z-10">Start Your Project</span>
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-200 relative z-10" />
              <div className="absolute inset-0 bg-gradient-to-r from-green-800 to-emerald-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>

            <button className="group flex items-center space-x-3 text-gray-700 hover:text-emerald-700 transition-colors duration-300">
              <div className="w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center group-hover:shadow-xl transition-all duration-300">
                <Play className="w-5 h-5 ml-0.5 text-emerald-700" />
              </div>
              <span className="font-semibold">Watch Our Story</span>
            </button>
          </div>

          {/* Stats */}
          <div
            className={`grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 transition-all duration-1000 delay-600 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            {[
              {
                number: 500,
                suffix: "+",
                label: "Projects Delivered",
                icon: Rocket,
              },
              {
                number: 98,
                suffix: "%",
                label: "Client Satisfaction",
                icon: Heart,
              },
              {
                number: 24,
                suffix: "/7",
                label: "Support Available",
                icon: Headphones,
              },
            ].map((stat, index) => (
              <div
                key={index}
                className="group text-center p-6 bg-white/60 backdrop-blur-sm rounded-2xl border border-gray-200 hover:bg-white/80 hover:shadow-lg transition-all duration-300"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-emerald-700 to-green-800 rounded-xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  <stat.icon className="w-6 h-6 text-white" />
                </div>
                <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-emerald-700 to-green-800 bg-clip-text text-transparent">
                  <AnimatedCounter end={stat.number} suffix={stat.suffix} />
                </div>
                <div className="text-gray-600 font-medium mt-2">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

          {/* Trust Indicators */}
          <div
            className={`mt-12 transition-all duration-1000 delay-800 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            <p className="text-sm text-gray-500 mb-6">
              Trusted by leading businesses across Kolkata and West Bengal
            </p>
            <div className="flex justify-center items-center space-x-8 opacity-60">
              {["Emami", "ITC", "CESC", "Techno India", "Webel"].map(
                (company, index) => (
                  <div key={index} className="font-bold text-gray-400 text-lg">
                    {company}
                  </div>
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// About Section Component
const AboutSection = () => {
  const [ref, isInView] = useInView();

  const values = [
    {
      icon: Target,
      title: "Mission-Driven",
      desc: "Every solution we create is purpose-built to drive measurable business outcomes.",
      color: "from-emerald-500 to-green-500",
    },
    {
      icon: Heart,
      title: "Client-Centric",
      desc: "Your success is our success. We build lasting partnerships, not just projects.",
      color: "from-teal-500 to-emerald-500",
    },
    {
      icon: Zap,
      title: "Innovation First",
      desc: "We stay ahead of technology trends to give you a competitive advantage.",
      color: "from-green-500 to-teal-500",
    },
    {
      icon: Shield,
      title: "Quality Assured",
      desc: "Rigorous testing and quality control ensure excellence in every deliverable.",
      color: "from-emerald-600 to-green-600",
    },
  ];

  return (
    <section id="about" className="py-24 bg-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-gray-50/50 to-white"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div
            ref={ref}
            className={`space-y-8 transition-all duration-1000 ${
              isInView
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-8"
            }`}
          >
            <div className="space-y-6">
              <div className="inline-flex items-center space-x-2 bg-emerald-50 text-emerald-600 px-4 py-2 rounded-full text-sm font-medium">
                <Eye className="w-4 h-4" />
                <span>About TechBangla</span>
              </div>

              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                Transforming Ideas Into
                <span className="block bg-gradient-to-r from-emerald-600 to-green-600 bg-clip-text text-transparent">
                  Digital Excellence
                </span>
              </h2>

              <p className="text-lg text-gray-600 leading-relaxed">
                Since 2020, we've been the catalyst for digital transformation
                across industries. Our expert team combines strategic thinking
                with technical excellence to deliver solutions that don't just
                meet expectations—they exceed them.
              </p>

              <p className="text-lg text-gray-600 leading-relaxed">
                From startups to Fortune 500 companies, we've helped businesses
                navigate the digital landscape with confidence, innovation, and
                measurable results.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="bg-gradient-to-br from-emerald-50 to-green-100 p-6 rounded-2xl border border-emerald-200">
                <div className="text-2xl font-bold text-emerald-700 mb-2">
                  6+ Years
                </div>
                <div className="text-gray-700 font-medium">
                  Serving Kolkata & Bengal
                </div>
              </div>
              <div className="bg-gradient-to-br from-teal-50 to-emerald-100 p-6 rounded-2xl border border-teal-200">
                <div className="text-2xl font-bold text-teal-700 mb-2">
                  75+ Experts
                </div>
                <div className="text-gray-700 font-medium">
                  Local & International Team
                </div>
              </div>
            </div>
          </div>

          {/* Values Grid */}
          <div
            className={`grid grid-cols-1 sm:grid-cols-2 gap-6 transition-all duration-1000 delay-200 ${
              isInView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
            }`}
          >
            {values.map((value, index) => (
              <div
                key={index}
                className="group bg-white p-6 rounded-2xl border border-gray-200 hover:border-gray-300 hover:shadow-lg transition-all duration-300"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div
                  className={`bg-gradient-to-r ${value.color} p-3 rounded-xl w-12 h-12 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
                >
                  <value.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-600 leading-relaxed text-sm">
                  {value.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

// Services Section Component
const ServicesSection = () => {
  const [ref, isInView] = useInView();

  const services = [
    {
      icon: Code,
      title: "Custom Development",
      description:
        "Bespoke software solutions tailored to your unique business requirements and scalability needs.",
      features: [
        "Web Applications",
        "Mobile Apps",
        "API Development",
        "Cloud Solutions",
      ],
      color: "from-emerald-600 to-green-600",
      popular: false,
    },
    {
      icon: Palette,
      title: "Digital Design",
      description:
        "Beautiful, user-centric designs that enhance user experience and drive engagement.",
      features: [
        "UI/UX Design",
        "Brand Identity",
        "Prototyping",
        "Design Systems",
      ],
      color: "from-teal-600 to-emerald-600",
      popular: true,
    },
    {
      icon: TrendingUp,
      title: "Growth Strategy",
      description:
        "Data-driven strategies to accelerate your business growth and market presence.",
      features: [
        "Digital Marketing",
        "Analytics",
        "Conversion Optimization",
        "SEO/SEM",
      ],
      color: "from-green-600 to-teal-600",
      popular: false,
    },
    {
      icon: Database,
      title: "Data Solutions",
      description:
        "Transform your data into actionable insights with advanced analytics and AI.",
      features: [
        "Data Analytics",
        "Machine Learning",
        "Business Intelligence",
        "Automation",
      ],
      color: "from-emerald-600 to-green-700",
      popular: false,
    },
    {
      icon: Shield,
      title: "Security & Compliance",
      description:
        "Comprehensive security solutions to protect your business and customer data.",
      features: [
        "Cybersecurity",
        "Compliance",
        "Risk Assessment",
        "Security Audits",
      ],
      color: "from-slate-600 to-emerald-700",
      popular: false,
    },
    {
      icon: Headphones,
      title: "Support & Maintenance",
      description:
        "24/7 support and ongoing maintenance to ensure your systems run smoothly.",
      features: [
        "Technical Support",
        "System Monitoring",
        "Updates & Patches",
        "Performance Optimization",
      ],
      color: "from-teal-600 to-green-600",
      popular: false,
    },
  ];

  return (
    <section
      id="services"
      className="py-24 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(34,197,94,0.1),transparent)] opacity-50"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div
          ref={ref}
          className={`text-center mb-16 transition-all duration-1000 ${
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="inline-flex items-center space-x-2 bg-emerald-50 text-emerald-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Sparkles className="w-4 h-4" />
            <span>Our Services</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Solutions That Drive
            <span className="block bg-gradient-to-r from-emerald-700 to-green-800 bg-clip-text text-transparent">
              Real Results
            </span>
          </h2>

          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            From concept to deployment, we provide end-to-end solutions that
            transform your business and deliver measurable outcomes.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className={`group relative bg-white rounded-2xl p-8 border border-gray-200 hover:border-gray-300 hover:shadow-2xl transition-all duration-500 ${
                isInView
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
              style={{
                animationDelay: `${index * 100}ms`,
                transformStyle: "preserve-3d",
              }}
            >
              {service.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-to-r from-emerald-500 to-green-600 text-white px-4 py-1 rounded-full text-xs font-bold">
                    MOST POPULAR
                  </div>
                </div>
              )}

              <div className="relative z-10">
                <div
                  className={`bg-gradient-to-r ${service.color} p-4 rounded-2xl w-16 h-16 flex items-center justify-center mb-6 group-hover:scale-110 transition-all duration-300 shadow-lg`}
                >
                  <service.icon className="h-8 w-8 text-white" />
                </div>

                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-emerald-700 transition-colors duration-300">
                  {service.title}
                </h3>

                <p className="text-gray-600 leading-relaxed mb-6">
                  {service.description}
                </p>

                <div className="space-y-3 mb-8">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center space-x-3">
                      <div className="w-1.5 h-1.5 bg-gradient-to-r from-emerald-700 to-green-700 rounded-full"></div>
                      <span className="text-gray-600 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>

                <button className="w-full bg-gradient-to-r from-emerald-700 to-green-800 text-white py-3 rounded-xl font-semibold hover:shadow-lg hover:shadow-emerald-500/25 transition-all duration-300 group-hover:scale-105">
                  Learn More
                </button>
              </div>

              {/* Hover Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-700/5 to-green-700/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Features Section Component
const FeaturesSection = () => {
  const [ref, isInView] = useInView();

  const features = [
    {
      icon: Clock,
      title: "Lightning Fast",
      description:
        "Average delivery time reduced by 60% through our streamlined processes.",
      stat: "2-4 Weeks",
      gradient: "from-emerald-600 to-green-600",
    },
    {
      icon: Shield,
      title: "Bank-Grade Security",
      description:
        "Enterprise-level security protocols protecting your sensitive data.",
      stat: "99.99%",
      gradient: "from-slate-600 to-emerald-700",
    },
    {
      icon: Users,
      title: "Expert Team",
      description:
        "Certified professionals with average 8+ years industry experience.",
      stat: "75+ Experts",
      gradient: "from-teal-600 to-emerald-600",
    },
    {
      icon: Award,
      title: "Proven Success",
      description:
        "Award-winning solutions recognized by industry leaders globally.",
      stat: "25+ Awards",
      gradient: "from-green-600 to-teal-600",
    },
  ];

  return (
    <section id="features" className="py-24 bg-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-50/30 via-transparent to-green-50/30"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div
          ref={ref}
          className={`text-center mb-16 transition-all duration-1000 ${
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="inline-flex items-center space-x-2 bg-emerald-50 text-emerald-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <TrendingUp className="w-4 h-4" />
            <span>Why Choose Us</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            The TechBangla
            <span className="block bg-gradient-to-r from-emerald-700 to-green-800 bg-clip-text text-transparent">
              Advantage
            </span>
          </h2>

          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We combine global technology standards with deep understanding of
            Bengali business culture to deliver solutions that truly resonate
            with your local market.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`group text-center transition-all duration-1000 ${
                isInView
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="relative mb-8">
                <div
                  className={`bg-gradient-to-r ${feature.gradient} p-6 rounded-2xl w-20 h-20 flex items-center justify-center mx-auto shadow-lg group-hover:shadow-2xl group-hover:scale-110 transition-all duration-300`}
                >
                  <feature.icon className="h-8 w-8 text-white" />
                </div>
                <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-white rounded-full border-4 border-gray-100"></div>
              </div>

              <div className="text-3xl font-bold bg-gradient-to-r from-emerald-700 to-green-800 bg-clip-text text-transparent mb-2">
                {feature.stat}
              </div>

              <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-emerald-700 transition-colors duration-300">
                {feature.title}
              </h3>

              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div
          className={`text-center mt-16 transition-all duration-1000 delay-600 ${
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="bg-gradient-to-r from-emerald-700 to-green-800 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">
              Ready to Experience the Difference?
            </h3>
            <p className="text-emerald-100 mb-6 max-w-2xl mx-auto">
              Join hundreds of satisfied clients who have transformed their
              business with our solutions.
            </p>
            <button className="bg-white text-emerald-700 px-8 py-3 rounded-full font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300">
              Start Your Project Today
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

// Testimonials Section Component
const TestimonialsSection = () => {
  const [ref, isInView] = useInView();
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const testimonials = [
    {
      name: "Priya Chatterjee",
      position: "CEO & Founder",
      company: "Bengal Textiles Ltd.",
      content:
        "TechBangla transformed our traditional textile business into a digital powerhouse. Their understanding of both technology and Bengali business culture is exceptional—300% increase in online orders.",
      rating: 5,
      image:
        "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
      results: "300% Online Growth",
    },
    {
      name: "Rajesh Kumar Dey",
      position: "Managing Director",
      company: "Calcutta Trading Co.",
      content:
        "Working with TechBangla was like having a tech-savvy family member. They understood our traditional business and helped us embrace digital transformation seamlessly.",
      rating: 5,
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
      results: "₹5 Crore Revenue Jump",
    },
    {
      name: "Ananya Banerjee",
      position: "Director of Operations",
      company: "Howrah Steel Industries",
      content:
        "TechBangla's team speaks our language—literally and figuratively. They delivered a world-class solution that put our Kolkata-based company on the global map.",
      rating: 5,
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
      results: "200% Export Increase",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="testimonials"
      className="py-24 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(34,197,94,0.1),transparent)] opacity-50"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div
          ref={ref}
          className={`text-center mb-16 transition-all duration-1000 ${
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="inline-flex items-center space-x-2 bg-emerald-50 text-emerald-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <MessageCircle className="w-4 h-4" />
            <span>Client Success Stories</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Trusted by Bengal's
            <span className="block bg-gradient-to-r from-emerald-700 to-green-800 bg-clip-text text-transparent">
              Leading Businesses
            </span>
          </h2>

          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            From heritage businesses in Burrabazar to tech startups in Salt
            Lake, see how we've helped Kolkata enterprises achieve remarkable
            growth and digital success.
          </p>
        </div>

        {/* Main Testimonial */}
        <div
          className={`transition-all duration-1000 delay-200 ${
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-2xl border border-gray-100 mb-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
              {/* Testimonial Content */}
              <div className="lg:col-span-2 space-y-6">
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-5 w-5 text-emerald-400 fill-current"
                    />
                  ))}
                </div>

                <blockquote className="text-xl md:text-2xl text-gray-800 leading-relaxed italic">
                  "{testimonials[activeTestimonial].content}"
                </blockquote>

                <div className="flex items-center space-x-4">
                  <img
                    src={testimonials[activeTestimonial].image}
                    alt={testimonials[activeTestimonial].name}
                    className="w-16 h-16 rounded-full object-cover border-4 border-white shadow-lg"
                  />
                  <div>
                    <h4 className="font-bold text-gray-900 text-lg">
                      {testimonials[activeTestimonial].name}
                    </h4>
                    <p className="text-gray-600">
                      {testimonials[activeTestimonial].position}
                    </p>
                    <p className="text-emerald-700 font-medium">
                      {testimonials[activeTestimonial].company}
                    </p>
                  </div>
                </div>
              </div>

              {/* Results Card */}
              <div className="bg-gradient-to-br from-emerald-700 to-green-800 rounded-2xl p-6 text-white text-center">
                <div className="text-3xl font-bold mb-2">
                  {testimonials[activeTestimonial].results.split(" ")[0]}
                </div>
                <div className="text-emerald-100">
                  {testimonials[activeTestimonial].results
                    .split(" ")
                    .slice(1)
                    .join(" ")}
                </div>
              </div>
            </div>
          </div>

          {/* Testimonial Navigation */}
          <div className="flex justify-center space-x-3">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === activeTestimonial
                    ? "bg-emerald-700 w-8"
                    : "bg-gray-300 hover:bg-gray-400"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Stats Grid */}
        <div
          className={`grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 transition-all duration-1000 delay-400 ${
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {[
            { number: 98, suffix: "%", label: "Client Satisfaction Rate" },
            { number: 500, suffix: "+", label: "Successful Projects" },
            { number: 24, suffix: "/7", label: "Support Availability" },
          ].map((stat, index) => (
            <div
              key={index}
              className="text-center p-6 bg-white rounded-2xl border border-gray-200 shadow-lg"
            >
              <div className="text-4xl font-bold bg-gradient-to-r from-emerald-700 to-green-800 bg-clip-text text-transparent mb-2">
                <AnimatedCounter end={stat.number} suffix={stat.suffix} />
              </div>
              <div className="text-gray-600 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Contact Section Component
const ContactSection = () => {
  const [ref, isInView] = useInView();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    company: "",
    message: "",
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactInfo = [
    {
      icon: Phone,
      label: "Call Us",
      value: "+91 98300 12345",
      subtext: "Mon-Sat 9AM-7PM IST",
    },
    {
      icon: Mail,
      label: "Email Us",
      value: "hello@techbangla.com",
      subtext: "We respond within 24 hours",
    },
    {
      icon: MapPin,
      label: "Visit Us",
      value: "Salt Lake Sector V, Block EP",
      subtext: "Kolkata, West Bengal 700091",
    },
  ];

  return (
    <section
      id="contact"
      className="py-24 bg-gradient-to-br from-emerald-700 via-green-700 to-slate-800 relative overflow-hidden"
    >
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div
          ref={ref}
          className={`text-center mb-16 transition-all duration-1000 ${
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Rocket className="w-4 h-4" />
            <span>Get Started Today</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Transform
            <span className="block">Your Business?</span>
          </h2>

          <p className="text-xl text-emerald-100 max-w-3xl mx-auto leading-relaxed">
            Let's discuss your project and explore how we can help you achieve
            your goals. Get a free consultation and project estimate.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <div
            className={`space-y-8 transition-all duration-1000 delay-200 ${
              isInView
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-8"
            }`}
          >
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-white mb-6">
                Get in Touch
              </h3>

              {contactInfo.map((contact, index) => (
                <div key={index} className="flex items-start space-x-4 group">
                  <div className="bg-white/20 backdrop-blur-sm p-3 rounded-xl group-hover:bg-white/30 transition-all duration-300">
                    <contact.icon className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <div className="text-emerald-100 text-sm font-medium">
                      {contact.label}
                    </div>
                    <div className="text-white font-semibold text-lg">
                      {contact.value}
                    </div>
                    <div className="text-emerald-200 text-sm">
                      {contact.subtext}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Why Choose Us Points */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <h4 className="text-lg font-bold text-white mb-4">
                Why Start with Us?
              </h4>
              <div className="space-y-3">
                {[
                  "Free consultation & project assessment for Kolkata businesses",
                  "Transparent pricing in INR with no hidden costs",
                  "Dedicated Bengali-speaking project manager",
                  "30-day satisfaction guarantee",
                ].map((point, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-emerald-300 flex-shrink-0" />
                    <span className="text-white">{point}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div
            className={`transition-all duration-1000 delay-400 ${
              isInView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
            }`}
          >
            <div className="bg-white rounded-3xl p-8 shadow-2xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Start Your Project
              </h3>

              <div className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      First Name
                    </label>
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-emerald-600 focus:ring-4 focus:ring-emerald-600/10 transition-all duration-200 outline-none"
                      placeholder="John"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Last Name
                    </label>
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-emerald-600 focus:ring-4 focus:ring-emerald-600/10 transition-all duration-200 outline-none"
                      placeholder="Doe"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-emerald-600 focus:ring-4 focus:ring-emerald-600/10 transition-all duration-200 outline-none"
                    placeholder="john@company.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Company
                  </label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-emerald-600 focus:ring-4 focus:ring-emerald-600/10 transition-all duration-200 outline-none"
                    placeholder="Your Company"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Project Description
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={4}
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-emerald-600 focus:ring-4 focus:ring-emerald-600/10 transition-all duration-200 outline-none resize-none"
                    placeholder="Tell us about your project goals and requirements..."
                  />
                </div>

                <button className="w-full bg-gradient-to-r from-emerald-700 to-green-800 text-white py-4 rounded-xl font-semibold text-lg hover:shadow-2xl hover:shadow-emerald-500/25 transition-all duration-300 hover:scale-105 flex items-center justify-center space-x-2">
                  <span>Send Message</span>
                  <ArrowRight className="w-5 h-5" />
                </button>

                <p className="text-center text-gray-500 text-sm">
                  By submitting this form, you agree to our privacy policy and
                  terms of service.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Footer Component
const Footer = () => {
  const [ref, isInView] = useInView();

  const footerLinks = {
    Services: [
      "Web Development",
      "Mobile Apps",
      "Digital Strategy",
      "Brand Design",
      "Consulting",
    ],
    Company: ["About Us", "Our Team", "Careers", "Press Kit", "Contact"],
    Resources: [
      "Blog",
      "Case Studies",
      "Documentation",
      "Help Center",
      "Community",
    ],
    Legal: [
      "Privacy Policy",
      "Terms of Service",
      "Cookie Policy",
      "GDPR",
      "Security",
    ],
  };

  const socialLinks = [
    { name: "Twitter", color: "hover:bg-emerald-500" },
    { name: "LinkedIn", color: "hover:bg-green-600" },
    { name: "GitHub", color: "hover:bg-gray-700" },
    { name: "Dribbble", color: "hover:bg-teal-500" },
  ];

  return (
    <footer className="bg-gray-900 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-black"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer */}
        <div
          ref={ref}
          className={`py-16 transition-all duration-1000 ${
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
            {/* Company Info */}
            <div className="lg:col-span-2">
              <div className="flex items-center mb-6">
                <div className="bg-gradient-to-r from-emerald-600 to-green-600 p-2.5 rounded-xl">
                  <Rocket className="h-6 w-6 text-white" />
                </div>
                <div className="ml-3">
                  <span className="text-xl font-bold">TechBangla</span>
                  <div className="text-xs text-gray-400">Digital Solutions</div>
                </div>
              </div>

              <p className="text-gray-400 leading-relaxed mb-6">
                Transforming Bengal businesses through innovative digital
                solutions. We build lasting partnerships that drive growth and
                success across Eastern India.
              </p>

              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <button
                    key={social.name}
                    className={`w-10 h-10 bg-gray-800 rounded-lg ${social.color} transition-all duration-300 flex items-center justify-center hover:scale-110`}
                  >
                    <div className="w-4 h-4 bg-current"></div>
                  </button>
                ))}
              </div>
            </div>

            {/* Footer Links */}
            {Object.entries(footerLinks).map(([category, links]) => (
              <div key={category}>
                <h4 className="font-semibold mb-4 text-white">{category}</h4>
                <ul className="space-y-3">
                  {links.map((link) => (
                    <li key={link}>
                      <a
                        href="#"
                        className="text-gray-400 hover:text-white transition-colors duration-200 text-sm"
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Newsletter */}
        <div
          className={`border-t border-gray-800 py-8 transition-all duration-1000 delay-200 ${
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h4 className="text-xl font-bold mb-2">Stay Updated</h4>
              <p className="text-gray-400">
                Get the latest insights and updates delivered to your inbox.
              </p>
            </div>
            <div className="flex space-x-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:border-emerald-600 focus:outline-none transition-colors duration-200"
              />
              <button className="bg-gradient-to-r from-emerald-700 to-green-800 px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div
          className={`border-t border-gray-800 py-8 transition-all duration-1000 delay-400 ${
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              &copy; 2025 TechBangla. All rights reserved. Made with ❤️ in
              Kolkata for Bengal's digital future.
            </p>
            <div className="flex space-x-6 text-sm">
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors duration-200"
              >
                Privacy
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors duration-200"
              >
                Terms
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors duration-200"
              >
                Cookies
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

// Main Business Component
const Business = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <FeaturesSection />
      <TestimonialsSection />
      <ContactSection />
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Business;