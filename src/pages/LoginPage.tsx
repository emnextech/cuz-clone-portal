import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Input, Button, Card, Logo } from '../components/ui';
import type { LoginCredentials } from '../types';
import { validateStudentId, validatePassword } from '../utils/validation';
import { APP_INFO, VALIDATION } from '../utils/constants';
import backgroundImage from '../assets/images/background.jpg';

const LoginPage = () => {
  const navigate = useNavigate();
  const [credentials, setCredentials] = useState<LoginCredentials>({
    studentId: '',
    password: '',
  });
  const [errors, setErrors] = useState<Partial<LoginCredentials>>({});
  const [isLoading, setIsLoading] = useState(false);
  const [loginError, setLoginError] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setLoginError(''); // Clear login error when user types
    
    // Limit student ID to 6 digits
    if (name === 'studentId') {
      const numericValue = value.replace(/\D/g, '');
      if (numericValue.length <= VALIDATION.STUDENT_ID_LENGTH) {
        setCredentials((prev) => ({ ...prev, [name]: numericValue }));
        setErrors((prev) => ({ ...prev, [name]: '' }));
      }
    } else {
      setCredentials((prev) => ({ ...prev, [name]: value }));
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoginError('');

    // Validate inputs
    const studentIdError = validateStudentId(credentials.studentId);
    const passwordError = validatePassword(credentials.password);

    if (studentIdError || passwordError) {
      setErrors({
        studentId: studentIdError || '',
        password: passwordError || '',
      });
      return;
    }

    // Authenticate with default credentials (prototype only)
    setIsLoading(true);
    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));
      
      const defaultStudentId = import.meta.env.VITE_DEFAULT_STUDENT_ID;
      const defaultPassword = import.meta.env.VITE_DEFAULT_PASSWORD;
      
      if (
        credentials.studentId === defaultStudentId &&
        credentials.password === defaultPassword
      ) {
        // Store student ID in localStorage
        localStorage.setItem('studentId', credentials.studentId);
        console.log('Login successful:', credentials);
        // Navigate to dashboard
        navigate('/dashboard', { replace: true });
      } else {
        setLoginError('Invalid Student ID or Password');
      }
    } catch (error) {
      console.error('Login failed:', error);
      setLoginError('An error occurred. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div 
      className="min-h-screen flex items-center justify-center p-4 bg-cover bg-center bg-no-repeat relative"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      {/* Overlay for better readability */}
      <div className="absolute inset-0 bg-primary/80"></div>
      
      <div className="w-full max-w-md relative z-10">
        <Card>
          {/* Logo and Header */}
          <div className="text-center mb-8">
            <div className="flex justify-center mb-6">
              <Logo size="md" />
            </div>
            <h1 className="text-3xl font-bold text-primary mb-2">
              {APP_INFO.name}
            </h1>
            <p className="text-secondary">
              {APP_INFO.university}
            </p>
          </div>

          {/* Login Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            {loginError && (
              <div className="bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded-lg text-sm">
                {loginError}
              </div>
            )}
            
            <Input
              name="studentId"
              label="Student ID"
              type="text"
              placeholder="Enter 6-digit Student ID"
              value={credentials.studentId}
              onChange={handleInputChange}
              error={errors.studentId}
              maxLength={VALIDATION.STUDENT_ID_LENGTH}
              autoComplete="username"
            />

            <Input
              name="password"
              label="Password"
              type="password"
              placeholder="Enter your password"
              value={credentials.password}
              onChange={handleInputChange}
              error={errors.password}
              autoComplete="current-password"
            />

            <Button
              type="submit"
              variant="primary"
              fullWidth
              isLoading={isLoading}
            >
              Sign In
            </Button>
          </form>

          {/* Footer Links */}
          <div className="mt-6 text-center text-sm">
            <a
              href="#"
              className="text-primary hover:text-secondary transition-colors"
            >
              Forgot your password?
            </a>
          </div>

          <div className="mt-4 pt-6 border-t border-gray-200 text-center text-xs text-gray-500">
            <p>{APP_INFO.copyright}</p>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default LoginPage;
