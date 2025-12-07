import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import home1 from '../assets/home/home1.jpg';
import qutab1 from '../assets/menu/qutabs/img1.png';
import qutab2 from '../assets/menu/qutabs/img2.png';
import qutab3 from '../assets/menu/qutabs/img3.png';
import boltLogo from '../assets/bolt-food.png';
import woltLogo from '../assets/wolt-food.png';

const Home = () => {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-cream to-white py-20 px-4 overflow-hidden">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4 animate-fade-in-up">
            {t('home.hero_title')}
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-4 animate-fade-in-up animation-delay-200">
            {t('home.hero_subtitle')}
          </p>
          
          {/* Location Info */}
          <div className="bg-primary bg-opacity-10 border-2 border-primary rounded-2xl p-6 max-w-2xl mx-auto mb-8 animate-fade-in-up animation-delay-400">
            <p className="text-lg font-semibold text-gray-800 mb-2">
              📍 {t('home.our_location')}
            </p>
            <p className="text-gray-700">
              {t('home.location_text')}
            </p>
            <p className="text-primary font-semibold mt-2">
              {t('home.updated_menu')}
            </p>

            {/* Delivery Links */}
            <div className="mt-4 flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href="https://food.bolt.eu/ru-ru/335/p/177018-qutabxana-n1-neftchiler"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-white px-4 py-2 rounded-full font-semibold text-gray-800 hover:bg-primary hover:text-white transition-all shadow-md hover:shadow-lg"
              >
                <img src={boltLogo} alt="Bolt Food" className="h-6 w-6 object-contain" />
                <span>Bolt Food</span>
              </a>
              <a
                href="https://wolt.com/az/aze/baku/restaurant/qutabxana-n1"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-white px-4 py-2 rounded-full font-semibold text-gray-800 hover:bg-primary hover:text-white transition-all shadow-md hover:shadow-lg"
              >
                <img src={woltLogo} alt="Wolt" className="h-6 w-6 object-contain" />
                <span>Wolt</span>
              </a>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up animation-delay-600">
            <Link
              to="/menu"
              className="bg-primary text-white px-8 py-3 rounded-full font-semibold hover:bg-opacity-90 transition-all shadow-lg hover:shadow-xl hover:scale-105 transform duration-300"
            >
              {t('home.view_menu')}
            </Link>
            <Link
              to="/contact"
              className="bg-white text-primary px-8 py-3 rounded-full font-semibold border-2 border-primary hover:bg-primary hover:text-white transition-all shadow-lg hover:shadow-xl hover:scale-105 transform duration-300"
            >
              {t('home.contact_us')}
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Image Section */}
      <section className="py-16 px-4 bg-white overflow-hidden">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="animate-slide-in-left">
              <img
                src={home1}
                alt="Qutab"
                className="rounded-2xl shadow-xl w-full hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="animate-slide-in-right">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                {t('about.our_mission')}
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                {t('about.mission_text')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Image Gallery Section */}
      <section className="py-16 px-4 bg-cream overflow-hidden">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12 animate-fade-in-up">
            {t('home.our_qutabs')}
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="animate-fade-in-up animation-delay-200 group">
              <img 
                src={qutab1} 
                alt={t('home.qutab_green')}
                className="rounded-2xl shadow-lg w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <p className="text-center mt-3 font-semibold text-gray-800">{t('home.qutab_green')}</p>
            </div>
            <div className="animate-fade-in-up animation-delay-400 group">
              <img 
                src={qutab2} 
                alt={t('home.qutab_meat')}
                className="rounded-2xl shadow-lg w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <p className="text-center mt-3 font-semibold text-gray-800">{t('home.qutab_meat')}</p>
            </div>
            <div className="animate-fade-in-up animation-delay-600 group">
              <img 
                src={qutab3} 
                alt={t('home.qutab_cheese')}
                className="rounded-2xl shadow-lg w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <p className="text-center mt-3 font-semibold text-gray-800">{t('home.qutab_cheese')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Info Section */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="bg-cream p-8 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 animate-fade-in-up animation-delay-200 hover:-translate-y-2">
              <div className="text-primary text-4xl mb-4">🍽️</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                {t('menu.title')}
              </h3>
              <p className="text-gray-600">
                {t('home.wide_variety')}
              </p>
            </div>
            <div className="bg-cream p-8 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 animate-fade-in-up animation-delay-400 hover:-translate-y-2">
              <div className="text-primary text-4xl mb-4">⚡</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                {t('home.fast_service')}
              </h3>
              <p className="text-gray-600">
                {t('home.fast_preparation')}
              </p>
            </div>
            <div className="bg-cream p-8 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 animate-fade-in-up animation-delay-600 hover:-translate-y-2">
              <div className="text-primary text-4xl mb-4">✨</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                {t('home.fresh_products')}
              </h3>
              <p className="text-gray-600">
                {t('home.daily_fresh')}
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
