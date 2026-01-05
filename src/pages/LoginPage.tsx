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

    // Authenticate with hardcoded credentials (demo only)
    setIsLoading(true);
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      
      // Hardcoded credentials matching the hint
      if (credentials.studentId === '123456' && credentials.password === '202631') {
        // Store student ID in localStorage
        localStorage.setItem('studentId', credentials.studentId);
        console.log('Login successful');
        // Navigate to dashboard
        navigate('/dashboard', { replace: true });
      } else {
        setLoginError('Invalid Student ID or Password. Please use the demo credentials shown above.');
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

          {/* Test Credentials Info */}
          <div className="mb-6 bg-blue-50 border border-blue-200 rounded-lg p-4">
            <h3 className="text-sm font-semibold text-blue-900 mb-2 flex items-center gap-2">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
              </svg>
              Demo Credentials
            </h3>
            <div className="text-xs text-blue-800 space-y-1">
              <p className="flex justify-between items-center">
                <span className="font-medium">Student ID:</span>
                <span className="font-mono bg-white px-2 py-1 rounded">123456</span>
              </p>
              <p className="flex justify-between items-center">
                <span className="font-medium">Password:</span>
                <span className="font-mono bg-white px-2 py-1 rounded">202631</span>
              </p>
            </div>
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
