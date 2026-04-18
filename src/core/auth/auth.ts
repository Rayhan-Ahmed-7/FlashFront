import { betterAuth } from "better-auth";

export const auth = betterAuth({
  // By default betterAuth requires a database connection. Configure your adapter here (e.g. Prisma, Drizzle):
  // database: { ... },

  emailAndPassword: {
    enabled: true,
  },

  // other configurations, providers, etc.
});
