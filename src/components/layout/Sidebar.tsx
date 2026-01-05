import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Logo } from '../ui';
import { BarChart3, Lock, BookOpen, Home, LogOut } from 'lucide-react';

const Sidebar = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const menuItems = [
    { name: 'Results', path: '/dashboard/results', icon: BarChart3 },
    { name: 'Change Password', path: '/dashboard/change-password', icon: Lock },
    { name: 'Electronic Resources', path: '/dashboard/resources', icon: BookOpen },
    { name: 'Home', path: '/dashboard', icon: Home },
  ];

  const handleLogout = () => {
    localStorage.removeItem('studentId');
    navigate('/', { replace: true });
  };

  const isActive = (path: string) => location.pathname === path;

  return (
    <div className="w-64 bg-primary h-screen flex flex-col">
      {/* Logo */}
      <div className="p-6 bg-white">
        <Logo size="md" className="mx-auto" />
      </div>

      {/* Navigation */}
      <nav className="flex-1 py-8">
        {menuItems.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            className={`flex items-center gap-3 px-6 py-4 text-white hover:bg-white/10 transition-colors ${
              isActive(item.path) ? 'bg-white/20 border-l-4 border-white' : ''
            }`}
          >
            <item.icon className="w-5 h-5" />
            {item.name}
          </Link>
        ))}
      </nav>

      {/* Logout */}
      <button
        onClick={handleLogout}
        className="flex items-center gap-3 px-6 py-4 text-white hover:bg-white/10 transition-colors text-left w-full"
      >
        <LogOut className="w-5 h-5" />
        Log Out
      </button>
    </div>
  );
};

export default Sidebar;
