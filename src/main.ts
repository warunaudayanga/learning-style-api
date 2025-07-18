// noinspection JSIgnoredPromiseFromCall

import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import * as cookieParser from "cookie-parser";
import helmet from "helmet";
import configuration from "./core/config/configuration";
import { hichchiBootstrap, LoggerService } from "@hichchi/nest-core";

async function bootstrap() {
    const app = await NestFactory.create(AppModule, {
        // logger: new LoggerService(),
        bodyParser: false,
    });

    app.use(cookieParser(configuration().cookies.secret));
    app.use(helmet());

    // app.useStaticAssets(join(__dirname, "..", "public"));
    // app.setBaseViewsDir(join(__dirname, "..", "views"));
    // app.setViewEngine("hbs");

    await hichchiBootstrap(app, {
        port: configuration().app.port,
        allowedOrigins: configuration().app.allowedOrigins,
        logger: new LoggerService(),
    });
}
// eslint-disable-next-line @typescript-eslint/no-floating-promises
bootstrap();
