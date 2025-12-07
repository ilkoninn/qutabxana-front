import { useTranslation } from 'react-i18next';
import { qutabs, friedItems, sauces, beverages, desserts, dairyProducts } from '../data/menuItems';

const MenuSection = ({ title, items, i18n, t }) => (
  <div className="mb-16">
    <h2 className="text-3xl font-bold text-gray-900 mb-8 border-b-4 border-primary inline-block pb-2 animate-fade-in-up">
      {title}
    </h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {items.map((item, index) => (
        <div
          key={item.id}
          className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 relative animate-fade-in-up hover:-translate-y-2"
          style={{ animationDelay: `${index * 50}ms` }}
        >
          {item.popular && (
            <div className="absolute top-3 right-3 bg-primary text-white text-xs px-3 py-1 rounded-full font-semibold z-10">
              ⭐ Populyar
            </div>
          )}
          <div className="h-40 overflow-hidden">
            <img
              src={item.image}
              alt={item.name?.[i18n.language] || item.name?.az || 'Product'}
              className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
            />
          </div>
          <div className="p-4">
            <h3 className="text-lg font-bold text-gray-900 mb-1">
              {item.name?.[i18n.language] || item.name?.az || item.name}
            </h3>
            {item.description && (
              <p className="text-gray-600 mb-3 text-sm line-clamp-2">
                {item.description?.[i18n.language] || item.description?.az || ''}
              </p>
            )}
            {(item.volume || item.weight) && (
              <p className="text-xs text-gray-500 mb-2">
                {item.volume || item.weight}
              </p>
            )}
            <div className="flex items-center justify-between mt-3">
              <span className="text-xl font-bold text-primary">
                {item.price}
              </span>
              <a
                href={`https://wa.me/994514560077?text=${encodeURIComponent(`Salam! ${item.name?.[i18n.language] || item.name?.az} sifarişi vermək istəyirəm.`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-primary text-white px-4 py-1.5 rounded-full text-sm font-semibold hover:bg-opacity-90 transition-all shadow-md hover:shadow-lg inline-block"
              >
                {t('menu.order_button')}
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
);

const Menu = () => {
  const { t, i18n } = useTranslation();

  return (
    <div className="bg-cream py-12 px-4 overflow-hidden">
      <div className="container mx-auto max-w-7xl">
        <h1 className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-16 animate-fade-in-up">
          {t('menu.title')}
        </h1>

        <MenuSection title={t('menu.categories.qutabs')} items={qutabs} i18n={i18n} t={t} />
        <MenuSection title={t('menu.categories.fried')} items={friedItems} i18n={i18n} t={t} />
        <MenuSection title={t('menu.categories.sauces')} items={sauces} i18n={i18n} t={t} />
        <MenuSection title={t('menu.categories.beverages')} items={beverages} i18n={i18n} t={t} />
        <MenuSection title={t('menu.categories.desserts')} items={desserts} i18n={i18n} t={t} />
        <MenuSection title={t('menu.categories.dairy')} items={dairyProducts} i18n={i18n} t={t} />
      </div>
    </div>
  );
};

export default Menu;
