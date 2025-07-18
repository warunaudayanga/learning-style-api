import { IsNotEmpty } from "class-validator";
import { IQuiz } from "../interfaces";

export class QuizCollectionDto {
    @IsNotEmpty()
    type: string;

    @IsNotEmpty()
    quizzes: IQuiz[];
}
