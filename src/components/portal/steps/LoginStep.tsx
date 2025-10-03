import { motion } from 'framer-motion'
import { Calendar, Mail, Lock } from 'lucide-react'

export function LoginStep() {
  return (
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      className="flex items-center justify-center bg-gradient-to-br from-blush-rose/5 to-lavender-mist/10 p-8 dark:from-blush-rose/10 dark:to-gray-800/20"
    >
      <div className="w-full max-w-md">
        <div className="mb-8 text-center">
          <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-blush-rose/10 dark:bg-blush-rose/20">
            <Calendar className="h-8 w-8 text-blush-rose" />
          </div>
          <h2 className="mb-2 text-2xl font-semibold text-heading-light dark:text-heading-dark">
            Welcome Back
          </h2>
          <p className="text-text-secondary-light dark:text-text-secondary-dark">
            Sign in to book your appointment quickly
          </p>
        </div>

        <div className="space-y-4">
          {/* Social Login Buttons */}
          <button className="flex w-full items-center justify-center space-x-3 rounded-lg border border-gray-300 px-4 py-3 transition-colors duration-200 hover:bg-gray-50 dark:border-gray-600 dark:hover:bg-gray-800">
            <div className="flex h-5 w-5 items-center justify-center rounded-full bg-blue-600">
              <span className="text-xs font-bold text-white">G</span>
            </div>
            <span className="font-medium text-gray-700 dark:text-gray-300">
              Continue with Google
            </span>
          </button>

          <button className="flex w-full items-center justify-center space-x-3 rounded-lg border border-gray-300 px-4 py-3 transition-colors duration-200 hover:bg-gray-50 dark:border-gray-600 dark:hover:bg-gray-800">
            <div className="flex h-5 w-5 items-center justify-center rounded-full bg-black">
              <span className="text-xs font-bold text-white">A</span>
            </div>
            <span className="font-medium text-gray-700 dark:text-gray-300">
              Continue with Apple
            </span>
          </button>

          <button className="flex w-full items-center justify-center space-x-3 rounded-lg border border-gray-300 px-4 py-3 transition-colors duration-200 hover:bg-gray-50 dark:border-gray-600 dark:hover:bg-gray-800">
            <div className="flex h-5 w-5 items-center justify-center rounded-full bg-blue-500">
              <span className="text-xs font-bold text-white">f</span>
            </div>
            <span className="font-medium text-gray-700 dark:text-gray-300">
              Continue with Facebook
            </span>
          </button>

          <div className="relative my-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300 dark:border-gray-600"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="bg-bg-light px-2 text-gray-500 dark:bg-bg-dark dark:text-gray-400">
                Or continue with email
              </span>
            </div>
          </div>

          {/* Email/Password Form */}
          <form className="space-y-4">
            <div>
              <label htmlFor="email" className="form-label">
                Email Address
              </label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 transform text-gray-400" />
                <input
                  type="email"
                  id="email"
                  className="form-input pl-10"
                  placeholder="your.email@example.com"
                />
              </div>
            </div>

            <div>
              <label htmlFor="password" className="form-label">
                Password
              </label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 transform text-gray-400" />
                <input
                  type="password"
                  id="password"
                  className="form-input pl-10"
                  placeholder="Enter your password"
                />
              </div>
            </div>

            <div className="flex items-center justify-between">
              <label className="flex items-center">
                <input
                  type="checkbox"
                  className="rounded border-gray-300 text-blush-rose focus:ring-blush-rose/50"
                />
                <span className="ml-2 text-sm text-gray-600 dark:text-gray-400">
                  Remember me
                </span>
              </label>
              <button
                type="button"
                className="text-sm text-blush-rose transition-colors duration-200 hover:text-blush-rose/80"
              >
                Forgot password?
              </button>
            </div>

            <button type="submit" className="btn-primary w-full">
              Sign In
            </button>
          </form>
        </div>
      </div>
    </motion.div>
  )
}
