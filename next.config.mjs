/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  basePath: "/typescript-next",
  experimental: {
    appDir: true, // Увімкнення підтримки директорії `app`
  },
};

export default nextConfig;
