import { CrudService } from "hichchi-nestjs-crud";
import { SuccessResponse } from "hichchi-nestjs-common/responses";
import { QuizCollectionEntity } from "../entities/quiz-collection.entity";
import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { QuizCollectionRepository } from "../repositories/quiz-collection.repository";
import { QuizCollectionDto } from "../dtos/quiz-collection.dto";
import { QuizErrors } from "../responses/quiz.error.responses";

@Injectable()
export class QuizCollectionService extends CrudService<QuizCollectionEntity> {
    constructor(
        @InjectRepository(QuizCollectionRepository)
        protected readonly quizCollectionRepository: QuizCollectionRepository,
    ) {
        super(quizCollectionRepository, "quizCollection");
    }

    async getAllQuizCollections(userId?: string): Promise<QuizCollectionEntity[]> {
        const [collections] = await this.quizCollectionRepository.getMany({
            relations: ["answers"],
        });
        if (userId) {
            collections.forEach((collection) => {
                collection.userAnswers = collection.answers?.find((answer) => answer.userId === userId)?.answers;
            });
        }
        return collections;
    }

    async getQuizCollection(type: string, userId?: string): Promise<QuizCollectionEntity> {
        const collection = await this.quizCollectionRepository.getOne({
            where: { type },
            relations: ["answers"],
        });
        if (!collection) {
            throw new NotFoundException(QuizErrors.QUIZ_404_TYPE);
        }
        if (userId) {
            collection.userAnswers = collection.answers?.find((answer) => answer.userId === userId)?.answers;
        }
        return collection;
    }

    async saveQuizCollection(quizCollectionDto: QuizCollectionDto): Promise<QuizCollectionEntity> {
        const collection = await this.quizCollectionRepository.getOne({
            where: { type: quizCollectionDto.type },
        });
        if (!collection) {
            return this.quizCollectionRepository.save({
                type: quizCollectionDto.type,
                quizzes: quizCollectionDto.quizzes,
            });
        }
        return await this.quizCollectionRepository.updateAndGet(collection.id, {
            quizzes: quizCollectionDto.quizzes,
        });
    }

    async deleteQuizCollection(type: string): Promise<SuccessResponse> {
        const quizEntity = await this.quizCollectionRepository.getOne({ where: { type } });
        if (quizEntity) {
            await this.quizCollectionRepository.delete(quizEntity.id);
            return new SuccessResponse("Quiz collection deleted successfully");
        }
        throw new NotFoundException(QuizErrors.QUIZ_404_TYPE);
    }
}
