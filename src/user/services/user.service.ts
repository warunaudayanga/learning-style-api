import { Injectable } from "@nestjs/common";
import { CrudService, SortOptions } from "@hichchi/nest-crud";
import { GoogleProfile, IUserService } from "@hichchi/nest-auth";
import { EntityId, PaginatedResponse, Pagination, QueryDeepPartial } from "@hichchi/nest-connector/crud";
import { UserRepository } from "../repositories";
import { UserRole } from "../enums";
import { User } from "../interfaces";
import { AuthProvider } from "@hichchi/nest-connector/auth";

@Injectable()
export class UserService extends CrudService<User> implements IUserService {
    constructor(protected readonly userRepository: UserRepository) {
        super(userRepository);
    }

    async updateUserById(id: EntityId, userDto: Partial<User>): Promise<User> {
        return await this.update(id, userDto);
    }

    async getUserById(id: EntityId): Promise<User | null> {
        return await this.get(id);
    }

    async getUserByUsername(username: string): Promise<(User & { username: string }) | null> {
        return await this.getOne({ where: { username } });
    }

    async getAllStudents(
        filters: QueryDeepPartial<User>,
        sort: SortOptions<User>,
        pagination: Pagination,
    ): Promise<PaginatedResponse<User>> {
        filters.role = UserRole.STUDENT;
        return await this.getMany({
            filters,
            sort: sort,
            pagination,
            relations: ["answers", "answers.quizCollection"],
        });
    }

    async getStudentById(id: string) {
        const role = UserRole.STUDENT;
        return await this.getOne({ where: { id, role }, relations: ["answers", "answers.quizCollection"] });
    }

    getUserByEmail(email: string): Promise<(User & { email: string }) | null> {
        return this.getOne({ where: { email } });
    }

    signUpUser(userDto: Partial<User>, signUpType: AuthProvider, profileData?: GoogleProfile): Promise<User | null> {
        return this.save({ ...userDto, signUpType, profileData });
    }
}
