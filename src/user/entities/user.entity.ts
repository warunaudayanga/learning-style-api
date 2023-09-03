import { Column, Entity, OneToMany } from "typeorm";
import { BaseEntity } from "hichchi-nestjs-crud";
import { IUserEntity } from "hichchi-nestjs-common/interfaces";
import { UserRole } from "../enums/user-role.enum";
import { QuizAnswersEntity } from "../../quiz/entities/quiz-answers.entity";

@Entity("user")
export class UserEntity extends BaseEntity implements IUserEntity {
    @Column()
    name: string;

    @Column()
    username: string;

    @Column()
    password: string;

    @Column()
    salt: string;

    @Column({ default: UserRole.STUDENT })
    role: UserRole;

    @Column()
    regNo: string;

    @Column()
    dob: string;

    @Column()
    gender: string;

    @OneToMany(() => QuizAnswersEntity, (answers) => answers.user)
    answers: QuizAnswersEntity[];
}
