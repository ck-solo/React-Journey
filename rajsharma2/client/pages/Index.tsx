import { useState } from "react";
import { Link } from "react-router-dom";
import { Headphones, ArrowRight, Send, Star, Users, Podcast } from "lucide-react";
import { motion } from "framer-motion";

export default function Index() {
  const [email, setEmail] = useState("");

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter signup
    console.log("Newsletter signup:", { email });
    setEmail("");
  };

  const stats = [
    { label: "Happy Listeners", value: "50K+", icon: Users },
    { label: "Podcast Episodes", value: "180+", icon: Podcast },
    { label: "Average Rating", value: "4.9", icon: Star },
  ];

  const quickLinks = [
    {
      title: "Latest Episodes",
      description: "Discover our newest conversations about mindfulness and growth.",
      link: "/services",
      icon: Podcast
    },
    {
      title: "Coaching Services",
      description: "One-on-one guidance for your personal development journey.",
      link: "/services",
      icon: Users
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-4 relative overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-10">
          <motion.div
            className="absolute top-1/4 left-1/4 w-64 h-64 bg-peaceful-300 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3]
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          ></motion.div>
          <motion.div
            className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-lavender-300 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.1, 1],
              opacity: [0.2, 0.4, 0.2]
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2
            }}
          ></motion.div>
        </div>

        <motion.div
          className="text-center max-w-4xl mx-auto relative z-10"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          {/* Portrait placeholder */}
          <motion.div
            className="w-48 h-48 mx-auto mb-8 rounded-full bg-gradient-to-br from-peaceful-200 to-lavender-200 border-4 border-white/50 shadow-2xl flex items-center justify-center overflow-hidden"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            whileHover={{ scale: 1.05 }}
          >
            <div className="w-40 h-40 rounded-full bg-gradient-to-br from-peaceful-300 to-lavender-300 flex items-center justify-center">
              <span className="text-4xl font-display font-semibold text-peaceful-800">RS</span>
            </div>
          </motion.div>

          <motion.h1
            className="text-6xl md:text-7xl font-display font-light text-foreground mb-6 leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          >
            Raj Shamani
          </motion.h1>

          <motion.p
            className="text-2xl md:text-3xl font-light text-muted-foreground mb-4 tracking-wide"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
          >
            Breathe. Reflect. Rise.
          </motion.p>

          <motion.p
            className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
          >
            Motivational speaker, podcast host, and mental clarity coach helping you find calm in a noisy world.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-6 justify-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1, ease: "easeOut" }}
          >
            <Link to="/services">
              <motion.button
                className="group bg-peaceful-400 hover:bg-peaceful-500 text-peaceful-900 px-8 py-4 rounded-2xl font-medium text-lg transition-all duration-300 flex items-center justify-center gap-3 shadow-lg hover:shadow-xl"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <Headphones className="w-5 h-5" />
                Explore Services
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </motion.button>
            </Link>

            <Link to="/about">
              <motion.button
                className="group glass hover:bg-white/20 text-foreground px-8 py-4 rounded-2xl font-medium text-lg transition-all duration-300 flex items-center justify-center gap-3 shadow-lg hover:shadow-xl"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                About Me
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </motion.button>
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* Stats Section */}
      <section className="py-24 px-4 bg-gradient-peaceful-subtle">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <h2 className="text-4xl font-display font-light mb-6 text-foreground">Spreading Peace Worldwide</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Join thousands of people who have found their path to inner calm and purposeful living.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <motion.div
                  key={index}
                  className="glass rounded-3xl p-8 text-center"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2, ease: "easeOut" }}
                  viewport={{ once: true, margin: "-50px" }}
                  whileHover={{ scale: 1.02, y: -5 }}
                >
                  <motion.div
                    className="w-16 h-16 rounded-2xl bg-gradient-to-br from-peaceful-300 to-lavender-300 flex items-center justify-center mx-auto mb-6"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.3 }}
                  >
                    <IconComponent className="w-8 h-8 text-peaceful-800" />
                  </motion.div>
                  <div className="text-3xl font-display font-semibold text-foreground mb-2">{stat.value}</div>
                  <div className="text-muted-foreground">{stat.label}</div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <h2 className="text-4xl font-display font-light mb-6 text-foreground">Start Your Journey</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Choose how you'd like to begin your path to greater peace and clarity.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {quickLinks.map((link, index) => {
              const IconComponent = link.icon;
              return (
                <Link key={index} to={link.link}>
                  <motion.div
                    className="glass rounded-3xl p-8 hover:bg-white/20 transition-all duration-300 group cursor-pointer h-full"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.2, ease: "easeOut" }}
                    viewport={{ once: true, margin: "-50px" }}
                    whileHover={{ scale: 1.02, y: -5 }}
                  >
                    <motion.div
                      className="w-16 h-16 rounded-2xl bg-peaceful-300 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform"
                      whileHover={{ rotate: 5 }}
                      transition={{ duration: 0.3 }}
                    >
                      <IconComponent className="w-8 h-8 text-peaceful-800" />
                    </motion.div>
                    <h3 className="font-display font-medium text-xl mb-4 text-foreground group-hover:text-peaceful-700 transition-colors">
                      {link.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed mb-6">{link.description}</p>
                    <div className="flex items-center text-peaceful-600 group-hover:text-peaceful-800 transition-colors">
                      <span className="font-medium">Explore</span>
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </motion.div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-24 px-4 bg-gradient-peaceful-subtle">
        <motion.div
          className="max-w-4xl mx-auto text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <h2 className="text-4xl font-display font-light mb-6 text-foreground">Stay Grounded</h2>
          <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto">
            Get weekly reflections from Raj. Gentle reminders to pause, breathe, and reconnect with what truly matters.
          </p>

          <motion.form
            onSubmit={handleNewsletterSubmit}
            className="max-w-lg mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <motion.div
              className="glass rounded-2xl p-8 space-y-6"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <input
                  type="email"
                  placeholder="Your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-peaceful-400 focus:border-transparent transition-all duration-300"
                  required
                />
              </motion.div>

              <motion.button
                type="submit"
                className="w-full bg-peaceful-400 hover:bg-peaceful-500 text-peaceful-900 py-4 rounded-xl font-medium transition-colors flex items-center justify-center gap-3"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Send className="w-4 h-4" />
                Join the Journey
              </motion.button>
            </motion.div>
          </motion.form>
        </motion.div>
      </section>
    </div>
  );
}
