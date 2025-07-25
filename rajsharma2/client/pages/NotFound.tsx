import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Home, ArrowLeft } from "lucide-react";
import { motion } from "framer-motion";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname,
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <motion.div
        className="text-center max-w-lg mx-auto"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <motion.div
          className="w-32 h-32 rounded-3xl bg-gradient-to-br from-peaceful-200 to-lavender-200 flex items-center justify-center mx-auto mb-8"
          animate={{ rotate: [0, 5, -5, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        >
          <span className="text-6xl font-display font-light text-peaceful-800">404</span>
        </motion.div>

        <h1 className="text-4xl font-display font-light text-foreground mb-4">
          Page Not Found
        </h1>

        <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
          The path you're seeking doesn't exist here. Let's guide you back to a place of peace and purpose.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/">
            <motion.button
              className="flex items-center gap-3 bg-peaceful-400 hover:bg-peaceful-500 text-peaceful-900 px-6 py-3 rounded-xl font-medium transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              <Home className="w-4 h-4" />
              Return Home
            </motion.button>
          </Link>

          <motion.button
            onClick={() => window.history.back()}
            className="flex items-center gap-3 glass hover:bg-white/20 text-foreground px-6 py-3 rounded-xl font-medium transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            <ArrowLeft className="w-4 h-4" />
            Go Back
          </motion.button>
        </div>

        <motion.div
          className="mt-12 glass rounded-2xl p-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
        >
          <p className="text-sm text-muted-foreground italic">
            "Not all who wander are lost, but some paths lead to new discoveries."
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default NotFound;
