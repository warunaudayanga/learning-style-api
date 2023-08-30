import { BaseRepository, CustomRepository } from "hichchi-nestjs-crud";
import { UserEntity } from "../entities/user.entity";
import { Injectable } from "@nestjs/common/decorators/core/injectable.decorator";
import { InjectDataSource, InjectRepository } from "@nestjs/typeorm/dist/common/typeorm.decorators";
import { DataSource } from "typeorm/data-source/DataSource";
import { Repository } from "typeorm/repository/Repository";

// @CustomRepository(UserEntity)
// export class UserRepository extends BaseRepository<UserEntity> {}

// @Injectable()
// export class UserRepository extends BaseRepository<UserEntity> {
//     constructor(@InjectDataSource() protected readonly dataSource: DataSource) {
//         super(dataSource.getRepository(UserEntity));
//     }
// }

@Injectable()
export class UserRepository extends BaseRepository<UserEntity> {
    constructor(@InjectRepository(UserEntity) protected readonly userRepository: Repository<UserEntity>) {
        super(userRepository);
    }
}
