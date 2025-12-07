import { useTranslation } from 'react-i18next';
import home2 from '../assets/home/home1.jpg';

const About = () => {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-white py-12 px-4 overflow-hidden">
      <div className="container mx-auto max-w-4xl">
        <h1 className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-8 animate-fade-in-up">
          {t('about.title')}
        </h1>

        <div className="mb-12 animate-fade-in-up animation-delay-200 overflow-hidden rounded-2xl">
          <img
            src={home2}
            alt="About Qutabxana N1"
            className="w-full h-auto rounded-2xl shadow-xl hover:scale-105 transition-transform duration-500"
          />
        </div>

        <div className="space-y-8">
          <div className="bg-cream p-8 rounded-2xl animate-fade-in-up animation-delay-400 hover:shadow-lg transition-shadow duration-300">
            <p className="text-lg text-gray-700 leading-relaxed">
              {t('about.description')}
            </p>
          </div>

          <div className="bg-white border-l-4 border-primary p-8 rounded-r-2xl shadow-md animate-slide-in-right animation-delay-600 hover:shadow-xl transition-shadow duration-300">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              {t('about.our_mission')}
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              {t('about.mission_text')}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
