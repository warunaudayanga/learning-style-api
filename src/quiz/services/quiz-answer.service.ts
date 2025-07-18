import { CrudService } from "@hichchi/nest-crud";
import { Injectable } from "@nestjs/common";
import { QuizAnswerRepository } from "../repositories/quiz-answer.repository";
import { QuizAnswersDto } from "../dtos/quiz-answers.dto";
import { QuizCollectionService } from "./quiz-collection.service";
import { QuizType } from "../enums";
import { SuccessResponse, SuccessResponseDto } from "@hichchi/nest-connector";
import { QuizAnswers } from "../interfaces";

@Injectable()
export class QuizAnswerService extends CrudService<QuizAnswers> {
    constructor(
        protected readonly quizAnswerRepository: QuizAnswerRepository,
        private readonly quizCollectionService: QuizCollectionService,
    ) {
        super(quizAnswerRepository);
    }

    async saveQuizAnswers(userId: string, type: QuizType, quizAnswersDto: QuizAnswersDto): Promise<QuizAnswers | null> {
        const answers = await this.quizAnswerRepository.getOne({
            where: { quizCollection: { type }, user: { id: userId } },
        });
        if (!answers) {
            const quizCollection = await this.quizCollectionService.getQuizCollection(type);
            return this.save(
                {
                    quizCollection: { id: quizCollection.id },
                    user: { id: userId },
                    answers: quizAnswersDto.answers,
                    result: quizAnswersDto.result,
                },
                { skipCreate: true },
            );
        }
        return await this.quizAnswerRepository.updateAndGet(answers.id, {
            answers: quizAnswersDto.answers,
            result: quizAnswersDto.result,
        });
    }

    async getQuizAnswers(userId: string, type: QuizType): Promise<QuizAnswers> {
        return this.getOne({
            where: { quizCollection: { type }, user: { id: userId } },
            relations: ["quizCollection"],
        });
    }

    async deleteQuizAnswers(userId: string, type: QuizType): Promise<SuccessResponse> {
        const answers = await this.getQuizAnswers(userId, type);
        await this.delete(answers.id);
        return new SuccessResponseDto("Quiz answers deleted successfully");
    }
}
