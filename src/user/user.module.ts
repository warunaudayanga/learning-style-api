import { Module } from "@nestjs/common";
import { HichchiCrudModule } from "hichchi-nestjs-crud";
import { UserRepository } from "./repositories/user.repository";
import { UserService } from "./services/user.service";
import { UserEntity } from "./entities/user.entity";

@Module({
    imports: [HichchiCrudModule.forFeature([UserEntity])],
    controllers: [],
    providers: [UserRepository, UserService],
    exports: [HichchiCrudModule, UserRepository, UserService],
})
export class UserModule {}
