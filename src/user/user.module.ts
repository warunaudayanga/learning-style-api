import { Module } from "@nestjs/common";
import { HichchiCrudModule } from "@hichchi/nest-crud";
import { UserRepository } from "./repositories";
import { UserService } from "./services/user.service";
import { UserEntity } from "./entities";
import { UserController } from "./controllers/user.controller";

@Module({
    imports: [HichchiCrudModule.forFeature([UserEntity])],
    controllers: [UserController],
    providers: [UserRepository, UserService],
    exports: [HichchiCrudModule, UserRepository, UserService],
})
export class UserModule {}
