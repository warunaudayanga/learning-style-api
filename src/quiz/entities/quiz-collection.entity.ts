import { Column, OneToMany } from "typeorm";
import { IQuiz, IQuizAnswer } from "../interfaces";
import { QuizAnswersEntity } from "./quiz-answers.entity";
import { BaseEntity, HichchiEntity } from "@hichchi/nest-crud";

@HichchiEntity("quiz_collections")
export class QuizCollectionEntity extends BaseEntity {
    @Column()
    type: string;

    @Column({ type: "json" })
    quizzes: IQuiz[];

    @OneToMany(() => QuizAnswersEntity, (quizAnswer) => quizAnswer.quizCollection)
    answers: QuizAnswersEntity[];

    userAnswers?: IQuizAnswer[];
}
