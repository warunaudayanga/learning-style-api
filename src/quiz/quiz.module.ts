import { Module } from "@nestjs/common";
import { HichchiCrudModule } from "hichchi-nestjs-crud";
import { QuizCollectionEntity } from "./entities/quiz-collection.entity";
import { QuizCollectionRepository } from "./repositories/quiz-collection.repository";
import { QuizCollectionService } from "./services/quiz-collection.service";
import { QuizAnswersController } from "./controllers/quiz-answers.controller";
import { QuizAnswersEntity } from "./entities/quiz-answers.entity";
import { QuizCollectionController } from "./controllers/quiz-collection.controller";
import { QuizAnswerService } from "./services/quiz-answer.service";
import { QuizAnswerRepository } from "./repositories/quiz-answer.repository";

@Module({
    imports: [HichchiCrudModule.forFeature([QuizCollectionEntity, QuizAnswersEntity])],
    controllers: [QuizCollectionController, QuizAnswersController],
    providers: [QuizCollectionService, QuizCollectionRepository, QuizAnswerService, QuizAnswerRepository],
    exports: [
        HichchiCrudModule,
        QuizCollectionService,
        QuizCollectionRepository,
        QuizAnswerService,
        QuizAnswerRepository,
    ],
})
export class QuizModule {}
