import { IsNotEmpty } from "class-validator";
import { IQuiz } from "../interfaces/quiz.interfaces";

export class QuizCollectionDto {
    @IsNotEmpty()
    type: string;

    @IsNotEmpty()
    quizzes: IQuiz[];
}
