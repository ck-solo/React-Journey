import { useParams, Link, Navigate } from "react-router-dom";
import { Play, Clock, Calendar, ArrowLeft, Share2, Heart, Download, Music, Spotify, Youtube } from "lucide-react";
import { motion } from "framer-motion";

export default function ServiceDetail() {
  const { id } = useParams();

  // Mock data - in a real app, this would come from an API
  const episodes = {
    "overthinking-detox": {
      id: "overthinking-detox",
      title: "Overthinking Detox",
      duration: "28 min",
      date: "Dec 15, 2024",
      description: "Learn to quiet the mental noise and find clarity in simplicity. A deep dive into practical techniques for breaking free from the cycle of overthinking.",
      fullDescription: "In this transformative episode, we explore the hidden patterns that keep us trapped in cycles of overthinking. Through gentle guidance and practical wisdom, you'll discover how to create space between yourself and your thoughts, allowing for greater clarity and peace. We'll cover mindfulness techniques, cognitive reframing, and the art of conscious non-engagement with mental chatter.",
      category: "Mental Health",
      keyTopics: [
        "Understanding the overthinking cycle",
        "Mindfulness techniques for mental clarity", 
        "The power of present moment awareness",
        "Practical exercises for daily life",
        "Building sustainable mental habits"
      ],
      transcript: "Welcome to today's conversation about finding peace in our often chaotic minds. Overthinking has become an epidemic in our modern world, and today we're going to explore gentle ways to break free from this exhausting pattern...",
      relatedEpisodes: ["calmness-is-a-skill", "purpose-over-pressure"]
    },
    "calmness-is-a-skill": {
      id: "calmness-is-a-skill",
      title: "Calmness Is A Skill",
      duration: "32 min",
      date: "Dec 8, 2024",
      description: "Discover how to cultivate peace as a daily practice. Explore ancient techniques and modern science behind developing unshakeable inner calm.",
      fullDescription: "Calmness isn't something you're born with or without - it's a skill that can be developed through consistent practice. In this episode, we dive deep into the neuroscience of calm, ancient wisdom traditions, and practical techniques you can implement immediately to build your capacity for peace, even in challenging circumstances.",
      category: "Mindfulness",
      keyTopics: [
        "The neuroscience of calm",
        "Ancient wisdom meets modern science",
        "Daily practices for building calmness",
        "Responding vs. reacting to stress",
        "Creating calm in chaotic environments"
      ],
      transcript: "Today we're exploring one of the most important skills you can develop in our modern world - the ability to remain calm and centered...",
      relatedEpisodes: ["overthinking-detox", "digital-minimalism"]
    },
    "purpose-over-pressure": {
      id: "purpose-over-pressure",
      title: "Purpose Over Pressure",
      duration: "24 min",
      date: "Dec 1, 2024",
      description: "Finding your true direction without the weight of expectations. Navigate life's demands while staying true to your authentic self.",
      fullDescription: "In a world full of external expectations and pressures, how do we stay connected to our authentic purpose? This episode offers a compassionate exploration of finding your true path, setting healthy boundaries, and making decisions from a place of inner wisdom rather than external pressure.",
      category: "Purpose",
      keyTopics: [
        "Distinguishing between purpose and pressure",
        "Setting healthy boundaries",
        "Making authentic decisions",
        "Dealing with external expectations",
        "Finding your true north"
      ],
      transcript: "Let's talk about one of the most challenging aspects of modern life - distinguishing between what truly matters to us and what we think should matter...",
      relatedEpisodes: ["overthinking-detox", "morning-rituals"]
    }
  };

  const episode = episodes[id as keyof typeof episodes];

  if (!episode) {
    return <Navigate to="/services" replace />;
  }

  const relatedEpisodeDetails = episode.relatedEpisodes.map(relId => episodes[relId as keyof typeof episodes]).filter(Boolean);

  return (
    <div className="min-h-screen py-8">
      {/* Back Navigation */}
      <div className="max-w-6xl mx-auto px-4 mb-8">
        <Link to="/services">
          <motion.div 
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
            whileHover={{ x: -5 }}
            transition={{ duration: 0.2 }}
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Services
          </motion.div>
        </Link>
      </div>

      {/* Episode Header */}
      <section className="py-8 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
                <div className="flex items-center gap-4 mb-6">
                  <span className="text-sm font-medium text-peaceful-600 bg-peaceful-100 px-3 py-2 rounded-full">
                    {episode.category}
                  </span>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {episode.duration}
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {episode.date}
                    </div>
                  </div>
                </div>

                <h1 className="text-4xl md:text-5xl font-display font-light text-foreground mb-6 leading-tight">
                  {episode.title}
                </h1>

                <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                  {episode.fullDescription}
                </p>

                {/* Action Buttons */}
                <div className="flex flex-wrap gap-4 mb-12">
                  <motion.button 
                    className="flex items-center gap-3 bg-peaceful-400 hover:bg-peaceful-500 text-peaceful-900 px-6 py-3 rounded-xl font-medium transition-all duration-300"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Play className="w-5 h-5" />
                    Play Episode
                  </motion.button>
                  
                  <motion.button 
                    className="flex items-center gap-3 glass hover:bg-white/20 text-foreground px-6 py-3 rounded-xl font-medium transition-all duration-300"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Download className="w-4 h-4" />
                    Download
                  </motion.button>

                  <motion.button 
                    className="flex items-center gap-3 glass hover:bg-white/20 text-foreground px-6 py-3 rounded-xl font-medium transition-all duration-300"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Share2 className="w-4 h-4" />
                    Share
                  </motion.button>

                  <motion.button 
                    className="flex items-center gap-3 glass hover:bg-white/20 text-foreground px-6 py-3 rounded-xl font-medium transition-all duration-300"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Heart className="w-4 h-4" />
                    Save
                  </motion.button>
                </div>

                {/* Key Topics */}
                <div className="mb-12">
                  <h2 className="text-2xl font-display font-light mb-6 text-foreground">Key Topics Covered</h2>
                  <div className="space-y-3">
                    {episode.keyTopics.map((topic, index) => (
                      <motion.div 
                        key={index}
                        className="flex items-center gap-3"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        viewport={{ once: true }}
                      >
                        <div className="w-6 h-6 rounded-full bg-peaceful-300 flex items-center justify-center flex-shrink-0">
                          <div className="w-2 h-2 bg-peaceful-800 rounded-full"></div>
                        </div>
                        <span className="text-muted-foreground">{topic}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Transcript Preview */}
                <div className="glass rounded-2xl p-8">
                  <h2 className="text-2xl font-display font-light mb-4 text-foreground">Episode Transcript</h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    {episode.transcript}
                  </p>
                  <button className="text-peaceful-600 hover:text-peaceful-700 font-medium transition-colors">
                    Read full transcript →
                  </button>
                </div>
              </motion.div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <motion.div
                className="space-y-8"
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              >
                {/* Player Card */}
                <div className="glass rounded-2xl p-6">
                  <h3 className="font-display font-medium text-lg mb-4 text-foreground">Listen Now</h3>
                  
                  {/* Mock Player Interface */}
                  <div className="bg-gradient-to-br from-peaceful-200 to-lavender-200 rounded-xl p-6 mb-4">
                    <div className="flex items-center justify-center mb-4">
                      <motion.div 
                        className="w-16 h-16 rounded-full bg-peaceful-400 flex items-center justify-center cursor-pointer"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Play className="w-8 h-8 text-peaceful-900" />
                      </motion.div>
                    </div>
                    
                    {/* Progress Bar */}
                    <div className="bg-white/30 rounded-full h-2 mb-3">
                      <div className="bg-peaceful-600 h-2 rounded-full w-1/3"></div>
                    </div>
                    
                    <div className="flex justify-between text-sm text-peaceful-700">
                      <span>9:24</span>
                      <span>{episode.duration}</span>
                    </div>
                  </div>

                  {/* Platform Links */}
                  <div className="space-y-3">
                    <a 
                      href="#" 
                      className="flex items-center gap-3 w-full p-3 rounded-xl bg-green-500 hover:bg-green-600 text-white transition-colors"
                    >
                      <Music className="w-5 h-5" />
                      Listen on Spotify
                    </a>
                    <a 
                      href="#" 
                      className="flex items-center gap-3 w-full p-3 rounded-xl bg-red-500 hover:bg-red-600 text-white transition-colors"
                    >
                      <Youtube className="w-5 h-5" />
                      Watch on YouTube
                    </a>
                  </div>
                </div>

                {/* Related Episodes */}
                <div className="glass rounded-2xl p-6">
                  <h3 className="font-display font-medium text-lg mb-6 text-foreground">Related Episodes</h3>
                  <div className="space-y-4">
                    {relatedEpisodeDetails.map((relatedEp, index) => (
                      <Link key={relatedEp.id} to={`/services/${relatedEp.id}`}>
                        <motion.div 
                          className="group cursor-pointer"
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.5, delay: index * 0.1 }}
                          viewport={{ once: true }}
                        >
                          <h4 className="font-medium text-foreground group-hover:text-peaceful-700 transition-colors mb-1">
                            {relatedEp.title}
                          </h4>
                          <p className="text-sm text-muted-foreground mb-2 line-clamp-2">
                            {relatedEp.description}
                          </p>
                          <div className="text-xs text-peaceful-600 flex items-center gap-2">
                            <Clock className="w-3 h-3" />
                            {relatedEp.duration}
                          </div>
                        </motion.div>
                      </Link>
                    ))}
                  </div>
                </div>

                {/* Newsletter CTA */}
                <div className="glass rounded-2xl p-6">
                  <h3 className="font-display font-medium text-lg mb-4 text-foreground">Never Miss an Episode</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Get notified when new episodes are released.
                  </p>
                  <button className="w-full bg-peaceful-400 hover:bg-peaceful-500 text-peaceful-900 py-3 rounded-xl font-medium transition-colors">
                    Subscribe to Newsletter
                  </button>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
