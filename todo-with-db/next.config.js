/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    POSTGRES_URL:
      "postgres://default:CT1HKgV8NBSe@ep-little-wave-996844-pooler.ap-southeast-1.postgres.vercel-storage.com:5432/verceldb",
    POSTGRES_PRISMA_URL:
      "postgres://default:CT1HKgV8NBSe@ep-little-wave-996844-pooler.ap-southeast-1.postgres.vercel-storage.com:5432/verceldb?pgbouncer=true&connect_timeout=15",
    POSTGRES_URL_NON_POOLING:
      "postgres://default:CT1HKgV8NBSe@ep-little-wave-996844.ap-southeast-1.postgres.vercel-storage.com:5432/verceldb",
    POSTGRES_USER: "default",
    POSTGRES_HOST:
      "ep-little-wave-996844-pooler.ap-southeast-1.postgres.vercel-storage.com",
    POSTGRES_PASSWORD: "CT1HKgV8NBSe",
    POSTGRES_DATABASE: "verceldb",
  },
};

module.exports = nextConfig;
