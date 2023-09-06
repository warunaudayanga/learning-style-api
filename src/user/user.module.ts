import { Module } from "@nestjs/common";
import { HichchiCrudModule } from "hichchi-nestjs-crud";
import { UserRepository } from "./repositories/user.repository";
import { UserService } from "./services/user.service";
import { UserEntity } from "./entities/user.entity";
import { UserController } from "./controllers/user.controller";

@Module({
    imports: [HichchiCrudModule.forFeature([UserEntity])],
    controllers: [UserController],
    providers: [UserRepository, UserService],
    exports: [HichchiCrudModule, UserRepository, UserService],
})
export class UserModule {}
