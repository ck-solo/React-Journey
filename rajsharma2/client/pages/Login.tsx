import { useState } from "react";
import { Link } from "react-router-dom";
import { Mail, Lock, Eye, EyeOff, ArrowRight, User } from "lucide-react";
import { motion } from "framer-motion";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      console.log("Login attempt:", { email, password });
      setIsLoading(false);
    }, 1500);
  };

  return (
    <div className="min-h-screen py-8 flex items-center justify-center px-4">
      <div className="max-w-md w-full">
        {/* Header */}
        <motion.div 
          className="text-center mb-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-peaceful-300 to-lavender-300 flex items-center justify-center mx-auto mb-6">
            <User className="w-10 h-10 text-peaceful-800" />
          </div>
          <h1 className="text-3xl font-display font-light text-foreground mb-2">Welcome Back</h1>
          <p className="text-muted-foreground">
            Sign in to access your peaceful space
          </p>
        </motion.div>

        {/* Login Form */}
        <motion.div
          className="glass rounded-3xl p-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Email Field */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                Email Address
              </label>
              <div className="relative">
                <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
                  <Mail className="w-5 h-5 text-muted-foreground" />
                </div>
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-white/10 border border-white/20 rounded-xl pl-12 pr-4 py-3 text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-peaceful-400 focus:border-transparent transition-all duration-300"
                  placeholder="Enter your email"
                  required
                />
              </div>
            </div>

            {/* Password Field */}
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-foreground mb-2">
                Password
              </label>
              <div className="relative">
                <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
                  <Lock className="w-5 h-5 text-muted-foreground" />
                </div>
                <input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full bg-white/10 border border-white/20 rounded-xl pl-12 pr-12 py-3 text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-peaceful-400 focus:border-transparent transition-all duration-300"
                  placeholder="Enter your password"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
                >
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
            </div>

            {/* Remember & Forgot */}
            <div className="flex items-center justify-between">
              <label className="flex items-center">
                <input
                  type="checkbox"
                  className="w-4 h-4 text-peaceful-600 bg-white/10 border-white/20 rounded focus:ring-peaceful-400 focus:ring-2"
                />
                <span className="ml-2 text-sm text-muted-foreground">Remember me</span>
              </label>
              <button 
                type="button"
                className="text-sm text-peaceful-600 hover:text-peaceful-700 transition-colors"
              >
                Forgot password?
              </button>
            </div>

            {/* Submit Button */}
            <motion.button
              type="submit"
              disabled={isLoading}
              className="w-full bg-peaceful-400 hover:bg-peaceful-500 disabled:bg-peaceful-300 text-peaceful-900 py-4 rounded-xl font-medium transition-all duration-300 flex items-center justify-center gap-3"
              whileHover={{ scale: isLoading ? 1 : 1.02 }}
              whileTap={{ scale: isLoading ? 1 : 0.98 }}
            >
              {isLoading ? (
                <div className="w-5 h-5 border-2 border-peaceful-900 border-t-transparent rounded-full animate-spin"></div>
              ) : (
                <>
                  Sign In
                  <ArrowRight className="w-4 h-4" />
                </>
              )}
            </motion.button>
          </form>

          {/* Divider */}
          <div className="my-8 flex items-center">
            <div className="flex-1 border-t border-white/20"></div>
            <span className="px-4 text-sm text-muted-foreground">or continue with</span>
            <div className="flex-1 border-t border-white/20"></div>
          </div>

          {/* Social Login */}
          <div className="space-y-3">
            <motion.button 
              className="w-full glass hover:bg-white/20 text-foreground py-3 rounded-xl font-medium transition-all duration-300 flex items-center justify-center gap-3"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="w-5 h-5 bg-white rounded-sm flex items-center justify-center">
                <span className="text-xs font-bold text-gray-800">G</span>
              </div>
              Continue with Google
            </motion.button>
            
            <motion.button 
              className="w-full glass hover:bg-white/20 text-foreground py-3 rounded-xl font-medium transition-all duration-300 flex items-center justify-center gap-3"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="w-5 h-5 bg-blue-500 rounded-sm flex items-center justify-center">
                <span className="text-xs font-bold text-white">f</span>
              </div>
              Continue with Facebook
            </motion.button>
          </div>
        </motion.div>

        {/* Sign Up Link */}
        <motion.div 
          className="text-center mt-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <p className="text-muted-foreground">
            New to our peaceful community?{" "}
            <Link 
              to="/signup" 
              className="text-peaceful-600 hover:text-peaceful-700 font-medium transition-colors"
            >
              Create an account
            </Link>
          </p>
        </motion.div>

        {/* Benefits */}
        <motion.div
          className="mt-8 glass rounded-2xl p-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
        >
          <h3 className="font-display font-medium text-lg mb-4 text-foreground text-center">
            What You'll Get
          </h3>
          <div className="space-y-3 text-sm">
            <div className="flex items-center gap-3">
              <div className="w-5 h-5 rounded-full bg-peaceful-300 flex items-center justify-center flex-shrink-0">
                <div className="w-2 h-2 bg-peaceful-800 rounded-full"></div>
              </div>
              <span className="text-muted-foreground">Access to exclusive podcast episodes</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-5 h-5 rounded-full bg-peaceful-300 flex items-center justify-center flex-shrink-0">
                <div className="w-2 h-2 bg-peaceful-800 rounded-full"></div>
              </div>
              <span className="text-muted-foreground">Personalized mindfulness recommendations</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-5 h-5 rounded-full bg-peaceful-300 flex items-center justify-center flex-shrink-0">
                <div className="w-2 h-2 bg-peaceful-800 rounded-full"></div>
              </div>
              <span className="text-muted-foreground">Join our peaceful community discussions</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-5 h-5 rounded-full bg-peaceful-300 flex items-center justify-center flex-shrink-0">
                <div className="w-2 h-2 bg-peaceful-800 rounded-full"></div>
              </div>
              <span className="text-muted-foreground">Early access to new content and features</span>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
