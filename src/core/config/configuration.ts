// noinspection JSUnresolvedReference

import * as dotenv from "dotenv";
import { DatabaseTypes } from "@hichchi/nest-crud";
import { toNumber } from "@hichchi/utils";

dotenv.config();

export default () => ({
    app: {
        port: Number(process.env.PORT || process.env.APP_PORT) || 3000,
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
        secure: process.env.APP_COOKIE_SECURE === "true",
    },
    jwt: {
        secret: process.env.JWT_SECRET,
        expiresIn: toNumber(process.env.JWT_EXP || 60 * 60 * 24),
        refreshSecret: process.env.JWT_REFRESH_SECRET,
        refreshExpiresIn: toNumber(process.env.JWT_REFRESH_EXP || 60 * 60 * 24 * 30),
    },
    database: {
        type: (process.env.DATABASE_TYPE || "mysql") as DatabaseTypes,
        host: process.env.DATABASE_HOST || "localhost",
        user: process.env.DATABASE_USER || "admin",
        password: process.env.DATABASE_PASSWORD || "root",
        schema: process.env.DATABASE_SCHEMA || "ls-dev",
        port: toNumber(process.env.DATABASE_PORT || 3306),
        charset: "utf8mb4",
        synchronize: process.env.DATABASE_SYNC === "true",
        ssl: process.env.DATABASE_SSL === "true",
        sslMode: process.env.DATABASE_SSL_MODE || "require",
    },
    redis: {
        prefix: process.env.REDIS_PREFIX || "",
        ttl: Number(process.env.REDIS_CACHE_TTL) || 7890000,
        url: process.env.REDIS_URL!,
    },
    regex: {
        year: new RegExp(/^[1-9]\d{3,}$/),
        time: new RegExp(/^([0-1]?\d|2[0-3])(?::([0-5]?\d))?(?::([0-5]?\d))?$/),
        dateOnly: new RegExp(/^\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01])$/),
        pollCode: new RegExp(/^[-_\w]+$/),
    },
});
