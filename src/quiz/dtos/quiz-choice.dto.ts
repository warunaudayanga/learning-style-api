import { IsNotEmpty } from "class-validator";
import { IQuizChoice } from "../interfaces/quiz.interfaces";

export class QuizChoiceDto implements IQuizChoice {
    @IsNotEmpty()
    id: string;

    @IsNotEmpty()
    value: string;
}
