import { motion } from 'framer-motion'
import { Check } from 'lucide-react'

interface StepControllerProps {
  currentStep: number
  totalSteps: number
}

export function StepController({
  currentStep,
  totalSteps,
}: StepControllerProps) {
  console.log(`📊 StepController: Current step ${currentStep} of ${totalSteps}`)
  const steps = Array.from({ length: totalSteps }, (_, i) => i + 1)

  return (
    <div className="sticky top-0 z-10 border-b border-gray-200 bg-white/95 backdrop-blur-sm dark:border-gray-700 dark:bg-gray-900/95">
      <div className="container-custom py-4">
        <div className="mx-auto flex max-w-2xl items-center justify-between">
          {/* Back button */}
          <button
            onClick={() => window.history.back()}
            className="flex items-center text-sm text-gray-600 transition-colors duration-200 hover:text-blush-rose dark:text-gray-400 dark:hover:text-blush-rose"
          >
            ← Back
          </button>

          {/* Progress indicator */}
          <div className="flex items-center space-x-2">
            {steps.map(step => (
              <div key={step} className="flex items-center">
                <motion.div
                  initial={false}
                  animate={{
                    scale: step <= currentStep ? 1.1 : 1,
                    backgroundColor:
                      step < currentStep
                        ? '#C19A6B' // warm-bronze (completed)
                        : step === currentStep
                          ? '#D9B4C3' // blush-rose (active)
                          : '#E5E7EB', // gray-200 (pending)
                  }}
                  transition={{ duration: 0.2 }}
                  className={`flex h-8 w-8 items-center justify-center rounded-full text-sm font-semibold transition-all duration-200 ${
                    step <= currentStep
                      ? 'text-white shadow-md'
                      : 'bg-gray-200 text-gray-500 dark:bg-gray-700 dark:text-gray-400'
                  } `}
                >
                  {step < currentStep ? <Check className="h-4 w-4" /> : step}
                </motion.div>

                {/* Connector line */}
                {step < totalSteps && (
                  <div
                    className={`mx-2 h-0.5 w-8 transition-colors duration-200 ${
                      step < currentStep
                        ? 'bg-warm-bronze'
                        : 'bg-gray-200 dark:bg-gray-700'
                    } `}
                  />
                )}
              </div>
            ))}
          </div>

          {/* Step counter */}
          <div className="text-sm text-gray-600 dark:text-gray-400">
            Step {currentStep} of {totalSteps}
          </div>
        </div>

        {/* Step labels */}
        <div className="mx-auto mt-2 flex max-w-2xl justify-between">
          {['Access', 'Information', 'Appointment', 'Review', 'Confirm'].map(
            (label, index) => (
              <div
                key={label}
                className={`text-xs font-medium transition-colors duration-200 ${
                  index + 1 <= currentStep
                    ? 'text-blush-rose dark:text-blush-rose'
                    : 'text-gray-500 dark:text-gray-400'
                } `}
              >
                {label}
              </div>
            )
          )}
        </div>
      </div>
    </div>
  )
}
