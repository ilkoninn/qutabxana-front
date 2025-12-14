import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from './LanguageSwitcher';
import logo from '../assets/logo.png';
import boltLogo from '../assets/bolt-food.png';
import woltLogo from '../assets/wolt-food.png';

const Header = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isOrderDropdownOpen, setIsOrderDropdownOpen] = useState(false);
  const { t } = useTranslation();

  return (
    <>
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-3 max-w-7xl">
          <div className="flex items-center justify-between gap-4">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3">
              <img src={logo} alt="Qutabxana N1" className="h-16 md:h-20" />
              <span className="text-lg md:text-xl font-sans font-normal text-gray-800 uppercase tracking-wide">
                Qutabxana <span className="font-bold">N1</span>
              </span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-6">
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
              
              {/* Order Dropdown */}
              <div className="relative">
                <button
                  onClick={() => setIsOrderDropdownOpen(!isOrderDropdownOpen)}
                  className="text-gray-700 hover:text-primary transition-colors font-medium flex items-center gap-1"
                >
                  {t('home.slider.order_button')}
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                
                {isOrderDropdownOpen && (
                  <>
                    {/* Overlay to close dropdown */}
                    <div 
                      className="fixed inset-0 z-10" 
                      onClick={() => setIsOrderDropdownOpen(false)}
                    ></div>
                    
                    {/* Dropdown Menu */}
                    <div className="absolute top-full mt-2 right-0 bg-white rounded-lg shadow-xl overflow-hidden min-w-[180px] z-20 animate-fade-in-down">
                      <a
                        href="https://food.bolt.eu/ru-ru/335/p/177018-qutabxana-n1-neftchiler"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 px-4 py-2.5 hover:bg-[#34D186] hover:text-white transition-all duration-300 group"
                      >
                        <img src={boltLogo} alt="Bolt Food" className="h-6 w-6 object-contain group-hover:scale-110 transition-transform" />
                        <span className="font-medium">Bolt Food</span>
                      </a>
                      <a
                        href="https://wolt.com/az/aze/baku/restaurant/qutabxana-n1"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 px-4 py-2.5 hover:bg-[#0080C8] hover:text-white transition-all duration-300 group"
                      >
                        <img src={woltLogo} alt="Wolt" className="h-6 w-6 object-contain group-hover:scale-110 transition-transform" />
                        <span className="font-medium">Wolt</span>
                      </a>
                    </div>
                  </>
                )}
              </div>
            </nav>

            {/* Desktop Language Switcher */}
            <div className="hidden md:flex items-center">
              <LanguageSwitcher />
            </div>

            {/* Mobile - Hamburger Only */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsSidebarOpen(true)}
                className="p-2 text-gray-700 hover:text-primary"
                aria-label="Menu"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>

          {/* Mobile Secondary Header - Delivery Cards */}
          <div className="md:hidden grid grid-cols-2 gap-3 py-2 border-t mt-2">
            <a
              href="https://food.bolt.eu/ru-ru/335/p/177018-qutabxana-n1-neftchiler"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-[#34D186] px-4 py-3 rounded-lg hover:opacity-90 transition-all shadow-md"
            >
              <img src={boltLogo} alt="Bolt Food" className="h-7 w-7" />
              <span className="font-semibold text-white">Bolt Food</span>
            </a>
            <a
              href="https://wolt.com/az/aze/baku/restaurant/qutabxana-n1"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-[#0080C8] px-4 py-3 rounded-lg hover:opacity-90 transition-all shadow-md"
            >
              <img src={woltLogo} alt="Wolt" className="h-7 w-7" />
              <span className="font-semibold text-white">Wolt</span>
            </a>
          </div>
        </div>
      </header>

      {/* Mobile Sidebar */}
      {isSidebarOpen && (
        <>
          {/* Overlay */}
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-50 md:hidden animate-fade-in"
            onClick={() => setIsSidebarOpen(false)}
          ></div>

          {/* Sidebar */}
          <div className="fixed top-0 right-0 h-full w-64 bg-white shadow-2xl z-50 md:hidden animate-slide-in-right">
            <div className="flex flex-col h-full">
              {/* Close Button */}
              <div className="flex items-center justify-between p-4 border-b">
                <h3 className="text-lg font-bold text-primary">{t('menu.title')}</h3>
                <button
                  onClick={() => setIsSidebarOpen(false)}
                  className="p-2 text-gray-700 hover:text-primary transition-colors"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              {/* Language Switcher */}
              <div className="flex justify-center p-4 border-b">
                <LanguageSwitcher />
              </div>

              {/* Navigation Links */}
              <nav className="flex flex-col p-4 space-y-3">
                <Link
                  to="/"
                  onClick={() => setIsSidebarOpen(false)}
                  className="text-gray-700 hover:text-primary transition-colors font-medium text-lg py-2"
                >
                  {t('nav.home')}
                </Link>
                <Link
                  to="/menu"
                  onClick={() => setIsSidebarOpen(false)}
                  className="text-gray-700 hover:text-primary transition-colors font-medium text-lg py-2"
                >
                  {t('nav.menu')}
                </Link>
                <Link
                  to="/about"
                  onClick={() => setIsSidebarOpen(false)}
                  className="text-gray-700 hover:text-primary transition-colors font-medium text-lg py-2"
                >
                  {t('nav.about')}
                </Link>
                <Link
                  to="/contact"
                  onClick={() => setIsSidebarOpen(false)}
                  className="text-gray-700 hover:text-primary transition-colors font-medium text-lg py-2"
                >
                  {t('nav.contact')}
                </Link>
              </nav>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Header;
