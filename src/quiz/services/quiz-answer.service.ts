import { CrudService } from "hichchi-nestjs-crud";
import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { QuizAnswersEntity } from "../entities/quiz-answers.entity";
import { QuizAnswerRepository } from "../repositories/quiz-answer.repository";
import { QuizAnswersDto } from "../dtos/quiz-answers.dto";
import { QuizCollectionService } from "./quiz-collection.service";
import { QuizType } from "../enums/quiz-type.enum";
import { SuccessResponse } from "hichchi-nestjs-common/responses";

@Injectable()
export class QuizAnswerService extends CrudService<QuizAnswersEntity> {
    constructor(
        @InjectRepository(QuizAnswerRepository)
        protected readonly quizAnswerRepository: QuizAnswerRepository,
        private readonly quizCollectionService: QuizCollectionService,
    ) {
        super(quizAnswerRepository, "quizAnswers");
    }

    async saveQuizAnswers(userId: string, type: QuizType, quizAnswersDto: QuizAnswersDto): Promise<QuizAnswersEntity> {
        const answers = await this.quizAnswerRepository.getOne({
            where: { quizCollection: { type }, user: { id: userId } },
        });
        if (!answers) {
            const quizCollection = await this.quizCollectionService.getQuizCollection(type);
            return this.save({
                quizCollection: { id: quizCollection.id },
                user: { id: userId },
                answers: quizAnswersDto.answers,
                result: quizAnswersDto.result,
            });
        }
        return await this.quizAnswerRepository.updateAndGet(answers.id, {
            answers: quizAnswersDto.answers,
            result: quizAnswersDto.result,
        });
    }

    async getQuizAnswers(userId: string, type: QuizType): Promise<QuizAnswersEntity> {
        return this.getOne({
            where: { quizCollection: { type }, user: { id: userId } },
            relations: ["quizCollection"],
        });
    }

    async deleteQuizAnswers(userId: string, type: QuizType): Promise<SuccessResponse> {
        const answers = await this.getQuizAnswers(userId, type);
        await this.delete(answers.id);
        return new SuccessResponse("Quiz answers deleted successfully");
    }
}
