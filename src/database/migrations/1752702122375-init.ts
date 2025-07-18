// noinspection JSUnusedGlobalSymbols

import { MigrationInterface, QueryRunner } from "typeorm";

export class Init1752702122375 implements MigrationInterface {
    name = "Init1752702122375";

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(
            `CREATE TABLE \`quiz_collections\` (\`id\` varchar(36) NOT NULL, \`createdAt\` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP, \`updatedAt\` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP, \`deletedAt\` timestamp(6) NULL, \`createdById\` varchar(255) NULL, \`updatedById\` varchar(255) NULL, \`deletedById\` varchar(255) NULL, \`type\` varchar(255) NOT NULL, \`quizzes\` json NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`,
        );
        await queryRunner.query(
            `CREATE TABLE \`quiz_answers\` (\`id\` varchar(36) NOT NULL, \`createdAt\` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP, \`updatedAt\` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP, \`deletedAt\` timestamp(6) NULL, \`createdById\` varchar(255) NULL, \`updatedById\` varchar(255) NULL, \`deletedById\` varchar(255) NULL, \`quizCollectionId\` varchar(255) NULL, \`userId\` varchar(255) NULL, \`answers\` json NOT NULL, \`result\` json NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`,
        );
        await queryRunner.query(
            `CREATE TABLE \`users\` (\`id\` varchar(36) NOT NULL, \`createdAt\` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP, \`updatedAt\` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP, \`deletedAt\` timestamp(6) NULL, \`createdById\` varchar(255) NULL, \`updatedById\` varchar(255) NULL, \`deletedById\` varchar(255) NULL, \`firstName\` varchar(255) NOT NULL, \`lastName\` varchar(255) NOT NULL, \`fullName\` varchar(255) NOT NULL, \`email\` varchar(255) NULL, \`username\` varchar(255) NULL, \`name\` varchar(255) NOT NULL, \`password\` varchar(255) NOT NULL, \`role\` varchar(255) NOT NULL DEFAULT 'student', \`regNo\` varchar(255) NOT NULL, \`dob\` varchar(255) NOT NULL, \`gender\` varchar(255) NOT NULL, \`cot\` varchar(255) NULL, \`cotOther\` varchar(255) NULL, \`olMaths\` varchar(255) NULL, \`olScience\` varchar(255) NULL, \`olEnglish\` varchar(255) NULL, \`alStream\` varchar(255) NULL, \`alOther\` varchar(255) NULL, \`alPassed\` tinyint NULL, \`doneIct\` varchar(255) NULL, \`comAppAssist3\` tinyint NULL, \`ict4\` tinyint NULL, \`hardware4\` tinyint NULL, \`network4\` tinyint NULL, \`graphic4\` tinyint NULL, \`icSupporter4\` tinyint NULL, \`softwareDev4\` tinyint NULL, \`followOther\` tinyint NULL, \`followedOther\` varchar(255) NULL, \`emailVerified\` tinyint NOT NULL DEFAULT 0, \`avatar\` varchar(255) NULL, \`profileData\` json NULL, \`signUpType\` enum ('local', 'google', 'facebook') NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`,
        );
        await queryRunner.query(
            `ALTER TABLE \`quiz_collections\` ADD CONSTRAINT \`FK_5ecc36bb38b02a10f8b3c41ce70\` FOREIGN KEY (\`createdById\`) REFERENCES \`users\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`,
        );
        await queryRunner.query(
            `ALTER TABLE \`quiz_collections\` ADD CONSTRAINT \`FK_e43e78d5729bcc6fa6b48b6f22c\` FOREIGN KEY (\`updatedById\`) REFERENCES \`users\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`,
        );
        await queryRunner.query(
            `ALTER TABLE \`quiz_collections\` ADD CONSTRAINT \`FK_13d5f7f132b72931a8ae0e68122\` FOREIGN KEY (\`deletedById\`) REFERENCES \`users\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`,
        );
        await queryRunner.query(
            `ALTER TABLE \`quiz_answers\` ADD CONSTRAINT \`FK_2cb346bbf3213efa7d214c2f400\` FOREIGN KEY (\`createdById\`) REFERENCES \`users\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`,
        );
        await queryRunner.query(
            `ALTER TABLE \`quiz_answers\` ADD CONSTRAINT \`FK_287c49c47a87d0a930b5e2077c9\` FOREIGN KEY (\`updatedById\`) REFERENCES \`users\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`,
        );
        await queryRunner.query(
            `ALTER TABLE \`quiz_answers\` ADD CONSTRAINT \`FK_f8baff8becb123bac7c4c72a429\` FOREIGN KEY (\`deletedById\`) REFERENCES \`users\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`,
        );
        await queryRunner.query(
            `ALTER TABLE \`quiz_answers\` ADD CONSTRAINT \`FK_quizAnswers_quizCollection\` FOREIGN KEY (\`quizCollectionId\`) REFERENCES \`quiz_collections\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`,
        );
        await queryRunner.query(
            `ALTER TABLE \`quiz_answers\` ADD CONSTRAINT \`FK_quizAnswers_user\` FOREIGN KEY (\`userId\`) REFERENCES \`users\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`,
        );
        await queryRunner.query(
            `ALTER TABLE \`users\` ADD CONSTRAINT \`FK_51d635f1d983d505fb5a2f44c52\` FOREIGN KEY (\`createdById\`) REFERENCES \`users\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`,
        );
        await queryRunner.query(
            `ALTER TABLE \`users\` ADD CONSTRAINT \`FK_52e97c477859f8019f3705abd21\` FOREIGN KEY (\`updatedById\`) REFERENCES \`users\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`,
        );
        await queryRunner.query(
            `ALTER TABLE \`users\` ADD CONSTRAINT \`FK_e9d50c91bd84f566ce0ac1acf44\` FOREIGN KEY (\`deletedById\`) REFERENCES \`users\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`,
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`users\` DROP FOREIGN KEY \`FK_e9d50c91bd84f566ce0ac1acf44\``);
        await queryRunner.query(`ALTER TABLE \`users\` DROP FOREIGN KEY \`FK_52e97c477859f8019f3705abd21\``);
        await queryRunner.query(`ALTER TABLE \`users\` DROP FOREIGN KEY \`FK_51d635f1d983d505fb5a2f44c52\``);
        await queryRunner.query(`ALTER TABLE \`quiz_answers\` DROP FOREIGN KEY \`FK_quizAnswers_user\``);
        await queryRunner.query(`ALTER TABLE \`quiz_answers\` DROP FOREIGN KEY \`FK_quizAnswers_quizCollection\``);
        await queryRunner.query(`ALTER TABLE \`quiz_answers\` DROP FOREIGN KEY \`FK_f8baff8becb123bac7c4c72a429\``);
        await queryRunner.query(`ALTER TABLE \`quiz_answers\` DROP FOREIGN KEY \`FK_287c49c47a87d0a930b5e2077c9\``);
        await queryRunner.query(`ALTER TABLE \`quiz_answers\` DROP FOREIGN KEY \`FK_2cb346bbf3213efa7d214c2f400\``);
        await queryRunner.query(`ALTER TABLE \`quiz_collections\` DROP FOREIGN KEY \`FK_13d5f7f132b72931a8ae0e68122\``);
        await queryRunner.query(`ALTER TABLE \`quiz_collections\` DROP FOREIGN KEY \`FK_e43e78d5729bcc6fa6b48b6f22c\``);
        await queryRunner.query(`ALTER TABLE \`quiz_collections\` DROP FOREIGN KEY \`FK_5ecc36bb38b02a10f8b3c41ce70\``);
        await queryRunner.query(`DROP TABLE \`users\``);
        await queryRunner.query(`DROP TABLE \`quiz_answers\``);
        await queryRunner.query(`DROP TABLE \`quiz_collections\``);
    }
}
