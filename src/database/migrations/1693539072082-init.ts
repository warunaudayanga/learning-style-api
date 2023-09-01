import { MigrationInterface, QueryRunner } from "typeorm";

export class Init1693539072082 implements MigrationInterface {
    name = "Init1693539072082";

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`user\` (\`id\` varchar(36) NOT NULL, \`createdAt\` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP, \`createdBy\` varchar(255) NULL, \`updatedAt\` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP, \`updatedBy\` varchar(255) NULL, \`deletedAt\` timestamp(6) NULL, \`deletedBy\` varchar(255) NULL, \`name\` varchar(255) NOT NULL, \`username\` varchar(255) NOT NULL, \`password\` varchar(255) NOT NULL, \`salt\` varchar(255) NOT NULL, \`role\` enum ('admin', 'student') NOT NULL DEFAULT 'student', \`regNo\` varchar(255) NOT NULL, \`dob\` varchar(255) NOT NULL, \`gender\` varchar(255) NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`task\` (\`id\` varchar(36) NOT NULL, \`createdAt\` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP, \`createdBy\` varchar(255) NULL, \`updatedAt\` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP, \`updatedBy\` varchar(255) NULL, \`deletedAt\` timestamp(6) NULL, \`deletedBy\` varchar(255) NULL, \`name\` varchar(255) NOT NULL, \`time\` datetime NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE \`task\``);
        await queryRunner.query(`DROP TABLE \`user\``);
    }

}
