"use client";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import { LoginForm } from "app/login/login-form";
import { RegisterForm } from "app/register/register";
// import { RegisterForm } from "@/app/register/register";
// import { LoginForm } from "@/app/login/login-form";

const backdropVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const modalVariants = {
  hidden: {
    opacity: 0,
    y: -20,
    scale: 0.95,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring", // Explicitly set to 'spring' (valid literal)
      damping: 25,
      stiffness: 500,
    },
  },
  exit: {
    opacity: 0,
    y: 20,
    scale: 0.95,
    transition: {
      duration: 0.2,
    },
  },
};

export function AuthModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoginView, setIsLoginView] = useState(true);

  return (
    <>
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(true)}
        className="px-4 py-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-lg shadow-lg hover:shadow-xl transition-all"
      >
        Get Started
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={backdropVariants}
          >
            {/* Backdrop */}
            <motion.div
              className="absolute inset-0 bg-black/30 backdrop-blur-sm"
              onClick={() => setIsOpen(false)}
            />

            {/* Modal */}
            <motion.div
              className="relative bg-white rounded-2xl max-w-md w-full mx-4 p-6 shadow-2xl"
            //   variants={modalVariants}
            >
              {/* Close button */}
              <motion.button
                whileHover={{ rotate: 90 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setIsOpen(false)}
                className="absolute top-4 right-4 p-1 rounded-full hover:bg-gray-100 transition-colors"
                aria-label="Close modal"
              >
                <X className="h-5 w-5 text-gray-500" />
              </motion.button>

              {/* Animated form switch */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={isLoginView ? "login" : "register"}
                  initial={{ opacity: 0, x: isLoginView ? 20 : -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: isLoginView ? -20 : 20 }}
                  transition={{ duration: 0.2 }}
                >
                  {isLoginView ? (
                    <LoginForm
                      onSuccess={() => setIsOpen(false)}
                      onSwitchToRegister={() => setIsLoginView(false)}
                    />
                  ) : (
                    <RegisterForm
                      onSuccess={() => setIsOpen(false)}
                      onSwitchToLogin={() => setIsLoginView(true)}
                    />
                  )}
                </motion.div>
              </AnimatePresence>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}