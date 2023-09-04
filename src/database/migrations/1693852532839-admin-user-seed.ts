// noinspection JSUnusedGlobalSymbols

import { MigrationInterface, QueryRunner } from "typeorm"
import { pbkdf2Sync, randomBytes } from "crypto";
import { UserEntity } from "../../user/entities/user.entity";
import { UserRole } from "../../user/enums/user-role.enum";
import { Gender } from "../../user/enums/gender.enum";

export class AdminUserSeed1693852532839 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        const salt = randomBytes(32).toString("hex");
        const password = pbkdf2Sync("admin@123", salt, 10000, 64, "sha512").toString("hex");
        const dto: Partial<UserEntity> = {
            dob: new Date().toISOString().split("T")[0],
            gender: Gender.MALE,
            name: "Admin",
            regNo: "",
            role: UserRole.ADMIN,
            password,
            salt,
            username: "admin"
        }
        await queryRunner.manager.save(UserEntity, dto);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("DELETE FROM user WHERE username='admin';");
    }

}
