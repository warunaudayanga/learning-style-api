import { Module } from "@nestjs/common";
import { HichchiCrudModule } from "hichchi-nestjs-crud";
import { TaskRepository } from "./repositories/task.repository";
import { TaskEntity } from "./entities/task.entity";

@Module({
    imports: [HichchiCrudModule.forFeature([TaskEntity])],
    controllers: [],
    providers: [TaskRepository],
    exports: [HichchiCrudModule, TaskRepository],
})
export class TaskModule {}
