import { Column, Entity, OneToMany } from "typeorm";
import { BaseEntity } from "hichchi-nestjs-crud";
import { IUserEntity } from "hichchi-nestjs-common/interfaces";
import { UserRole } from "../enums/user-role.enum";
import { QuizAnswersEntity } from "../../quiz/entities/quiz-answers.entity";
import { DoneICT } from "../../core/enums/done-ict.enum";

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

    @Column({ nullable: true })
    email: string;

    @Column({ nullable: true })
    cot: string;

    @Column({ nullable: true })
    cotOther: string;

    @Column({ nullable: true })
    olMaths: string;

    @Column({ nullable: true })
    olScience: string;

    @Column({ nullable: true })
    olEnglish: string;

    @Column({ nullable: true })
    alStream: string;

    @Column({ nullable: true })
    alOther: string;

    @Column({ nullable: true })
    alPassed: boolean;

    @Column({ nullable: true })
    doneIct: DoneICT;

    @Column({ nullable: true })
    comAppAssist3: boolean;

    @Column({ nullable: true })
    ict4: boolean;

    @Column({ nullable: true })
    hardware4: boolean;

    @Column({ nullable: true })
    network4: boolean;

    @Column({ nullable: true })
    graphic4: boolean;

    @Column({ nullable: true })
    icSupporter4: boolean;

    @Column({ nullable: true })
    softwareDev4: boolean;

    @Column({ nullable: true })
    followOther: boolean;

    @Column({ nullable: true })
    followedOther: string;

    @OneToMany(() => QuizAnswersEntity, (answers) => answers.user)
    answers: QuizAnswersEntity[];
}
