import { Column, Entity } from "typeorm";
import { BaseEntity } from "hichchi-nestjs-crud";

@Entity("task")
export class TaskEntity extends BaseEntity {
    @Column()
    name: string;

    @Column()
    time: Date;
}
