import { Routes, Route, Navigate } from 'react-router-dom'
import { StepController } from './StepController'
import { LoginStep } from './steps/LoginStep'
import { GuestStep } from './steps/GuestStep'
import { PatientInfoStep } from './steps/PatientInfoStep'
import { AppointmentStep } from './steps/AppointmentStep'
import { ReviewStep } from './steps/ReviewStep'
import { ConfirmationStep } from './steps/ConfirmationStep'
import { Dashboard } from './dashboard/Dashboard'

export function PatientPortal() {
  console.log('🏥 PatientPortal: Component rendered')
  
  return (
    <div className="min-h-screen bg-bg-light dark:bg-bg-dark">
      <Routes>
        {/* Default portal route - redirect to access step */}
        <Route path="/" element={<Navigate to="/portal/access" replace />} />

        {/* Step 1: Access - Login or Guest */}
        <Route
          path="/access"
          element={
            <>
              <StepController currentStep={1} totalSteps={5} />
              <div className="grid min-h-screen lg:grid-cols-2">
                <LoginStep />
                <GuestStep />
              </div>
            </>
          }
        />

        {/* Step 2: Patient Information */}
        <Route
          path="/patient-info"
          element={
            <>
              <StepController currentStep={2} totalSteps={5} />
              <PatientInfoStep />
            </>
          }
        />

        {/* Step 3: Appointment Details */}
        <Route
          path="/appointment"
          element={
            <>
              <StepController currentStep={3} totalSteps={5} />
              <AppointmentStep />
            </>
          }
        />

        {/* Step 4: Review */}
        <Route
          path="/review"
          element={
            <>
              <StepController currentStep={4} totalSteps={5} />
              <ReviewStep />
            </>
          }
        />

        {/* Step 5: Confirmation */}
        <Route
          path="/confirmation"
          element={
            <>
              <StepController currentStep={5} totalSteps={5} />
              <ConfirmationStep />
            </>
          }
        />

        {/* Dashboard for logged-in users */}
        <Route path="/dashboard" element={<Dashboard />} />

        {/* Catch-all route */}
        <Route path="*" element={<Navigate to="/portal/access" replace />} />
      </Routes>
    </div>
  )
}
