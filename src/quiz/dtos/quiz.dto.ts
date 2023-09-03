// noinspection JSUnusedGlobalSymbols

import { IsNotEmpty, ValidateNested } from "class-validator";
import { QuizChoiceDto } from "./quiz-choice.dto";
import { Type } from "class-transformer";
import { IQuiz } from "../interfaces/quiz.interfaces";

export class QuizDto implements Partial<IQuiz> {
    @IsNotEmpty()
    question: string;

    @IsNotEmpty()
    @ValidateNested({ each: true })
    @Type(() => QuizChoiceDto)
    choices: QuizChoiceDto[];

    @IsNotEmpty()
    sequence: number;
}
