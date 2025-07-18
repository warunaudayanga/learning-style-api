import { Column, OneToMany } from "typeorm";
import { HichchiEntity, HichchiUserEntity, USER_ENTITY_TABLE_NAME } from "@hichchi/nest-crud";
import { AuthProvider } from "@hichchi/nest-connector/auth";
import { DoneICT, UserRole } from "../enums";
import { QuizAnswersEntity } from "../../quiz/entities";
import { User } from "../interfaces";

@HichchiEntity(USER_ENTITY_TABLE_NAME)
export class UserEntity extends HichchiUserEntity implements User {
    @Column()
    name: string;

    @Column({ nullable: true })
    declare email: string;

    @Column({ nullable: true })
    declare username: string;

    @Column()
    password: string;

    @Column({ default: UserRole.STUDENT })
    role: UserRole;

    @Column()
    regNo: string;

    @Column()
    dob: string;

    @Column()
    gender: string;

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

    @Column({ default: false })
    emailVerified: boolean;

    @Column({ type: "varchar", nullable: true })
    avatar: string | null;

    @Column({ type: "json", nullable: true })
    profileData: object | null;

    @Column({ type: "enum", enum: AuthProvider, nullable: false })
    signUpType: AuthProvider;
}
