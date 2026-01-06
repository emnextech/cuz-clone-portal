import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Logo } from '../ui';
import { BarChart3, Lock, BookOpen, Home, LogOut } from 'lucide-react';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const Sidebar = ({ isOpen, onClose }: SidebarProps) => {
  const location = useLocation();
  const navigate = useNavigate();

  const menuItems = [
    { name: 'Home', path: '/dashboard', icon: Home },
    { name: 'Results', path: '/dashboard/results', icon: BarChart3 },
    { name: 'Change Password', path: '/dashboard/change-password', icon: Lock },
    { name: 'Electronic Resources', path: '/dashboard/resources', icon: BookOpen },
  ];

  const handleLogout = () => {
    localStorage.removeItem('studentId');
    navigate('/', { replace: true });
    onClose();
  };

  const handleLinkClick = () => {
    onClose();
  };

  const isActive = (path: string) => location.pathname === path;

  return (
    <div
      className={`
        fixed lg:static inset-y-0 left-0 z-40
        w-64 bg-primary h-screen flex flex-col
        transform transition-transform duration-300 ease-in-out
        ${isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
      `}
    >
      {/* Logo */}
      <div className="p-4 sm:p-6 bg-white">
        <Logo size="md" className="mx-auto" />
      </div>

      {/* Navigation */}
      <nav className="flex-1 py-4 sm:py-8 overflow-y-auto">
        {menuItems.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            onClick={handleLinkClick}
            className={`flex items-center gap-3 px-4 sm:px-6 py-3 sm:py-4 text-white hover:bg-white/10 transition-colors ${
              isActive(item.path) ? 'bg-white/20 border-l-4 border-white' : ''
            }`}
          >
            <item.icon className="w-5 h-5 flex-shrink-0" />
            <span className="text-sm sm:text-base">{item.name}</span>
          </Link>
        ))}
      </nav>

      {/* Logout */}
      <button
        onClick={handleLogout}
        className="flex items-center gap-3 px-4 sm:px-6 py-3 sm:py-4 text-white hover:bg-white/10 transition-colors text-left w-full"
      >
        <LogOut className="w-5 h-5 flex-shrink-0" />
        <span className="text-sm sm:text-base">Log Out</span>
      </button>
    </div>
  );
};

export default Sidebar;
