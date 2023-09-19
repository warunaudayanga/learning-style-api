// noinspection JSUnusedGlobalSymbols

import { MigrationInterface, QueryRunner } from "typeorm";

export class FixUserEntity1695067466587 implements MigrationInterface {
    name = 'FixUserEntity1695067466587'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`user\` ADD \`email\` varchar(255) NULL`);
        await queryRunner.query(`ALTER TABLE \`user\` ADD \`cot\` varchar(255) NULL`);
        await queryRunner.query(`ALTER TABLE \`user\` ADD \`cotOther\` varchar(255) NULL`);
        await queryRunner.query(`ALTER TABLE \`user\` ADD \`olMaths\` varchar(255) NULL`);
        await queryRunner.query(`ALTER TABLE \`user\` ADD \`olScience\` varchar(255) NULL`);
        await queryRunner.query(`ALTER TABLE \`user\` ADD \`olEnglish\` varchar(255) NULL`);
        await queryRunner.query(`ALTER TABLE \`user\` ADD \`alStream\` varchar(255) NULL`);
        await queryRunner.query(`ALTER TABLE \`user\` ADD \`alOther\` varchar(255) NULL`);
        await queryRunner.query(`ALTER TABLE \`user\` ADD \`alPassed\` tinyint NULL`);
        await queryRunner.query(`ALTER TABLE \`user\` ADD \`doneIct\` tinyint NULL`);
        await queryRunner.query(`ALTER TABLE \`user\` ADD \`comAppAssist3\` tinyint NULL`);
        await queryRunner.query(`ALTER TABLE \`user\` ADD \`ict4\` tinyint NULL`);
        await queryRunner.query(`ALTER TABLE \`user\` ADD \`hardware4\` tinyint NULL`);
        await queryRunner.query(`ALTER TABLE \`user\` ADD \`network4\` tinyint NULL`);
        await queryRunner.query(`ALTER TABLE \`user\` ADD \`graphic4\` tinyint NULL`);
        await queryRunner.query(`ALTER TABLE \`user\` ADD \`icSupporter4\` tinyint NULL`);
        await queryRunner.query(`ALTER TABLE \`user\` ADD \`softwareDev4\` tinyint NULL`);
        await queryRunner.query(`ALTER TABLE \`user\` ADD \`followOther\` tinyint NULL`);
        await queryRunner.query(`ALTER TABLE \`user\` ADD \`followedOther\` varchar(255) NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`user\` DROP COLUMN \`followedOther\``);
        await queryRunner.query(`ALTER TABLE \`user\` DROP COLUMN \`followOther\``);
        await queryRunner.query(`ALTER TABLE \`user\` DROP COLUMN \`softwareDev4\``);
        await queryRunner.query(`ALTER TABLE \`user\` DROP COLUMN \`icSupporter4\``);
        await queryRunner.query(`ALTER TABLE \`user\` DROP COLUMN \`graphic4\``);
        await queryRunner.query(`ALTER TABLE \`user\` DROP COLUMN \`network4\``);
        await queryRunner.query(`ALTER TABLE \`user\` DROP COLUMN \`hardware4\``);
        await queryRunner.query(`ALTER TABLE \`user\` DROP COLUMN \`ict4\``);
        await queryRunner.query(`ALTER TABLE \`user\` DROP COLUMN \`comAppAssist3\``);
        await queryRunner.query(`ALTER TABLE \`user\` DROP COLUMN \`doneIct\``);
        await queryRunner.query(`ALTER TABLE \`user\` DROP COLUMN \`alPassed\``);
        await queryRunner.query(`ALTER TABLE \`user\` DROP COLUMN \`alOther\``);
        await queryRunner.query(`ALTER TABLE \`user\` DROP COLUMN \`alStream\``);
        await queryRunner.query(`ALTER TABLE \`user\` DROP COLUMN \`olEnglish\``);
        await queryRunner.query(`ALTER TABLE \`user\` DROP COLUMN \`olScience\``);
        await queryRunner.query(`ALTER TABLE \`user\` DROP COLUMN \`olMaths\``);
        await queryRunner.query(`ALTER TABLE \`user\` DROP COLUMN \`cotOther\``);
        await queryRunner.query(`ALTER TABLE \`user\` DROP COLUMN \`cot\``);
        await queryRunner.query(`ALTER TABLE \`user\` DROP COLUMN \`email\``);
    }

}
