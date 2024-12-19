/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  experimental: {
    appDir: true, // Увімкнення підтримки директорії `app`
  },
};

export default nextConfig;
