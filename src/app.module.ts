import { MiddlewareConsumer, Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { HichchiCrudModule } from "hichchi-nestjs-crud";
import { HichchiAuthModule } from "hichchi-nestjs-auth";
import { UserModule } from "./user/user.module";
import { UserService } from "./user/services/user.service";
import { RegisterUserDto } from "./user/dtos/register-user.dto";
import { RouteInfo } from "@nestjs/common/interfaces";
import { JsonBodyMiddleware, RawBodyMiddleware } from "hichchi-nestjs-common/middlewares";
import configuration from "./core/config/configuration";
import { typeOrmOptions } from "./core/config/typeorm-options";
import { QuizModule } from "./quiz/quiz.module";

const rawBodyRoutes: Array<RouteInfo> = [];

@Module({
    imports: [
        HichchiCrudModule.forRoot(typeOrmOptions),
        HichchiAuthModule.registerAsync(
            {
                imports: [UserModule],
                useExisting: UserService,
            },
            {
                cookies: {
                    sameSite: configuration().cookies.sameSite,
                    secure: configuration().cookies.secure,
                },
                jwt: {
                    secret: configuration().jwt.secret,
                    expiresIn: configuration().jwt.expiresIn,
                    refreshSecret: configuration().jwt.refreshSecret,
                    refreshExpiresIn: configuration().jwt.refreshExpiresIn,
                },
                redis: {
                    host: configuration().redis.host,
                    port: configuration().redis.port,
                    ttl: configuration().redis.ttl,
                    auth_pass: configuration().redis.password,
                },
                registerDto: RegisterUserDto,
            },
        ),
        UserModule,
        QuizModule,
    ],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {
    // noinspection JSUnusedGlobalSymbols
    configure(consumer: MiddlewareConsumer): MiddlewareConsumer | void {
        consumer
            .apply(RawBodyMiddleware)
            .forRoutes(...rawBodyRoutes)
            .apply(JsonBodyMiddleware)
            .exclude(...rawBodyRoutes)
            .forRoutes("*");
    }
}
