// noinspection JSUnusedGlobalSymbols

import { MigrationInterface, QueryRunner } from "typeorm";

export class QuizEntitiesUpdate1693730014878 implements MigrationInterface {
    name = 'QuizEntitiesUpdate1693730014878'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`quiz_answers\` ADD \`result\` json NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`quiz_answers\` DROP COLUMN \`result\``);
    }

}
