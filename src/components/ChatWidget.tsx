import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { MessageCircle, X, Send } from 'lucide-react'

export function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false)
  const [message, setMessage] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (message.trim()) {
      // Handle message submission
      console.log('Message sent:', message)
      setMessage('')
    }
  }

  return (
    <>
      {/* Chat Button */}
      <motion.button
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5, delay: 2 }}
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-blush-rose text-white shadow-lg transition-all duration-200 hover:scale-110 hover:bg-blush-rose/90"
        aria-label="Open chat"
      >
        <MessageCircle className="h-6 w-6" />
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            transition={{ duration: 0.3 }}
            className="fixed bottom-24 right-6 z-50 flex h-96 w-80 flex-col rounded-2xl border border-gray-200 bg-white shadow-2xl dark:border-gray-700 dark:bg-gray-900"
          >
            {/* Header */}
            <div className="flex items-center justify-between rounded-t-2xl bg-blush-rose p-4 text-white">
              <div>
                <h3 className="font-semibold">Chat with Us</h3>
                <p className="text-sm opacity-90">We're here to help!</p>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="flex h-8 w-8 items-center justify-center rounded-full bg-white/20 transition-colors duration-200 hover:bg-white/30"
                aria-label="Close chat"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 space-y-4 overflow-y-auto p-4">
              <div className="flex items-start space-x-2">
                <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-blush-rose/20">
                  <span className="text-sm">👩‍⚕️</span>
                </div>
                <div className="max-w-xs rounded-lg bg-gray-100 p-3 dark:bg-gray-800">
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    Hello! How can we help you today?
                  </p>
                </div>
              </div>
            </div>

            {/* Input */}
            <form
              onSubmit={handleSubmit}
              className="border-t border-gray-200 p-4 dark:border-gray-700"
            >
              <div className="flex space-x-2">
                <input
                  type="text"
                  value={message}
                  onChange={e => setMessage(e.target.value)}
                  placeholder="Type your message..."
                  className="flex-1 rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm text-gray-900 placeholder-gray-500 focus:border-transparent focus:ring-2 focus:ring-blush-rose/50 dark:border-gray-600 dark:bg-gray-800 dark:text-white dark:placeholder-gray-400"
                />
                <button
                  type="submit"
                  className="flex h-10 w-10 items-center justify-center rounded-lg bg-blush-rose text-white transition-colors duration-200 hover:bg-blush-rose/90"
                  aria-label="Send message"
                >
                  <Send className="h-4 w-4" />
                </button>
              </div>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
