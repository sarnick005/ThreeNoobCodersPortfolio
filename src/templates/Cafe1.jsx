import React, { useState, useEffect } from 'react';
import { Coffee, Menu, X, Phone, Mail, MapPin, Clock, Star, Heart, Users, Award, Camera, Utensils, Home } from 'lucide-react';

const KolkataCafe = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState('all');
  const [isScrolled, setIsScrolled] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Hero carousel images
  const heroImages = [
    "https://images.unsplash.com/photo-1559056199-641a0ac8b55e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
    "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
    "https://images.unsplash.com/photo-1521017432531-fbd92d768814?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
  ];

  // Auto-change hero images
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [heroImages.length]);

  // Scroll effect for header
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Smooth scroll function
  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  // Header Component
  const Header = () => (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
    }`}>
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center space-x-2">
            <Coffee className="h-8 w-8 text-orange-600 animate-pulse" />
            <div className="flex flex-col">
              <span className="text-2xl font-bold text-gray-800">চা-কফি আড্ডা</span>
              <span className="text-xs text-gray-600 -mt-1">Since ১৯৮৫</span>
            </div>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            {[
              { id: 'home', label: 'বাড়ি', en: 'Home' },
              { id: 'about', label: 'আমাদের কথা', en: 'About' },
              { id: 'menu', label: 'মেনু', en: 'Menu' },
              { id: 'gallery', label: 'ছবি', en: 'Gallery' },
              { id: 'contact', label: 'যোগাযোগ', en: 'Contact' }
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-gray-700 hover:text-orange-600 transition-all duration-200 font-medium group relative"
              >
                <span className="block">{item.label}</span>
                <span className="text-xs text-gray-500 group-hover:text-orange-500">({item.en})</span>
                <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-orange-600 group-hover:w-full transition-all duration-200"></div>
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-md text-gray-700 hover:text-orange-600"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200 py-4 shadow-lg">
            {[
              { id: 'home', label: 'বাড়ি (Home)' },
              { id: 'about', label: 'আমাদের কথা (About)' },
              { id: 'menu', label: 'মেনু (Menu)' },
              { id: 'gallery', label: 'ছবি (Gallery)' },
              { id: 'contact', label: 'যোগাযোগ (Contact)' }
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="block w-full text-left px-4 py-3 text-gray-700 hover:text-orange-600 hover:bg-orange-50"
              >
                {item.label}
              </button>
            ))}
          </div>
        )}
      </nav>
    </header>
  );

  // Hero Component with Real Images
  const Hero = () => (
    <section id="home" className="min-h-screen relative overflow-hidden">
      {/* Background Image Carousel */}
      <div className="absolute inset-0">
        {heroImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentImageIndex ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img
              src={image}
              alt={`Kolkata Cafe ${index + 1}`}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/40 to-orange-900/60"></div>
          </div>
        ))}
        
        {/* Kolkata-inspired decorative elements */}
        <div className="absolute top-20 left-10 w-32 h-32 border-4 border-yellow-400/40 rounded-full animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-48 h-48 border-4 border-orange-400/40 rounded-full animate-bounce" style={{animationDuration: '3s'}}></div>
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-red-400/30 rounded-lg rotate-45 animate-spin" style={{animationDuration: '10s'}}></div>
      </div>

      <div className="relative z-10 flex items-center justify-center min-h-screen px-4">
        <div className="text-center max-w-5xl mx-auto">
          <div className="mb-6 animate-fadeInUp">
            <h1 className="text-6xl md:text-8xl font-bold text-white mb-4 drop-shadow-lg">
              <span className="block text-yellow-400 animate-pulse">আমাদের</span>
              <span className="block bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">চা-কফি আড্ডা</span>
            </h1>
            <div className="flex items-center justify-center space-x-4 text-white/90 text-lg mb-4">
              <span>🏛️ উত্তর কলকাতার ঐতিহ্য</span>
              <span>•</span>
              <span>🌆 দক্ষিণের আধুনিকতা</span>
            </div>
          </div>
          
          <p className="text-xl md:text-3xl text-yellow-200 mb-4 font-semibold drop-shadow-md animate-slideInLeft">
            যেখানে প্রতিটি চুমুকে গল্প, প্রতিটি কামড়ে কলকাতার আত্মা
          </p>
          <p className="text-lg md:text-xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed animate-slideInRight">
            From the bustling lanes of Shyambazar to the elegant cafes of Park Street - 
            we bring you the authentic taste of Kolkata's soul, where every conversation is an adda 
            and every meal is a celebration! 🎉
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-bounceIn">
            <button
              onClick={() => scrollToSection('menu')}
              className="bg-gradient-to-r from-orange-500 to-red-600 text-white px-10 py-4 rounded-full font-bold hover:from-orange-600 hover:to-red-700 transform hover:scale-110 transition-all duration-300 shadow-2xl animate-pulse"
            >
              🍛 আমাদের স্পেশাল মেনু দেখুন
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="border-3 border-yellow-400 text-yellow-400 px-10 py-4 rounded-full font-bold hover:bg-yellow-400 hover:text-black transition-all duration-300 shadow-2xl backdrop-blur-sm bg-white/10"
            >
              🚶‍♂️ আমাদের আড্ডায় আসুন
            </button>
          </div>

          {/* Image indicators */}
          <div className="flex justify-center space-x-2 mt-8">
            {heroImages.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentImageIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-200 ${
                  index === currentImageIndex ? 'bg-yellow-400' : 'bg-white/50'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );

  // About Component with Real Images
  const About = () => (
    <section id="about" className="py-20 bg-gradient-to-br from-orange-50 to-yellow-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold text-gray-800 mb-6">
            আমাদের গল্প 📖
          </h2>
          <p className="text-xl text-gray-600 mb-4">উত্তর থেকে দক্ষিণ - এক অনন্য যাত্রা</p>
          <div className="w-32 h-1 bg-gradient-to-r from-orange-500 to-red-500 mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
          <div className="space-y-8">
            <div className="bg-white p-8 rounded-2xl shadow-xl border-l-8 border-orange-500">
              <h3 className="text-3xl font-bold text-gray-800 mb-6 flex items-center">
                🏛️ উত্তর কলকাতার ঐতিহ্য
              </h3>
              <p className="text-gray-600 leading-relaxed text-lg mb-4">
                ১৯৮৫ সালে শ্যামবাজারের একটি ছোট্ট দোকান থেকে শুরু। দাদুর হাতের চায়ের দোকান, 
                যেখানে সকাল থেকে সন্ধ্যা অবধি চলত অবিরাম আড্ডা। রিকশাওয়ালা থেকে শুরু করে 
                অধ্যাপক - সবার মিলনমেলা।
              </p>
              <div className="flex items-center space-x-4 text-orange-600 font-semibold">
                <span>🫖 Traditional Clay Cups</span>
                <span>•</span>
                <span>🗞️ Daily Anandabazar</span>
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-xl border-l-8 border-blue-500">
              <h3 className="text-3xl font-bold text-gray-800 mb-6 flex items-center">
                🌆 দক্ষিণের আধুনিকতা
              </h3>
              <p className="text-gray-600 leading-relaxed text-lg mb-4">
                ২০১০ সালে আমরা পার্ক স্ট্রিটে আমাদের দ্বিতীয় শাখা খুললাম। এখানে পুরনো 
                স্বাদের সাথে যোগ হল আন্তর্জাতিক কফি, মডার্ন প্রেজেন্টেশন আর যুগোপযোগী পরিবেশ।
              </p>
              <div className="flex items-center space-x-4 text-blue-600 font-semibold">
                <span>☕ Specialty Coffee</span>
                <span>•</span>
                <span>🎨 Modern Ambiance</span>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <img
                src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                alt="Traditional Tea Setup"
                className="rounded-xl shadow-lg transform hover:scale-105 transition-transform duration-300"
              />
              <img
                src="https://images.unsplash.com/photo-1559056199-641a0ac8b55e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                alt="Modern Coffee Shop"
                className="rounded-xl shadow-lg transform hover:scale-105 transition-transform duration-300 mt-8"
              />
              <img
                src="https://images.unsplash.com/photo-1517701604599-bb29b565090c?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                alt="Bengali Sweets"
                className="rounded-xl shadow-lg transform hover:scale-105 transition-transform duration-300 -mt-8"
              />
              <img
                src="https://images.unsplash.com/photo-1521017432531-fbd92d768814?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                alt="Coffee Art"
                className="rounded-xl shadow-lg transform hover:scale-105 transition-transform duration-300"
              />
            </div>
            
            {/* Stats overlay */}
            <div className="absolute -bottom-8 -right-8 bg-white p-6 rounded-xl shadow-2xl border-4 border-yellow-400">
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-600">39+</div>
                <div className="text-gray-600 font-semibold">বছরের ঐতিহ্য</div>
              </div>
            </div>
          </div>
        </div>

        {/* Achievement Cards */}
        <div className="grid md:grid-cols-4 gap-6">
          {[
            { icon: '👥', count: '50,000+', label: 'খুশি গ্রাহক', en: 'Happy Customers' },
            { icon: '⭐', count: '4.9', label: 'গুগল রেটিং', en: 'Google Rating' },
            { icon: '🏆', count: '5+', label: 'পুরস্কার', en: 'Awards Won' },
            { icon: '📍', count: '3', label: 'শাখা', en: 'Locations' }
          ].map((stat, index) => (
            <div key={index} className="text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="text-4xl mb-2">{stat.icon}</div>
              <div className="text-3xl font-bold text-orange-600 mb-1">{stat.count}</div>
              <div className="font-semibold text-gray-800">{stat.label}</div>
              <div className="text-sm text-gray-500">({stat.en})</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );

  // Enhanced Menu Component
  const Menu = () => {
    const menuItems = {
      tea: [
        { 
          name: 'দাদুর স্পেশাল মসলা চা', 
          en: 'Dadu\'s Special Masala Chai', 
          price: '₹25', 
          desc: 'আদা, এলাচ, দারচিনি আর ভালোবাসার মিশ্রণ। ১৯৮৫ সাল থেকে একই রেসিপি!',
          image: 'https://images.unsplash.com/photo-1571934811356-5cc061b6821f?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80',
          popular: true
        },
        { 
          name: 'আদা-লেবু চা', 
          en: 'Ginger Lemon Tea', 
          price: '₹30', 
          desc: 'কলকাতার আবহাওয়ার জন্য পারফেক্ট! মধু সহ পরিবেশিত।',
          image: 'https://images.unsplash.com/photo-1556679343-c7306c1976bc?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80'
        },
        { 
          name: 'কুলহাড় চা', 
          en: 'Kulhad Chai', 
          price: '₹35', 
          desc: 'মাটির কুলহাড়ে পরিবেশিত ঐতিহ্যবাহী চা। স্বাদ আর সুগন্ধ দুটোই অনন্য!',
          image: 'https://images.unsplash.com/photo-1597318301038-0857c2c73ebb?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80'
        }
      ],
      coffee: [
        { 
          name: 'কোল্ড কফি স্পেশাল', 
          en: 'Bengal Cold Coffee Special', 
          price: '₹85', 
          desc: 'আইসক্রিম, চকলেট চিপস আর একটু গুড়ের মিষ্টতা। কলকাতার গ্রীষ্মের সেরা সাথী!',
          image: 'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80',
          popular: true
        },
        { 
          name: 'এসপ্রেসো শট', 
          en: 'Strong Espresso Shot', 
          price: '₹60', 
          desc: 'ব্রাজিলিয়ান বিনস দিয়ে তৈরি। অফিসের কাজের চাপে এনার্জি বুস্টার!',
          image: 'https://images.unsplash.com/photo-1510707577719-ae7c14d56839?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80'
        },
        { 
          name: 'ক্যাপুচিনো আর্ট', 
          en: 'Cappuccino with Latte Art', 
          price: '₹95', 
          desc: 'সুন্দর ডিজাইন সহ পরিবেশিত। ইনস্টাগ্রামে পোস্ট করার আগে ছবি তুলতে ভুলবেন না!',
          image: 'https://images.unsplash.com/photo-1572442388796-11668a67e53d?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80'
        }
      ],
      snacks: [
        { 
          name: 'কাঠি রোল (চিকেন)', 
          en: 'Famous Kathi Roll (Chicken)', 
          price: '₹85', 
          desc: 'নিজামস স্টাইলে তৈরি। পেঁয়াজ, শসা আর গ্রিন চাটনি সহ। একবার খেলে ভুলতে পারবেন না!',
          image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80',
          popular: true
        },
        { 
          name: 'আলু কাবলি চাট', 
          en: 'Aloo Kabli Chaat', 
          price: '₹45', 
          desc: 'টক, মিষ্টি, ঝাল - সব স্বাদের মিশ্রণ। শ্যামবাজারের রাস্তার স্বাদ!',
          image: 'https://images.unsplash.com/photo-1606491956689-2ea866880c84?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80'
        },
        { 
          name: 'ফিশ ফিঙ্গার (বেকটি)', 
          en: 'Fish Finger (Bekti)', 
          price: '₹120', 
          desc: 'তাজা বেকটি মাছ দিয়ে তৈরি। কাসুন্দি আর পেঁয়াজ সহ পরিবেশিত।',
          image: 'https://images.unsplash.com/photo-1544943910-4c1dc44aab44?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80'
        }
      ],
      sweets: [
        { 
          name: 'রসগোল্লা (কেসি ঘোষ)', 
          en: 'Rosogolla (KC Ghosh Style)', 
          price: '₹20', 
          desc: 'নরম, রসালো আর মুখে গেলেই গলে যায়। কলকাতার গর্ব!',
          image: 'https://images.unsplash.com/photo-1631452180519-c014fe946bc7?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80',
          popular: true
        },
        { 
          name: 'মিষ্টি দই (মাটির ভাঁড়ে)', 
          en: 'Mishti Doi (In Clay Pot)', 
          price: '₹35', 
          desc: 'বাঁকুড়ার মাটির ভাঁড়ে পরিবেশিত। খাওয়ার পর ভাঁড়টা নিয়ে যেতে পারেন!',
          image: 'https://images.unsplash.com/photo-1589985270826-4b7bb135bc9d?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80'
        },
        { 
          name: 'সন্দেশ প্লেট', 
          en: 'Assorted Sandesh Plate', 
          price: '₹80', 
          desc: 'খাঁটি ছানা দিয়ে তৈরি বিভিন্ন রকমের সন্দেশ। পারিবারিক রেসিপি!',
          image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80'
        }
      ]
    };

    const categories = [
      { key: 'all', label: 'সব কিছু', en: 'All Items', icon: '🍽️' },
      { key: 'tea', label: 'চা', en: 'Tea Collection', icon: '🫖' },
      { key: 'coffee', label: 'কফি', en: 'Coffee Specials', icon: '☕' },
      { key: 'snacks', label: 'জলখাবার', en: 'Snacks', icon: '🥪' },
      { key: 'sweets', label: 'মিষ্টি', en: 'Bengali Sweets', icon: '🍰' }
    ];

    const getFilteredItems = () => {
      if (activeCategory === 'all') {
        return Object.entries(menuItems).flatMap(([category, items]) => 
          items.map(item => ({ ...item, category }))
        );
      }
      return menuItems[activeCategory]?.map(item => ({ ...item, category: activeCategory })) || [];
    };

    return (
      <section id="menu" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold text-gray-800 mb-6">
              আমাদের বিশেষ মেনু 🍛
            </h2>
            <p className="text-xl text-gray-600 mb-4">Authentic Kolkata flavors meets modern presentation</p>
            <div className="w-32 h-1 bg-gradient-to-r from-orange-500 to-red-500 mx-auto"></div>
          </div>

          {/* Category Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category.key}
                onClick={() => setActiveCategory(category.key)}
                className={`px-8 py-4 rounded-full font-semibold transition-all duration-300 flex items-center gap-3 text-lg ${
                  activeCategory === category.key
                    ? 'bg-gradient-to-r from-orange-500 to-red-500 text-white shadow-2xl transform scale-105'
                    : 'bg-white text-gray-700 hover:bg-orange-100 shadow-lg hover:shadow-xl border-2 border-orange-200'
                }`}
              >
                <span className="text-2xl">{category.icon}</span>
                <div className="text-center">
                  <div>{category.label}</div>
                  <div className="text-xs opacity-75">({category.en})</div>
                </div>
              </button>
            ))}
          </div>

          {/* Menu Items */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {getFilteredItems().map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden border-4 border-orange-100 hover:border-orange-300 relative group"
              >
                {item.popular && (
                  <div className="absolute top-4 right-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold z-10 animate-pulse">
                    🔥 Popular
                  </div>
                )}
                
                <div className="relative overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                
                <div className="p-6">
                  <div className="flex justify-between items-start mb-3">
                    <div className="flex-1">
                      <h4 className="text-xl font-bold text-gray-800 mb-1">{item.name}</h4>
                      <p className="text-sm text-gray-500 italic">({item.en})</p>
                    </div>
                    <span className="text-2xl font-bold text-orange-600 ml-4">{item.price}</span>
                  </div>
                  <p className="text-gray-600 leading-relaxed mb-4">{item.desc}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-orange-600 font-semibold capitalize bg-orange-50 px-3 py-1 rounded-full">
                      #{item.category}
                    </span>
                    <div className="flex text-yellow-400">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-current" />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Special Offers */}
          <div className="mt-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl p-8 text-white text-center">
            <h3 className="text-3xl font-bold mb-4">🎉 আজকের বিশেষ অফার!</h3>
            <p className="text-xl mb-4">২টি চা + ১টি স্ন্যাকস = মাত্র ৮০ টাকা!</p>
            <p className="text-lg">(Today's Special: 2 Tea + 1 Snack = Only ₹80!)</p>
          </div>
        </div>
      </section>
    );
  };

  // Enhanced Gallery Component
  const Gallery = () => {
    const galleryImages = [
      {
        url: 'https://images.unsplash.com/photo-1559056199-641a0ac8b55e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
        title: 'আমাদের প্রধান হল',
        desc: 'Traditional tea corner with modern comfort',
        category: 'interior'
      },
      {
        url: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
        title: 'চা তৈরির প্রক্রিয়া',
        desc: 'Fresh masala chai being prepared',
        category: 'preparation'
      },
      {
        url: 'https://images.unsplash.com/photo-1571934811356-5cc061b6821f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
        title: 'ঐতিহ্যবাহী চা সেটআপ',
        desc: 'Clay cups and traditional serving style',
        category: 'tradition'
      },
      {
        url: 'https://images.unsplash.com/photo-1521017432531-fbd92d768814?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
        title: 'কফি আর্ট',
        desc: 'Beautiful latte art creations',
        category: 'coffee'
      },
      {
        url: 'https://images.unsplash.com/photo-1517701604599-bb29b565090c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
        title: 'বাঙালি মিষ্টি',
        desc: 'Fresh Bengali sweets daily',
        category: 'sweets'
      },
      {
        url: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
        title: 'সন্ধ্যার আড্ডা',
        desc: 'Evening conversations with friends',
        category: 'adda'
      }
    ];

    return (
      <section id="gallery" className="py-20 bg-gradient-to-br from-yellow-50 to-orange-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold text-gray-800 mb-6">
              আমাদের ক্যাফের ছবি 📸
            </h2>
            <p className="text-xl text-gray-600 mb-4">Experience the warmth of Kolkata hospitality</p>
            <div className="w-32 h-1 bg-gradient-to-r from-orange-500 to-red-500 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {galleryImages.map((image, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-2xl shadow-xl cursor-pointer transform hover:scale-105 transition-all duration-500"
              >
                <img
                  src={image.url}
                  alt={image.title}
                  className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <h4 className="font-bold text-xl mb-2">{image.title}</h4>
                    <p className="text-sm opacity-90 mb-3">{image.desc}</p>
                    <span className="inline-block bg-orange-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
                      #{image.category}
                    </span>
                  </div>
                </div>
                
                {/* Decorative corner */}
                <div className="absolute top-4 right-4 w-8 h-8 bg-yellow-400 rounded-full opacity-80 group-hover:animate-ping"></div>
              </div>
            ))}
          </div>

          {/* Instagram Section */}
          <div className="mt-16 text-center bg-white rounded-2xl p-8 shadow-xl">
            <h3 className="text-3xl font-bold text-gray-800 mb-4">📱 আমাদের ইনস্টাগ্রামে ফলো করুন!</h3>
            <p className="text-lg text-gray-600 mb-6">Daily updates, special offers আর customer photos!</p>
            <button className="bg-gradient-to-r from-pink-500 to-purple-600 text-white px-8 py-3 rounded-full font-bold hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
              @chacoffeeadda_kolkata 📸
            </button>
          </div>
        </div>
      </section>
    );
  };

  // Enhanced Contact Component
  const Contact = () => {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });

    const handleSubmit = (e) => {
      e.preventDefault();
      alert('ধন্যবাদ! আমরা শীঘ্রই আপনার সাথে যোগাযোগ করব। 🙏 (Thank you! We will contact you soon.)');
      setFormData({ name: '', email: '', message: '' });
    };

    const locations = [
      {
        name: 'শ্যামবাজার শাখা (Main Branch)',
        address: '১২৩ শ্যামাচরণ দে স্ট্রিট, শ্যামবাজার',
        landmark: 'Metro Station থেকে ২ মিনিট',
        phone: '+91 98765 43210',
        image: 'https://images.unsplash.com/photo-1559056199-641a0ac8b55e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
      },
      {
        name: 'পার্ক স্ট্রিট শাখা (Park St Branch)',
        address: '৪৫ পার্ক স্ট্রিট, কলকাতা',
        landmark: 'Metro Cinema এর কাছে',
        phone: '+91 87654 32109',
        image: 'https://images.unsplash.com/photo-1521017432531-fbd92d768814?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
      }
    ];

    return (
      <section id="contact" className="py-20 bg-gradient-to-br from-orange-50 to-red-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold text-gray-800 mb-6">
              আমাদের সাথে যোগাযোগ করুন 📞
            </h2>
            <p className="text-xl text-gray-600 mb-4">আসুন, আড্ডা দিন! (Come, let's chat!)</p>
            <div className="w-32 h-1 bg-gradient-to-r from-orange-500 to-red-500 mx-auto"></div>
          </div>

          {/* Location Cards */}
          <div className="grid lg:grid-cols-2 gap-8 mb-16">
            {locations.map((location, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                <img
                  src={location.image}
                  alt={location.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
                    📍 {location.name}
                  </h3>
                  <div className="space-y-3 text-gray-600">
                    <p className="flex items-start space-x-2">
                      <Home className="h-5 w-5 text-orange-600 mt-1 flex-shrink-0" />
                      <span>{location.address}</span>
                    </p>
                    <p className="flex items-center space-x-2">
                      <MapPin className="h-5 w-5 text-orange-600 flex-shrink-0" />
                      <span className="text-sm italic">{location.landmark}</span>
                    </p>
                    <p className="flex items-center space-x-2">
                      <Phone className="h-5 w-5 text-orange-600 flex-shrink-0" />
                      <span className="font-semibold text-orange-600">{location.phone}</span>
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="space-y-8">
              <div className="bg-white p-8 rounded-2xl shadow-xl">
                <h3 className="text-3xl font-bold text-gray-800 mb-6 flex items-center">
                  🕐 আমাদের সময়সূচী
                </h3>
                
                <div className="space-y-6">
                  <div className="flex items-start space-x-4 p-4 bg-orange-50 rounded-xl">
                    <Clock className="h-6 w-6 text-orange-600 mt-1" />
                    <div>
                      <h4 className="font-bold text-gray-800 text-lg mb-2">সাপ্তাহিক দিন (Weekdays)</h4>
                      <p className="text-gray-600">
                        সোমবার - শুক্রবার: <span className="font-semibold">সকাল ৬:৩০ - রাত ১০:৩০</span><br />
                        <span className="text-sm italic">(Monday - Friday: 6:30 AM - 10:30 PM)</span>
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4 p-4 bg-yellow-50 rounded-xl">
                    <Clock className="h-6 w-6 text-yellow-600 mt-1" />
                    <div>
                      <h4 className="font-bold text-gray-800 text-lg mb-2">সাপ্তাহিক ছুটি (Weekends)</h4>
                      <p className="text-gray-600">
                        শনিবার - রবিবার: <span className="font-semibold">সকাল ৭:০০ - রাত ১১:৩০</span><br />
                        <span className="text-sm italic">(Saturday - Sunday: 7:00 AM - 11:30 PM)</span>
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4 p-4 bg-green-50 rounded-xl">
                    <Mail className="h-6 w-6 text-green-600 mt-1" />
                    <div>
                      <h4 className="font-bold text-gray-800 text-lg mb-2">যোগাযোগের মাধ্যম</h4>
                      <p className="text-gray-600 space-y-1">
                        📧 hello@chacoffeeadda.com<br />
                        📱 WhatsApp: +91 98765 43210<br />
                        📍 Google Maps: "Cha Coffee Adda Kolkata"
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white p-8 rounded-2xl shadow-xl">
              <h3 className="text-3xl font-bold text-gray-800 mb-6 flex items-center">
                ✉️ আমাদের বার্তা পাঠান
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-3">
                    আপনার নাম (Your Name) *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-4 border-2 border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all duration-200 text-lg"
                    placeholder="রাম/শ্যাম/গীতা... (Enter your name)"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-3">
                    ইমেইল ঠিকানা (Email Address) *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-4 border-2 border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all duration-200 text-lg"
                    placeholder="your.email@gmail.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-3">
                    আপনার বার্তা (Your Message) *
                  </label>
                  <textarea
                    required
                    rows="6"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-4 border-2 border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all duration-200 resize-vertical text-lg"
                    placeholder="আপনার মতামত, পরামর্শ বা যেকোনো প্রশ্ন লিখুন... (Share your feedback, suggestions or any questions...)"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-orange-500 to-red-600 text-white py-4 px-6 rounded-xl font-bold text-lg hover:from-orange-600 hover:to-red-700 transform hover:scale-105 transition-all duration-300 shadow-2xl"
                >
                  বার্তা পাঠান 📤 (Send Message)
                </button>
              </form>

              {/* Social Media Links */}
              <div className="mt-8 pt-6 border-t border-gray-200">
                <h4 className="text-lg font-semibold text-gray-800 mb-4">আমাদের ফলো করুন:</h4>
                <div className="flex space-x-4">
                  {[
                    { name: 'Facebook', icon: '📘', color: 'bg-blue-600' },
                    { name: 'Instagram', icon: '📷', color: 'bg-pink-600' },
                    { name: 'WhatsApp', icon: '💬', color: 'bg-green-600' }
                  ].map((social) => (
                    <button
                      key={social.name}
                      className={`${social.color} text-white px-4 py-2 rounded-full hover:shadow-lg transition-all duration-200 transform hover:scale-110 flex items-center space-x-2`}
                    >
                      <span>{social.icon}</span>
                      <span className="font-semibold">{social.name}</span>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  };

  // Enhanced Footer Component
  const Footer = () => (
    <footer className="bg-gradient-to-br from-gray-900 to-black text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <Coffee className="h-10 w-10 text-orange-500 animate-pulse" />
              <div>
                <span className="text-3xl font-bold">চা-কফি আড্ডা</span>
                <p className="text-orange-400 text-sm">Since ১৯৮৫ • Kolkata's Heart</p>
              </div>
            </div>
            <p className="text-gray-300 leading-relaxed text-lg mb-6">
              কলকাতার হৃদয়ে অবস্থিত আমাদের ক্যাফে, যেখানে ঐতিহ্য আর আধুনিকতার মিলন।
              উত্তর কলকাতার গলির চায়ের দোকানের আবেগ আর দক্ষিণের ক্যাফে কালচারের সংমিশ্রণে 
              তৈরি এক অনন্য অভিজ্ঞতা। 🫖☕
            </p>
            <div className="flex space-x-4">
              {[
                { name: 'Facebook', icon: '📘', followers: '5K+' },
                { name: 'Instagram', icon: '📷', followers: '8K+' },
                { name: 'YouTube', icon: '📺', followers: '2K+' }
              ].map((social) => (
                <button
                  key={social.name}
                  className="bg-orange-600 hover:bg-orange-700 p-3 rounded-full transition-all duration-200 transform hover:scale-110 group"
                >
                  <span className="text-xl">{social.icon}</span>
                  <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-black text-white px-2 py-1 rounded text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                    {social.followers}
                  </div>
                </button>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-xl font-bold mb-6 text-orange-400 flex items-center">
              🔗 Quick Links
            </h4>
            <ul className="space-y-3">
              {[
                { bengali: 'বাড়ি', english: 'Home', id: 'home' },
                { bengali: 'আমাদের কথা', english: 'About', id: 'about' },
                { bengali: 'মেনু', english: 'Menu', id: 'menu' },
                { bengali: 'ছবি', english: 'Gallery', id: 'gallery' },
                { bengali: 'যোগাযোগ', english: 'Contact', id: 'contact' }
              ].map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => scrollToSection(item.id)}
                    className="text-gray-300 hover:text-orange-400 transition-colors duration-200 flex items-center space-x-2 group"
                  >
                    <span className="group-hover:translate-x-2 transition-transform duration-200">→</span>
                    <span>{item.bengali} ({item.english})</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xl font-bold mb-6 text-orange-400 flex items-center">
              📍 Our Locations
            </h4>
            <div className="space-y-4 text-gray-300">
              <div className="p-3 bg-gray-800 rounded-lg">
                <p className="font-semibold text-white">শ্যামবাজার (Main)</p>
                <p className="text-sm">১২ৃ শ্যামাচরণ দে স্ট্রিট</p>
                <p className="text-xs text-orange-400">📞 +91 98765 43210</p>
              </div>
              <div className="p-3 bg-gray-800 rounded-lg">
                <p className="font-semibold text-white">পার্ক স্ট্রিট</p>
                <p className="text-sm">৪৫ পার্ক স্ট্রিট</p>
                <p className="text-xs text-orange-400">📞 +91 87654 32109</p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8">
          <div className="grid md:grid-cols-2 gap-4 items-center">
            <div>
              <p className="text-gray-400 text-sm">
                © ২০২৪ চা-কফি আড্ডা (Cha-Coffee Adda). সর্বস্বত্ব সংরক্ষিত।
              </p>
              <p className="text-gray-500 text-xs mt-1">
                Made with ❤️ in Kolkata • Designed with 🎨 Bengali Pride
              </p>
            </div>
            <div className="text-right">
              <p className="text-orange-400 font-semibold">
                "যেখানে চা মানে শুধু পানীয় নয়, আবেগ!"
              </p>
              <p className="text-gray-400 text-sm italic">
                "Where tea is not just a drink, it's an emotion!"
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );

  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <Menu />
      <Gallery />
      <Contact />
      <Footer />
      
      {/* Custom CSS for animations */}
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes bounceIn {
          from {
            opacity: 0;
            transform: scale(0.8);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        
        .animate-fadeInUp {
          animation: fadeInUp 1s ease-out;
        }
        
        .animate-slideInLeft {
          animation: slideInLeft 1s ease-out 0.5s both;
        }
        
        .animate-slideInRight {
          animation: slideInRight 1s ease-out 0.7s both;
        }
        
        .animate-bounceIn {
          animation: bounceIn 1s ease-out 1s both;
        }
      `}</style>
    </div>
  );
};

export default KolkataCafe;