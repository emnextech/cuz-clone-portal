import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import DashboardLayout from '../components/layout/DashboardLayout';
import { Card } from '../components/ui';
import { BookOpen, Library, Download, ExternalLink } from 'lucide-react';

const ResourcesPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const storedStudentId = localStorage.getItem('studentId');
    if (!storedStudentId) {
      navigate('/', { replace: true });
    }
  }, [navigate]);

  const resources = [
    { name: 'University Library Portal', icon: Library, type: 'Online Access' },
    { name: 'E-Books Collection', icon: BookOpen, type: 'Digital Library' },
    { name: 'Research Papers Database', icon: Download, type: 'Academic Resources' },
    { name: 'Journal Subscriptions', icon: ExternalLink, type: 'External Link' },
  ];

  return (
    <DashboardLayout>
      <div className="p-4 sm:p-6 lg:p-8 pt-16 lg:pt-8 min-h-screen overflow-y-auto">
        <h1 className="text-2xl sm:text-3xl font-bold text-primary mb-4 sm:mb-6">Electronic Resources</h1>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
          {resources.map((resource, idx) => (
            <Card key={idx} className="hover:shadow-xl transition-shadow cursor-pointer">
              <div className="flex items-center gap-3 sm:gap-4">
                <div className="p-3 sm:p-4 bg-primary/10 rounded-lg flex-shrink-0">
                  <resource.icon className="w-6 h-6 sm:w-8 sm:h-8 text-primary" />
                </div>
                <div className="min-w-0">
                  <h3 className="font-bold text-primary text-base sm:text-lg">{resource.name}</h3>
                  <p className="text-xs sm:text-sm text-secondary">{resource.type}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <Card className="mt-4 sm:mt-6">
          <h2 className="text-lg sm:text-xl font-bold text-primary mb-3 sm:mb-4">Quick Access</h2>
          <div className="space-y-2 sm:space-y-3">
            <div className="flex items-center justify-between p-2 sm:p-3 border border-gray-200 rounded-lg hover:bg-gray-50 cursor-pointer">
              <span className="text-gray-700 text-sm sm:text-base truncate mr-2">Course Materials - Spring 2026</span>
              <Download className="w-4 h-4 sm:w-5 sm:h-5 text-secondary flex-shrink-0" />
            </div>
            <div className="flex items-center justify-between p-2 sm:p-3 border border-gray-200 rounded-lg hover:bg-gray-50 cursor-pointer">
              <span className="text-gray-700 text-sm sm:text-base truncate mr-2">Lecture Notes Archive</span>
              <Download className="w-4 h-4 sm:w-5 sm:h-5 text-secondary flex-shrink-0" />
            </div>
            <div className="flex items-center justify-between p-2 sm:p-3 border border-gray-200 rounded-lg hover:bg-gray-50 cursor-pointer">
              <span className="text-gray-700 text-sm sm:text-base truncate mr-2">Previous Exam Papers</span>
              <Download className="w-4 h-4 sm:w-5 sm:h-5 text-secondary flex-shrink-0" />
            </div>
          </div>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default ResourcesPage;
