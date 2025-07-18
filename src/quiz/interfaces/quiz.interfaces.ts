import { Model } from "@hichchi/nest-connector/crud";
import { PatternQuizCategory } from "../enums";
import { User } from "../../user/interfaces";

export interface IQuizChoice {
    id: string;
    value: string;
}

export interface IQuiz {
    id: string;
    question: string;
    choices: IQuizChoice[];
    sequence: number;
}

export interface IQuizAnswer {
    id: string;
    answer: IQuizChoice[];
}

export interface IPatternQuizChoice extends IQuizChoice {
    category: PatternQuizCategory;
}

export interface IPatternQuiz extends IQuiz {
    choices: IPatternQuizChoice[];
    choiceCategories: PatternQuizCategory[];
}

export interface QuizCollection extends Model {
    type: string;
    quizzes: IQuiz[];
    answers: QuizAnswers[];
    userAnswers?: IQuizAnswer[];
}

export interface QuizAnswers extends Model {
    quizCollection: QuizCollection;
    quizCollectionId: string;
    user: User;
    userId: string;
    answers: IQuizAnswer[];
    result?: object;
}
