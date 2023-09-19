import { MigrationInterface, QueryRunner } from "typeorm";

export class FixUserEntity1695074805900 implements MigrationInterface {
    name = 'FixUserEntity1695074805900'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`user\` DROP COLUMN \`doneIct\``);
        await queryRunner.query(`ALTER TABLE \`user\` ADD \`doneIct\` varchar(255) NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`user\` DROP COLUMN \`doneIct\``);
        await queryRunner.query(`ALTER TABLE \`user\` ADD \`doneIct\` tinyint NULL`);
    }

}
