import React, { useState } from "react";
import {
  ChevronLeft,
  ChevronRight,
  MapPin,
  Phone,
  Mail,
  Facebook,
  Twitter,
  Youtube,
  Instagram,
  Dumbbell,
  Heart,
  Users,
  Target,
} from "lucide-react";

const GymWebsite = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const heroSlides = [
    {
      image:
        "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      title: "BE STRONG",
      subtitle: "TRAINING HARD",
    },
    {
      image:
        "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      title: "PUSH YOUR LIMITS",
      subtitle: "ACHIEVE GREATNESS",
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + heroSlides.length) % heroSlides.length
    );
  };

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between py-4">
            {/* Logo */}
            <div className="flex items-center space-x-2">
              <Dumbbell className="w-8 h-8 text-orange-500" />
              <span className="text-2xl font-bold">
                <span className="text-white">GY</span>
                <span className="text-orange-500">M</span>
              </span>
            </div>

            {/* Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <a
                href="#home"
                className="text-orange-500 hover:text-orange-400 transition-colors"
              >
                HOME
              </a>
              <a
                href="#about"
                className="hover:text-orange-500 transition-colors"
              >
                ABOUT US
              </a>
              <a
                href="#classes"
                className="hover:text-orange-500 transition-colors"
              >
                CLASSES
              </a>
              <a
                href="#services"
                className="hover:text-orange-500 transition-colors"
              >
                SERVICES
              </a>
              <a
                href="#team"
                className="hover:text-orange-500 transition-colors"
              >
                OUR TEAM
              </a>
              <a
                href="#pages"
                className="hover:text-orange-500 transition-colors"
              >
                PAGES
              </a>
              <a
                href="#contact"
                className="hover:text-orange-500 transition-colors"
              >
                CONTACT
              </a>
            </nav>

            {/* Social Icons */}
            <div className="flex items-center space-x-4">
              <Facebook className="w-5 h-5 hover:text-orange-500 cursor-pointer transition-colors" />
              <Twitter className="w-5 h-5 hover:text-orange-500 cursor-pointer transition-colors" />
              <Youtube className="w-5 h-5 hover:text-orange-500 cursor-pointer transition-colors" />
              <Instagram className="w-5 h-5 hover:text-orange-500 cursor-pointer transition-colors" />
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="relative h-screen">
        <div className="absolute inset-0">
          <img
            src={heroSlides[currentSlide].image}
            alt="Gym Hero"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50"></div>
        </div>

        <div className="relative z-10 flex items-center justify-center h-full">
          <div className="text-center">
            <p className="text-orange-500 text-lg mb-4 tracking-widest">
              SHAPE YOUR BODY
            </p>
            <h1 className="text-6xl md:text-8xl font-bold mb-6">
              {heroSlides[currentSlide].title.split(" ")[0]}{" "}
              <span className="text-orange-500">
                {heroSlides[currentSlide].title.split(" ")[1]}
              </span>
            </h1>
            <h2 className="text-4xl md:text-6xl font-bold mb-8">
              {heroSlides[currentSlide].subtitle}
            </h2>
            <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 text-lg font-semibold transition-colors">
              GET INFO
            </button>
          </div>
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white hover:text-orange-500 transition-colors"
        >
          <ChevronLeft className="w-12 h-12" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:text-orange-500 transition-colors"
        >
          <ChevronRight className="w-12 h-12" />
        </button>
      </section>

      {/* Why Choose Us Section */}
      <section id="about" className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <p className="text-orange-500 text-lg mb-4 tracking-widest">
              WHY CHOSE US?
            </p>
            <h2 className="text-5xl font-bold">PUSH YOUR LIMITS FORWARD</h2>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-gray-800 rounded-full flex items-center justify-center mx-auto mb-6">
                <Dumbbell className="w-10 h-10 text-orange-500" />
              </div>
              <h3 className="text-xl font-bold mb-4">Modern equipment</h3>
              <p className="text-gray-400">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut dolore facilisis.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-gray-800 rounded-full flex items-center justify-center mx-auto mb-6">
                <Heart className="w-10 h-10 text-orange-500" />
              </div>
              <h3 className="text-xl font-bold mb-4">Healthy nutrition plan</h3>
              <p className="text-gray-400">
                Quis ipsum suspendisse ultrices gravida. Risus commodo viverra
                maecenas accumsan lacus vel facilisis.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-gray-800 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="w-10 h-10 text-orange-500" />
              </div>
              <h3 className="text-xl font-bold mb-4">
                Professional training plan
              </h3>
              <p className="text-gray-400">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut dolore facilisis.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-gray-800 rounded-full flex items-center justify-center mx-auto mb-6">
                <Target className="w-10 h-10 text-orange-500" />
              </div>
              <h3 className="text-xl font-bold mb-4">Unique to your needs</h3>
              <p className="text-gray-400">
                Quis ipsum suspendisse ultrices gravida. Risus commodo viverra
                maecenas accumsan lacus vel facilisis.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Classes Section */}
      <section id="classes" className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <p className="text-orange-500 text-lg mb-4 tracking-widest">
              OUR CLASSES
            </p>
            <h2 className="text-5xl font-bold">WHAT WE CAN OFFER</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="group relative overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
                alt="Weightlifting"
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/70 flex flex-col justify-end p-6">
                <p className="text-orange-500 text-sm mb-2">STRENGTH</p>
                <h3 className="text-2xl font-bold mb-4">WEIGHTLIFTING</h3>
                <ChevronRight className="w-6 h-6 text-orange-500" />
              </div>
            </div>

            <div className="group relative overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
                alt="Indoor Cycling"
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/70 flex flex-col justify-end p-6">
                <p className="text-orange-500 text-sm mb-2">CARDIO</p>
                <h3 className="text-2xl font-bold mb-4">INDOOR CYCLING</h3>
                <ChevronRight className="w-6 h-6 text-orange-500" />
              </div>
            </div>

            <div className="group relative overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
                alt="Kettlebell Power"
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/70 flex flex-col justify-end p-6">
                <p className="text-orange-500 text-sm mb-2">STRENGTH</p>
                <h3 className="text-2xl font-bold mb-4">KETTLEBELL POWER</h3>
                <ChevronRight className="w-6 h-6 text-orange-500" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Registration CTA */}
      <section className="relative py-20">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1549476464-37392f717541?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1587&q=80"
            alt="Registration"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/70"></div>
        </div>

        <div className="relative z-10 text-center">
          <h2 className="text-5xl font-bold mb-6">
            REGISTRATION NOW TO GET MORE DEALS
          </h2>
          <p className="text-xl mb-8">WHERE HEALTH, BEAUTY AND FITNESS MEET.</p>
          <button className="bg-transparent border-2 border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white px-8 py-3 text-lg font-semibold transition-all">
            APPOINTMENT
          </button>
        </div>
      </section>

      {/* Pricing Plans */}
      <section id="pricing" className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <p className="text-orange-500 text-lg mb-4 tracking-widest">
              OUR PLAN
            </p>
            <h2 className="text-5xl font-bold">CHOOSE YOUR PRICING PLAN</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-gray-900 p-8 text-center">
              <h3 className="text-2xl font-bold mb-6">Class drop-in</h3>
              <div className="text-6xl font-bold text-orange-500 mb-2">
                ₹ 499
              </div>
              <p className="text-gray-400 mb-8">SINGLE CLASS</p>

              <ul className="space-y-4 mb-8">
                <li>Free riding</li>
                <li>Unlimited equipments</li>
                <li>Personal trainer</li>
                <li>Weight losing classes</li>

                <li>No time restriction</li>
              </ul>

              <button className="w-full bg-gray-800 hover:bg-orange-500 text-white py-3 font-semibold transition-colors">
                ENROLL NOW
              </button>
            </div>

            <div className="bg-gray-900 p-8 text-center">
              <h3 className="text-2xl font-bold mb-6">12 Month unlimited</h3>
              <div className="text-6xl font-bold text-orange-500 mb-2">
                ₹ 9,999
              </div>
              <p className="text-gray-400 mb-8">SINGLE CLASS</p>

              <ul className="space-y-4 mb-8">
                <li>Free riding</li>
                <li>Unlimited equipments</li>
                <li>Personal trainer</li>
                <li>Weight losing classes</li>

                <li>No time restriction</li>
              </ul>

              <button className="w-full bg-gray-800 hover:bg-orange-500 text-white py-3 font-semibold transition-colors">
                ENROLL NOW
              </button>
            </div>

            <div className="bg-gray-900 p-8 text-center">
              <h3 className="text-2xl font-bold mb-6">6 Month unlimited</h3>
              <div className="text-6xl font-bold text-orange-500 mb-2">
                ₹ 4,999
              </div>
              <p className="text-gray-400 mb-8">SINGLE CLASS</p>

              <ul className="space-y-4 mb-8">
                <li>Free riding</li>
                <li>Unlimited equipments</li>
                <li>Personal trainer</li>
                <li>Weight losing classes</li>

                <li>No time restriction</li>
              </ul>

              <button className="w-full bg-gray-800 hover:bg-orange-500 text-white py-3 font-semibold transition-colors">
                ENROLL NOW
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-4">
            <div className="grid gap-4">
              <img
                src="https://images.unsplash.com/photo-1549476464-37392f717541?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1587&q=80"
                alt="Gallery 1"
                className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
              />
              <img
                src="https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
                alt="Gallery 2"
                className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="grid gap-4">
              <img
                src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
                alt="Gallery 3"
                className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
              />
              <img
                src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
                alt="Gallery 4"
                className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="grid gap-4">
              <img
                src="https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
                alt="Gallery 5"
                className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
              />
              <img
                src="https://images.unsplash.com/photo-1540497077202-7c8a3999166f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
                alt="Gallery 6"
                className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-black py-16 border-t border-gray-800">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {/* Contact Info */}
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-8 h-8 text-white" />
              </div>
              <p className="text-lg">333 Middle Winchendon Rd, Rindge,</p>
              <p className="text-lg">NH 03461</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="w-8 h-8 text-white" />
              </div>
              <p className="text-lg">125-711-811 | 125-668-886</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="w-8 h-8 text-white" />
              </div>
              <p className="text-lg">Support.gymcenter@gmail.com</p>
            </div>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-6">
                <Dumbbell className="w-8 h-8 text-orange-500" />
                <span className="text-2xl font-bold">
                  <span className="text-white">GY</span>
                  <span className="text-orange-500">M</span>
                </span>
              </div>
              <p className="text-gray-400 mb-6">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore dolore magna aliqua endisse
                ultrices gravida lorem.
              </p>
              <div className="flex space-x-4">
                <Facebook className="w-5 h-5 hover:text-orange-500 cursor-pointer transition-colors" />
                <Twitter className="w-5 h-5 hover:text-orange-500 cursor-pointer transition-colors" />
                <Youtube className="w-5 h-5 hover:text-orange-500 cursor-pointer transition-colors" />
                <Mail className="w-5 h-5 hover:text-orange-500 cursor-pointer transition-colors" />
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-6">Useful links</h3>
              <ul className="space-y-3 text-gray-400">
                <li>
                  <a
                    href="#"
                    className="hover:text-orange-500 transition-colors"
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-orange-500 transition-colors"
                  >
                    Blog
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-orange-500 transition-colors"
                  >
                    Classes
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-orange-500 transition-colors"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-6">Support</h3>
              <ul className="space-y-3 text-gray-400">
                <li>
                  <a
                    href="#"
                    className="hover:text-orange-500 transition-colors"
                  >
                    Login
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-orange-500 transition-colors"
                  >
                    My account
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-orange-500 transition-colors"
                  >
                    Subscribe
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-orange-500 transition-colors"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-6">Tips & Guides</h3>
              <div className="space-y-4">
                <div>
                  <p className="text-sm text-gray-400 mb-1">
                    Physical fitness may help prevent depression, anxiety
                  </p>
                  <p className="text-xs text-gray-600">
                    3 min read | 20 Comment
                  </p>
                </div>
                <div>
                  <p className="text-sm text-gray-400 mb-1">
                    Fitness: The best exercise to lose belly fat and tone up...
                  </p>
                  <p className="text-xs text-gray-600">
                    3 min read | 20 Comment
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>
              Copyright ©2025 All rights reserved | This template is made with
              ❤️ by Colorlib
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default GymWebsite;
