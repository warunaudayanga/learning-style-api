import { Column, ManyToOne } from "typeorm";
import { BaseEntity, HichchiEntity, HichchiJoinColumn } from "@hichchi/nest-crud";
import { QuizCollectionEntity } from "./quiz-collection.entity";
import { IQuizAnswer } from "../interfaces";
import { UserEntity } from "../../user/entities";

@HichchiEntity("quiz_answers")
export class QuizAnswersEntity extends BaseEntity {
    @ManyToOne(() => QuizCollectionEntity, (quizCollection) => quizCollection.answers)
    @HichchiJoinColumn()
    quizCollection: QuizCollectionEntity;

    @Column({ nullable: true })
    quizCollectionId: string;

    @ManyToOne(() => UserEntity, (user) => user.answers)
    @HichchiJoinColumn()
    user: UserEntity;

    @Column({ nullable: true })
    userId: string;

    @Column({ type: "json" })
    answers: IQuizAnswer[];

    @Column({ type: "json", nullable: true })
    result?: object;
}
