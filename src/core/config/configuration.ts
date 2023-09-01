// noinspection JSUnresolvedReference

import * as dotenv from "dotenv";
import { DatabaseType } from "typeorm";
import { toNumber } from "hichchi-utils";

dotenv.config();

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export default () => ({
    app: {
        port: Number(process.env.APP_PORT) || 3000,
        adminPassword: process.env.APP_ADMIN_DEFAULT_PASSWORD || "admin@123",
        allowedOrigins: String(process.env.APP_ALLOWED_ORIGINS).split(",") || [],
        webUrl: process.env.APP_WEB_URL || "http://localhost:4200",
        emailVerifyUrl: process.env.APP_EMAIL_VERIFY_URL,
        passwordResetUrl: process.env.APP_PASSWORD_RESET_URL,
        environment: process.env.NODE_ENV || "development",
    },
    cookies: {
        secret: process.env.APP_COOKIE_SECRET || "secret",
        sameSite: (process.env.APP_COOKIE_SAME_SITE || "none") as boolean | "none" | "lax" | "strict",
        secure: process.env.APP_COOKIE_INSECURE !== "true",
    },
    jwt: {
        secret: process.env.JWT_SECRET,
        expiresIn: toNumber(process.env.JWT_EXP) || 60 * 60 * 24,
        refreshSecret: process.env.JWT_REFRESH_SECRET,
        refreshExpiresIn: toNumber(process.env.JWT_REFRESH_EXP) || 60 * 60 * 24 * 30,
    },
    database: {
        type: (process.env.DATABASE_TYPE || "mysql") as DatabaseType,
        host: process.env.DATABASE_HOST || "localhost",
        user: process.env.DATABASE_USER || "admin",
        password: process.env.DATABASE_PASSWORD || "root",
        schema: process.env.DATABASE_SCHEMA || "ls-dev",
        port: toNumber(process.env.DATABASE_PORT) || 3306,
        charset: "utf8mb4",
        synchronize: process.env.DATABASE_SYNC === "true",
        ssl: process.env.DATABASE_SSL === "true",
        sslMode: process.env.DATABASE_SSL_MODE || "require",
    },
    redis: {
        prefix: process.env.REDIS_PREFIX || "",
        host: process.env.REDIS_HOST || "localhost",
        port: Number(process.env.REDIS_PORT) || 6379,
        password: process.env.REDIS_PASSWORD,
        ttl: Number(process.env.REDIS_CACHE_TTL) || 7890000,
        uri: `redis://${process.env.REDIS_HOST || "localhost"}:${process.env.REDIS_PORT || 6379}`,
    },
    regex: {
        year: new RegExp(/^[1-9]\d{3,}$/),
        time: new RegExp(/^([0-1]?\d|2[0-3])(?::([0-5]?\d))?(?::([0-5]?\d))?$/),
        dateOnly: new RegExp(/^\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01])$/),
        pollCode: new RegExp(/^[-_\w]+$/),
    },
});
