import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import DashboardLayout from '../components/layout/DashboardLayout';
import { Card } from '../components/ui';
import { BarChart3, BookOpen, Lock } from 'lucide-react';

const DashboardPage = () => {
  const navigate = useNavigate();
  const [studentId, setStudentId] = useState<string>('');

  useEffect(() => {
    const storedStudentId = localStorage.getItem('studentId');
    if (!storedStudentId) {
      navigate('/', { replace: true });
      return;
    }
    setStudentId(storedStudentId);
  }, [navigate]);

  return (
    <DashboardLayout>
      <div className="p-8 h-screen overflow-hidden">
        {/* Welcome Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-primary mb-3">
            CUZ online welcomes {studentId ? `STUDENT #${studentId}` : 'you'}.
          </h1>
          <p className="text-gray-600 text-lg">
            Welcome to Cavendish University Student Portal. We request you to change the password 
            and kindly login again if you are a first time user. Please do not share your student 
            portal password with anyone.
          </p>
        </div>

        {/* Quick Access Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card className="hover:shadow-xl transition-shadow cursor-pointer" onClick={() => navigate('/dashboard/results')}>
            <div className="flex items-center gap-4">
              <div className="p-4 bg-primary/10 rounded-lg">
                <BarChart3 className="w-8 h-8 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-primary mb-1">View Results</h3>
                <p className="text-gray-600 text-sm">Check your grades</p>
              </div>
            </div>
          </Card>

          <Card className="hover:shadow-xl transition-shadow cursor-pointer" onClick={() => navigate('/dashboard/resources')}>
            <div className="flex items-center gap-4">
              <div className="p-4 bg-primary/10 rounded-lg">
                <BookOpen className="w-8 h-8 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-primary mb-1">Resources</h3>
                <p className="text-gray-600 text-sm">Access materials</p>
              </div>
            </div>
          </Card>

          <Card className="hover:shadow-xl transition-shadow cursor-pointer" onClick={() => navigate('/dashboard/change-password')}>
            <div className="flex items-center gap-4">
              <div className="p-4 bg-primary/10 rounded-lg">
                <Lock className="w-8 h-8 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-primary mb-1">Security</h3>
                <p className="text-gray-600 text-sm">Change password</p>
              </div>
            </div>
          </Card>
        </div>

        {/* Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="bg-primary text-white">
            <h4 className="text-lg font-semibold mb-2">Current Semester</h4>
            <p className="text-3xl font-bold">Spring 2026</p>
          </Card>
          <Card className="bg-secondary text-white">
            <h4 className="text-lg font-semibold mb-2">Enrolled Courses</h4>
            <p className="text-3xl font-bold">6 Courses</p>
          </Card>
          <Card className="bg-primary text-white">
            <h4 className="text-lg font-semibold mb-2">GPA</h4>
            <p className="text-3xl font-bold">3.75</p>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default DashboardPage;
