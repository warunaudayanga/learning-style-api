import { CrudService } from "hichchi-nestjs-crud";
import { UserEntity } from "../entities/user.entity";
import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { IUserService } from "hichchi-nestjs-auth";
import { UserRepository } from "../repositories/user.repository";

@Injectable()
export class UserService extends CrudService<UserEntity> implements IUserService {
    constructor(@InjectRepository(UserRepository) protected readonly userRepository: UserRepository) {
        super(userRepository, "user");
    }

    async createUser(registerUserDto: Partial<UserEntity>): Promise<UserEntity> {
        return await this.save(registerUserDto);
    }

    async updateUserById(id: string, userDto: Partial<UserEntity>): Promise<UserEntity> {
        return await this.update(id, userDto);
    }

    async getUserById(id: string): Promise<UserEntity | undefined> {
        return await this.get(id);
    }

    async getUserByUsername(username: string): Promise<UserEntity | undefined> {
        return await this.getOne({ where: { username } });
    }
}
