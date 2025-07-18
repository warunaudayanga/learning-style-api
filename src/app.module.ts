import { MiddlewareConsumer, Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { UserModule } from "./user/user.module";
import { UserService } from "./user/services/user.service";
import { SignUpDto } from "./user/dtos/sign-up.dto";
import { RouteInfo } from "@nestjs/common/interfaces";
import configuration from "./core/config/configuration";
import { typeOrmOptions } from "./core/config/typeorm-options";
import { QuizModule } from "./quiz/quiz.module";
import { HichchiCrudModule } from "@hichchi/nest-crud";
import { HichchiAuthModule } from "@hichchi/nest-auth";
import { JsonBodyMiddleware, RawBodyMiddleware } from "@hichchi/nest-core";
import { AuthField } from "@hichchi/nest-connector/auth";

const rawBodyRoutes: Array<RouteInfo> = [];

@Module({
    imports: [
        HichchiCrudModule.forRoot(typeOrmOptions),
        HichchiAuthModule.register(
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
                    secret: configuration().jwt.secret!,
                    expiresIn: configuration().jwt.expiresIn!,
                    refreshSecret: configuration().jwt.refreshSecret!,
                    refreshExpiresIn: configuration().jwt.refreshExpiresIn!,
                },
                redis: {
                    ttl: configuration().redis.ttl,
                    prefix: configuration().redis.prefix,
                    url: configuration().redis.url,
                },
                authField: AuthField.USERNAME,
                signUpDto: SignUpDto,
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
