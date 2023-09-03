import { BaseRepository } from "hichchi-nestjs-crud";
import { QuizCollectionEntity } from "../entities/quiz-collection.entity";
import { Injectable } from "@nestjs/common/decorators/core/injectable.decorator";
import { InjectRepository } from "@nestjs/typeorm/dist/common/typeorm.decorators";
import { Repository } from "typeorm/repository/Repository";

@Injectable()
export class QuizCollectionRepository extends BaseRepository<QuizCollectionEntity> {
    constructor(
        @InjectRepository(QuizCollectionEntity)
        protected readonly quizCollectionRepository: Repository<QuizCollectionEntity>,
    ) {
        super(quizCollectionRepository);
    }
}
