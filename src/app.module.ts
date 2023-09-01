import { MiddlewareConsumer, Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { HichchiCrudModule } from "hichchi-nestjs-crud";
import { HichchiAuthModule } from "hichchi-nestjs-auth";
import { UserModule } from "./user/user.module";
import { UserService } from "./user/services/user.service";
import { TaskModule } from "./task/task.module";
import { RegisterUserDto } from "./user/dtos/register-user.dto";
import { RouteInfo } from "@nestjs/common/interfaces";
import { JsonBodyMiddleware, RawBodyMiddleware } from "hichchi-nestjs-common/middlewares";
import configuration from "./core/config/configuration";
import { typeOrmOptions } from "./core/config/typeorm-options";

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
                jwt: {
                    secret: configuration().jwt.secret,
                    expiresIn: configuration().jwt.expiresIn,
                    refreshSecret: configuration().jwt.refreshSecret,
                    refreshExpiresIn: configuration().jwt.refreshExpiresIn,
                },
                registerDto: RegisterUserDto,
            },
        ),
        UserModule,
        TaskModule,
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
