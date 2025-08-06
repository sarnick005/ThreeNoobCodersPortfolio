import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaHeart,
  FaStar,
  FaMapMarkerAlt,
  FaPhone,
  FaClock,
  FaShoppingCart,
  FaBars,
  FaTimes,
  FaFacebookF,
  FaInstagram,
  FaCommentDots,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";

// Animation variants
const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const scaleOnHover = {
  whileHover: { scale: 1.05 },
  whileTap: { scale: 0.95 },
};

// Unsplash cake images
const CakeImage = ({ type, className = "" }) => {
  const imageUrls = {
    rasgulla:
      "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=400&h=300&fit=crop&crop=center",
    mishti:
      "https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?w=400&h=300&fit=crop&crop=center",
    sandesh:
      "https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?w=400&h=300&fit=crop&crop=center",
    chocolate:
      "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=400&h=300&fit=crop&crop=center",
    gulab:
      "https://images.unsplash.com/photo-1571115764595-644a1f56a55c?w=400&h=300&fit=crop&crop=center",
    kesar:
      "https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=400&h=300&fit=crop&crop=center",
    coconut:
      "https://images.unsplash.com/photo-1588195538326-c5b1e9f80a1b?w=400&h=300&fit=crop&crop=center",
    mango:
      "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=400&h=300&fit=crop&crop=center",
  };

  return (
    <div
      className={`w-full h-48 rounded-2xl overflow-hidden shadow-md ${className}`}
    >
      <img
        src={imageUrls[type]}
        alt={`${type} cake`}
        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
      />
    </div>
  );
};

// Header Component
const Header = () => {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <motion.header
      className="fixed top-0 left-0 right-0 bg-gradient-to-r from-rose-50 to-orange-50 backdrop-blur-md shadow-lg z-50"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <motion.div
            className="flex items-center space-x-2"
            whileHover={{ scale: 1.05 }}
          >
            <div className="w-10 h-10 bg-gradient-to-br from-rose-400 to-orange-400 rounded-full flex items-center justify-center">
              <FaHeart className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-rose-600">Bliss Byte</h1>
              <p className="text-xs text-orange-600 font-medium">
                কলকাতার মিষ্টি
              </p>
            </div>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {["Home", "Cakes", "About", "Contact"].map((item) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-gray-700 hover:text-rose-600 font-medium transition-colors"
                whileHover={{ y: -2 }}
              >
                {item}
              </motion.a>
            ))}
            <motion.button
              className="bg-gradient-to-r from-rose-500 to-orange-500 text-white px-6 py-2 rounded-full hover:shadow-lg transition-shadow"
              {...scaleOnHover}
              onClick={() => navigate("/after")}
            >
              Order Now
            </motion.button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-700"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <FaTimes className="w-6 h-6" />
            ) : (
              <FaBars className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              className="md:hidden mt-4 pb-4 border-t border-rose-200"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex flex-col space-y-3 pt-4">
                {["Home", "Cakes", "About", "Contact"].map((item) => (
                  <a
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    className="text-gray-700 hover:text-rose-600 font-medium py-2"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item}
                  </a>
                ))}
                <button
                  className="bg-gradient-to-r from-rose-500 to-orange-500 text-white px-6 py-2 rounded-full mt-2 w-full"
                  onClick={() => navigate("/after")}
                >
                  Order Now
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
};

// Hero Section Component
const HeroSection = () => {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-rose-50 via-orange-50 to-yellow-50 flex items-center overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-10 right-10 w-32 h-32 bg-rose-200 rounded-full opacity-20"
          animate={{
            rotate: 360,
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
        />
        <motion.div
          className="absolute bottom-10 left-10 w-24 h-24 bg-orange-200 rounded-full opacity-20"
          animate={{
            rotate: -360,
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      </div>

      <div className="container mx-auto px-4 pt-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            variants={stagger}
            initial="initial"
            animate="animate"
            className="text-center lg:text-left"
          >
            <motion.h1
              variants={fadeInUp}
              className="text-4xl md:text-6xl font-bold text-gray-800 leading-tight mb-6"
            >
              Sweet Memories,
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-500 to-orange-500">
                Kolkata Style
              </span>
            </motion.h1>

            <motion.p
              variants={fadeInUp}
              className="text-lg md:text-xl text-gray-600 mb-4"
            >
              Experience the authentic taste of Bengal with our handcrafted
              cakes and sweets
            </motion.p>

            <motion.p
              variants={fadeInUp}
              className="text-base text-orange-600 font-medium mb-8"
            >
              আমাদের কেক খেয়ে দেখুন, মন ভরে যাবে! ❤️
            </motion.p>

            <motion.div
              variants={fadeInUp}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <motion.button
                className="bg-gradient-to-r from-rose-500 to-orange-500 text-white px-8 py-4 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transition-shadow"
                {...scaleOnHover}
              >
                <FaShoppingCart className="w-5 h-5 inline mr-2" />
                Order Fresh Cakes
              </motion.button>
              <motion.button
                className="border-2 border-rose-400 text-rose-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-rose-50 transition-colors"
                {...scaleOnHover}
              >
                View Menu
              </motion.button>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative mx-auto w-full max-w-md lg:max-w-lg">
              <motion.div
                className="bg-white rounded-3xl shadow-2xl p-8 transform rotate-3"
                whileHover={{ rotate: 0, scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <div className="w-full h-64 rounded-2xl overflow-hidden mb-4 shadow-lg">
                  <img
                    src="https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=500&h=400&fit=crop&crop=center"
                    alt="Signature Rasgulla Cake"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <h3 className="text-xl font-bold text-gray-800 text-center mb-2">
                  Signature Rasgulla Cake
                </h3>
                <p className="text-gray-600 text-center text-sm">
                  Traditional Bengali flavors in modern style
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// Featured Cakes Section
const FeaturedCakes = () => {
  const cakes = [
    {
      name: "Rasgulla Delight",
      bengali: "রসগোল্লা কেক",
      price: "₹599",
      image:
        "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=400&h=300&fit=crop&crop=center",
      description:
        "Soft sponge cake with authentic rasgulla flavoring and cardamom essence",
    },
    {
      name: "Mishti Doi Cake",
      bengali: "মিষ্টি দই কেক",
      price: "₹549",
      image:
        "https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?w=400&h=300&fit=crop&crop=center",
      description:
        "Creamy yogurt-based cake with jaggery sweetness and pistachios",
    },
    {
      name: "Sandesh Supreme",
      bengali: "সন্দেশ কেক",
      price: "₹649",
      image:
        "https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?w=400&h=300&fit=crop&crop=center",
      description: "Rich cottage cheese cake with cardamom and rose petals",
    },
    {
      name: "Chocolate Rosogolla",
      bengali: "চকলেট রসগোল্লা",
      price: "₹699",
      image:
        "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=400&h=300&fit=crop&crop=center",
      description:
        "Fusion of Belgian chocolate with Bengali rosogolla tradition",
    },
    {
      name: "Gulab Jamun Cake",
      bengali: "গোলাপজাম কেক",
      price: "₹629",
      image:
        "https://images.unsplash.com/photo-1571115764595-644a1f56a55c?w=400&h=300&fit=crop&crop=center",
      description: "Moist cake infused with gulab jamun syrup and rose water",
    },
    {
      name: "Kesar Pista Roll",
      bengali: "কেশর পেস্তা রোল",
      price: "₹579",
      image:
        "https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=400&h=300&fit=crop&crop=center",
      description: "Saffron-flavored Swiss roll with pistachio cream filling",
    },
    {
      name: "Coconut Laddu Cake",
      bengali: "নারকেল লাড্ডু কেক",
      price: "₹519",
      image:
        "https://images.unsplash.com/photo-1588195538326-c5b1e9f80a1b?w=400&h=300&fit=crop&crop=center",
      description: "Fresh coconut cake with condensed milk and cardamom",
    },
    {
      name: "Aam Ras Cake",
      bengali: "আমরস কেক",
      price: "₹669",
      image:
        "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=400&h=300&fit=crop&crop=center",
      description: "Seasonal mango pulp cake with Alphonso mango chunks",
    },
  ];

  return (
    <section className="py-20 bg-white" id="cakes">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Our Special <span className="text-rose-500">Bengali Cakes</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Handcrafted with love, inspired by Kolkata's rich culinary heritage
          </p>
        </motion.div>

        <motion.div
          variants={stagger}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {cakes.map((cake, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              className="bg-gradient-to-br from-rose-50 to-orange-50 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow group"
              whileHover={{ y: -10 }}
            >
              <div className="text-center">
                <div className="mb-4 group-hover:scale-105 transition-transform">
                  <div className="w-full h-48 rounded-2xl overflow-hidden shadow-md">
                    <img
                      src={cake.image}
                      alt={cake.name}
                      className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                </div>
                <h3 className="text-lg font-bold text-gray-800 mb-1">
                  {cake.name}
                </h3>
                <p className="text-orange-600 font-medium text-sm mb-3">
                  {cake.bengali}
                </p>
                <p className="text-gray-600 text-xs mb-4 leading-relaxed">
                  {cake.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-xl font-bold text-rose-600">
                    {cake.price}
                  </span>
                  <motion.button
                    className="bg-gradient-to-r from-rose-500 to-orange-500 text-white px-4 py-2 rounded-full text-sm hover:shadow-lg transition-shadow"
                    {...scaleOnHover}
                  >
                    Add to Cart
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

// About Section
const AboutSection = () => {
  return (
    <section
      className="py-20 bg-gradient-to-br from-yellow-50 to-rose-50"
      id="about"
    >
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              A Taste of <span className="text-rose-500">Heritage</span>
            </h2>
            <div className="space-y-4 text-gray-600">
              <p>
                Born in the heart of Kolkata, Bliss Byte brings you the
                authentic flavors of Bengal in every bite. Our master bakers
                combine traditional Bengali sweets with modern cake artistry.
              </p>
              <p>
                From the famous rasgulla-infused cakes to mishti doi delights,
                each creation tells a story of our rich culinary culture. We use
                only the finest ingredients - fresh chenna from local dairies,
                pure ghee, and aromatic spices.
              </p>
              <p className="text-orange-600 font-medium">
                আমরা বিশ্বাস করি প্রতিটি উৎসবে চাই একটু মিষ্টি স্পর্শ! 🎉
              </p>
            </div>
            <motion.div
              className="flex items-center space-x-4 mt-8"
              variants={stagger}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
              <motion.div variants={fadeInUp} className="text-center">
                <div className="text-3xl font-bold text-rose-600">500+</div>
                <div className="text-sm text-gray-600">Happy Customers</div>
              </motion.div>
              <motion.div variants={fadeInUp} className="text-center">
                <div className="text-3xl font-bold text-rose-600">25+</div>
                <div className="text-sm text-gray-600">Cake Varieties</div>
              </motion.div>
              <motion.div variants={fadeInUp} className="text-center">
                <div className="text-3xl font-bold text-rose-600">5⭐</div>
                <div className="text-sm text-gray-600">Customer Rating</div>
              </motion.div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-4"
          >
            <motion.div
              className="bg-white rounded-2xl p-6 shadow-lg"
              whileHover={{ scale: 1.05, rotate: 2 }}
            >
              <div className="w-12 h-12 bg-gradient-to-br from-rose-400 to-orange-400 rounded-full flex items-center justify-center mb-3">
                <span className="text-2xl">👨‍🍳</span>
              </div>
              <h3 className="font-bold text-gray-800 mb-2">Master Bakers</h3>
              <p className="text-sm text-gray-600">
                Traditional recipes passed down generations
              </p>
            </motion.div>
            <motion.div
              className="bg-white rounded-2xl p-6 shadow-lg mt-8"
              whileHover={{ scale: 1.05, rotate: -2 }}
            >
              <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-orange-400 rounded-full flex items-center justify-center mb-3">
                <span className="text-2xl">🏆</span>
              </div>
              <h3 className="font-bold text-gray-800 mb-2">Award Winning</h3>
              <p className="text-sm text-gray-600">
                Best Bengali cake shop in Kolkata 2024
              </p>
            </motion.div>
            <motion.div
              className="bg-white rounded-2xl p-6 shadow-lg"
              whileHover={{ scale: 1.05, rotate: 2 }}
            >
              <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-emerald-400 rounded-full flex items-center justify-center mb-3">
                <span className="text-2xl">🌱</span>
              </div>
              <h3 className="font-bold text-gray-800 mb-2">Fresh Daily</h3>
              <p className="text-sm text-gray-600">
                Made fresh every morning with premium ingredients
              </p>
            </motion.div>
            <motion.div
              className="bg-white rounded-2xl p-6 shadow-lg mt-8"
              whileHover={{ scale: 1.05, rotate: -2 }}
            >
              <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-indigo-400 rounded-full flex items-center justify-center mb-3">
                <span className="text-2xl">🚚</span>
              </div>
              <h3 className="font-bold text-gray-800 mb-2">Home Delivery</h3>
              <p className="text-sm text-gray-600">
                Free delivery across Kolkata within 2 hours
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// Testimonials Section
const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Priya Sharma",
      bengali: "প্রিয়া শর্মা",
      rating: 5,
      text: "The rasgulla cake was absolutely divine! It reminded me of my grandmother's sweets. Perfect balance of tradition and innovation.",
      location: "Park Street",
    },
    {
      name: "Rajesh Das",
      bengali: "রাজেশ দাস",
      rating: 5,
      text: "পুরানো আর নতুনের চমৎকার সংমিশ্রণ। আমার পরিবারের সবাই মিষ্টি দই কেক খুব পছন্দ করেছে! একেবারে খাঁটি স্বাদ।",
      location: "Salt Lake",
    },
    {
      name: "Ananya Sen",
      bengali: "অনন্যা সেন",
      rating: 5,
      text: "Best Bengali cakes in Kolkata! The sandesh cake was incredibly authentic. You can taste the quality ingredients.",
      location: "Jadavpur",
    },
    {
      name: "Amit Ghosh",
      bengali: "অমিত ঘোষ",
      rating: 5,
      text: "চকোলেট রসগোল্লা কেক একটা মাস্টারপিস! আমার মেয়ের জন্মদিন এই অনন্য সৃষ্টিতে বিশেষ হয়ে উঠেছে।",
      location: "Ballygunge",
    },
    {
      name: "Shreya Banerjee",
      bengali: "শ্রেয়া বন্দ্যোপাধ্যায়",
      rating: 5,
      text: "Ordered the kesar pista roll for Durga Puja. Everyone asked for the recipe! Truly captures the essence of Bengali sweets.",
      location: "Shyambazar",
    },
    {
      name: "Debashis Roy",
      bengali: "দেবাশীষ রায়",
      rating: 5,
      text: "আমের মৌসুমে আমরস কেক অভূতপূর্ব ছিল। তাজা আলফানসো আমে সব পার্থক্য এনে দিয়েছে!",
      location: "New Town",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            What Our <span className="text-rose-500">Customers</span> Say
          </h2>
          <p className="text-gray-600 text-lg">Love from across Kolkata</p>
        </motion.div>

        <motion.div
          variants={stagger}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              className="bg-gradient-to-br from-rose-50 to-orange-50 rounded-2xl p-6 shadow-lg"
              whileHover={{ y: -5 }}
            >
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <FaStar key={i} className="w-5 h-5 text-yellow-400" />
                ))}
              </div>
              <p className="text-gray-700 mb-4 italic text-sm leading-relaxed">
                "{testimonial.text}"
              </p>
              <div className="border-t border-rose-200 pt-4">
                <h4 className="font-bold text-gray-800">{testimonial.name}</h4>
                <p className="text-sm text-orange-600">{testimonial.bengali}</p>
                <p className="text-sm text-gray-500 flex items-center mt-1">
                  <FaMapMarkerAlt className="w-4 h-4 mr-1" />
                  {testimonial.location}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

// Contact Section
const ContactSection = () => {
  return (
    <section
      className="py-20 bg-gradient-to-br from-rose-500 to-orange-500 text-white"
      id="contact"
    >
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Visit Our Sweet Shop
            </h2>
            <p className="text-rose-100 text-lg mb-8">
              আমাদের দোকানে আসুন, স্বাদ নিয়ে যান বাঙালি মিষ্টির! Come taste the
              authentic flavors of Bengal.
            </p>

            <div className="space-y-6">
              <motion.div
                className="flex items-center space-x-4"
                whileHover={{ x: 10 }}
              >
                <div className="bg-white bg-opacity-20 rounded-full p-3 text-orange-400">
                  <FaMapMarkerAlt className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold">Address</h3>
                  <p className="text-rose-100">
                    123 Park Street, Near Victoria Memorial
                    <br />
                    Kolkata - 700016
                  </p>
                </div>
              </motion.div>

              <motion.div
                className="flex items-center space-x-4"
                whileHover={{ x: 10 }}
              >
                <div className="bg-white bg-opacity-20 rounded-full p-3 text-orange-400">
                  <FaPhone className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold">Phone</h3>
                  <p className="text-rose-100">+91 98765 43210</p>
                </div>
              </motion.div>

              <motion.div
                className="flex items-center space-x-4"
                whileHover={{ x: 10 }}
              >
                <div className="bg-white bg-opacity-20 rounded-full p-3 text-orange-400">
                  <FaClock className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold">Hours</h3>
                  <p className="text-rose-100">Mon-Sun: 8:00 AM - 10:00 PM</p>
                </div>
              </motion.div>
            </div>

            <div className="flex space-x-4 mt-8 ">
              {[FaFacebookF, FaInstagram, FaCommentDots].map((Icon, index) => (
                <motion.div
                  key={index}
                  className="bg-white bg-opacity-20 rounded-full p-3 cursor-pointer text-orange-400"
                  whileHover={{
                    scale: 1.1,
                    backgroundColor: "rgba(255,255,255,0.3)",
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Icon className="w-6 h-6" />
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl p-8 text-gray-800"
          >
            <h3 className="text-2xl font-bold mb-6 text-center">
              Order Your Cake
            </h3>
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:border-rose-500 focus:outline-none"
                  placeholder="Enter your name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:border-rose-500 focus:outline-none"
                  placeholder="+91 xxxxx xxxxx"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">
                  Cake Type
                </label>
                <select className="w-full p-3 border border-gray-300 rounded-lg focus:border-rose-500 focus:outline-none">
                  <option>Select your favorite cake</option>
                  <option>Rasgulla Delight</option>
                  <option>Mishti Doi Cake</option>
                  <option>Sandesh Supreme</option>
                  <option>Chocolate Rosogolla</option>
                  <option>Gulab Jamun Cake</option>
                  <option>Kesar Pista Roll</option>
                  <option>Coconut Laddu Cake</option>
                  <option>Aam Ras Cake</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">
                  Special Message
                </label>
                <textarea
                  className="w-full p-3 border border-gray-300 rounded-lg focus:border-rose-500 focus:outline-none h-24"
                  placeholder="Any special requirements?"
                ></textarea>
              </div>
              <motion.button
                type="submit"
                className="w-full bg-gradient-to-r from-rose-500 to-orange-500 text-white py-3 rounded-lg font-semibold hover:shadow-lg transition-shadow"
                {...scaleOnHover}
              >
                Place Order 🍰
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// Footer Component
const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-rose-400 to-orange-400 rounded-full flex items-center justify-center">
                <FaHeart className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-white">Bliss Byte</h1>
                <p className="text-xs text-gray-400">কলকাতার মিষ্টি</p>
              </div>
            </div>
            <p className="text-gray-400 text-sm">
              Bringing you the authentic taste of Bengal with love and tradition
              since 2020.
            </p>
          </div>

          <div>
            <h3 className="font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <a
                  href="#home"
                  className="hover:text-rose-400 transition-colors"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#cakes"
                  className="hover:text-rose-400 transition-colors"
                >
                  Our Cakes
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="hover:text-rose-400 transition-colors"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="hover:text-rose-400 transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-4">Popular Cakes</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>Rasgulla Delight</li>
              <li>Mishti Doi Cake</li>
              <li>Sandesh Supreme</li>
              <li>Chocolate Rosogolla</li>
              <li>Gulab Jamun Cake</li>
              <li>Kesar Pista Roll</li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-4">Connect With Us</h3>
            <div className="flex space-x-3 mb-4">
              {[FaFacebookF, FaInstagram, FaCommentDots].map((Icon, index) => (
                <motion.div
                  key={index}
                  className="bg-gray-800 rounded-full p-2 cursor-pointer text-white hover:text-rose-400"
                  whileHover={{ scale: 1.1, backgroundColor: "#1f2937" }}
                >
                  <Icon className="w-4 h-4" />
                </motion.div>
              ))}
            </div>
            <p className="text-sm text-gray-400">
              📞 +91 98765 43210
              <br />
              📍 Park Street, Kolkata
              <br />⏰ 8:00 AM - 10:00 PM
            </p>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © 2024 Bliss Byte. Made with ❤️ in Kolkata. All rights reserved.
          </p>
          <p className="text-gray-500 text-xs mt-2">
            স্বাদে ভরপুর, ভালোবাসায় তৈরি | Taste the love in every bite
          </p>
        </div>
      </div>
    </footer>
  );
};

// Main Cake Component
const Cake = () => {
  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <Header />
      <main>
        <HeroSection />
        <FeaturedCakes />
        <AboutSection />
        <TestimonialsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Cake;
