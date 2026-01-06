import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import DashboardLayout from '../components/layout/DashboardLayout';
import { Card } from '../components/ui';
import { BookOpen, Award, GraduationCap } from 'lucide-react';

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
      <div className="p-4 sm:p-6 lg:p-8 pt-16 lg:pt-8 min-h-screen overflow-y-auto">
        <h1 className="text-2xl sm:text-3xl font-bold text-primary mb-4 sm:mb-6">Academic Results</h1>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mb-4 sm:mb-6">
          <Card>
            <div className="flex items-center gap-3 sm:gap-4">
              <div className="p-3 bg-primary/10 rounded-lg flex-shrink-0">
                <Award className="w-6 h-6 sm:w-8 sm:h-8 text-primary" />
              </div>
              <div>
                <p className="text-xs sm:text-sm text-gray-600">Current GPA</p>
                <p className="text-xl sm:text-2xl font-bold text-primary">3.75</p>
              </div>
            </div>
          </Card>

          <Card>
            <div className="flex items-center gap-3 sm:gap-4">
              <div className="p-3 bg-primary/10 rounded-lg flex-shrink-0">
                <GraduationCap className="w-6 h-6 sm:w-8 sm:h-8 text-primary" />
              </div>
              <div>
                <p className="text-xs sm:text-sm text-gray-600">Completed Credits</p>
                <p className="text-xl sm:text-2xl font-bold text-primary">45/120</p>
              </div>
            </div>
          </Card>
        </div>

        <Card className="max-h-[calc(100vh-400px)] sm:max-h-[calc(100vh-350px)] overflow-y-auto">
          <h2 className="text-lg sm:text-xl font-bold text-primary mb-3 sm:mb-4">Semester Results</h2>
          <div className="space-y-3 sm:space-y-4">
            {['Computer Science 101', 'Mathematics 201', 'English Literature', 'Physics 150'].map((course, idx) => (
              <div key={idx} className="flex items-center justify-between p-3 sm:p-4 border border-gray-200 rounded-lg">
                <div className="flex items-center gap-2 sm:gap-3 flex-1 min-w-0">
                  <BookOpen className="w-4 h-4 sm:w-5 sm:h-5 text-secondary flex-shrink-0" />
                  <span className="font-medium text-sm sm:text-base truncate">{course}</span>
                </div>
                <div className="flex items-center gap-2 sm:gap-4 flex-shrink-0 ml-2">
                  <span className="text-primary font-bold text-sm sm:text-base">A-</span>
                  <span className="text-xs sm:text-sm text-gray-600 hidden sm:inline">3.7 GPA</span>
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
