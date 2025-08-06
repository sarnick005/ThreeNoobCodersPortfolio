import React, { useState, useEffect } from "react";
import {
  Menu as MenuIcon, // Renamed to avoid conflict
  X,
  Star,
  Heart,
  ChefHat,
  Award,
  Phone,
  Mail,
  MapPin,
  Facebook,
  Instagram,
  Twitter,
  ArrowUp,
  Filter,
  ShoppingCart,
} from "lucide-react";

// Custom Hook for Scroll Animation
const useScrollAnimation = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return scrollY;
};

// Navbar Component
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const navItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "menu", label: "Menu" },
    { id: "offers", label: "Offers" },
    { id: "testimonials", label: "Reviews" },
    { id: "pricing", label: "Pricing" },
    { id: "contact", label: "Contact" },
  ];

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setActiveSection(sectionId);
      setIsOpen(false);
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm shadow-lg z-50 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <ChefHat className="h-8 w-8 text-pink-500" />
            <span className="text-2xl font-bold text-gray-800">
              Sweet Delights
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`px-3 py-2 text-sm font-medium transition-all duration-300 hover:text-pink-500 ${
                  activeSection === item.id
                    ? "text-pink-500 border-b-2 border-pink-500"
                    : "text-gray-700"
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-pink-500 transition-colors duration-300"
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <MenuIcon className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden absolute top-16 left-0 right-0 bg-white shadow-lg border-t">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="block w-full text-left px-3 py-2 text-base font-medium text-gray-700 hover:text-pink-500 hover:bg-pink-50 transition-all duration-300"
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

// Hero Section
const Hero = () => {
  const scrollY = useScrollAnimation();

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background with parallax effect */}
      <div
        className="absolute inset-0 bg-gradient-to-br from-pink-100 via-orange-50 to-orange-100"
        style={{ transform: `translateY(${scrollY * 0.5}px)` }}
      />

      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-pink-200 rounded-full opacity-60 animate-pulse" />
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-orange-200 rounded-full opacity-40 animate-pulse" />

      <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
        <div className="animate-fade-in-up">
          <h1 className="text-5xl md:text-7xl font-bold text-gray-800 mb-6 leading-tight">
            Sweet <span className="text-pink-500">Delights</span>
            <br />
            <span className="text-3xl md:text-5xl text-orange-500">
              Cake Shop
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Creating magical moments with our handcrafted cakes, made with love
            and the finest ingredients
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() =>
                document
                  .getElementById("menu")
                  .scrollIntoView({ behavior: "smooth" })
              }
              className="bg-pink-500 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-pink-600 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              View Our Cakes
            </button>
            <button
              onClick={() =>
                document
                  .getElementById("contact")
                  .scrollIntoView({ behavior: "smooth" })
              }
              className="border-2 border-pink-500 text-pink-500 px-8 py-4 rounded-full text-lg font-semibold hover:bg-pink-500 hover:text-white transform hover:scale-105 transition-all duration-300"
            >
              Order Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

// About Section
const About = () => {
  const features = [
    {
      icon: <Award className="h-8 w-8" />,
      title: "Premium Quality",
      desc: "Only the finest ingredients",
    },
    {
      icon: <Heart className="h-8 w-8" />,
      title: "Made with Love",
      desc: "Every cake tells a story",
    },
    {
      icon: <ChefHat className="h-8 w-8" />,
      title: "Expert Bakers",
      desc: "20+ years of experience",
    },
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            About Sweet Delights
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            For over two decades, we've been crafting extraordinary cakes that
            make every celebration special
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-gray-700 leading-relaxed">
              At Sweet Delights, we believe that every cake should be a
              masterpiece. Our journey began in 2003 with a simple mission: to
              create the most delicious and beautiful cakes that bring joy to
              life's most precious moments.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              From intimate birthday celebrations to grand wedding festivities,
              we pour our heart and soul into every creation. Our talented team
              of bakers combines traditional techniques with innovative flavors
              to deliver cakes that exceed your expectations.
            </p>

            <div className="grid sm:grid-cols-3 gap-6 mt-8">
              {features.map((feature, index) => (
                <div key={index} className="text-center group">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-pink-100 text-pink-500 rounded-full mb-4 group-hover:bg-pink-500 group-hover:text-white transition-all duration-300 transform group-hover:scale-110">
                    {feature.icon}
                  </div>
                  <h3 className="font-semibold text-gray-800 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 text-sm">{feature.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="bg-gradient-to-br from-pink-100 to-orange-100 rounded-2xl p-8 transform hover:scale-105 transition-transform duration-300">
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <div className="text-center">
                  <div className="text-4xl font-bold text-pink-500 mb-2">
                    1000+
                  </div>
                  <div className="text-gray-600">Happy Customers</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Menu Section - Now this won't conflict
const Menu = () => {
  const [activeFilter, setActiveFilter] = useState("all");

  const categories = [
    { id: "all", name: "All Cakes" },
    { id: "birthday", name: "Birthday" },
    { id: "wedding", name: "Wedding" },
    { id: "pastries", name: "Pastries" },
  ];

  const cakes = [
    {
      id: 1,
      name: "Chocolate Dream",
      category: "birthday",
      price: "$45",
      image: "🍰",
      description: "Rich chocolate cake with ganache",
    },
    {
      id: 2,
      name: "Vanilla Elegance",
      category: "wedding",
      price: "$120",
      image: "💒",
      description: "Classic vanilla wedding cake",
    },
    {
      id: 3,
      name: "Strawberry Delight",
      category: "birthday",
      price: "$50",
      image: "🍓",
      description: "Fresh strawberry cream cake",
    },
    {
      id: 4,
      name: "Red Velvet",
      category: "birthday",
      price: "$55",
      image: "❤️",
      description: "Classic red velvet with cream cheese",
    },
    {
      id: 5,
      name: "Tiramisu",
      category: "pastries",
      price: "$35",
      image: "☕",
      description: "Italian coffee-flavored dessert",
    },
    {
      id: 6,
      name: "Floral Wedding",
      category: "wedding",
      price: "$200",
      image: "🌸",
      description: "Elegant floral design cake",
    },
    {
      id: 7,
      name: "Chocolate Eclair",
      category: "pastries",
      price: "$8",
      image: "🥐",
      description: "Classic French pastry",
    },
    {
      id: 8,
      name: "Rainbow Cake",
      category: "birthday",
      price: "$60",
      image: "🌈",
      description: "Colorful layers of joy",
    },
  ];

  const filteredCakes =
    activeFilter === "all"
      ? cakes
      : cakes.filter((cake) => cake.category === activeFilter);

  return (
    <section
      id="menu"
      className="py-20 bg-gradient-to-br from-pink-50 to-orange-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Our Menu
          </h2>
          <p className="text-xl text-gray-600">
            Discover our delicious collection of handcrafted cakes
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveFilter(category.id)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                activeFilter === category.id
                  ? "bg-pink-500 text-white shadow-lg transform scale-105"
                  : "bg-white text-gray-700 hover:bg-pink-100 hover:text-pink-500"
              }`}
            >
              <Filter className="inline h-4 w-4 mr-2" />
              {category.name}
            </button>
          ))}
        </div>

        {/* Cake Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {filteredCakes.map((cake) => (
            <div
              key={cake.id}
              className="bg-white rounded-2xl shadow-lg overflow-hidden transform hover:scale-105 hover:shadow-2xl transition-all duration-300 group"
            >
              <div className="relative h-48 bg-gradient-to-br from-pink-100 to-orange-100 flex items-center justify-center">
                <span className="text-6xl group-hover:scale-110 transition-transform duration-300">
                  {cake.image}
                </span>
                <div className="absolute top-4 right-4 bg-white rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Heart className="h-5 w-5 text-pink-500 hover:fill-current cursor-pointer" />
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {cake.name}
                </h3>
                <p className="text-gray-600 text-sm mb-4">{cake.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-pink-500">
                    {cake.price}
                  </span>
                  <button className="bg-pink-500 text-white px-4 py-2 rounded-full hover:bg-pink-600 transition-colors duration-300 flex items-center space-x-2">
                    <ShoppingCart className="h-4 w-4" />
                    <span>Add</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Special Offers Section
const SpecialOffers = () => {
  const offers = [
    {
      title: "Weekend Special",
      description: "Get 20% off on all birthday cakes",
      discount: "20% OFF",
      code: "WEEKEND20",
      bgColor: "from-pink-400 to-pink-600",
    },
    {
      title: "Wedding Package",
      description: "Complete wedding cake service",
      discount: "15% OFF",
      code: "WEDDING15",
      bgColor: "from-purple-400 to-purple-600",
    },
    {
      title: "Bulk Orders",
      description: "Order 5+ cakes and save big",
      discount: "25% OFF",
      code: "BULK25",
      bgColor: "from-orange-400 to-orange-600",
    },
  ];

  return (
    <section id="offers" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Special Offers
          </h2>
          <p className="text-xl text-gray-600">
            Don't miss out on our amazing deals
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {offers.map((offer, index) => (
            <div
              key={index}
              className="relative overflow-hidden rounded-2xl shadow-lg transform hover:scale-105 hover:shadow-2xl transition-all duration-300"
            >
              <div
                className={`bg-gradient-to-br ${offer.bgColor} p-8 text-white`}
              >
                <div className="text-center">
                  <h3 className="text-2xl font-bold mb-3">{offer.title}</h3>
                  <div className="text-4xl font-bold mb-4">
                    {offer.discount}
                  </div>
                  <p className="mb-6 opacity-90">{offer.description}</p>
                  <div className="bg-white/20 backdrop-blur-sm rounded-lg p-3 mb-4">
                    <span className="text-sm">Code: </span>
                    <span className="font-bold">{offer.code}</span>
                  </div>
                  <button className="bg-white text-gray-800 px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors duration-300">
                    Claim Offer
                  </button>
                </div>
              </div>

              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-white/10 rounded-full" />
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-white/10 rounded-full" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Testimonials Section
const Testimonials = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Happy Customer",
      content:
        "Sweet Delights made our wedding day absolutely perfect! The cake was not only beautiful but incredibly delicious.",
      rating: 5,
    },
    {
      name: "Mike Davis",
      role: "Birthday Client",
      content:
        "Amazing quality and service. My daughter's birthday cake exceeded all expectations. Highly recommended!",
      rating: 5,
    },
    {
      name: "Emily Chen",
      role: "Corporate Client",
      content:
        "Professional service and outstanding cakes for our company events. Sweet Delights never disappoints.",
      rating: 5,
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section
      id="testimonials"
      className="py-20 bg-gradient-to-br from-pink-50 to-purple-50"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            What Our Customers Say
          </h2>
          <p className="text-xl text-gray-600">
            Real reviews from real customers
          </p>
        </div>

        <div className="relative">
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 text-center">
            <div className="flex justify-center mb-6">
              {[...Array(testimonials[currentTestimonial].rating)].map(
                (_, i) => (
                  <Star
                    key={i}
                    className="h-6 w-6 text-yellow-400 fill-current"
                  />
                )
              )}
            </div>

            <blockquote className="text-xl md:text-2xl text-gray-700 mb-8 italic leading-relaxed">
              "{testimonials[currentTestimonial].content}"
            </blockquote>

            <div className="border-t pt-6">
              <h4 className="font-semibold text-lg text-gray-800">
                {testimonials[currentTestimonial].name}
              </h4>
              <p className="text-gray-600">
                {testimonials[currentTestimonial].role}
              </p>
            </div>
          </div>

          {/* Navigation dots */}
          <div className="flex justify-center mt-8 space-x-3">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                  index === currentTestimonial ? "bg-pink-500" : "bg-gray-300"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

// Pricing Section
const Pricing = () => {
  const packages = [
    {
      name: "Basic",
      price: "$45",
      description: "Perfect for small celebrations",
      features: [
        "Single layer cake",
        "Basic decoration",
        "Serves 8-10 people",
        "Choice of 3 flavors",
        "Standard packaging",
      ],
      popular: false,
    },
    {
      name: "Premium",
      price: "$85",
      description: "Our most popular choice",
      features: [
        "Double layer cake",
        "Custom decoration",
        "Serves 15-20 people",
        "Choice of 8 flavors",
        "Premium packaging",
        "Personalized message",
      ],
      popular: true,
    },
    {
      name: "Custom",
      price: "$150+",
      description: "Fully customized experience",
      features: [
        "Multi-layer cake",
        "Fully custom design",
        "Serves 25+ people",
        "Any flavor combination",
        "Luxury packaging",
        "Design consultation",
        "Free delivery",
      ],
      popular: false,
    },
  ];

  return (
    <section id="pricing" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Our Packages
          </h2>
          <p className="text-xl text-gray-600">
            Choose the perfect package for your celebration
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {packages.map((pkg, index) => (
            <div
              key={index}
              className={`relative rounded-2xl p-8 shadow-lg transform hover:scale-105 transition-all duration-300 ${
                pkg.popular
                  ? "bg-gradient-to-br from-pink-500 to-purple-600 text-white scale-105"
                  : "bg-white border border-gray-200 hover:shadow-2xl"
              }`}
            >
              {pkg.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-yellow-400 text-gray-800 px-4 py-1 rounded-full text-sm font-semibold">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="text-center">
                <h3
                  className={`text-2xl font-bold mb-2 ${
                    pkg.popular ? "text-white" : "text-gray-800"
                  }`}
                >
                  {pkg.name}
                </h3>
                <p
                  className={`mb-6 ${
                    pkg.popular ? "text-pink-100" : "text-gray-600"
                  }`}
                >
                  {pkg.description}
                </p>
                <div
                  className={`text-4xl font-bold mb-8 ${
                    pkg.popular ? "text-white" : "text-pink-500"
                  }`}
                >
                  {pkg.price}
                </div>
              </div>

              <ul className="space-y-4 mb-8">
                {pkg.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center">
                    <Star
                      className={`h-5 w-5 mr-3 ${
                        pkg.popular ? "text-pink-200" : "text-pink-500"
                      }`}
                    />
                    <span
                      className={
                        pkg.popular ? "text-pink-100" : "text-gray-700"
                      }
                    >
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <button
                className={`w-full py-3 rounded-full font-semibold transition-all duration-300 ${
                  pkg.popular
                    ? "bg-white text-pink-500 hover:bg-gray-100"
                    : "bg-pink-500 text-white hover:bg-pink-600"
                }`}
              >
                Choose {pkg.name}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Contact Section
const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = "Email is invalid";
    if (!formData.phone.trim()) newErrors.phone = "Phone is required";
    if (!formData.message.trim()) newErrors.message = "Message is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      alert("Thank you for your message! We'll get back to you soon.");
      setFormData({ name: "", email: "", phone: "", message: "" });
    }
  };

  const contactInfo = [
    {
      icon: <Phone className="h-6 w-6" />,
      title: "Phone",
      info: "+1 (555) 123-4567",
    },
    {
      icon: <Mail className="h-6 w-6" />,
      title: "Email",
      info: "hello@sweetdelights.com",
    },
    {
      icon: <MapPin className="h-6 w-6" />,
      title: "Address",
      info: "123 Sweet Street, Cake City, CC 12345",
    },
  ];

  return (
    <section
      id="contact"
      className="py-20 bg-gradient-to-br from-pink-50 to-purple-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Get In Touch
          </h2>
          <p className="text-xl text-gray-600">
            Ready to order your perfect cake? Contact us today!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">
              Send us a Message
            </h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Your Name"
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all duration-300 ${
                    errors.name ? "border-red-500" : "border-gray-300"
                  }`}
                />
                {errors.name && (
                  <p className="text-red-500 text-sm mt-1">{errors.name}</p>
                )}
              </div>

              <div>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Your Email"
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all duration-300 ${
                    errors.email ? "border-red-500" : "border-gray-300"
                  }`}
                />
                {errors.email && (
                  <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                )}
              </div>

              <div>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="Your Phone"
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all duration-300 ${
                    errors.phone ? "border-red-500" : "border-gray-300"
                  }`}
                />
                {errors.phone && (
                  <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
                )}
              </div>

              <div>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Tell us about your dream cake..."
                  rows="5"
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all duration-300 resize-none ${
                    errors.message ? "border-red-500" : "border-gray-300"
                  }`}
                />
                {errors.message && (
                  <p className="text-red-500 text-sm mt-1">{errors.message}</p>
                )}
              </div>

              <button
                type="submit"
                className="w-full bg-pink-500 text-white py-3 px-6 rounded-lg font-semibold hover:bg-pink-600 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">
                Contact Information
              </h3>
              <div className="space-y-6">
                {contactInfo.map((item, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-pink-100 text-pink-500 rounded-full flex items-center justify-center">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-1">
                        {item.title}
                      </h4>
                      <p className="text-gray-600">{item.info}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Social Media */}
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">
                Follow Us
              </h3>
              <div className="flex space-x-4">
                {[
                  {
                    icon: <Facebook className="h-6 w-6" />,
                    color: "hover:text-blue-600",
                  },
                  {
                    icon: <Instagram className="h-6 w-6" />,
                    color: "hover:text-pink-600",
                  },
                  {
                    icon: <Twitter className="h-6 w-6" />,
                    color: "hover:text-blue-400",
                  },
                ].map((social, index) => (
                  <button
                    key={index}
                    className={`w-12 h-12 bg-gray-100 text-gray-600 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 transform ${social.color}`}
                  >
                    {social.icon}
                  </button>
                ))}
              </div>
            </div>

            {/* Business Hours */}
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">
                Business Hours
              </h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-600">Monday - Friday</span>
                  <span className="font-semibold text-gray-800">
                    8:00 AM - 8:00 PM
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Saturday</span>
                  <span className="font-semibold text-gray-800">
                    9:00 AM - 9:00 PM
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Sunday</span>
                  <span className="font-semibold text-gray-800">
                    10:00 AM - 6:00 PM
                  </span>
                </div>
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
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <ChefHat className="h-8 w-8 text-pink-500" />
              <span className="text-2xl font-bold">Sweet Delights</span>
            </div>
            <p className="text-gray-300 mb-4 max-w-md">
              Creating magical moments with our handcrafted cakes, made with
              love and the finest ingredients since 2003.
            </p>
            <div className="flex space-x-4">
              {[
                {
                  icon: <Facebook className="h-5 w-5" />,
                  color: "hover:text-blue-400",
                },
                {
                  icon: <Instagram className="h-5 w-5" />,
                  color: "hover:text-pink-400",
                },
                {
                  icon: <Twitter className="h-5 w-5" />,
                  color: "hover:text-blue-300",
                },
              ].map((social, index) => (
                <button
                  key={index}
                  className={`text-gray-400 transition-colors duration-300 ${social.color}`}
                >
                  {social.icon}
                </button>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {["Home", "About", "Menu", "Offers", "Contact"].map((item) => (
                <li key={item}>
                  <button
                    onClick={() =>
                      document
                        .getElementById(item.toLowerCase())
                        .scrollIntoView({ behavior: "smooth" })
                    }
                    className="text-gray-300 hover:text-pink-400 transition-colors duration-300"
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <div className="space-y-2 text-gray-300">
              <p>📞 +1 (555) 123-4567</p>
              <p>✉️ hello@sweetdelights.com</p>
              <p>
                📍 123 Sweet Street
                <br />
                Cake City, CC 12345
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2025 Sweet Delights Cake Shop. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

// Scroll to Top Button
const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);
  const scrollY = useScrollAnimation();

  useEffect(() => {
    setIsVisible(scrollY > 300);
  }, [scrollY]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-6 right-6 bg-pink-500 text-white p-3 rounded-full shadow-lg hover:bg-pink-600 transform transition-all duration-300 z-50 ${
        isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
      }`}
    >
      <ArrowUp className="h-6 w-6" />
    </button>
  );
};

// Main Cake2 Component
export default function Cake2() {
  return (
    <div className="min-h-screen">
      {/* Add custom styles */}
      <style jsx>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in-up {
          animation: fade-in-up 1s ease-out;
        }

        /* Smooth scrolling */
        html {
          scroll-behavior: smooth;
        }

        /* Custom scrollbar */
        ::-webkit-scrollbar {
          width: 8px;
        }

        ::-webkit-scrollbar-track {
          background: #f1f1f1;
        }

        ::-webkit-scrollbar-thumb {
          background: #ec4899;
          border-radius: 4px;
        }

        ::-webkit-scrollbar-thumb:hover {
          background: #db2777;
        }
      `}</style>

      <Navbar />
      <Hero />
      <About />
      <Menu />
      <SpecialOffers />
      <Testimonials />
      <Pricing />
      <Contact />
      <Footer />
      <ScrollToTop />
    </div>
  );
}
