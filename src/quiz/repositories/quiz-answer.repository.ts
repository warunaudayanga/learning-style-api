import { BaseRepository } from "hichchi-nestjs-crud";
import { Injectable } from "@nestjs/common/decorators/core/injectable.decorator";
import { InjectRepository } from "@nestjs/typeorm/dist/common/typeorm.decorators";
import { Repository } from "typeorm/repository/Repository";
import { QuizAnswersEntity } from "../entities/quiz-answers.entity";

@Injectable()
export class QuizAnswerRepository extends BaseRepository<QuizAnswersEntity> {
    constructor(
        @InjectRepository(QuizAnswersEntity)
        protected readonly quizAnswerRepository: Repository<QuizAnswersEntity>,
    ) {
        super(quizAnswerRepository);
    }
}
