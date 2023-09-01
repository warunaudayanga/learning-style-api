import { MigrationInterface, QueryRunner } from "typeorm";

export class Init1693566840476 implements MigrationInterface {
    name = 'Init1693566840476'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "user" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "createdBy" character varying, "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedBy" character varying, "deletedAt" TIMESTAMP, "deletedBy" character varying, "name" character varying NOT NULL, "username" character varying NOT NULL, "password" character varying NOT NULL, "salt" character varying NOT NULL, "role" character varying NOT NULL DEFAULT 'student', "regNo" character varying NOT NULL, "dob" character varying NOT NULL, "gender" character varying NOT NULL, CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "user"`);
    }

}
