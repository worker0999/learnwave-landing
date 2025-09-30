"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, Construction, Wrench, Hammer, Zap } from "lucide-react";
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import { useEffect, useState } from "react";

interface UnderDevelopmentAnimationProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function UnderDevelopmentAnimation({ isOpen, onClose }: UnderDevelopmentAnimationProps) {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    return () => setIsMounted(false);
  }, []);

  if (!isMounted) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[9999] flex items-center justify-center p-4"
            onClick={onClose}
          >
            {/* Modal Content */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: 50 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8, y: 50 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="bg-white rounded-3xl shadow-2xl max-w-md w-full mx-4 relative overflow-hidden"
              onClick={(e) => e.stopPropagation()}
              style={{ pointerEvents: 'auto' }}
            >
              {/* Gradient Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 opacity-50"></div>
              
              {/* Top Accent Bar */}
              <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"></div>
              
              {/* Close Button */}
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  onClose();
                }}
                className="absolute top-4 right-4 z-[10001] w-10 h-10 bg-red-500 hover:bg-red-600 text-white rounded-full flex items-center justify-center transition-colors duration-200 shadow-lg hover:shadow-xl cursor-pointer"
                style={{ pointerEvents: 'auto' }}
              >
                <X className="w-5 h-5 text-white" />
              </motion.button>

              {/* Content */}
              <div className="relative z-10 p-8 text-center">
                {/* Animated Icons */}
                <div className="relative mb-6">
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                    className="w-20 h-20 mx-auto bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center shadow-lg"
                  >
                    <Construction className="w-10 h-10 text-white" />
                  </motion.div>
                  
                  {/* Floating Tools */}
                  <motion.div
                    animate={{ y: [-10, 10, -10] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute -top-2 -right-2 w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center shadow-md"
                  >
                    <Wrench className="w-4 h-4 text-white" />
                  </motion.div>
                  
                  <motion.div
                    animate={{ y: [10, -10, 10] }}
                    transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                    className="absolute -bottom-2 -left-2 w-8 h-8 bg-green-500 rounded-full flex items-center justify-center shadow-md"
                  >
                    <Hammer className="w-4 h-4 text-white" />
                  </motion.div>
                  
                  <motion.div
                    animate={{ 
                      scale: [1, 1.2, 1],
                      rotate: [0, 180, 360]
                    }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                    className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-6 h-6 bg-yellow-500 rounded-full flex items-center justify-center shadow-md"
                  >
                    <Zap className="w-3 h-3 text-white" />
                  </motion.div>
                </div>

                {/* Title */}
                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="text-2xl font-bold text-gray-900 mb-4"
                >
                  Under Development
                </motion.h2>

                {/* Description */}
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="text-gray-600 mb-6 leading-relaxed"
                >
                  We're working hard to bring you an amazing experience! 
                  This feature is currently being built with love and care.
                </motion.p>

                {/* Progress Indicator */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="mb-6"
                >
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="text-sm text-gray-600 font-medium">In Progress</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: "65%" }}
                      transition={{ duration: 1.5, delay: 0.5, ease: "easeOut" }}
                      className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
                    ></motion.div>
                  </div>
                  <p className="text-xs text-gray-500 mt-1">65% Complete</p>
                </motion.div>

                {/* Lottie Animation */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.6 }}
                  className="mb-6"
                >
                  <DotLottieReact
                    src="https://lottie.host/4a57e8e5-4b15-421e-be16-e0290f660935/dmDJhx9orq.lottie"
                    loop
                    autoplay
                    className="w-48 h-48 mx-auto"
                  />
                </motion.div>

                {/* Call to Action */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 }}
                  className="space-y-3"
                >
                  <button
                    onClick={onClose}
                    className="w-full bg-gradient-to-r from-blue-500 to-purple-500 text-white py-3 px-6 rounded-xl font-medium hover:from-blue-600 hover:to-purple-600 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105"
                  >
                    Got it!
                  </button>
                  <button
                    onClick={onClose}
                    className="w-full bg-gray-100 text-gray-700 py-3 px-6 rounded-xl font-medium hover:bg-gray-200 transition-all duration-200"
                  >
                    Notify me when ready
                  </button>
                </motion.div>
              </div>

              {/* Bottom Decorative Elements */}
              <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-blue-50/50 to-transparent opacity-50"></div>
              <div className="absolute bottom-4 left-4 w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
              <div className="absolute bottom-4 right-4 w-2 h-2 bg-purple-400 rounded-full animate-pulse delay-1000"></div>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}