// noinspection JSUnusedGlobalSymbols

import { MigrationInterface, QueryRunner } from "typeorm";

export class QuizEntities1693666726206 implements MigrationInterface {
    name = 'QuizEntities1693666726206'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`quiz_collections\` (\`id\` varchar(36) NOT NULL, \`createdAt\` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP, \`createdBy\` varchar(255) NULL, \`updatedAt\` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP, \`updatedBy\` varchar(255) NULL, \`deletedAt\` timestamp(6) NULL, \`deletedBy\` varchar(255) NULL, \`type\` varchar(255) NOT NULL, \`quizzes\` json NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`quiz_answers\` (\`id\` varchar(36) NOT NULL, \`createdAt\` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP, \`createdBy\` varchar(255) NULL, \`updatedAt\` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP, \`updatedBy\` varchar(255) NULL, \`deletedAt\` timestamp(6) NULL, \`deletedBy\` varchar(255) NULL, \`quizCollectionId\` varchar(255) NULL, \`userId\` varchar(255) NULL, \`answers\` json NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`ALTER TABLE \`quiz_answers\` ADD CONSTRAINT \`FK_cc2329a1f459071d312b87656df\` FOREIGN KEY (\`quizCollectionId\`) REFERENCES \`quiz_collections\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`quiz_answers\` ADD CONSTRAINT \`FK_731183677d09e50f6b22fe39840\` FOREIGN KEY (\`userId\`) REFERENCES \`user\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`quiz_answers\` DROP FOREIGN KEY \`FK_731183677d09e50f6b22fe39840\``);
        await queryRunner.query(`ALTER TABLE \`quiz_answers\` DROP FOREIGN KEY \`FK_cc2329a1f459071d312b87656df\``);
        await queryRunner.query(`DROP TABLE \`quiz_answers\``);
        await queryRunner.query(`DROP TABLE \`quiz_collections\``);
    }

}
