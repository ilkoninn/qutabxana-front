// import defaultImage from '../assets/menu/default.jpg';
import goyQutabImage from '../assets/menu/qutabs/img1.png';
import etQutabImage from '../assets/menu/qutabs/img2.png';
import qarinQutabImage from '../assets/menu/qutabs/img3.png';
import sorQutabImage from '../assets/menu/qutabs/img4.png';
import sorluGoyluQutabImage from '../assets/menu/qutabs/img5.png';
import ciyerQutabImage from '../assets/menu/qutabs/img6.png';
import kartofPureliQutabImage from '../assets/menu/qutabs/img6.png';
import kartofPureliVeEtliQutabImage from '../assets/menu/qutabs/img8.png';
import maxiQutabImage from '../assets/menu/qutabs/img9.png';
import balqabaqQutabImage from '../assets/menu/qutabs/img10.png';

import sadePirojki from '../assets/menu/pirojkis/img1.png';

import sumax from '../assets/menu/souses/img1.png';
import acika from '../assets/menu/souses/img2.png';
import qatiq from '../assets/menu/souses/img3.png';
import xama from '../assets/menu/souses/img4.png';

import ayran from '../assets/menu/drinks/img1.png';
import sprite5 from '../assets/menu/drinks/img2.png';
import cola3 from '../assets/menu/drinks/img3.png';
import fanta3 from '../assets/menu/drinks/img4.png';
import sprite3 from '../assets/menu/drinks/img5.png';
import cola5 from '../assets/menu/drinks/img6.png';
import fanta5 from '../assets/menu/drinks/img7.png';
import pepsi5 from '../assets/menu/drinks/img8.png';
import cola1 from '../assets/menu/drinks/img9.png';
import fanta1 from '../assets/menu/drinks/img10.png';
import sprite1 from '../assets/menu/drinks/img11.png';
import cappypor5 from '../assets/menu/drinks/img12.png';
import pepsi1 from '../assets/menu/drinks/img13.png';
import mirinda5 from '../assets/menu/drinks/img14.png';
import vitaQazsiz5 from '../assets/menu/drinks/img15.png';
import vitaQazli5 from '../assets/menu/drinks/img16.png';
import sandora2 from '../assets/menu/drinks/img17.png';
import naturaShaf2 from '../assets/menu/drinks/img18.png';
import naturaMult2 from '../assets/menu/drinks/img19.png';
import fruktoviy2 from '../assets/menu/drinks/img20.png';
import liptonShaf5 from '../assets/menu/drinks/img21.png';
import liptonShaf1 from '../assets/menu/drinks/img23.png';

import keks from '../assets/menu/desserts/img1.png';
import kurabiye from '../assets/menu/desserts/img2.png';

import agdashSoru from '../assets/menu/dairy/img1.png';


// QUTABS
export const qutabs = [
  {
    id: 1,
    name: {
      az: "Göy Qutabı",
      en: "Greens Qutab",
      ru: "Кутаб с зеленью"
    },
    description: {
      az: "İspanaq, keşniş, göy soğan, şüyüd",
      en: "Spinach, coriander, green onion, dill",
      ru: "Шпинат, кинза, зеленый лук, укроп"
    },
    price: "1.20 ₼",
    image: goyQutabImage,
    popular: true
  },
  {
    id: 2,
    name: {
      az: "Ət Qutabı",
      en: "Meat Qutab",
      ru: "Мясной кутаб"
    },
    description: {
      az: "Ət, düz, istiot",
      en: "Meat, salt, pepper",
      ru: "Мясо, соль, перец"
    },
    price: "1.75 ₼",
    image: etQutabImage,
    popular: true
  },
  {
    id: 3,
    name: {
      az: "Qarın Qutabı",
      en: "Minced Meat Qutab",
      ru: "Кутаб с фаршем"
    },
    description: {
      az: "Qarın, iç piyi, düz, istiot",
      en: "Minced meat, internal fat, salt, pepper",
      ru: "Фарш, внутренний жир, соль, перец"
    },
    price: "1.25 ₼",
    image: qarinQutabImage,
    popular: true
  },
  {
    id: 4,
    name: {
      az: "Şor Qutabı",
      en: "Cheese Qutab",
      ru: "Кутаб с сыром"
    },
    description: {
      az: "Şit şor, düz, istiot",
      en: "White cheese, salt, pepper",
      ru: "Белый сыр, соль, перец"
    },
    price: "1.00 ₼",
    image: sorQutabImage
  },
  {
    id: 5,
    name: {
      az: "Şorlu Göylü Qutab",
      en: "Cheese & Greens Qutab",
      ru: "Кутаб с сыром и зеленью"
    },
    description: {
      az: "Şit, göy soğan, düz, istiot",
      en: "Cheese, green onion, salt, pepper",
      ru: "Сыр, зеленый лук, соль, перец"
    },
    price: "1.25 ₼",
    image: sorluGoyluQutabImage
  },
  {
    id: 6,
    name: {
      az: "Ciyər Qutabı",
      en: "Liver Qutab",
      ru: "Кутаб с печенью"
    },
    description: {
      az: "Ciyər, düz, istiot",
      en: "Liver, salt, pepper",
      ru: "Печень, соль, перец"
    },
    price: "1.00 ₼",
    image: ciyerQutabImage
  },
  {
    id: 7,
    name: {
      az: "Kartof Püreli Qutab",
      en: "Mashed Potato Qutab",
      ru: "Кутаб с картофельным пюре"
    },
    description: {
      az: "Kartof pürəsi",
      en: "Mashed potato",
      ru: "Картофельное пюре"
    },
    price: "1.00 ₼",
    image: kartofPureliQutabImage
  },
  {
    id: 8,
    name: {
      az: "Kartof Püreli Və Ətli Qutab",
      en: "Potato & Meat Qutab",
      ru: "Кутаб с картофелем и мясом"
    },
    description: {
      az: "Ət, kartof pürəsi, düz, istiot",
      en: "Meat, mashed potato, salt, pepper",
      ru: "Мясо, картофельное пюре, соль, перец"
    },
    price: "2.00 ₼",
    image: kartofPureliVeEtliQutabImage
  },
  {
    id: 9,
    name: {
      az: "Balqabaq Qutabı",
      en: "Pumpkin Qutab",
      ru: "Кутаб с тыквой"
    },
    description: {
      az: "Balqabaq",
      en: "Pumpkin",
      ru: "Тыква"
    },
    price: "1.25 ₼",
    image: balqabaqQutabImage 
  },
  {
    id: 10,
    name: {
      az: "Maxi Qutab",
      en: "Maxi Qutab",
      ru: "Макси Кутаб"
    },
    description: {
      az: '"Maksi qutab" - bu, hazırlanması üçün ən yaxşı inqrediyentlərdan hazırlanan böyük ölçülü bir qutabdır. Ləzzəti və doyurucu!',
      en: '"Maxi Qutab" - a large qutab prepared with the finest ingredients. Delicious and filling!',
      ru: '"Макси кутаб" - большой кутаб, приготовленный из лучших ингредиентов. Вкусно и сытно!'
    },
    price: "5.00 ₼",
    image: maxiQutabImage
  }
];

// FRIED ITEMS (PIROJKILƏR)
export const friedItems = [
  {
    id: 11,
    name: {
      az: "Kartoflu Pirojki",
      en: "Potato Piroshki",
      ru: "Картофельные пирожки"
    },
    description: {
      az: "Kartoflu pirojki",
      en: "Potato piroshki",
      ru: "Картофельные пирожки"
    },
    price: "0.60 ₼",
    image: sadePirojki
  }
];

// SAUCES (SOUSLAR)
export const sauces = [
  {
    id: 12,
    name: {
      az: "Sumaq",
      en: "Sumac",
      ru: "Сумах"
    },
    description: {
      az: "İsmayıllı sumaxı",
      en: "Ismayilli sumac",
      ru: "Исмаиллинский сумах"
    },
    price: "0.60 ₼",
    image: sumax,
    popular: true
  },
  {
    id: 13,
    name: {
      az: "Acıka",
      en: "Spicy Sauce",
      ru: "Острый соус"
    },
    description: {
      az: "Acı sous",
      en: "Spicy sauce",
      ru: "Острый соус"
    },
    price: "0.50 ₼",
    image: acika,
    popular: true
  },
  {
    id: 14,
    name: {
      az: "Qatıq",
      en: "Yogurt",
      ru: "Йогурт"
    },
    description: {
      az: "Təzə qatıq",
      en: "Fresh yogurt",
      ru: "Свежий йогурт"
    },
    price: "1.00 ₼",
    image: qatiq
  },
  {
    id: 14,
    name: {
      az: "Xama",
      en: "Sour Cream",
      ru: "Сметана"
    },
    description: {
      az: "Təzə xama",
      en: "Fresh sour cream",
      ru: "Свежая сметана"
    },
    price: "1.00 ₼",
    image: xama
  }
];

// BEVERAGES (İÇKİLƏR)
export const beverages = [
  {
    id: 15,
    name: {
      az: "Ayran 300ml",
      en: "Ayran 300ml",
      ru: "Айран 300мл"
    },
    description: {
      az: "Təzə ayran",
      en: "Fresh ayran",
      ru: "Свежий айран"
    },
    price: "1.00 ₼",
    volume: "300ml",
    image: ayran
  },
  {
    id: 16,
    name: {
      az: "Dovğa 300ml",
      en: "Dovga 300ml",
      ru: "Довга 300мл"
    },
    description: {
      az: "Əənənəvi dovğa",
      en: "Traditional dovga",
      ru: "Традиционная довга"
    },
    price: "1.50 ₼",
    volume: "300ml",
    image: ayran
  },
  {
    id: 17,
    name: {
      az: "Coca-Cola 300ml",
      en: "Coca-Cola 300ml",
      ru: "Кока-Кола 300мл"
    },
    price: "1.50 ₼",
    volume: "300ml",
    image: cola3
  },
  {
    id: 18,
    name: {
      az: "Fanta 300ml",
      en: "Fanta 300ml",
      ru: "Фанта 300мл"
    },
    price: "1.50 ₼",
    volume: "300ml",
    image: fanta3
  },
  {
    id: 19,
    name: {
      az: "Sprite 300ml",
      en: "Sprite 300ml",
      ru: "Спрайт 300мл"
    },
    price: "1.50 ₼",
    volume: "300ml",
    image: sprite3
  },
  {
    id: 20,
    name: {
      az: "Coca-Cola 500ml",
      en: "Coca-Cola 500ml",
      ru: "Кока-Кола 500мл"
    },
    price: "2.00 ₼",
    volume: "500ml",
    image: cola5
  },
  {
    id: 21,
    name: {
      az: "Fanta 500ml",
      en: "Fanta 500ml",
      ru: "Фанта 500мл"
    },
    price: "2.00 ₼",
    volume: "500ml",
    image: fanta5
  },
  {
    id: 22,
    name: {
      az: "Sprite 500ml",
      en: "Sprite 500ml",
      ru: "Спрайт 500мл"
    },
    price: "2.00 ₼",
    volume: "500ml",
    image: sprite5
  },
  {
    id: 23,
    name: {
      az: "Pepsi 500ml",
      en: "Pepsi 500ml",
      ru: "Пепси 500мл"
    },
    price: "2.00 ₼",
    volume: "500ml",
    image: pepsi5
  },
  {
    id: 24,
    name: {
      az: "Coca-Cola 1L",
      en: "Coca-Cola 1L",
      ru: "Кока-Кола 1Л"
    },
    price: "2.50 ₼",
    volume: "1L",
    image: cola1
  },
  {
    id: 25,
    name: {
      az: "Fanta 1L",
      en: "Fanta 1L",
      ru: "Фанта 1Л"
    },
    price: "2.50 ₼",
    volume: "1L",
    image: fanta1
  },
  {
    id: 26,
    name: {
      az: "Sprite 1L",
      en: "Sprite 1L",
      ru: "Спрайт 1Л"
    },
    price: "2.50 ₼",
    volume: "1L",
    image: sprite1
  },
  {
    id: 27,
    name: {
      az: "Pepsi 1L",
      en: "Pepsi 1L",
      ru: "Пепси 1Л"
    },
    price: "2.50 ₼",
    volume: "1L",
    image: pepsi1
  },
  {
    id: 28,
    name: {
      az: "Mirinda 500ml",
      en: "Mirinda 500ml",
      ru: "Миринда 500мл"
    },
    price: "1.50 ₼",
    volume: "500ml",
    image: mirinda5
  },
  {
    id: 29,
    name: {
      az: "Cappy Portağal 500ml",
      en: "Cappy Orange 500ml",
      ru: "Каппи Апельсин 500мл"
    },
    price: "1.50 ₼",
    volume: "500ml",
    image: cappypor5
  },
  {
    id: 30,
    name: {
      az: "Vita 1000 Qazsız 500ml",
      en: "Vita 1000 Still 500ml",
      ru: "Вита 1000 Без газа 500мл"
    },
    price: "1.00 ₼",
    volume: "500ml",
    image: vitaQazsiz5
  },
  {
    id: 31,
    name: {
      az: "Vita 1000 Qazlı 500ml",
      en: "Vita 1000 Sparkling 500ml",
      ru: "Вита 1000 С газом 500мл"
    },
    price: "1.00 ₼",
    volume: "500ml",
    image: vitaQazli5
  },
  {
    id: 32,
    name: {
      az: "Sandora Multivitamin 250ml",
      en: "Sandora Multivitamin 250ml",
      ru: "Сандора Мультивитамин 250мл"
    },
    price: "1.70 ₼",
    volume: "250ml",
    image: sandora2
  },
  {
    id: 33,
    name: {
      az: "Natura Şaftalı 200ml",
      en: "Natura Peach 200ml",
      ru: "Натура Персик 200мл"
    },
    price: "1.00 ₼",
    volume: "200ml",
    image: naturaShaf2
  },
  {
    id: 34,
    name: {
      az: "Natura Multivitamin 200ml",
      en: "Natura Multivitamin 200ml",
      ru: "Натура Мультивитамин 200мл"
    },
    price: "1.00 ₼",
    volume: "200ml",
    image: naturaMult2
  },
  {
    id: 35,
    name: {
      az: "Fruktovıy Sad Şaftalı Alma 200ml",
      en: "Fruktoviy Sad Peach Apple 200ml",
      ru: "Фруктовый Сад Персик Яблоко 200мл"
    },
    price: "1.00 ₼",
    volume: "200ml",
    image: fruktoviy2
  },
  {
    id: 36,
    name: {
      az: "Lipton Şaftalı İce Tea 500ml",
      en: "Lipton Peach Ice Tea 500ml",
      ru: "Липтон Персик Айс Ти 500мл"
    },
    price: "1.80 ₼",
    volume: "500ml",
    image: liptonShaf5
  },
  // {
  //   id: 37,
  //   name: {
  //     az: "Lipton Limon İce Tea 500ml",
  //     en: "Lipton Lemon Ice Tea 500ml",
  //     ru: "Липтон Лимон Айс Ти 500мл"
  //   },
  //   price: "1.80 ₼",
  //   volume: "500ml",
  //   image: liptonLim5
  // },
  {
    id: 38,
    name: {
      az: "Lipton Şaftalı İce Tea 1L",
      en: "Lipton Peach Ice Tea 1L",
      ru: "Липтон Персик Айс Ти 1Л"
    },
    price: "2.50 ₼",
    volume: "1L",
    image: liptonShaf1
  }
];

// DESSERTS (DESERT)
export const desserts = [
  {
    id: 39,
    name: {
      az: "Keks",
      en: "Cake",
      ru: "Кекс"
    },
    description: {
      az: "Şirin keks",
      en: "Sweet cake",
      ru: "Сладкий кекс"
    },
    price: "0.70 ₼",
    image: keks
  },
  {
    id: 40,
    name: {
      az: "Kurabiyə",
      en: "Cookie",
      ru: "Печенье"
    },
    description: {
      az: "Xırtıldayan kurabiyə",
      en: "Crunchy cookie",
      ru: "Хрустящее печенье"
    },
    price: "0.70 ₼",
    image: kurabiye
  }
];

// DAIRY PRODUCTS (SÜD VƏ SÜD MƏHSULLARI)
export const dairyProducts = [
  {
    id: 41,
    name: {
      az: "Qatıq 400q",
      en: "Yogurt 400g",
      ru: "Йогурт 400г"
    },
    description: {
      az: "Təzə qatıq",
      en: "Fresh yogurt",
      ru: "Свежий йогурт"
    },
    price: "3.50 ₼",
    weight: "400g",
    image: qatiq
  },
  {
    id: 42,
    name: {
      az: "Ağdaş Şoru 200q",
      en: "Agdash Cheese 200g",
      ru: "Агдашский Сыр 200г"
    },
    description: {
      az: "Şit camış şoru (quru)",
      en: "White buffalo cheese (dry)",
      ru: "Белый буйволиный сыр (сухой)"
    },
    price: "2.00 ₼",
    weight: "200g",
    image: agdashSoru
  }
];

// All menu items combined for backward compatibility
export const menuItems = [
  ...qutabs,
  ...friedItems,
  ...sauces,
  ...beverages,
  ...desserts,
  ...dairyProducts
];
