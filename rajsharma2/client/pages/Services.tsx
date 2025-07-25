import { Link } from "react-router-dom";
import { Play, Clock, Calendar, Users, Video, MessageSquare, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export default function Services() {
  const podcastEpisodes = [
    {
      id: "overthinking-detox",
      title: "Overthinking Detox",
      duration: "28 min",
      date: "Dec 15, 2024",
      description: "Learn to quiet the mental noise and find clarity in simplicity. A deep dive into practical techniques for breaking free from the cycle of overthinking.",
      category: "Mental Health",
      featured: true
    },
    {
      id: "calmness-is-a-skill",
      title: "Calmness Is A Skill",
      duration: "32 min",
      date: "Dec 8, 2024", 
      description: "Discover how to cultivate peace as a daily practice. Explore ancient techniques and modern science behind developing unshakeable inner calm.",
      category: "Mindfulness",
      featured: true
    },
    {
      id: "purpose-over-pressure",
      title: "Purpose Over Pressure",
      duration: "24 min",
      date: "Dec 1, 2024",
      description: "Finding your true direction without the weight of expectations. Navigate life's demands while staying true to your authentic self.",
      category: "Purpose",
      featured: false
    },
    {
      id: "digital-minimalism",
      title: "Digital Minimalism",
      duration: "29 min",
      date: "Nov 24, 2024",
      description: "Reclaim your attention in an increasingly noisy world. Practical strategies for creating healthy boundaries with technology.",
      category: "Lifestyle",
      featured: false
    },
    {
      id: "morning-rituals",
      title: "Sacred Morning Rituals",
      duration: "35 min",
      date: "Nov 17, 2024",
      description: "Transform your mornings, transform your life. Design morning practices that set the tone for peaceful, productive days.",
      category: "Productivity",
      featured: false
    },
    {
      id: "dealing-with-anxiety",
      title: "Dealing with Modern Anxiety",
      duration: "41 min",
      date: "Nov 10, 2024",
      description: "Understanding and managing anxiety in our fast-paced world. Gentle approaches to finding peace amidst uncertainty.",
      category: "Mental Health",
      featured: true
    }
  ];

  const coachingServices = [
    {
      id: "one-on-one",
      title: "1:1 Clarity Coaching",
      duration: "60 min sessions",
      price: "₹5,000",
      description: "Personalized guidance to help you navigate life's challenges with greater clarity and purpose.",
      features: ["Weekly 1-hour sessions", "Personalized action plans", "WhatsApp support", "Mindfulness exercises"],
      popular: true
    },
    {
      id: "group-sessions", 
      title: "Group Mindfulness Sessions",
      duration: "90 min sessions",
      price: "₹1,500",
      description: "Join a community of like-minded individuals on the journey to inner peace and self-discovery.",
      features: ["Bi-weekly group sessions", "Community access", "Guided meditations", "Peer support network"],
      popular: false
    },
    {
      id: "intensive-workshop",
      title: "28-Day Peace Intensive",
      duration: "4 weeks",
      price: "₹15,000",
      description: "Comprehensive program to transform your relationship with stress, anxiety, and inner turbulence.",
      features: ["Daily guided practices", "Weekly 1:1 check-ins", "Private community", "Lifetime resources"],
      popular: false
    }
  ];

  const categories = ["All", "Mental Health", "Mindfulness", "Purpose", "Lifestyle", "Productivity"];

  return (
    <div className="min-h-screen py-8">
      {/* Hero Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <motion.h1 
            className="text-5xl md:text-6xl font-display font-light text-foreground mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            Services & Episodes
          </motion.h1>
          <motion.p 
            className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          >
            Discover our latest podcast episodes and find the perfect coaching service to support your journey toward inner peace and personal growth.
          </motion.p>
        </div>
      </section>

      {/* Featured Episodes */}
      <section className="py-16 px-4 bg-gradient-peaceful-subtle">
        <div className="max-w-6xl mx-auto">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <h2 className="text-4xl font-display font-light mb-4 text-foreground">Featured Episodes</h2>
            <p className="text-muted-foreground">Our most popular and impactful conversations</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {podcastEpisodes.filter(ep => ep.featured).map((episode, index) => (
              <Link key={episode.id} to={`/services/${episode.id}`}>
                <motion.div 
                  className="glass rounded-3xl p-6 hover:bg-white/20 transition-all duration-300 group cursor-pointer h-full"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
                  viewport={{ once: true, margin: "-50px" }}
                  whileHover={{ scale: 1.02, y: -5 }}
                >
                  <div className="flex items-start justify-between mb-4">
                    <span className="text-xs font-medium text-peaceful-600 bg-peaceful-100 px-3 py-1 rounded-full">
                      {episode.category}
                    </span>
                    <motion.div 
                      className="w-10 h-10 rounded-xl bg-peaceful-300 flex items-center justify-center group-hover:scale-110 transition-transform"
                      whileHover={{ rotate: 90 }}
                      transition={{ duration: 0.3 }}
                    >
                      <Play className="w-5 h-5 text-peaceful-800" />
                    </motion.div>
                  </div>
                  
                  <h3 className="font-display font-medium text-lg mb-3 text-foreground group-hover:text-peaceful-700 transition-colors">
                    {episode.title}
                  </h3>
                  
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                    {episode.description}
                  </p>
                  
                  <div className="flex items-center justify-between text-xs text-muted-foreground">
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {episode.duration}
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        {episode.date}
                      </div>
                    </div>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </motion.div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* All Episodes */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <h2 className="text-4xl font-display font-light mb-4 text-foreground">All Episodes</h2>
            <p className="text-muted-foreground">Explore our complete library of mindful conversations</p>
          </motion.div>

          <div className="space-y-4">
            {podcastEpisodes.map((episode, index) => (
              <Link key={episode.id} to={`/services/${episode.id}`}>
                <motion.div 
                  className="glass rounded-2xl p-6 hover:bg-white/20 transition-all duration-300 group cursor-pointer"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.05, ease: "easeOut" }}
                  viewport={{ once: true, margin: "-50px" }}
                  whileHover={{ scale: 1.01, x: 5 }}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-4 mb-2">
                        <span className="text-xs font-medium text-peaceful-600 bg-peaceful-100 px-3 py-1 rounded-full">
                          {episode.category}
                        </span>
                        <div className="flex items-center gap-1 text-xs text-muted-foreground">
                          <Clock className="w-3 h-3" />
                          {episode.duration}
                        </div>
                        <div className="flex items-center gap-1 text-xs text-muted-foreground">
                          <Calendar className="w-3 h-3" />
                          {episode.date}
                        </div>
                      </div>
                      <h3 className="font-display font-medium text-lg mb-2 text-foreground group-hover:text-peaceful-700 transition-colors">
                        {episode.title}
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {episode.description}
                      </p>
                    </div>
                    <div className="ml-6 flex items-center gap-4">
                      <motion.div 
                        className="w-12 h-12 rounded-xl bg-peaceful-300 flex items-center justify-center group-hover:scale-110 transition-transform"
                        whileHover={{ rotate: 90 }}
                        transition={{ duration: 0.3 }}
                      >
                        <Play className="w-5 h-5 text-peaceful-800" />
                      </motion.div>
                      <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </motion.div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Coaching Services */}
      <section className="py-16 px-4 bg-gradient-peaceful-subtle">
        <div className="max-w-6xl mx-auto">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <h2 className="text-4xl font-display font-light mb-4 text-foreground">Coaching Services</h2>
            <p className="text-muted-foreground">Personalized guidance for your journey to inner peace</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {coachingServices.map((service, index) => (
              <motion.div 
                key={service.id}
                className={`glass rounded-3xl p-8 transition-all duration-300 relative ${
                  service.popular ? "ring-2 ring-peaceful-400 bg-white/15" : "hover:bg-white/20"
                }`}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2, ease: "easeOut" }}
                viewport={{ once: true, margin: "-50px" }}
                whileHover={{ scale: 1.02, y: -5 }}
              >
                {service.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-peaceful-400 text-peaceful-900 px-4 py-1 rounded-full text-sm font-medium">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-6">
                  <h3 className="font-display font-medium text-xl mb-2 text-foreground">{service.title}</h3>
                  <p className="text-sm text-peaceful-600 mb-4">{service.duration}</p>
                  <div className="text-3xl font-display font-semibold text-foreground mb-2">{service.price}</div>
                  <p className="text-sm text-muted-foreground leading-relaxed">{service.description}</p>
                </div>

                <div className="space-y-3 mb-8">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      <div className="w-5 h-5 rounded-full bg-peaceful-300 flex items-center justify-center flex-shrink-0">
                        <div className="w-2 h-2 bg-peaceful-800 rounded-full"></div>
                      </div>
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                </div>

                <motion.button 
                  className={`w-full py-3 rounded-xl font-medium transition-all duration-300 flex items-center justify-center gap-2 ${
                    service.popular 
                      ? "bg-peaceful-400 hover:bg-peaceful-500 text-peaceful-900" 
                      : "bg-white/10 hover:bg-white/20 text-foreground border border-white/20"
                  }`}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Users className="w-4 h-4" />
                  Get Started
                </motion.button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
