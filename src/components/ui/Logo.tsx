import schoolLogo from '../../assets/images/school-logo.jpg';
import { APP_INFO } from '../../utils/constants';

interface LogoProps {
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

const Logo = ({ size = 'md', className = '' }: LogoProps) => {
  const sizeClasses = {
    sm: 'h-12 w-12',
    md: 'h-24 w-24',
    lg: 'h-32 w-32',
  };

  return (
    <img
      src={schoolLogo}
      alt={APP_INFO.university}
      className={`object-contain rounded-lg ${sizeClasses[size]} ${className}`}
    />
  );
};

export default Logo;
