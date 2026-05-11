import type { Metadata } from "next";
import { business, siteConfig } from "./business";
import type { FaqItem } from "./faq";

export type BreadcrumbItem = {
  name: string;
  href: string;
};

export type PageSeo = {
  title: string;
  description: string;
  path: string;
  h1: string;
  breadcrumbs: BreadcrumbItem[];
};

const crumb = (name: string, href: string): BreadcrumbItem => ({ name, href });

export const pagesSeo = {
  home: {
    title: "Бим Моторс — автосервис BMW и MINI в Мытищах | Диагностика, ремонт, ТО",
    description:
      "Профильный автосервис BMW и MINI в Мытищах. Диагностика, ремонт двигателя, ходовой, тормозов, автоэлектрики, ТО и шиномонтаж. Рейтинг 4,8 на Яндекс.Картах, предварительная запись.",
    path: "/",
    h1: "Профильный автосервис BMW и MINI в Мытищах без лишних работ",
    breadcrumbs: [crumb("Главная", "/")]
  },
  services: {
    title: "Услуги автосервиса Бим Моторс в Мытищах | BMW, MINI, диагностика, ТО",
    description:
      "Компьютерная диагностика, ремонт BMW и MINI, ТО, двигатель, ходовая, тормоза, автоэлектрика, автокондиционер и шиномонтаж в Мытищах.",
    path: "/uslugi",
    h1: "Услуги автосервиса Бим Моторс",
    breadcrumbs: [crumb("Главная", "/"), crumb("Услуги", "/uslugi")]
  },
  bmw: {
    title: "Ремонт BMW в Мытищах | Сервис BMW Бим Моторс",
    description:
      "Ремонт BMW в Мытищах: диагностика причины, двигатель, B58, ходовая, тормоза, автоэлектрика, ТО и второе мнение после другого сервиса.",
    path: "/remont-bmw",
    h1: "Ремонт BMW в Мытищах с диагностикой причины, а не заменой всего подряд",
    breadcrumbs: [crumb("Главная", "/"), crumb("Ремонт BMW", "/remont-bmw")]
  },
  mini: {
    title: "Ремонт MINI в Мытищах | Диагностика и обслуживание MINI",
    description:
      "Ремонт и обслуживание MINI в Мытищах: диагностика, ТО, ходовая, тормоза, электрика и согласованный ремонт по предварительной записи.",
    path: "/remont-mini",
    h1: "Ремонт и обслуживание MINI в Мытищах",
    breadcrumbs: [crumb("Главная", "/"), crumb("Ремонт MINI", "/remont-mini")]
  },
  diagnostics: {
    title: "Компьютерная диагностика автомобиля в Мытищах | Диагностика BMW",
    description:
      "Компьютерная диагностика автомобиля, диагностика BMW и проверка авто перед покупкой в Мытищах. Ищем реальную причину неисправности.",
    path: "/diagnostika",
    h1: "Компьютерная диагностика и поиск реальной причины неисправности",
    breadcrumbs: [crumb("Главная", "/"), crumb("Диагностика", "/diagnostika")]
  },
  maintenance: {
    title: "ТО BMW и MINI в Мытищах | Замена масла и обслуживание авто",
    description:
      "Техническое обслуживание BMW, MINI и других автомобилей в Мытищах: замена масла, фильтров, осмотр перед поездкой и профилактика поломок.",
    path: "/tehnicheskoe-obsluzhivanie",
    h1: "Техническое обслуживание BMW, MINI и других автомобилей",
    breadcrumbs: [crumb("Главная", "/"), crumb("ТО", "/tehnicheskoe-obsluzhivanie")]
  },
  engine: {
    title: "Ремонт двигателя BMW и ГБЦ в Мытищах | Бим Моторс",
    description:
      "Ремонт двигателя и ГБЦ в Мытищах: диагностика перед ремонтом, масложор, перегрев, нестабильная работа, B58 и сопутствующие проверки.",
    path: "/remont-dvigatelya",
    h1: "Ремонт двигателя и ГБЦ в Мытищах",
    breadcrumbs: [crumb("Главная", "/"), crumb("Ремонт двигателя", "/remont-dvigatelya")]
  },
  suspension: {
    title: "Ремонт ходовой и тормозной системы в Мытищах | Подвеска BMW",
    description:
      "Ремонт ходовой, подвески BMW и тормозной системы в Мытищах: стуки, вибрации, скрипы, биение и согласование работ.",
    path: "/hodovaya-i-tormoza",
    h1: "Ремонт ходовой и тормозной системы",
    breadcrumbs: [crumb("Главная", "/"), crumb("Ходовая и тормоза", "/hodovaya-i-tormoza")]
  },
  tire: {
    title: "Шиномонтаж в Мытищах на Волковском шоссе | Сезонная замена шин",
    description:
      "Шиномонтаж в Мытищах по предварительной записи: сезонная замена шин, балансировка и проверка состояния шин на Волковском шоссе.",
    path: "/shinomontazh",
    h1: "Шиномонтаж в Мытищах по предварительной записи",
    breadcrumbs: [crumb("Главная", "/"), crumb("Шиномонтаж", "/shinomontazh")]
  },
  ac: {
    title: "Заправка и ремонт автокондиционера в Мытищах | Бим Моторс",
    description:
      "Заправка автокондиционера и ремонт системы кондиционирования в Мытищах: диагностика, проверка утечек и согласование работ.",
    path: "/avtokondicioner",
    h1: "Заправка и ремонт автокондиционера в Мытищах",
    breadcrumbs: [crumb("Главная", "/"), crumb("Автокондиционер", "/avtokondicioner")]
  },
  prices: {
    title: "Цены на работы и нормочас | Бим Моторс Мытищи",
    description:
      "Нормочас в автосервисе Бим Моторс — 800–1500 ₽. Стоимость ремонта зависит от марки, модели, состояния автомобиля и объёма работ.",
    path: "/ceny",
    h1: "Цены на работы и нормочас",
    breadcrumbs: [crumb("Главная", "/"), crumb("Цены", "/ceny")]
  },
  reviews: {
    title: "Отзывы клиентов о Бим Моторс | Автосервис BMW и MINI в Мытищах",
    description:
      "Клиенты отмечают опыт по BMW, диагностику без лишних работ, адекватные цены, человеческое отношение и предварительную запись.",
    path: "/otzyvy",
    h1: "Отзывы клиентов о Бим Моторс",
    breadcrumbs: [crumb("Главная", "/"), crumb("Отзывы", "/otzyvy")]
  },
  contacts: {
    title: "Контакты Бим Моторс в Мытищах | Телефон, адрес, график",
    description:
      "Контакты автосервиса Бим Моторс: Мытищи, Волковское ш., вл17/1. Телефон +7 (919) 779-29-58, график 10:00–21:00, воскресенье выходной.",
    path: "/kontakty",
    h1: "Контакты автосервиса Бим Моторс в Мытищах",
    breadcrumbs: [crumb("Главная", "/"), crumb("Контакты", "/kontakty")]
  },
  privacy: {
    title: "Политика конфиденциальности | Бим Моторс",
    description: "Политика конфиденциальности сайта автосервиса Бим Моторс.",
    path: "/politika-konfidencialnosti",
    h1: "Политика конфиденциальности",
    breadcrumbs: [crumb("Главная", "/"), crumb("Политика конфиденциальности", "/politika-konfidencialnosti")]
  },
  consent: {
    title: "Согласие на обработку персональных данных | Бим Моторс",
    description: "Согласие пользователя на обработку персональных данных при отправке заявки в Бим Моторс.",
    path: "/soglasie-na-obrabotku-dannyh",
    h1: "Согласие на обработку персональных данных",
    breadcrumbs: [crumb("Главная", "/"), crumb("Согласие на обработку данных", "/soglasie-na-obrabotku-dannyh")]
  }
} satisfies Record<string, PageSeo>;

export function absoluteUrl(path = "/"): string {
  const base = siteConfig.url.endsWith("/") ? siteConfig.url : `${siteConfig.url}/`;
  const normalizedPath = path.replace(/^\/+/, "");

  return new URL(normalizedPath, base).toString();
}

export function createMetadata(page: PageSeo): Metadata {
  const url = absoluteUrl(page.path);

  return {
    title: page.title,
    description: page.description,
    metadataBase: new URL(siteConfig.url),
    alternates: {
      canonical: url
    },
    openGraph: {
      title: page.title,
      description: page.description,
      url,
      siteName: business.name,
      locale: "ru_RU",
      type: "website"
    },
    twitter: {
      card: "summary_large_image",
      title: page.title,
      description: page.description
    }
  };
}

export function autoRepairJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": ["AutoRepair", "LocalBusiness"],
    name: business.name,
    url: siteConfig.url,
    telephone: business.phoneRaw,
    image: absoluteUrl("/images/service-bay.svg"),
    priceRange: "₽₽",
    address: {
      "@type": "PostalAddress",
      streetAddress: business.streetAddress,
      addressLocality: business.city,
      addressCountry: business.country
    },
    openingHours: business.openingHours,
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        opens: "10:00",
        closes: "21:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Sunday",
        opens: "00:00",
        closes: "00:00"
      }
    ],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: business.ratingValue,
      ratingCount: String(business.ratingCount),
      reviewCount: String(business.reviewCount)
    },
    paymentAccepted: "Cash, Credit Card",
    areaServed: ["Мытищи", "Волковское шоссе"],
    makesOffer: ["Диагностика", "Ремонт BMW", "Ремонт MINI", "ТО", "Шиномонтаж"]
  };
}

export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: business.name,
    url: siteConfig.url,
    telephone: business.phoneRaw,
    address: {
      "@type": "PostalAddress",
      streetAddress: business.streetAddress,
      addressLocality: business.city,
      addressCountry: business.country
    }
  };
}

export function websiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: business.name,
    url: siteConfig.url,
    inLanguage: "ru-RU"
  };
}

export function breadcrumbsJsonLd(items: BreadcrumbItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.href)
    }))
  };
}

export function faqJsonLd(items: FaqItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer
      }
    }))
  };
}

export function serviceJsonLd(name: string, description: string, path: string) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    serviceType: name,
    areaServed: {
      "@type": "City",
      name: business.city
    },
    provider: {
      "@type": "AutoRepair",
      name: business.name,
      telephone: business.phoneRaw,
      address: {
        "@type": "PostalAddress",
        streetAddress: business.streetAddress,
        addressLocality: business.city,
        addressCountry: business.country
      }
    },
    url: absoluteUrl(path)
  };
}
