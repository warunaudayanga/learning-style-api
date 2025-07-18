import { BaseRepository, HichchiRepository, Repository, InjectRepository } from "@hichchi/nest-crud";
import { QuizCollectionEntity } from "../entities";

@HichchiRepository(QuizCollectionEntity)
export class QuizCollectionRepository extends BaseRepository<QuizCollectionEntity> {
    constructor(@InjectRepository(QuizCollectionEntity) repository: Repository<QuizCollectionEntity>) {
        super(repository);
    }
}
