import React, { useState, useEffect } from "react";
import {
  Menu,
  X,
  Palette,
  Mail,
  Phone,
  MapPin,
  Instagram,
  Facebook,
  Twitter,
  ArrowUp,
  Brush,
  Camera,
  Paintbrush,
  Heart,
  Star,
  Award,
  Eye,
  Play,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

// Header Component
const Header = ({
  isMenuOpen,
  setIsMenuOpen,
  activeSection,
  setActiveSection,
}) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setActiveSection(sectionId.charAt(0).toUpperCase() + sectionId.slice(1));
    }
    setIsMenuOpen(false);
  };

  const navItems = [
    { name: "Home", id: "home" },
    { name: "About", id: "about" },
    { name: "Gallery", id: "gallery" },
    { name: "Services", id: "services" },
    { name: "Contact", id: "contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-black/90 backdrop-blur-xl shadow-2xl" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-10">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="relative">
              <div className="w-12 h-12 bg-gradient-to-br from-amber-400 via-rose-400 to-purple-500 rounded-lg rotate-12 transition-transform duration-500 hover:rotate-0"></div>
              <Palette className="absolute inset-0 h-8 w-8 text-white m-2" />
            </div>
            <span className="text-3xl font-extralight text-white tracking-widest">
              ATELIER
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-12">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`relative font-light text-sm uppercase tracking-wider transition-all duration-300 ${
                  activeSection === item.name
                    ? "text-amber-400"
                    : "text-white/80 hover:text-white"
                }`}
              >
                {item.name}
                <span
                  className={`absolute -bottom-2 left-0 h-0.5 bg-gradient-to-r from-amber-400 to-rose-400 transition-all duration-300 ${
                    activeSection === item.name ? "w-full" : "w-0"
                  }`}
                ></span>
              </button>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-black/95 backdrop-blur-xl">
            <div className="px-6 py-8 space-y-6">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="block text-white/80 hover:text-amber-400 font-light text-lg uppercase tracking-wider transition-colors duration-300"
                >
                  {item.name}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

// Hero Section Component
const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    {
      title: "Contemporary Visions",
      subtitle: "Where art transcends boundaries",
      gradient: "from-purple-900 via-blue-900 to-indigo-900",
    },
    {
      title: "Eternal Beauty",
      subtitle: "Captured in every stroke",
      gradient: "from-rose-900 via-orange-900 to-amber-900",
    },
    {
      title: "Modern Masters",
      subtitle: "Defining tomorrow's classics",
      gradient: "from-emerald-900 via-teal-900 to-cyan-900",
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="home" className="relative h-screen overflow-hidden">
      {/* Background Slides */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 bg-gradient-to-br ${
            slide.gradient
          } transition-opacity duration-1000 ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="absolute inset-0 bg-black/40"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
        </div>
      ))}

      {/* Floating Art Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-amber-400/20 to-rose-400/20 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-32 right-16 w-48 h-48 bg-gradient-to-br from-purple-400/20 to-blue-400/20 rounded-full blur-xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-gradient-to-br from-emerald-400/20 to-teal-400/20 rounded-full blur-xl animate-pulse delay-2000"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center justify-center">
        <div className="text-center max-w-6xl mx-auto px-6">
          <div className="mb-8">
            <div className="inline-block p-4 border border-white/20 rounded-full mb-6 backdrop-blur-sm">
              <Palette className="h-8 w-8 text-amber-400" />
            </div>
          </div>

          <h1 className="text-6xl md:text-8xl font-extralight text-white mb-6 tracking-wider">
            {slides[currentSlide].title.split(" ").map((word, index) => (
              <span
                key={index}
                className={`block ${
                  index === 1
                    ? "text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-rose-400"
                    : ""
                }`}
              >
                {word}
              </span>
            ))}
          </h1>

          <p className="text-xl md:text-2xl text-white/80 mb-12 font-light tracking-wide max-w-3xl mx-auto">
            {slides[currentSlide].subtitle}
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button
              onClick={() =>
                document
                  .getElementById("gallery")
                  .scrollIntoView({ behavior: "smooth" })
              }
              className="group relative px-12 py-4 bg-gradient-to-r from-amber-400 to-rose-400 text-black font-medium uppercase tracking-wider overflow-hidden transition-all duration-500 hover:shadow-2xl hover:shadow-amber-400/25"
            >
              <span className="relative z-10">Explore Collection</span>
              <div className="absolute inset-0 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
            </button>

            <button
              onClick={() =>
                document
                  .getElementById("contact")
                  .scrollIntoView({ behavior: "smooth" })
              }
              className="group px-12 py-4 border border-white/30 text-white font-medium uppercase tracking-wider backdrop-blur-sm hover:bg-white/10 transition-all duration-300"
            >
              Private Viewing
            </button>
          </div>

          {/* Slide Indicators */}
          <div className="flex justify-center space-x-3 mt-12">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-12 h-0.5 transition-all duration-300 ${
                  index === currentSlide ? "bg-amber-400" : "bg-white/30"
                }`}
              ></button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

// About Section Component
const AboutSection = () => {
  return (
    <section id="about" className="py-32 bg-neutral-50 px-8">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div className="space-y-8">
            <div>
              <div className="inline-block p-3 bg-gradient-to-br from-amber-400 to-rose-400 rounded-full mb-6">
                <Award className="h-6 w-6 text-white" />
              </div>
              <h2 className="text-5xl md:text-6xl font-extralight text-neutral-800 mb-6 tracking-wide">
                The Artist's
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-rose-600">
                  Vision
                </span>
              </h2>
            </div>

            <div className="w-24 h-px bg-gradient-to-r from-amber-400 to-rose-400 mb-8"></div>

            <div className="space-y-6 text-lg text-neutral-600 leading-relaxed">
              <p>
                For over fifteen years, I have dedicated myself to the pursuit
                of artistic excellence, creating works that challenge
                perceptions and evoke profound emotional responses. My practice
                exists at the intersection of classical technique and
                contemporary vision.
              </p>
              <p>
                Each piece in my collection represents a dialogue between the
                conscious and unconscious, the seen and unseen, utilizing
                premium materials and innovative methodologies that ensure both
                aesthetic brilliance and archival permanence.
              </p>
            </div>

            <div className="grid grid-cols-3 gap-8 pt-8">
              <div className="text-center">
                <div className="text-4xl font-extralight text-neutral-800 mb-2">
                  200+
                </div>
                <div className="text-sm uppercase tracking-wider text-neutral-500">
                  Masterpieces
                </div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-extralight text-neutral-800 mb-2">
                  75+
                </div>
                <div className="text-sm uppercase tracking-wider text-neutral-500">
                  Collectors
                </div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-extralight text-neutral-800 mb-2">
                  15+
                </div>
                <div className="text-sm uppercase tracking-wider text-neutral-500">
                  Years
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative z-10">
              {/* Main Image Placeholder */}
              <div className="aspect-[4/5] bg-gradient-to-br from-neutral-200 to-neutral-300 mb-6 relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-br from-amber-400/20 to-rose-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <img
                    src="https://plus.unsplash.com/premium_photo-1667546902542-ebc17b8dd256?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt=""
                  />
                </div>
              </div>

              {/* Achievement Cards */}
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="flex items-center mb-3">
                    <Star className="h-5 w-5 text-amber-500 mr-2" />
                    <h3 className="font-medium text-neutral-800">
                      Recognition
                    </h3>
                  </div>
                  <p className="text-sm text-neutral-600">
                    Featured in Artforum International
                  </p>
                </div>

                <div className="bg-white p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="flex items-center mb-3">
                    <Heart className="h-5 w-5 text-rose-500 mr-2" />
                    <h3 className="font-medium text-neutral-800">Philosophy</h3>
                  </div>
                  <p className="text-sm text-neutral-600">
                    "Art as a bridge between souls"
                  </p>
                </div>
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -top-8 -right-8 w-32 h-32 bg-gradient-to-br from-amber-400/10 to-rose-400/10 rounded-full -z-10"></div>
            <div className="absolute -bottom-8 -left-8 w-24 h-24 bg-gradient-to-br from-purple-400/10 to-blue-400/10 rounded-full -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Gallery Section Component
const GallerySection = () => {
  const artworks = [
    {
      id: 1,
      title: "Ethereal Whispers",
      artist: "Limited Edition",
      category: "Abstract",
      price: "€8,500",
      year: "2024",
      image:
        "https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=800&h=1000&fit=crop&crop=center",
    },
    {
      id: 2,
      title: "Urban Symphony",
      artist: "Original Work",
      category: "Contemporary",
      price: "€12,000",
      year: "2024",
      image:
        "https://images.unsplash.com/photo-1704972596838-19d2e414819a?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 3,
      title: "Natural Metamorphosis",
      artist: "Original Work",
      category: "Landscape",
      price: "€6,800",
      year: "2023",
      image:
        "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=1000&fit=crop&crop=center",
    },
    {
      id: 4,
      title: "Silent Dialogues",
      artist: "Limited Edition",
      category: "Portrait",
      price: "€9,200",
      year: "2024",
      image:
        "https://images.unsplash.com/photo-1622542796254-5b9c46ab0d2f?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 5,
      title: "Chromatic Reverie",
      artist: "Original Work",
      category: "Abstract",
      price: "€15,000",
      year: "2024",
      image:
        "https://images.unsplash.com/photo-1549490349-8643362247b5?w=800&h=1000&fit=crop&crop=center",
    },
    {
      id: 6,
      title: "Nocturne in Blue",
      artist: "Limited Edition",
      category: "Contemporary",
      price: "€7,500",
      year: "2023",
      image:
        "https://images.unsplash.com/photo-1578321272176-b7bbc0679853?w=800&h=1000&fit=crop&crop=center",
    },
  ];

  const [filter, setFilter] = useState("All");
  const [hoveredCard, setHoveredCard] = useState(null);

  const categories = [
    "All",
    "Abstract",
    "Contemporary",
    "Landscape",
    "Portrait",
  ];

  const filteredArtworks =
    filter === "All"
      ? artworks
      : artworks.filter((artwork) => artwork.category === filter);

  return (
    <section id="gallery" className="py-32 bg-black px-8">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <div className="inline-block p-3 bg-gradient-to-br from-amber-400 to-rose-400 rounded-full mb-6">
            <Eye className="h-6 w-6 text-white" />
          </div>

          <h2 className="text-5xl md:text-6xl font-extralight text-white mb-6 tracking-wide">
            Current
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-rose-400">
              Exhibition
            </span>
          </h2>

          <div className="w-24 h-px bg-gradient-to-r from-amber-400 to-rose-400 mx-auto mb-8"></div>

          <p className="text-xl text-white/70 max-w-3xl mx-auto font-light leading-relaxed mb-12">
            A curated selection of contemporary masterpieces, each piece
            carefully chosen to represent the evolution of modern artistic
            expression.
          </p>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-16">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setFilter(category)}
                className={`px-8 py-3 font-light uppercase tracking-wider text-sm transition-all duration-300 ${
                  filter === category
                    ? "bg-gradient-to-r from-amber-400 to-rose-400 text-black"
                    : "border border-white/20 text-white/70 hover:text-white hover:border-white/40"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredArtworks.map((artwork) => (
            <div
              key={artwork.id}
              className="group relative bg-neutral-900 overflow-hidden transition-all duration-500 hover:transform hover:scale-105"
              onMouseEnter={() => setHoveredCard(artwork.id)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* Image Container */}
              <div className="aspect-[4/5] relative overflow-hidden">
                <img
                  src={artwork.image}
                  alt={artwork.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>

                {/* Hover Overlay */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br from-amber-400/20 to-rose-400/20 transition-opacity duration-300 ${
                    hoveredCard === artwork.id ? "opacity-100" : "opacity-0"
                  }`}
                ></div>

                {/* View Details Button */}
                <div
                  className={`absolute inset-0 flex items-center justify-center transition-opacity duration-300 ${
                    hoveredCard === artwork.id ? "opacity-100" : "opacity-0"
                  }`}
                >
                  <button className="px-6 py-3 bg-white/20 backdrop-blur-sm text-white font-light uppercase tracking-wider hover:bg-white/30 transition-colors duration-300 border border-white/30">
                    View Details
                  </button>
                </div>
              </div>

              {/* Info Panel */}
              <div className="p-8 space-y-4">
                <div>
                  <h3 className="text-xl font-light text-white mb-2 tracking-wide">
                    {artwork.title}
                  </h3>
                  <p className="text-amber-400 text-sm uppercase tracking-wider">
                    {artwork.artist}
                  </p>
                </div>

                <div className="flex justify-between items-center text-sm">
                  <span className="text-white/60 uppercase tracking-wider">
                    {artwork.category}
                  </span>
                  <span className="text-white/60">{artwork.year}</span>
                </div>

                <div className="pt-4 border-t border-white/10">
                  <div className="flex justify-between items-center">
                    <span className="text-2xl font-extralight text-white">
                      {artwork.price}
                    </span>
                    <button className="text-amber-400 hover:text-rose-400 transition-colors duration-300 uppercase tracking-wider text-sm">
                      Inquire
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Services Section Component
const ServicesSection = () => {
  const services = [
    {
      icon: <Paintbrush className="h-8 w-8" />,
      title: "Commissioned Works",
      description:
        "Bespoke artworks created exclusively for discerning collectors, tailored to your vision and space.",
    },
    {
      icon: <Eye className="h-8 w-8" />,
      title: "Art Curation",
      description:
        "Expert guidance in building and refining your collection with museum-quality selections.",
    },
    {
      icon: <Award className="h-8 w-8" />,
      title: "Conservation Services",
      description:
        "Professional restoration and preservation of valuable artworks using archival techniques.",
    },
  ];

  return (
    <section id="services" className="py-32 bg-neutral-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <div className="inline-block p-3 bg-gradient-to-br from-amber-400 to-rose-400 rounded-full mb-6">
            <Star className="h-6 w-6 text-white" />
          </div>

          <h2 className="text-5xl md:text-6xl font-extralight text-neutral-800 mb-6 tracking-wide">
            Atelier
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-rose-600">
              Services
            </span>
          </h2>

          <div className="w-24 h-px bg-gradient-to-r from-amber-400 to-rose-400 mx-auto mb-8"></div>

          <p className="text-xl text-neutral-600 max-w-3xl mx-auto font-light leading-relaxed">
            Comprehensive art services for collectors, institutions, and
            connoisseurs seeking excellence in every aspect of their artistic
            journey.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-12">
          {services.map((service, index) => (
            <div key={index} className="group text-center">
              <div className="relative mb-8">
                <div className="w-20 h-20 mx-auto bg-gradient-to-br from-neutral-100 to-neutral-200 rounded-full flex items-center justify-center group-hover:from-amber-400 group-hover:to-rose-400 transition-all duration-500">
                  <div className="text-neutral-600 group-hover:text-white transition-colors duration-300">
                    {service.icon}
                  </div>
                </div>
                <div className="absolute inset-0 w-20 h-20 mx-auto border-2 border-transparent group-hover:border-amber-400/30 rounded-full transition-colors duration-500"></div>
              </div>

              <h3 className="text-2xl font-light text-neutral-800 mb-6 tracking-wide">
                {service.title}
              </h3>
              <p className="text-neutral-600 leading-relaxed font-light">
                {service.description}
              </p>

              <button className="mt-8 text-amber-600 hover:text-rose-600 font-light uppercase tracking-wider text-sm transition-colors duration-300">
                Learn More
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Contact Section Component
const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Thank you for your inquiry. We will respond within 24 hours.");
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="py-32 bg-black px-8">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <div className="inline-block p-3 bg-gradient-to-br from-amber-400 to-rose-400 rounded-full mb-6">
            <Mail className="h-6 w-6 text-white" />
          </div>

          <h2 className="text-5xl md:text-6xl font-extralight text-white mb-6 tracking-wide">
            Private
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-rose-400">
              Consultation
            </span>
          </h2>

          <div className="w-24 h-px bg-gradient-to-r from-amber-400 to-rose-400 mx-auto mb-8"></div>

          <p className="text-xl text-white/70 max-w-3xl mx-auto font-light leading-relaxed">
            For acquisitions, commissions, or private viewings, I invite you to
            begin a conversation about how art can transform your world.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-20">
          {/* Contact Information */}
          <div className="space-y-12">
            <div>
              <h3 className="text-2xl font-light text-white mb-8 tracking-wide">
                Atelier Information
              </h3>

              <div className="space-y-8">
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-gradient-to-br from-amber-400 to-rose-400 rounded-full flex items-center justify-center mr-6 mt-1">
                    <Mail className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h4 className="font-medium text-white mb-2">Email</h4>
                    <p className="text-white/70">atelier@artvision.gallery</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 bg-gradient-to-br from-amber-400 to-rose-400 rounded-full flex items-center justify-center mr-6 mt-1">
                    <Phone className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h4 className="font-medium text-white mb-2">Studio</h4>
                    <p className="text-white/70">+1 (212) 555-0123</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 bg-gradient-to-br from-amber-400 to-rose-400 rounded-full flex items-center justify-center mr-6 mt-1">
                    <MapPin className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h4 className="font-medium text-white mb-2">Location</h4>
                    <p className="text-white/70">
                      Chelsea Arts District
                      <br />
                      New York, NY 10011
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h4 className="font-medium text-white mb-6">
                Follow the Journey
              </h4>
              <div className="flex space-x-6">
                {[Instagram, Facebook, Twitter].map((Icon, index) => (
                  <div
                    key={index}
                    className="w-12 h-12 border border-white/20 rounded-full flex items-center justify-center hover:bg-gradient-to-br hover:from-amber-400 hover:to-rose-400 hover:border-transparent transition-all duration-300 cursor-pointer group"
                  >
                    <Icon className="h-5 w-5 text-white/70 group-hover:text-white transition-colors duration-300" />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-neutral-900 p-12 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-amber-400/10 to-rose-400/10 rounded-full -translate-y-16 translate-x-16"></div>

            <form onSubmit={handleSubmit} className="space-y-8 relative z-10">
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <label className="block text-white/70 text-sm uppercase tracking-wider mb-3">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full bg-transparent border-b border-white/20 py-3 text-white placeholder-white/40 focus:border-amber-400 focus:outline-none transition-colors duration-300"
                    placeholder="Your Name"
                  />
                </div>

                <div>
                  <label className="block text-white/70 text-sm uppercase tracking-wider mb-3">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full bg-transparent border-b border-white/20 py-3 text-white placeholder-white/40 focus:border-amber-400 focus:outline-none transition-colors duration-300"
                    placeholder="Your Email"
                  />
                </div>
              </div>

              <div>
                <label className="block text-white/70 text-sm uppercase tracking-wider mb-3">
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full bg-transparent border-b border-white/20 py-3 text-white placeholder-white/40 focus:border-amber-400 focus:outline-none transition-colors duration-300"
                  placeholder="Inquiry Type"
                />
              </div>

              <div>
                <label className="block text-white/70 text-sm uppercase tracking-wider mb-3">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="5"
                  className="w-full bg-transparent border-b border-white/20 py-3 text-white placeholder-white/40 focus:border-amber-400 focus:outline-none transition-colors duration-300 resize-none"
                  placeholder="Tell us about your vision..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-amber-400 to-rose-400 text-black font-medium py-4 uppercase tracking-wider hover:shadow-2xl hover:shadow-amber-400/25 transition-all duration-300 transform hover:scale-105"
              >
                Send Inquiry
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

// Footer Component
const Footer = () => {
  return (
    <footer className="bg-neutral-900 text-white py-16 border-t border-white/10">
      <div className="container mx-auto px-6">
        <div className="text-center">
          <div className="flex items-center justify-center space-x-3 mb-6">
            <div className="relative">
              <div className="w-12 h-12 bg-gradient-to-br from-amber-400 via-rose-400 to-purple-500 rounded-lg rotate-12"></div>
              <Palette className="absolute inset-0 h-8 w-8 text-white m-2" />
            </div>
            <span className="text-3xl font-extralight tracking-widest">
              ATELIER
            </span>
          </div>

          <p className="text-white/60 mb-8 font-light tracking-wide">
            Creating timeless art for the contemporary world
          </p>

          <div className="flex justify-center space-x-8 mb-8">
            {[Instagram, Facebook, Twitter].map((Icon, index) => (
              <div
                key={index}
                className="w-10 h-10 border border-white/20 rounded-full flex items-center justify-center hover:bg-gradient-to-br hover:from-amber-400 hover:to-rose-400 hover:border-transparent transition-all duration-300 cursor-pointer group"
              >
                <Icon className="h-4 w-4 text-white/60 group-hover:text-white transition-colors duration-300" />
              </div>
            ))}
          </div>

          <div className="border-t border-white/10 pt-8">
            <p className="text-white/40 text-sm font-light tracking-wider">
              © 2025 ATELIER. All rights reserved. | Handcrafted with passion in
              New York City.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

// Scroll to Top Button
const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 w-14 h-14 bg-gradient-to-br from-amber-400 to-rose-400 text-white rounded-full shadow-2xl hover:shadow-amber-400/25 transition-all duration-300 transform hover:scale-110 z-50 flex items-center justify-center"
        >
          <ArrowUp className="h-5 w-5" />
        </button>
      )}
    </>
  );
};

// Main App Component
const Gallery1 = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("Home");

  // Handle scroll to update active section
  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "gallery", "services", "contact"];
      const scrollPosition = window.scrollY + 100;

      sections.forEach((section) => {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;

          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(
              section.charAt(0).toUpperCase() + section.slice(1)
            );
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white ">
      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in {
          animation: fade-in 1s ease-out;
        }
      `}</style>

      <Header
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
        activeSection={activeSection}
        setActiveSection={setActiveSection}
      />
      <HeroSection />
      <AboutSection />
      <GallerySection />
      <ServicesSection />
      <ContactSection />
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Gallery1;
