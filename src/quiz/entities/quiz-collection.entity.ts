import { Column, Entity, OneToMany } from "typeorm";
import { BaseEntity } from "hichchi-nestjs-crud";
import { IQuiz, IQuizAnswer } from "../interfaces/quiz.interfaces";
import { QuizAnswersEntity } from "./quiz-answers.entity";

@Entity("quiz_collections")
export class QuizCollectionEntity extends BaseEntity {
    @Column()
    type: string;

    @Column({ type: "json" })
    quizzes: IQuiz[];

    @OneToMany(() => QuizAnswersEntity, (quizAnswer) => quizAnswer.quizCollection)
    answers: QuizAnswersEntity[];

    userAnswers?: IQuizAnswer[];
}
