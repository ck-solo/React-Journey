import { Book, Award, Users, Heart, Quote, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function About() {
  const milestones = [
    {
      year: "2018",
      title: "The Beginning",
      description: "Started sharing mindfulness practices on social media after personal transformation through meditation."
    },
    {
      year: "2020", 
      title: "First Podcast",
      description: "Launched 'Peaceful Conversations' podcast during the pandemic to help people find calm in uncertainty."
    },
    {
      year: "2022",
      title: "Certification",
      description: "Completed advanced certification in Mindfulness-Based Stress Reduction (MBSR) and Life Coaching."
    },
    {
      year: "2024",
      title: "50K+ Community",
      description: "Built a thriving community of over 50,000 people seeking peace and purposeful living."
    }
  ];

  const values = [
    {
      icon: Heart,
      title: "Compassion",
      description: "Every person deserves kindness, especially from themselves. We approach all challenges with gentle understanding."
    },
    {
      icon: Book,
      title: "Wisdom",
      description: "Combining ancient wisdom traditions with modern psychology to create practical paths to peace."
    },
    {
      icon: Users,
      title: "Community",
      description: "Healing happens in connection. We believe in the power of supportive, mindful community."
    },
    {
      icon: Award,
      title: "Authenticity",
      description: "Being genuine and vulnerable in sharing both struggles and insights on the journey to inner peace."
    }
  ];

  const testimonials = [
    {
      quote: "Raj doesn't just teach mindfulness, he embodies it. His presence alone is calming, and his insights have transformed how I relate to my thoughts and emotions.",
      author: "Dr. Priya Patel",
      role: "Therapist & Podcast Listener",
      avatar: "PP"
    },
    {
      quote: "Working with Raj through his coaching program was life-changing. He helped me find my authentic voice and purpose beyond external expectations.",
      author: "Arjun Mehta", 
      role: "Entrepreneur & Coaching Client",
      avatar: "AM"
    },
    {
      quote: "Raj's podcast became my sanctuary during a difficult period. His gentle wisdom and practical guidance helped me rebuild my relationship with myself.",
      author: "Maya Singh",
      role: "Teacher & Community Member", 
      avatar: "MS"
    }
  ];

  return (
    <div className="min-h-screen py-8">
      {/* Hero Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <h1 className="text-5xl md:text-6xl font-display font-light text-foreground mb-6 leading-tight">
                About Raj
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed mb-8">
                A journey from chaos to calm, and a mission to help others find their own path to inner peace.
              </p>
              <Link to="/services">
                <motion.button 
                  className="inline-flex items-center gap-3 bg-peaceful-400 hover:bg-peaceful-500 text-peaceful-900 px-6 py-3 rounded-xl font-medium transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Work with Raj
                  <ArrowRight className="w-4 h-4" />
                </motion.button>
              </Link>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            >
              <div className="w-full h-96 rounded-3xl bg-gradient-to-br from-peaceful-200 to-cream-200 flex items-center justify-center shadow-xl">
                <motion.div 
                  className="w-80 h-80 rounded-full bg-gradient-to-br from-peaceful-300 to-lavender-300 flex items-center justify-center"
                  animate={{ rotate: [0, 5, -5, 0] }}
                  transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                >
                  <span className="text-8xl font-display font-medium text-peaceful-800">🧘‍♂️</span>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 px-4 bg-gradient-peaceful-subtle">
        <div className="max-w-4xl mx-auto">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <h2 className="text-4xl font-display font-light mb-6 text-foreground">My Story</h2>
          </motion.div>

          <div className="space-y-8 text-lg text-muted-foreground leading-relaxed">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              Like many of you, I wasn't born with an innate sense of calm. In fact, my journey began in quite the opposite place - a world of constant anxiety, overthinking, and the relentless pursuit of external validation. I was a successful marketing executive in Mumbai, but behind the polished exterior was someone struggling to find genuine peace and purpose.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              The turning point came during a particularly stressful period in 2017. I was working 14-hour days, my relationships were suffering, and I felt disconnected from everything that truly mattered. It was during a brief visit to a meditation retreat in Rishikesh that I experienced, for the first time in years, a moment of genuine stillness.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              That moment changed everything. I realized that the peace I was seeking wasn't something to be achieved or acquired - it was already within me, waiting to be uncovered. I began a dedicated practice of mindfulness, studied with various teachers, and slowly started sharing my insights with friends and family.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              What started as personal transformation soon became a calling. People began reaching out, sharing their own struggles, and asking for guidance. I realized that in our hyper-connected, fast-paced world, many of us are yearning for the same thing - a return to simplicity, authenticity, and inner calm.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              viewport={{ once: true }}
            >
              Today, through my podcast, coaching work, and community, I have the privilege of walking alongside thousands of people on their own journeys to inner peace. My approach isn't about perfection or spiritual bypassing - it's about honest, practical wisdom that acknowledges our struggles while gently guiding us toward greater clarity and calm.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Journey Timeline */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <h2 className="text-4xl font-display font-light mb-6 text-foreground">The Journey</h2>
            <p className="text-muted-foreground">Key moments that shaped my path to helping others find peace</p>
          </motion.div>

          <div className="space-y-8">
            {milestones.map((milestone, index) => (
              <motion.div 
                key={index}
                className="flex gap-8 items-start"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true, margin: "-50px" }}
              >
                <div className="flex-shrink-0">
                  <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-peaceful-300 to-lavender-300 flex items-center justify-center">
                    <span className="font-display font-semibold text-peaceful-800">{milestone.year}</span>
                  </div>
                </div>
                <div className="glass rounded-2xl p-6 flex-1">
                  <h3 className="font-display font-medium text-xl mb-3 text-foreground">{milestone.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{milestone.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 px-4 bg-gradient-peaceful-subtle">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <h2 className="text-4xl font-display font-light mb-6 text-foreground">Core Values</h2>
            <p className="text-muted-foreground">The principles that guide everything I do</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <motion.div 
                  key={index}
                  className="glass rounded-2xl p-6 text-center"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true, margin: "-50px" }}
                  whileHover={{ scale: 1.02, y: -5 }}
                >
                  <motion.div 
                    className="w-16 h-16 rounded-2xl bg-gradient-to-br from-peaceful-300 to-lavender-300 flex items-center justify-center mx-auto mb-4"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.3 }}
                  >
                    <IconComponent className="w-8 h-8 text-peaceful-800" />
                  </motion.div>
                  <h3 className="font-display font-medium text-lg mb-3 text-foreground">{value.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{value.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <h2 className="text-4xl font-display font-light mb-6 text-foreground">What People Say</h2>
            <p className="text-muted-foreground">Voices from our peaceful community</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div 
                key={index}
                className="glass rounded-3xl p-8"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true, margin: "-50px" }}
                whileHover={{ scale: 1.02, y: -5 }}
              >
                <Quote className="w-8 h-8 text-peaceful-400 mb-4" />
                <blockquote className="text-muted-foreground mb-6 leading-relaxed italic">
                  "{testimonial.quote}"
                </blockquote>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-peaceful-300 to-lavender-300 flex items-center justify-center">
                    <span className="font-display font-medium text-peaceful-800 text-sm">{testimonial.avatar}</span>
                  </div>
                  <div>
                    <div className="font-medium text-foreground">{testimonial.author}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-peaceful-subtle">
        <motion.div 
          className="max-w-4xl mx-auto text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <h2 className="text-4xl font-display font-light mb-6 text-foreground">Ready to Begin?</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Whether through podcast episodes, coaching sessions, or our mindful community, there are many ways to start your journey to greater peace and clarity.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/services">
              <motion.button 
                className="bg-peaceful-400 hover:bg-peaceful-500 text-peaceful-900 px-8 py-4 rounded-xl font-medium transition-all duration-300 flex items-center justify-center gap-3"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                Explore Services
                <ArrowRight className="w-4 h-4" />
              </motion.button>
            </Link>
            
            <Link to="/signup">
              <motion.button 
                className="glass hover:bg-white/20 text-foreground px-8 py-4 rounded-xl font-medium transition-all duration-300 flex items-center justify-center gap-3"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                Join Community
                <ArrowRight className="w-4 h-4" />
              </motion.button>
            </Link>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
