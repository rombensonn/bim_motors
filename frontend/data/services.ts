export type ServiceIcon =
  | "scan"
  | "car"
  | "wrench"
  | "droplets"
  | "engine"
  | "shield"
  | "zap"
  | "disc"
  | "snowflake"
  | "sparkles"
  | "paint"
  | "battery";

export type ServiceItem = {
  title: string;
  slug: string;
  href: string;
  description: string;
  accent: "blue" | "orange" | "green" | "dark";
  icon: ServiceIcon;
  keywords?: string[];
};

export const primaryServices: ServiceItem[] = [
  {
    title: "Компьютерная диагностика",
    slug: "kompyuternaya-diagnostika",
    href: "/diagnostika",
    description: "Считываем ошибки и ищем реальную причину неисправности, а не просто стираем коды.",
    accent: "blue",
    icon: "scan",
    keywords: ["диагностика BMW Мытищи", "диагностика перед покупкой"]
  },
  {
    title: "Ремонт BMW",
    slug: "remont-bmw",
    href: "/remont-bmw",
    description: "Профильный подход к BMW: двигатель, ходовая, электрика, ТО и сложные симптомы.",
    accent: "dark",
    icon: "car",
    keywords: ["ремонт BMW Мытищи", "сервис BMW Мытищи"]
  },
  {
    title: "Ремонт MINI",
    slug: "remont-mini",
    href: "/remont-mini",
    description: "Диагностика, обслуживание и ремонт MINI с понятным согласованием работ.",
    accent: "green",
    icon: "car",
    keywords: ["ремонт MINI Мытищи", "сервис MINI Мытищи"]
  },
  {
    title: "Техническое обслуживание",
    slug: "tehnicheskoe-obsluzhivanie",
    href: "/tehnicheskoe-obsluzhivanie",
    description: "Регламентное ТО, замена масла, фильтров и профилактический осмотр перед дорогой.",
    accent: "orange",
    icon: "droplets",
    keywords: ["ТО BMW Мытищи", "замена масла Мытищи"]
  },
  {
    title: "Ремонт двигателя и ГБЦ",
    slug: "remont-dvigatelya",
    href: "/remont-dvigatelya",
    description: "Диагностика перед ремонтом, масложор, перегрев, нестабильная работа, B58 и ГБЦ.",
    accent: "blue",
    icon: "engine",
    keywords: ["ремонт двигателя BMW", "ремонт ГБЦ Мытищи"]
  },
  {
    title: "Ходовая и тормоза",
    slug: "hodovaya-i-tormoza",
    href: "/hodovaya-i-tormoza",
    description: "Стуки, вибрации, скрипы, биение, плохое торможение и согласованный ремонт.",
    accent: "green",
    icon: "disc",
    keywords: ["ремонт ходовой Мытищи", "ремонт тормозной системы Мытищи"]
  },
  {
    title: "Шиномонтаж",
    slug: "shinomontazh",
    href: "/shinomontazh",
    description: "Сезонная замена шин, балансировка и сопутствующие работы по предварительной записи.",
    accent: "orange",
    icon: "wrench",
    keywords: ["шиномонтаж Мытищи", "шинoмонтаж Волковское шоссе"]
  },
  {
    title: "Автокондиционер",
    slug: "avtokondicioner",
    href: "/avtokondicioner",
    description: "Заправка, диагностика системы и проверка возможных утечек автокондиционера.",
    accent: "blue",
    icon: "snowflake",
    keywords: ["заправка автокондиционера Мытищи"]
  }
];

export const allServices: ServiceItem[] = [
  ...primaryServices,
  {
    title: "Замена масла",
    slug: "zamena-masla",
    href: "/tehnicheskoe-obsluzhivanie#zamena-masla",
    description: "Масло и фильтры подбираются под автомобиль, работы согласуются до обслуживания.",
    accent: "orange",
    icon: "droplets"
  },
  {
    title: "Ремонт автоэлектрики",
    slug: "remont-avtoelektriki",
    href: "/uslugi#remont-avtoelektriki",
    description: "Ошибки датчиков, проводка, нестабильная работа электронных систем и диагностика цепей.",
    accent: "blue",
    icon: "zap"
  },
  {
    title: "Ремонт генераторов и стартеров",
    slug: "generatory-startery",
    href: "/uslugi#generatory-startery",
    description: "Проверка симптомов запуска и зарядки, согласование ремонта или замены.",
    accent: "dark",
    icon: "battery"
  },
  {
    title: "Ремонт выхлопной системы",
    slug: "remont-vyhlopnoy-sistemy",
    href: "/uslugi#remont-vyhlopnoy-sistemy",
    description: "Осмотр выхлопа, удаление катализаторов и сопутствующие работы по состоянию авто.",
    accent: "green",
    icon: "wrench"
  },
  {
    title: "Промывка инжектора",
    slug: "promyvka-inzhektora",
    href: "/uslugi#promyvka-inzhektora",
    description: "Помогает при симптомах нестабильной работы, если диагностика подтверждает необходимость.",
    accent: "orange",
    icon: "sparkles"
  },
  {
    title: "Антикор",
    slug: "antikor",
    href: "/uslugi#antikor",
    description: "Антикоррозийная обработка как отдельная услуга после осмотра состояния кузова.",
    accent: "green",
    icon: "shield"
  },
  {
    title: "Сварочные работы",
    slug: "svarochnye-raboty",
    href: "/uslugi#svarochnye-raboty",
    description: "Сварочные работы по результатам осмотра и согласования объёма.",
    accent: "dark",
    icon: "wrench"
  },
  {
    title: "Установка парктроников",
    slug: "ustanovka-parktronikov",
    href: "/uslugi#ustanovka-parktronikov",
    description: "Установка парктроников и сопутствующая автоэлектрика по предварительной записи.",
    accent: "blue",
    icon: "scan"
  },
  {
    title: "Полировка",
    slug: "polirovka",
    href: "/uslugi#polirovka",
    description: "Полировка автомобиля как отдельная работа после оценки состояния покрытия.",
    accent: "orange",
    icon: "sparkles"
  },
  {
    title: "Покраска автомобиля",
    slug: "pokraska-avtomobilya",
    href: "/uslugi#pokraska-avtomobilya",
    description: "Покрасочные работы требуют осмотра, оценки повреждений и согласования.",
    accent: "dark",
    icon: "paint"
  }
];

export const priceRows = [
  {
    service: "Нормочас",
    includes: "Работа специалиста по согласованному заказ-наряду",
    when: "Для ремонта, обслуживания и диагностики",
    note: "800–1500 ₽ в зависимости от работ и автомобиля"
  },
  {
    service: "Компьютерная диагностика",
    includes: "Считывание ошибок, первичный анализ симптомов, рекомендации",
    when: "Горит ошибка, машина дергается, есть непонятные симптомы",
    note: "Стоимость зависит от глубины проверки"
  },
  {
    service: "ТО и замена масла",
    includes: "Масло, фильтры, осмотр узлов по задаче клиента",
    when: "Регламентное обслуживание, подготовка к поездке",
    note: "Итог зависит от модели и расходников"
  },
  {
    service: "Ремонт двигателя",
    includes: "Диагностика, проверка сопутствующих узлов, согласованный ремонт",
    when: "Масложор, перегрев, ошибки, нестабильная работа",
    note: "Точная оценка только после диагностики"
  },
  {
    service: "Ходовая и тормоза",
    includes: "Осмотр, дефектовка, согласование деталей и работ",
    when: "Стуки, вибрации, скрипы, биение при торможении",
    note: "Зависит от перечня деталей и состояния авто"
  },
  {
    service: "Шиномонтаж",
    includes: "Сезонная замена шин, балансировка и сопутствующие работы",
    when: "Перед сезоном или при вибрациях после смены колес",
    note: "Уточняется по размеру колес и объёму работ"
  }
];
