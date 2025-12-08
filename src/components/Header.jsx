import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from './LanguageSwitcher';
import logo from '../assets/logo.png';

const Header = () => {
  const { t } = useTranslation();

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img src={logo} alt="Qutabxana N1" className="h-16 md:h-20" />
            <span className="hidden sm:inline text-xl md:text-2xl text-gray-800 -ml-2">
              Qutabxana <span className="font-bold">N1</span>
            </span>
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <Link
              to="/"
              className="text-gray-700 hover:text-primary transition-colors font-medium"
            >
              {t('nav.home')}
            </Link>
            <Link
              to="/menu"
              className="text-gray-700 hover:text-primary transition-colors font-medium"
            >
              {t('nav.menu')}
            </Link>
            <Link
              to="/about"
              className="text-gray-700 hover:text-primary transition-colors font-medium"
            >
              {t('nav.about')}
            </Link>
            <Link
              to="/contact"
              className="text-gray-700 hover:text-primary transition-colors font-medium"
            >
              {t('nav.contact')}
            </Link>
          </nav>

          {/* Language Switcher */}
          <LanguageSwitcher />
        </div>

        {/* Mobile Navigation */}
        <nav className="md:hidden flex justify-around mt-4 border-t pt-4">
          <Link to="/" className="text-gray-700 hover:text-primary text-sm font-medium">
            {t('nav.home')}
          </Link>
          <Link to="/menu" className="text-gray-700 hover:text-primary text-sm font-medium">
            {t('nav.menu')}
          </Link>
          <Link to="/about" className="text-gray-700 hover:text-primary text-sm font-medium">
            {t('nav.about')}
          </Link>
          <Link to="/contact" className="text-gray-700 hover:text-primary text-sm font-medium">
            {t('nav.contact')}
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
