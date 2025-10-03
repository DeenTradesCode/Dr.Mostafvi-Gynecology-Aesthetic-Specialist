import { createContext, useContext, useState, useEffect, ReactNode } from 'react'

// Authentication types and interfaces
export interface User {
  id: string
  email: string
  fullName: string
  isGuest: boolean
  createdAt: string
  lastLogin: string
}

export interface AuthState {
  user: User | null
  isAuthenticated: boolean
  isLoading: boolean
  error: string | null
}

export interface LoginCredentials {
  email: string
  password: string
}

export interface RegisterData {
  email: string
  password: string
  fullName: string
  dateOfBirth: string
  phoneNumber: string
  insuranceProvider: string
}

export interface AuthContextType extends AuthState {
  login: (credentials: LoginCredentials) => Promise<{ success: boolean; error?: string }>
  register: (data: RegisterData) => Promise<{ success: boolean; error?: string }>
  loginWithSocial: (provider: 'google' | 'apple' | 'facebook') => Promise<{ success: boolean; error?: string }>
  logout: () => void
  updateUser: (updates: Partial<User>) => void
  clearError: () => void
}

// Create Auth Context
const AuthContext = createContext<AuthContextType | undefined>(undefined)

// Auth Provider Component
interface AuthProviderProps {
  children: ReactNode
}

export function AuthProvider({ children }: AuthProviderProps) {
  const [authState, setAuthState] = useState<AuthState>({
    user: null,
    isAuthenticated: false,
    isLoading: true,
    error: null,
  })

  // Initialize auth state from localStorage
  useEffect(() => {
    const initializeAuth = async () => {
      try {
        const storedUser = localStorage.getItem('dr_mastafavi_user')
        const storedToken = localStorage.getItem('dr_mastafavi_token')
        
        if (storedUser && storedToken) {
          const user = JSON.parse(storedUser)
          
          // Validate token (in real app, this would be a server call)
          const isValidToken = await validateToken(storedToken)
          
          if (isValidToken) {
            setAuthState({
              user,
              isAuthenticated: true,
              isLoading: false,
              error: null,
            })
          } else {
            // Clear invalid token
            localStorage.removeItem('dr_mastafavi_user')
            localStorage.removeItem('dr_mastafavi_token')
            setAuthState({
              user: null,
              isAuthenticated: false,
              isLoading: false,
              error: null,
            })
          }
        } else {
          setAuthState({
            user: null,
            isAuthenticated: false,
            isLoading: false,
            error: null,
          })
        }
      } catch (error) {
        console.error('Auth initialization error:', error)
        setAuthState({
          user: null,
          isAuthenticated: false,
          isLoading: false,
          error: 'Failed to initialize authentication',
        })
      }
    }

    initializeAuth()
  }, [])

  // Mock token validation
  const validateToken = async (token: string): Promise<boolean> => {
    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 100))
    
    // In a real app, this would validate the token with the server
    return token.length > 10
  }

  // Login function
  const login = async (credentials: LoginCredentials): Promise<{ success: boolean; error?: string }> => {
    setAuthState(prev => ({ ...prev, isLoading: true, error: null }))

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000))

      // Mock authentication (in real app, this would be a server call)
      if (credentials.email === 'demo@drmastafavi.com' && credentials.password === 'demo123') {
        const user: User = {
          id: 'user_123',
          email: credentials.email,
          fullName: 'Demo User',
          isGuest: false,
          createdAt: new Date().toISOString(),
          lastLogin: new Date().toISOString(),
        }

        const token = `token_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`

        // Store in localStorage
        localStorage.setItem('dr_mastafavi_user', JSON.stringify(user))
        localStorage.setItem('dr_mastafavi_token', token)

        setAuthState({
          user,
          isAuthenticated: true,
          isLoading: false,
          error: null,
        })

        return { success: true }
      } else {
        setAuthState(prev => ({
          ...prev,
          isLoading: false,
          error: 'Invalid email or password',
        }))
        return { success: false, error: 'Invalid email or password' }
      }
    } catch (error) {
      const errorMessage = 'Login failed. Please try again.'
      setAuthState(prev => ({
        ...prev,
        isLoading: false,
        error: errorMessage,
      }))
      return { success: false, error: errorMessage }
    }
  }

  // Register function
  const register = async (data: RegisterData): Promise<{ success: boolean; error?: string }> => {
    setAuthState(prev => ({ ...prev, isLoading: true, error: null }))

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500))

      // Mock registration (in real app, this would be a server call)
      const user: User = {
        id: `user_${Date.now()}`,
        email: data.email,
        fullName: data.fullName,
        isGuest: false,
        createdAt: new Date().toISOString(),
        lastLogin: new Date().toISOString(),
      }

      const token = `token_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`

      // Store in localStorage
      localStorage.setItem('dr_mastafavi_user', JSON.stringify(user))
      localStorage.setItem('dr_mastafavi_token', token)

      setAuthState({
        user,
        isAuthenticated: true,
        isLoading: false,
        error: null,
      })

      return { success: true }
    } catch (error) {
      const errorMessage = 'Registration failed. Please try again.'
      setAuthState(prev => ({
        ...prev,
        isLoading: false,
        error: errorMessage,
      }))
      return { success: false, error: errorMessage }
    }
  }

  // Social login function
  const loginWithSocial = async (provider: 'google' | 'apple' | 'facebook'): Promise<{ success: boolean; error?: string }> => {
    setAuthState(prev => ({ ...prev, isLoading: true, error: null }))

    try {
      // Simulate social login delay
      await new Promise(resolve => setTimeout(resolve, 2000))

      // Mock social login success
      const user: User = {
        id: `user_${provider}_${Date.now()}`,
        email: `user@${provider}.com`,
        fullName: `${provider.charAt(0).toUpperCase() + provider.slice(1)} User`,
        isGuest: false,
        createdAt: new Date().toISOString(),
        lastLogin: new Date().toISOString(),
      }

      const token = `token_${provider}_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`

      // Store in localStorage
      localStorage.setItem('dr_mastafavi_user', JSON.stringify(user))
      localStorage.setItem('dr_mastafavi_token', token)

      setAuthState({
        user,
        isAuthenticated: true,
        isLoading: false,
        error: null,
      })

      return { success: true }
    } catch (error) {
      const errorMessage = `${provider.charAt(0).toUpperCase() + provider.slice(1)} login failed. Please try again.`
      setAuthState(prev => ({
        ...prev,
        isLoading: false,
        error: errorMessage,
      }))
      return { success: false, error: errorMessage }
    }
  }

  // Logout function
  const logout = () => {
    localStorage.removeItem('dr_mastafavi_user')
    localStorage.removeItem('dr_mastafavi_token')
    
    setAuthState({
      user: null,
      isAuthenticated: false,
      isLoading: false,
      error: null,
    })
  }

  // Update user function
  const updateUser = (updates: Partial<User>) => {
    if (authState.user) {
      const updatedUser = { ...authState.user, ...updates }
      localStorage.setItem('dr_mastafavi_user', JSON.stringify(updatedUser))
      
      setAuthState(prev => ({
        ...prev,
        user: updatedUser,
      }))
    }
  }

  // Clear error function
  const clearError = () => {
    setAuthState(prev => ({ ...prev, error: null }))
  }

  const contextValue: AuthContextType = {
    ...authState,
    login,
    register,
    loginWithSocial,
    logout,
    updateUser,
    clearError,
  }

  return (
    <AuthContext.Provider value={contextValue}>
      {children}
    </AuthContext.Provider>
  )
}

// Custom hook to use auth context
export function useAuth(): AuthContextType {
  const context = useContext(AuthContext)
  
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  
  return context
}

// Higher-order component for protected routes
export function withAuth<P extends object>(
  Component: React.ComponentType<P>,
  redirectTo: string = '/portal/access'
) {
  return function AuthenticatedComponent(props: P) {
    const { isAuthenticated, isLoading } = useAuth()
    
    if (isLoading) {
      return (
        <div className="min-h-screen flex items-center justify-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blush-rose"></div>
        </div>
      )
    }
    
    if (!isAuthenticated) {
      // In a real app, you would use navigate to redirect
      window.location.href = redirectTo
      return null
    }
    
    return <Component {...props} />
  }
}

// Guest user utilities
export const createGuestUser = (): User => ({
  id: `guest_${Date.now()}`,
  email: '',
  fullName: 'Guest User',
  isGuest: true,
  createdAt: new Date().toISOString(),
  lastLogin: new Date().toISOString(),
})

export const isGuestUser = (user: User | null): boolean => {
  return user?.isGuest === true
}

export const canCreateAccount = (user: User | null): boolean => {
  return user?.isGuest === true
}
