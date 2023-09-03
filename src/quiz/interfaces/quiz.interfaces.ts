import { PatternQuizCategory } from "../enums/pattern-quiz-category.enum";

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
