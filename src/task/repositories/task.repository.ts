import { BaseRepository, CustomRepository } from "hichchi-nestjs-crud";
import { TaskEntity } from "../entities/task.entity";
import { InjectRepository } from "@nestjs/typeorm/dist/common/typeorm.decorators";
import { Repository } from "typeorm/repository/Repository";

export class TaskRepository extends BaseRepository<TaskEntity> {
    // constructor(@InjectRepository(TaskEntity) protected readonly userRepository: Repository<TaskEntity>) {
    //     super(userRepository);
    // }
}
