"use client";

import { 
  BookOpen, 
  BarChart3, 
  Bot, 
  Briefcase, 
  MessageSquare, 
  UserCheck, 
  Sparkles, 
  ArrowRight, 
  Star,
  GraduationCap,
  TrendingUp,
  Brain,
  Users,
  MessageCircle,
  Award
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import WavesBackground from "@/components/WavesBackground";
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import { motion } from "framer-motion";
import UnderDevelopmentAnimation from "@/components/UnderDevelopmentAnimation";
import { useState } from "react";

export default function Home() {
  const [showUnderDevelopment, setShowUnderDevelopment] = useState(false);

  const handleComingSoonClick = () => {
    setShowUnderDevelopment(true);
  };

  const handleCloseModal = () => {
    setShowUnderDevelopment(false);
  };

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* 3D Moving Waves Background */}
      <WavesBackground />
      
      {/* Floating Elements */}
      <div className="fixed inset-0 pointer-events-none z-1">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-gradient-to-r from-yellow-400 to-pink-400 rounded-full opacity-60"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>
      
      {/* Content Container */}
      <div className="relative z-10">
        {/* Header */}
        <header className="flex items-center justify-between px-12 py-6 bg-white/90 backdrop-blur-md border-b border-gray-200/30 shadow-lg">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-3"
          >
            <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center">
              <Sparkles className="w-5 h-5 text-white" />
            </div>
            <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Learn Wave
            </h1>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex gap-4"
          >
            <Button 
              variant="outline" 
              className="border-gray-300 text-gray-700 hover:bg-gray-50 bg-white/80 hover:shadow-lg transition-all duration-300 hover:scale-105 font-poppins font-medium"
            >
              Notify Me
            </Button>
            <Button 
              onClick={handleComingSoonClick}
              className="bg-gradient-to-r from-gray-900 to-gray-800 text-white hover:from-gray-800 hover:to-gray-700 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 font-poppins font-semibold"
            >
              Coming Soon
            </Button>
          </motion.div>
        </header>

        {/* Main Content */}
        <main className="px-12 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-7xl mx-auto">
            {/* Left Section */}
            <div className="space-y-12">
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="space-y-6"
              >
                <div className="relative">
                  <h2 className="text-7xl font-bold leading-tight text-gray-900 font-space-grotesk">
                    <span className="block font-poppins font-light text-5xl md:text-6xl mb-2 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                      Welcome to
                    </span>
                    <span className="block font-space-grotesk font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent relative">
                      Learn Wave
                      <motion.div
                        className="absolute -top-2 -right-2 w-6 h-6"
                        animate={{ rotate: 360 }}
                        transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                      >
                        <Star className="w-6 h-6 text-yellow-400 fill-yellow-400" />
                      </motion.div>
                    </span>
                  </h2>
                  <div className="absolute -left-4 top-0 w-12 h-12 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full opacity-20 blur-xl"></div>
                </div>
                
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  className="relative"
                >
                  <p className="text-xl text-gray-700 leading-relaxed bg-white/80 backdrop-blur-md p-8 rounded-2xl border border-white/50 shadow-xl font-inter">
                    <span className="text-2xl">🎓</span> Your comprehensive student platform for accessing learning materials, tracking academic progress, 
                    connecting with peers, and getting expert guidance. All in one place, designed specifically for VTU students.
                  </p>
                  <div className="absolute -bottom-2 -right-2 w-16 h-16 bg-gradient-to-r from-green-400 to-blue-400 rounded-full opacity-30 blur-2xl"></div>
                </motion.div>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="flex gap-6"
              >
                <Button 
                  onClick={handleComingSoonClick}
                  className="bg-gradient-to-r from-gray-900 to-gray-800 text-white hover:from-gray-800 hover:to-gray-700 px-10 py-4 text-lg shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 group font-poppins font-semibold"
                >
                  Coming Soon
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button variant="outline" className="border-gray-300 text-gray-700 hover:bg-gray-50 px-10 py-4 text-lg bg-white/80 backdrop-blur-md hover:shadow-lg transition-all duration-300 hover:scale-105 font-poppins font-medium">
                  Get Notified
                </Button>
              </motion.div>

              {/* Lottie Animation */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, delay: 0.7 }}
                className="flex justify-center items-center py-8"
              >
                <div className="relative">
                  <div className="w-72 h-72 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full p-1 shadow-2xl">
                    <div className="w-full h-full bg-white rounded-full p-4">
                      <DotLottieReact
                        src="https://lottie.host/65a98102-0a4c-47ed-a7c7-6819df2cc09e/xRhPGjvZsQ.lottie"
                        loop
                        autoplay
                      />
                    </div>
                  </div>
                  <div className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-r from-yellow-400 to-pink-400 rounded-full animate-pulse"></div>
                  <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-gradient-to-r from-green-400 to-blue-400 rounded-full animate-pulse delay-1000"></div>
                </div>
              </motion.div>
            </div>

            {/* Right Section - Feature Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  icon: GraduationCap,
                  title: "Study Hub",
                  description: "Access comprehensive learning materials, video lectures, and study resources",
                  gradient: "from-blue-500 to-blue-600",
                  bgGradient: "from-blue-50 to-blue-100",
                  iconBg: "bg-blue-500",
                  delay: 0.1,
                  badge: "📚"
                },
                {
                  icon: TrendingUp,
                  title: "Results Portal",
                  description: "Track grades, analyze performance, and monitor academic progress",
                  gradient: "from-green-500 to-green-600",
                  bgGradient: "from-green-50 to-green-100",
                  iconBg: "bg-green-500",
                  delay: 0.2,
                  badge: "📊"
                },
                {
                  icon: Brain,
                  title: "AI Assistant",
                  description: "Get intelligent help with homework, doubts, and personalized learning",
                  gradient: "from-purple-500 to-purple-600",
                  bgGradient: "from-purple-50 to-purple-100",
                  iconBg: "bg-purple-500",
                  delay: 0.3,
                  badge: "🤖"
                },
                {
                  icon: Award,
                  title: "Placement Prep",
                  description: "Prepare for interviews, build resume, and explore career opportunities",
                  gradient: "from-orange-500 to-orange-600",
                  bgGradient: "from-orange-50 to-orange-100",
                  iconBg: "bg-orange-500",
                  delay: 0.4,
                  badge: "💼"
                },
                {
                  icon: Users,
                  title: "Community Forums",
                  description: "Connect with peers, join discussions, and share knowledge",
                  gradient: "from-teal-500 to-cyan-600",
                  bgGradient: "from-teal-50 to-cyan-100",
                  iconBg: "bg-teal-500",
                  delay: 0.5,
                  badge: "💬"
                },
                {
                  icon: MessageCircle,
                  title: "Mentor Sessions",
                  description: "Get guidance from industry experts and experienced alumni",
                  gradient: "from-indigo-500 to-blue-600",
                  bgGradient: "from-indigo-50 to-blue-100",
                  iconBg: "bg-indigo-500",
                  delay: 0.6,
                  badge: "🎯"
                }
              ].map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: feature.delay }}
                  whileHover={{ y: -8 }}
                  className="group"
                >
                  <Card className="h-full bg-white/95 backdrop-blur-md border-2 border-white/60 hover:bg-white transition-all duration-300 shadow-xl hover:shadow-2xl hover:border-blue-300 relative overflow-hidden">
                    {/* Background Gradient */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${feature.bgGradient} opacity-0 group-hover:opacity-20 transition-opacity duration-300`}></div>
                    
                    {/* Top Accent Bar */}
                    <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${feature.gradient}`}></div>
                    
                    <CardHeader className="pb-4 relative">
                      {/* Badge */}
                      <div className="absolute top-2 right-2 text-2xl opacity-60 group-hover:opacity-100 transition-opacity duration-300">
                        {feature.badge}
                      </div>
                      
                      {/* Enhanced Icon */}
                      <motion.div 
                        className={`w-16 h-16 ${feature.iconBg} rounded-2xl flex items-center justify-center mb-4 shadow-lg group-hover:shadow-xl transition-all duration-300 relative overflow-hidden`}
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        <div className="absolute inset-0 bg-white/20 group-hover:bg-white/30 transition-colors duration-300"></div>
                        <feature.icon className="w-8 h-8 text-white relative z-10" />
                        <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-white/30 rounded-full backdrop-blur-sm"></div>
                      </motion.div>
                      
                      {/* Enhanced Title */}
                      <CardTitle className="text-gray-900 text-xl font-bold group-hover:text-blue-600 transition-colors duration-300 leading-tight font-poppins">
                        {feature.title}
                      </CardTitle>
                      
                      {/* Enhanced Description */}
                      <CardDescription className="text-gray-700 group-hover:text-gray-800 transition-colors duration-300 text-base leading-relaxed font-inter">
                        {feature.description}
                      </CardDescription>
                    </CardHeader>
                    
                    {/* Hover Effect Indicator */}
                    <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-blue-400 to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
                    
                    {/* Corner Decorations */}
                    <div className="absolute top-2 left-2 w-2 h-2 rounded-full bg-gradient-to-r from-blue-400 to-purple-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="absolute bottom-2 right-2 w-2 h-2 rounded-full bg-gradient-to-r from-purple-400 to-pink-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </main>

        {/* Footer */}
        <footer className="border-t border-gray-200/30 mt-20 bg-white/90 backdrop-blur-md shadow-lg">
          <div className="px-12 py-10">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex items-center justify-center gap-8"
            >
              <div className="flex items-center gap-3 bg-white/70 px-6 py-3 rounded-full border border-white/50 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse shadow-lg"></div>
                <span className="text-gray-800 font-medium font-inter">In Development</span>
              </div>
              <div className="flex items-center gap-3 bg-white/70 px-6 py-3 rounded-full border border-white/50 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                <div className="w-3 h-3 bg-purple-500 rounded-full animate-pulse shadow-lg"></div>
                <span className="text-gray-800 font-medium font-inter">Launch Q1 2026</span>
              </div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1 }}
              className="text-center mt-8"
            >
              <motion.div 
                className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-50 to-purple-50 px-8 py-4 rounded-2xl border border-white/50 shadow-lg backdrop-blur-md"
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 20px 40px rgba(0, 0, 0, 0.1)"
                }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <motion.div
                  animate={{ 
                    rotate: [0, 10, -10, 0],
                    scale: [1, 1.1, 1]
                  }}
                  transition={{ 
                    duration: 2, 
                    repeat: Infinity,
                    repeatDelay: 3
                  }}
                  className="relative"
                >
                  <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center shadow-lg">
                    <motion.div
                      animate={{ 
                        background: [
                          "linear-gradient(45deg, #3b82f6, #8b5cf6)",
                          "linear-gradient(45deg, #8b5cf6, #ec4899)",
                          "linear-gradient(45deg, #3b82f6, #8b5cf6)"
                        ]
                      }}
                      transition={{ 
                        duration: 3, 
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                      className="w-6 h-6 bg-white rounded-full flex items-center justify-center"
                    >
                      <span className="text-xs font-bold text-transparent bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text">
                        LK
                      </span>
                    </motion.div>
                  </div>
                  <motion.div
                    className="absolute -top-1 -right-1 w-3 h-3 bg-yellow-400 rounded-full"
                    animate={{ 
                      scale: [1, 1.3, 1],
                      opacity: [0.7, 1, 0.7]
                    }}
                    transition={{ 
                      duration: 1.5, 
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  ></motion.div>
                </motion.div>
                
                <div className="text-left">
                  <motion.p 
                    className="text-gray-600 text-xs font-inter opacity-80"
                    animate={{ opacity: [0.6, 1, 0.6] }}
                    transition={{ 
                      duration: 3, 
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  >
                    Crafted with passion by
                  </motion.p>
                  <motion.a
                    href="https://github.com/lohithk001"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 font-bold text-lg font-space-grotesk hover:from-blue-700 hover:via-purple-700 hover:to-pink-700 transition-all duration-300 inline-block"
                    whileHover={{ 
                      scale: 1.05,
                      textShadow: "0 0 20px rgba(139, 92, 246, 0.5)"
                    }}
                    whileTap={{ scale: 0.95 }}
                  >
                    lohithk
                    <motion.span
                      className="inline-block ml-1"
                      animate={{ rotate: [0, 15, -15, 0] }}
                      transition={{ 
                        duration: 2, 
                        repeat: Infinity,
                        repeatDelay: 4
                      }}
                    >
                      ✨
                    </motion.span>
                  </motion.a>
                </div>
                
                <motion.div
                  className="w-px h-12 bg-gradient-to-b from-transparent via-gray-300 to-transparent"
                  animate={{ 
                    opacity: [0.3, 0.8, 0.3]
                  }}
                  transition={{ 
                    duration: 2, 
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                ></motion.div>
                
                <motion.div
                  animate={{ y: [0, -5, 0] }}
                  transition={{ 
                    duration: 2, 
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="flex items-center gap-2"
                >
                  <div className="w-8 h-8 bg-gray-900 rounded-lg flex items-center justify-center">
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                  </div>
                  <motion.div
                    className="text-xs text-gray-500 font-inter"
                    animate={{ opacity: [0.5, 1, 0.5] }}
                    transition={{ 
                      duration: 2, 
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  >
                    GitHub
                  </motion.div>
                </motion.div>
              </motion.div>
              
              <motion.p 
                className="text-gray-600 text-sm font-inter mt-6 opacity-80"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 1.2 }}
              >
                © 2025 Learn Wave. Empowering VTU students with innovative learning solutions.
              </motion.p>
            </motion.div>
          </div>
        </footer>
      </div>

      {/* Under Development Animation Modal */}
      <UnderDevelopmentAnimation 
        isOpen={showUnderDevelopment}
        onClose={handleCloseModal}
      />
    </div>
  );
}