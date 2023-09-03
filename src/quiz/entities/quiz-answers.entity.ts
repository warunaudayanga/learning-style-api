import { Column, Entity, ManyToOne } from "typeorm";
import { BaseEntity } from "hichchi-nestjs-crud";
import { QuizCollectionEntity } from "./quiz-collection.entity";
import { IQuizAnswer } from "../interfaces/quiz.interfaces";
import { UserEntity } from "../../user/entities/user.entity";

@Entity("quiz_answers")
export class QuizAnswersEntity extends BaseEntity {
    @ManyToOne(() => QuizCollectionEntity, (quizCollection) => quizCollection.answers)
    quizCollection: QuizCollectionEntity;

    @Column({ nullable: true })
    quizCollectionId: string;

    @ManyToOne(() => UserEntity, (user) => user.answers)
    user: UserEntity;

    @Column({ nullable: true })
    userId: string;

    @Column({ type: "json" })
    answers: IQuizAnswer[];

    @Column({ type: "json", nullable: true })
    result?: object;
}
