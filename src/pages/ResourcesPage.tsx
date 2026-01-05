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
      <div className="p-8 h-screen overflow-hidden">
        <h1 className="text-3xl font-bold text-primary mb-6">Electronic Resources</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {resources.map((resource, idx) => (
            <Card key={idx} className="hover:shadow-xl transition-shadow cursor-pointer">
              <div className="flex items-center gap-4">
                <div className="p-4 bg-primary/10 rounded-lg">
                  <resource.icon className="w-8 h-8 text-primary" />
                </div>
                <div>
                  <h3 className="font-bold text-primary text-lg">{resource.name}</h3>
                  <p className="text-sm text-secondary">{resource.type}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <Card className="mt-6">
          <h2 className="text-xl font-bold text-primary mb-4">Quick Access</h2>
          <div className="space-y-3">
            <div className="flex items-center justify-between p-3 border border-gray-200 rounded-lg hover:bg-gray-50">
              <span className="text-gray-700">Course Materials - Spring 2026</span>
              <Download className="w-5 h-5 text-secondary" />
            </div>
            <div className="flex items-center justify-between p-3 border border-gray-200 rounded-lg hover:bg-gray-50">
              <span className="text-gray-700">Lecture Notes Archive</span>
              <Download className="w-5 h-5 text-secondary" />
            </div>
            <div className="flex items-center justify-between p-3 border border-gray-200 rounded-lg hover:bg-gray-50">
              <span className="text-gray-700">Previous Exam Papers</span>
              <Download className="w-5 h-5 text-secondary" />
            </div>
          </div>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default ResourcesPage;
