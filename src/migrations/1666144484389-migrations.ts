import { MigrationInterface, QueryRunner } from "typeorm";

export class migrations1666144484389 implements MigrationInterface {
    name = 'migrations1666144484389'

    public async up(queryRunner: QueryRunner): Promise<void> {
        // await queryRunner.query(`CREATE TABLE \`RoadMapNode\` (\`node_id\` int NOT NULL AUTO_INCREMENT, \`node_label\` varchar(255) NOT NULL, \`node_url\` varchar(255) NOT NULL, \`rmIdRmId\` int NULL, PRIMARY KEY (\`node_id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`NodeConnection\` (\`conn_id\` int NOT NULL AUTO_INCREMENT, \`conn_front\` int NOT NULL, \`conn_back\` int NOT NULL, \`connFrontNodeId\` int NULL, \`connBackNodeId\` int NULL, PRIMARY KEY (\`conn_id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`ALTER TABLE \`RoadMapNode\` ADD CONSTRAINT \`FK_4899ab1c564ef77242098fd0106\` FOREIGN KEY (\`rmIdRmId\`) REFERENCES \`RoadMap\`(\`rm_id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);

    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`RoadMapNode\` DROP FOREIGN KEY \`FK_4899ab1c564ef77242098fd0106\``);
        await queryRunner.query(`DROP TABLE \`NodeConnection\``);
        await queryRunner.query(`DROP TABLE \`RoadMapNode\``);
    }

}
