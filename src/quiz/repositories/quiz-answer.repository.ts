import { BaseRepository, HichchiRepository, Repository, InjectRepository } from "@hichchi/nest-crud";
import { QuizAnswersEntity } from "../entities";

@HichchiRepository(QuizAnswersEntity)
export class QuizAnswerRepository extends BaseRepository<QuizAnswersEntity> {
    constructor(@InjectRepository(QuizAnswersEntity) repository: Repository<QuizAnswersEntity>) {
        super(repository);
    }
}
