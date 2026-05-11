const isGithubPages = process.env.GITHUB_PAGES === "true";
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

/** @type {import('next').NextConfig} */
const nextConfig = {
  poweredByHeader: false,
  reactStrictMode: true,
  output: isGithubPages ? "export" : undefined,
  basePath,
  assetPrefix: basePath || undefined,
  images: {
    formats: ["image/avif", "image/webp"],
    unoptimized: isGithubPages
  }
};

if (!isGithubPages) {
  nextConfig.rewrites = async () => {
    if (!process.env.LEAD_API_INTERNAL_URL) {
      return [];
    }

    return [
      {
        source: "/api/lead.php",
        destination: process.env.LEAD_API_INTERNAL_URL
      }
    ];
  };

  nextConfig.headers = async () => [
    {
      source: "/:path*",
      headers: [
        { key: "X-Content-Type-Options", value: "nosniff" },
        { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" }
      ]
    }
  ];
}

export default nextConfig;
