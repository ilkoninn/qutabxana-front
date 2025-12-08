import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import home1 from '../assets/home/home1.jpg';
import qutab1 from '../assets/menu/qutabs/img1.png';
import qutab2 from '../assets/menu/qutabs/img2.png';
import qutab3 from '../assets/menu/qutabs/img3.png';
import qutab7 from '../assets/menu/qutabs/img7.png';
import pirojki1 from '../assets/menu/pirojkis/img1.png';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const Home = () => {
  const { t } = useTranslation();

  // Use different images for each slide (pre-selected variety)
  const slides = [
    {
      key: 'qutab_set_1',
      title: t('home.slider.qutab_set_1.title'),
      description: t('home.slider.qutab_set_1.description'),
      price: t('home.slider.qutab_set_1.price'),
      images: [qutab2, qutab1, qutab3],
    },
    {
      key: 'nafarliq_set_3',
      title: t('home.slider.nafarliq_set_3.title'),
      description: t('home.slider.nafarliq_set_3.description'),
      price: t('home.slider.nafarliq_set_3.price'),
      images: [qutab7, qutab2, qutab1],
    },
    {
      key: 'nafarliq_set_4',
      title: t('home.slider.nafarliq_set_4.title'),
      description: t('home.slider.nafarliq_set_4.description'),
      price: t('home.slider.nafarliq_set_4.price'),
      images: [pirojki1, qutab3, qutab7],
    },
  ];

  return (
    <div className="min-h-screen overflow-x-hidden">
      {/* Slider Section */}
      <section className="bg-gradient-to-r from-[#FFF5E6] via-[#FFE4C4] to-[#FFD9B3] py-0 overflow-hidden -mt-2">
        <div className="container mx-auto px-4 overflow-hidden max-w-7xl">
          <Swiper
            modules={[Autoplay, Pagination]}
            spaceBetween={0}
            slidesPerView={1}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
              bulletActiveClass: 'swiper-pagination-bullet-active',
            }}
            loop={true}
            className="food-offer-slider"
          >
            {slides.map((slide) => (
              <SwiperSlide key={slide.key}>
                <div className="relative grid md:grid-cols-2 gap-6 items-center min-h-[350px] py-8 md:py-10">
                  {/* Left Side - Set Information */}
                  <div className="space-y-4 px-4 md:px-8 z-10">
                    {/* Set Title */}
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 uppercase">
                      {slide.title}
                    </h2>

                    {/* Description */}
                    <p className="text-gray-800 text-sm md:text-base">
                      {slide.description}
                    </p>

                    {/* Price & Order Button */}
                    <div className="flex items-center gap-4 flex-wrap">
                      <span className="text-4xl md:text-5xl font-bold text-primary">
                        {slide.price}
                      </span>
                      <a
                        href={`https://wa.me/994514560077?text=${encodeURIComponent(`Salam! ${slide.title} sifarişi vermək istəyirəm.`)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-primary hover:bg-opacity-90 text-white font-semibold px-6 py-2.5 rounded-full transition-all shadow-md hover:shadow-lg"
                      >
                        {t('menu.order_button')}
                      </a>
                    </div>
                  </div>

                  {/* Right Side - Food Images Grid */}
                  <div className="relative flex items-center justify-center overflow-hidden px-4">
                    <div className="grid grid-cols-2 gap-4 max-w-md">
                      {/* Main large image */}
                      <div className="col-span-2 relative">
                        <div className="bg-white rounded-2xl shadow-2xl p-4 transform hover:scale-105 transition-transform duration-300">
                          <img
                            src={slide.images[0]}
                            alt={slide.title}
                            className="w-full h-64 md:h-80 object-cover rounded-xl"
                          />
                        </div>
                      </div>
                      
                      {/* Two smaller images */}
                      <div className="relative">
                        <div className="bg-white rounded-xl shadow-xl p-3 transform hover:scale-105 transition-transform duration-300">
                          <img
                            src={slide.images[1]}
                            alt={slide.title}
                            className="w-full h-32 md:h-40 object-cover rounded-lg"
                          />
                        </div>
                      </div>
                      
                      <div className="relative">
                        <div className="bg-white rounded-xl shadow-xl p-3 transform hover:scale-105 transition-transform duration-300">
                          <img
                            src={slide.images[2]}
                            alt={slide.title}
                            className="w-full h-32 md:h-40 object-cover rounded-lg"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
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
