import { NavBar } from '@/components/NavBar'
import { Hero } from '@/components/Hero'
import { Services } from '@/components/Services'
import { DoctorBio } from '@/components/DoctorBio'
import { Expectations } from '@/components/Expectations'
import { Testimonials } from '@/components/Testimonials'
import { Insurance } from '@/components/Insurance'
import { Contact } from '@/components/Contact'
import { Footer } from '@/components/Footer'
import { ChatWidget } from '@/components/ChatWidget'
import { FloatingCTA } from '@/components/FloatingCTA'
import { ThemeProvider } from '@/hooks/useTheme'

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-bg-light text-text-primary-light transition-colors duration-300 dark:bg-bg-dark dark:text-text-primary-dark">
        <NavBar />
        <main>
          <Hero />
          <Services />
          <DoctorBio />
          <Expectations />
          <Testimonials />
          <Insurance />
          <Contact />
        </main>
        <Footer />
        <ChatWidget />
        <FloatingCTA />
      </div>
    </ThemeProvider>
  )
}

export default App
