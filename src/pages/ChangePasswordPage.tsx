import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import DashboardLayout from '../components/layout/DashboardLayout';
import { Card, Input, Button } from '../components/ui';
import { Lock, CheckCircle } from 'lucide-react';

const ChangePasswordPage = () => {
  const navigate = useNavigate();
  const [passwords, setPasswords] = useState({
    current: '',
    new: '',
    confirm: '',
  });
  const [message, setMessage] = useState('');

  useEffect(() => {
    const storedStudentId = localStorage.getItem('studentId');
    if (!storedStudentId) {
      navigate('/', { replace: true });
    }
  }, [navigate]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPasswords({ ...passwords, [e.target.name]: e.target.value });
    setMessage('');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (passwords.new !== passwords.confirm) {
      setMessage('New passwords do not match');
      return;
    }
    setMessage('Password changed successfully!');
    setPasswords({ current: '', new: '', confirm: '' });
  };

  return (
    <DashboardLayout>
      <div className="p-8 h-screen overflow-hidden">
        <h1 className="text-3xl font-bold text-primary mb-6">Change Password</h1>
        
        <Card className="max-w-md">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 bg-primary/10 rounded-lg">
              <Lock className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h2 className="text-lg font-bold text-primary">Update Your Password</h2>
              <p className="text-sm text-gray-600">Keep your account secure</p>
            </div>
          </div>

          {message && (
            <div className={`flex items-center gap-2 p-4 mb-4 rounded-lg ${
              message.includes('successfully') 
                ? 'bg-green-50 text-green-700 border border-green-200' 
                : 'bg-red-50 text-red-700 border border-red-200'
            }`}>
              {message.includes('successfully') && <CheckCircle className="w-5 h-5" />}
              {message}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            <Input
              name="current"
              label="Current Password"
              type="password"
              value={passwords.current}
              onChange={handleChange}
              required
            />
            <Input
              name="new"
              label="New Password"
              type="password"
              value={passwords.new}
              onChange={handleChange}
              required
            />
            <Input
              name="confirm"
              label="Confirm New Password"
              type="password"
              value={passwords.confirm}
              onChange={handleChange}
              required
            />
            <Button type="submit" variant="primary" fullWidth>
              Change Password
            </Button>
          </form>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default ChangePasswordPage;
