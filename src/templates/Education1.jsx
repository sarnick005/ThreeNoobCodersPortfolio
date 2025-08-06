import { useState, useEffect } from "react";
import {
  Menu,
  X,
  ChevronUp,
  BookOpen,
  Award,
  Phone,
  Mail,
  MapPin,
  Star,
  GraduationCap,
  Target,
  Lightbulb,
} from "lucide-react";

const Education1 = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  // Navigation Component
  const Navigation = () => (
    <nav className="bg-white shadow-lg fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <GraduationCap className="h-8 w-8 text-blue-600 mr-2" />
            <span className="text-xl font-bold text-gray-800">Edu Academy</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {["home", "about", "courses", "success", "fees", "contact"].map(
                (item) => (
                  <button
                    key={item}
                    onClick={() => scrollToSection(item)}
                    className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 capitalize"
                  >
                    {item === "success"
                      ? "Success Stories"
                      : item === "about"
                      ? "About Us"
                      : item === "contact"
                      ? "Contact Us"
                      : item}
                  </button>
                )
              )}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-blue-600 focus:outline-none focus:text-blue-600"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white shadow-lg">
            {["home", "about", "courses", "success", "fees", "contact"].map(
              (item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className="text-gray-700 hover:text-blue-600 block px-3 py-2 rounded-md text-base font-medium w-full text-left capitalize"
                >
                  {item === "success"
                    ? "Success Stories"
                    : item === "about"
                    ? "About Us"
                    : item === "contact"
                    ? "Contact Us"
                    : item}
                </button>
              )
            )}
          </div>
        </div>
      )}
    </nav>
  );

  // Hero Section Component
  const HeroSection = () => (
    <section
      id="home"
      className="pt-16 bg-gradient-to-br from-blue-50 to-indigo-100 min-h-screen flex items-center"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Excellence in <span className="text-blue-600">Education</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Empowering students to achieve their dreams with personalized
            coaching and proven teaching methodologies
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => scrollToSection("courses")}
              className="bg-blue-600 text-white px-8 py-3 rounded-lg text-lg font-medium hover:bg-blue-700 transition-colors duration-200"
            >
              Explore Courses
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg text-lg font-medium hover:bg-blue-600 hover:text-white transition-colors duration-200"
            >
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </section>
  );

  // About Us Component
  const AboutSection = () => (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            About Us
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            With over a decade of experience in education, we are committed to
            nurturing young minds and building successful futures
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center p-6">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Target className="h-8 w-8 text-blue-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              Our Mission
            </h3>
            <p className="text-gray-600">
              To provide quality education that empowers students to excel in
              their academic pursuits and achieve their career goals
            </p>
          </div>

          <div className="text-center p-6">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Lightbulb className="h-8 w-8 text-green-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              Our Approach
            </h3>
            <p className="text-gray-600">
              Personalized teaching methods, small batch sizes, and individual
              attention to ensure every student reaches their potential
            </p>
          </div>

          <div className="text-center p-6">
            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Award className="h-8 w-8 text-purple-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              Our Results
            </h3>
            <p className="text-gray-600">
              Proven track record with 95% success rate and hundreds of students
              placed in top institutions
            </p>
          </div>
        </div>
      </div>
    </section>
  );

  // Courses Component
  const CoursesSection = () => (
    <section id="courses" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Courses Offered
          </h2>
          <p className="text-xl text-gray-600">
            Comprehensive coaching programs tailored for different educational
            boards
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: "Mathematics",
              description:
                "Advanced problem-solving techniques and concept clarity for all boards",
              subjects: ["Algebra", "Geometry", "Calculus", "Statistics"],
            },
            {
              title: "Physics",
              description:
                "Practical approach to physics with hands-on experiments and theory",
              subjects: [
                "Mechanics",
                "Thermodynamics",
                "Optics",
                "Electronics",
              ],
            },
            {
              title: "Chemistry",
              description:
                "Comprehensive coverage of organic, inorganic, and physical chemistry",
              subjects: [
                "Organic Chemistry",
                "Inorganic Chemistry",
                "Physical Chemistry",
                "Analytical Chemistry",
              ],
            },
          ].map((course, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-200"
            >
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <BookOpen className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                {course.title}
              </h3>
              <p className="text-gray-600 mb-4">{course.description}</p>
              <ul className="space-y-2">
                {course.subjects.map((subject, idx) => (
                  <li
                    key={idx}
                    className="text-sm text-gray-500 flex items-center"
                  >
                    <div className="w-2 h-2 bg-blue-600 rounded-full mr-2"></div>
                    {subject}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );

  // Success Stories Component
  const SuccessSection = () => (
    <section id="success" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Student Success Stories
          </h2>
          <p className="text-xl text-gray-600">
            Celebrating the achievements of our outstanding students
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              name: "Arjun Kumar",
              achievement: "Secured 98% in CBSE Class XII",
              quote:
                "The personalized attention and excellent teaching methods helped me achieve my dream score.",
              college: "Admitted to IIT Delhi",
            },
            {
              name: "Priya Sharma",
              achievement: "Topped WB Board with 97%",
              quote:
                "The supportive environment and regular practice sessions made all the difference.",
              college: "Pursuing Engineering at Jadavpur University",
            },
            {
              name: "Rahul Das",
              achievement: "ICSE Topper with 96%",
              quote:
                "The faculty's dedication and innovative teaching approach boosted my confidence.",
              college: "Selected for Medical College",
            },
          ].map((student, index) => (
            <div key={index} className="bg-gray-50 rounded-lg p-6">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
                  {student.name.charAt(0)}
                </div>
                <div className="ml-4">
                  <h3 className="font-bold text-gray-900">{student.name}</h3>
                  <p className="text-sm text-green-600 font-medium">
                    {student.achievement}
                  </p>
                </div>
              </div>
              <p className="text-gray-600 italic mb-4">"{student.quote}"</p>
              <p className="text-sm text-blue-600 font-medium">
                {student.college}
              </p>
              <div className="flex mt-2">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="h-4 w-4 text-yellow-400 fill-current"
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );

  // Fees Component
  const FeesSection = () => (
    <section id="fees" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Fee Structure
          </h2>
          <p className="text-xl text-gray-600">
            Affordable and transparent pricing for quality education
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              board: "WB Board",
              price: "₹8,000",
              period: "per month",
              features: [
                "Complete Syllabus Coverage",
                "Weekly Mock Tests",
                "Doubt Clearing Sessions",
                "Study Materials Included",
                "Progress Tracking",
              ],
              popular: false,
            },
            {
              board: "CBSE Board",
              price: "₹10,000",
              period: "per month",
              features: [
                "NCERT + Additional Resources",
                "Bi-weekly Mock Tests",
                "Individual Attention",
                "Online Portal Access",
                "Parent-Teacher Meetings",
                "Career Guidance",
              ],
              popular: true,
            },
            {
              board: "ICSE Board",
              price: "₹12,000",
              period: "per month",
              features: [
                "Comprehensive Coverage",
                "Daily Practice Sessions",
                "Personal Mentoring",
                "Premium Study Materials",
                "Regular Assessments",
                "University Counseling",
              ],
              popular: false,
            },
          ].map((plan, index) => (
            <div
              key={index}
              className={`bg-white rounded-lg shadow-md p-6 relative ${
                plan.popular ? "ring-2 ring-blue-600 transform scale-105" : ""
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <span className="bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-medium">
                    Most Popular
                  </span>
                </div>
              )}
              <div className="text-center mb-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {plan.board}
                </h3>
                <div className="flex items-baseline justify-center">
                  <span className="text-3xl font-bold text-blue-600">
                    {plan.price}
                  </span>
                  <span className="text-gray-600 ml-2">/{plan.period}</span>
                </div>
              </div>
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-gray-600">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>
              <button
                className={`w-full py-3 px-4 rounded-lg font-medium transition-colors duration-200 ${
                  plan.popular
                    ? "bg-blue-600 text-white hover:bg-blue-700"
                    : "border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white"
                }`}
              >
                Choose Plan
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );

  // Contact Component
  const ContactSection = () => (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Contact Us
          </h2>
          <p className="text-xl text-gray-600">
            Get in touch with us to start your journey towards academic
            excellence
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Get in Touch
            </h3>
            <div className="space-y-6">
              <div className="flex items-center">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                  <Phone className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <p className="font-medium text-gray-900">Phone</p>
                  <p className="text-gray-600">+91 98765 43210</p>
                </div>
              </div>

              <div className="flex items-center">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                  <Mail className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <p className="font-medium text-gray-900">Email</p>
                  <p className="text-gray-600">info@excellenceacademy.com</p>
                </div>
              </div>

              <div className="flex items-center">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                  <MapPin className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <p className="font-medium text-gray-900">Address</p>
                  <p className="text-gray-600">
                    123 Education Street, Salt Lake, Kolkata - 700091
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                  placeholder="Your full name"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Phone
                </label>
                <input
                  type="tel"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                  placeholder="+91 98765 43210"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                  placeholder="Tell us about your requirements..."
                ></textarea>
              </div>

              <button
                className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-medium hover:bg-blue-700 transition-colors duration-200"
                onClick={() =>
                  alert(
                    "Thank you for your interest! We will contact you soon."
                  )
                }
              >
                Send Message
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );

  // Footer Component
  const Footer = () => (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <GraduationCap className="h-8 w-8 text-blue-400 mr-2" />
              <span className="text-xl font-bold">Excellence Academy</span>
            </div>
            <p className="text-gray-400">
              Empowering students to achieve their dreams through quality
              education and personalized coaching.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {["Home", "About Us", "Courses", "Success Stories", "Fees"].map(
                (item) => (
                  <li key={item}>
                    <button className="text-gray-400 hover:text-white transition-colors duration-200">
                      {item}
                    </button>
                  </li>
                )
              )}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Courses</h3>
            <ul className="space-y-2 text-gray-400">
              <li>Mathematics</li>
              <li>Physics</li>
              <li>Chemistry</li>
              <li>Biology</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Contact Info</h3>
            <ul className="space-y-2 text-gray-400">
              <li>+91 98765 43210</li>
              <li>info@excellenceacademy.com</li>
              <li>Salt Lake, Kolkata</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 Excellence Academy. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );

  // Scroll to Top Button
  const ScrollToTopButton = () =>
    showScrollTop && (
      <button
        onClick={scrollToTop}
        className="fixed bottom-6 right-6 bg-blue-600 text-white p-3 rounded-full shadow-lg hover:bg-blue-700 transition-colors duration-200 z-40"
      >
        <ChevronUp className="h-6 w-6" />
      </button>
    );

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <CoursesSection />
      <SuccessSection />
      <FeesSection />
      <ContactSection />
      <Footer />
      <ScrollToTopButton />
    </div>
  );
};

export default Education1;
