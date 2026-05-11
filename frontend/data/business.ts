export const business = {
  name: "Бим Моторс",
  city: "Мытищи",
  address: "Мытищи, Волковское ш., вл17/1",
  streetAddress: "Волковское ш., вл17/1",
  country: "RU",
  phone: "+7 (919) 779-29-58",
  phoneRaw: "+79197792958",
  phoneHref: "tel:+79197792958",
  whatsappHref:
    "https://wa.me/79197792958?text=%D0%97%D0%B4%D1%80%D0%B0%D0%B2%D1%81%D1%82%D0%B2%D1%83%D0%B9%D1%82%D0%B5%21%20%D0%A5%D0%BE%D1%87%D1%83%20%D0%B7%D0%B0%D0%BF%D0%B8%D1%81%D0%B0%D1%82%D1%8C%D1%81%D1%8F%20%D0%B2%20%D0%91%D0%B8%D0%BC%20%D0%9C%D0%BE%D1%82%D0%BE%D1%80%D1%81.%20%D0%90%D0%B2%D1%82%D0%BE%D0%BC%D0%BE%D0%B1%D0%B8%D0%BB%D1%8C%3A%20______.%20%D0%9F%D1%80%D0%BE%D0%B1%D0%BB%D0%B5%D0%BC%D0%B0%2F%D1%83%D1%81%D0%BB%D1%83%D0%B3%D0%B0%3A%20______.",
  mapUrl: "https://yandex.com/maps/-/CPcXRZzf",
  rating: "4,8",
  ratingValue: "4.8",
  ratingCount: 86,
  reviewCount: 42,
  normalHour: "800–1500 ₽",
  schedule: [
    { day: "Понедельник", time: "10:00–21:00" },
    { day: "Вторник", time: "10:00–21:00" },
    { day: "Среда", time: "10:00–21:00" },
    { day: "Четверг", time: "10:00–21:00" },
    { day: "Пятница", time: "10:00–21:00" },
    { day: "Суббота", time: "10:00–21:00" },
    { day: "Воскресенье", time: "выходной" }
  ],
  openingHours: ["Mo-Sa 10:00-21:00"],
  features: ["Оплата картой", "Наличные", "Парковка", "Wi-Fi", "Предварительная запись"],
  profile: "Профильный сервис BMW и MINI, также работают с другими марками",
  brands: [
    "BMW",
    "MINI",
    "Alpina",
    "Audi",
    "Mercedes-Benz",
    "Volkswagen",
    "Volvo",
    "ŠKODA",
    "Opel",
    "Citroen",
    "Honda",
    "Porsche",
    "Ford",
    "Lexus",
    "Land Rover",
    "Subaru",
    "Suzuki",
    "Bentley",
    "китайские",
    "корейские",
    "японские",
    "европейские",
    "отечественные",
    "импортные",
    "легковые автомобили"
  ]
} as const;

export const siteConfig = {
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://bim-motors.ru",
  defaultTitle: "Бим Моторс — автосервис BMW и MINI в Мытищах",
  description:
    "Профильный автосервис BMW и MINI в Мытищах: диагностика, ремонт, ТО, автоэлектрика и шиномонтаж по предварительной записи.",
  analytics: {
    yandexMetrikaId: process.env.NEXT_PUBLIC_YANDEX_METRIKA_ID,
    googleAnalyticsId: process.env.NEXT_PUBLIC_GA_ID
  }
} as const;
