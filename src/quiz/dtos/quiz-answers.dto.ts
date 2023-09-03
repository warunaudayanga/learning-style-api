import { IsNotEmpty, IsOptional, ValidateNested } from "class-validator";
import { QuizAnswerDto } from "./quiz-answer.dto";
import { Type } from "class-transformer";

export class QuizAnswersDto {
    @IsNotEmpty()
    @ValidateNested({ each: true })
    @Type(() => QuizAnswerDto)
    answers: QuizAnswerDto[];

    @IsOptional()
    result?: object;
}
