import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import DashboardLayout from '../components/layout/DashboardLayout';
import { Card } from '../components/ui';
import { BookOpen, FileText, Award, GraduationCap } from 'lucide-react';

const ResultsPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const storedStudentId = localStorage.getItem('studentId');
    if (!storedStudentId) {
      navigate('/', { replace: true });
    }
  }, [navigate]);

  return (
    <DashboardLayout>
      <div className="p-8 h-screen overflow-hidden">
        <h1 className="text-3xl font-bold text-primary mb-6">Academic Results</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <Card>
            <div className="flex items-center gap-4">
              <div className="p-3 bg-primary/10 rounded-lg">
                <Award className="w-8 h-8 text-primary" />
              </div>
              <div>
                <p className="text-sm text-gray-600">Current GPA</p>
                <p className="text-2xl font-bold text-primary">3.75</p>
              </div>
            </div>
          </Card>

          <Card>
            <div className="flex items-center gap-4">
              <div className="p-3 bg-primary/10 rounded-lg">
                <GraduationCap className="w-8 h-8 text-primary" />
              </div>
              <div>
                <p className="text-sm text-gray-600">Completed Credits</p>
                <p className="text-2xl font-bold text-primary">45/120</p>
              </div>
            </div>
          </Card>
        </div>

        <Card className="h-[calc(100vh-300px)] overflow-y-auto">
          <h2 className="text-xl font-bold text-primary mb-4">Semester Results</h2>
          <div className="space-y-4">
            {['Computer Science 101', 'Mathematics 201', 'English Literature', 'Physics 150'].map((course, idx) => (
              <div key={idx} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                <div className="flex items-center gap-3">
                  <BookOpen className="w-5 h-5 text-secondary" />
                  <span className="font-medium">{course}</span>
                </div>
                <div className="flex items-center gap-4">
                  <span className="text-primary font-bold">A-</span>
                  <span className="text-sm text-gray-600">3.7 GPA</span>
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default ResultsPage;
