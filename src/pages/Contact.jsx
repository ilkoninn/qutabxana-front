import { useTranslation } from 'react-i18next';
import boltLogo from '../assets/bolt-food.png';
import woltLogo from '../assets/wolt-food.png';

const Contact = () => {
  const { t } = useTranslation();

  const phoneNumber = '+994514560077';

  return (
    <div className="min-h-screen bg-cream py-12 px-4 overflow-hidden">
      <div className="container mx-auto max-w-4xl">
        <h1 className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-12 animate-fade-in-up">
          {t('contact.title')}
        </h1>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Contact Info */}
          <div className="bg-white p-8 rounded-2xl shadow-md animate-slide-in-left hover:shadow-xl transition-all duration-300">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              {t('contact.contact_info')}
            </h2>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-primary bg-opacity-10 p-3 rounded-full">
                  <svg
                    className="w-6 h-6 text-primary"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">
                    {t('contact.phone')}
                  </h3>
                  <a
                    href={`tel:${phoneNumber}`}
                    className="text-primary hover:underline"
                  >
                    {phoneNumber}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-primary bg-opacity-10 p-3 rounded-full">
                  <svg
                    className="w-6 h-6 text-primary"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">
                    {t('contact.location')}
                  </h3>
                  <p className="text-gray-600">{t('contact.address')}</p>
                </div>
              </div>

              <a
                href={`https://wa.me/${phoneNumber.replace(/\+/g, '')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full bg-primary text-white text-center px-6 py-3 rounded-full font-semibold hover:bg-opacity-90 transition-all shadow-md hover:shadow-lg mt-6"
              >
                {t('contact.whatsapp')}
              </a>

              <div className="mt-6 pt-6 border-t border-gray-200">
                <h3 className="font-semibold text-gray-900 mb-3">{t('contact.online_order')}</h3>
                <div className="space-y-3">
                  <a
                    href="https://food.bolt.eu/ru-ru/335/p/177018-qutabxana-n1-neftchiler"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 bg-gray-100 px-4 py-3 rounded-lg hover:bg-primary hover:text-white transition-all"
                  >
                    <img src={boltLogo} alt="Bolt Food" className="h-8 w-8 object-contain" />
                    <div>
                      <div className="font-semibold">Bolt Food</div>
                      <div className="text-xs opacity-75">{t('contact.order_now')}</div>
                    </div>
                  </a>
                  <a
                    href="https://wolt.com/az/aze/baku/restaurant/qutabxana-n1"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 bg-gray-100 px-4 py-3 rounded-lg hover:bg-primary hover:text-white transition-all"
                  >
                    <img src={woltLogo} alt="Wolt" className="h-8 w-8 object-contain" />
                    <div>
                      <div className="font-semibold">Wolt</div>
                      <div className="text-xs opacity-75">{t('contact.order_now')}</div>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Map */}
          <div className="bg-white p-2 rounded-2xl shadow-md animate-slide-in-right hover:shadow-xl transition-all duration-300">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3039.247!2d49.83188864!3d40.39562123!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNDDCsDIzJzQ0LjIiTiA0OcKwNDknNTQuOCJF!5e0!3m2!1sen!2saz!4v1234567890"
              width="100%"
              height="350"
              style={{ border: 0, borderRadius: '1rem' }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Location Map"
            ></iframe>
          </div>
        </div>

        {/* Working Hours */}
        <div className="bg-white p-8 rounded-2xl shadow-md text-center animate-fade-in-up animation-delay-400 hover:shadow-xl transition-all duration-300">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            {t('contact.working_hours')}
          </h2>
          <p className="text-gray-600 text-lg">
            {t('contact.hours')}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
