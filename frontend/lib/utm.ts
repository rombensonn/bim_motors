export type UtmData = {
  utm_source?: string;
  utm_medium?: string;
  utm_campaign?: string;
  utm_content?: string;
  utm_term?: string;
};

const UTM_KEYS = ["utm_source", "utm_medium", "utm_campaign", "utm_content", "utm_term"] as const;

export function captureUtmFromUrl(searchParams: URLSearchParams): UtmData {
  return UTM_KEYS.reduce<UtmData>((acc, key) => {
    const value = searchParams.get(key);
    if (value) {
      acc[key] = value.slice(0, 160);
    }
    return acc;
  }, {});
}

export function getStoredUtm(): UtmData {
  if (typeof window === "undefined") {
    return {};
  }

  try {
    const current = captureUtmFromUrl(new URLSearchParams(window.location.search));
    const hasCurrent = Object.values(current).some(Boolean);

    if (hasCurrent) {
      window.sessionStorage.setItem("bimMotorsUtm", JSON.stringify(current));
      return current;
    }

    const stored = window.sessionStorage.getItem("bimMotorsUtm");
    return stored ? (JSON.parse(stored) as UtmData) : {};
  } catch {
    return {};
  }
}
