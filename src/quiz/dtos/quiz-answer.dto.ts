import { IsNotEmpty, ValidateNested } from "class-validator";
import { QuizChoiceDto } from "./quiz-choice.dto";
import { Type } from "class-transformer";
import { IQuizAnswer } from "../interfaces";

export class QuizAnswerDto implements IQuizAnswer {
    @IsNotEmpty()
    id: string;

    @IsNotEmpty()
    @ValidateNested({ each: true })
    @Type(() => QuizChoiceDto)
    answer: QuizChoiceDto[];
}
