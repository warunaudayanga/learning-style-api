// noinspection JSUnusedGlobalSymbols

import { MigrationInterface, QueryRunner } from "typeorm";
import { UserEntity } from "../../user/entities";
import { Gender, UserRole } from "../../user/enums";
import { AuthService } from "@hichchi/nest-auth";

export class AdminUserSeed1752702657498 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        const password = AuthService.generateHash("admin@123");
        const dto: Partial<UserEntity> = {
            dob: new Date().toISOString().split("T")[0],
            gender: Gender.MALE,
            name: "Admin",
            firstName: "Super",
            lastName: "Admin",
            fullName: "Super Admin",
            regNo: "",
            role: UserRole.ADMIN,
            password,
            username: "admin",
        };
        await queryRunner.manager.save(UserEntity, dto);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("DELETE FROM users WHERE username='admin';");
    }
}
