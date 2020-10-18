import {MigrationInterface, QueryRunner} from "typeorm";

export class init1603081329840 implements MigrationInterface {
    name = 'init1603081329840'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "currency" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "code" character varying NOT NULL, CONSTRAINT "PK_3cda65c731a6264f0e444cc9b91" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "supplier" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, CONSTRAINT "PK_2bc0d2cab6276144d2ff98a2828" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "user" ("id" SERIAL NOT NULL, "username" character varying NOT NULL, "password" character varying NOT NULL, "email" character varying, "firstName" character varying, "lastName" character varying, "createdAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT CURRENT_TIMESTAMP, "updatedAt" TIMESTAMP WITH TIME ZONE, "contractorId" integer, "supplierId" integer, CONSTRAINT "UQ_78a916df40e02a9deb1c4b75edb" UNIQUE ("username"), CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "contractor" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, CONSTRAINT "PK_27a7037ba4d95c429e611cef10e" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "execution_document" ("id" SERIAL NOT NULL, "createdAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT CURRENT_TIMESTAMP, "type" character varying NOT NULL, "currencyId" integer, CONSTRAINT "PK_de13730ba9e0a632345143584bc" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "invoice" ("id" SERIAL NOT NULL, "position" integer NOT NULL, "dateFinish" TIMESTAMP WITH TIME ZONE NOT NULL, "sumFinish" numeric(5,2) NOT NULL DEFAULT '0.0', "count" integer NOT NULL, "executionDocumentId" integer, "stageContractId" integer, CONSTRAINT "PK_15d25c200d9bcd8a33f698daf18" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "stage_contract" ("id" SERIAL NOT NULL, "stageNumber" integer NOT NULL, "dateStart" TIMESTAMP WITH TIME ZONE NOT NULL, "dateEnd" TIMESTAMP WITH TIME ZONE NOT NULL, "measureUnit" character varying NOT NULL, "sum" numeric(5,2) NOT NULL DEFAULT '0.0', "count" integer NOT NULL, "contractId" integer, CONSTRAINT "PK_fde5141100ca5f08f18b26ee110" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "contract" ("id" SERIAL NOT NULL, "type" character varying NOT NULL, "createdAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT CURRENT_TIMESTAMP, "currencyId" integer, "contractorId" integer, "supplierId" integer, CONSTRAINT "PK_17c3a89f58a2997276084e706e8" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "user" ADD CONSTRAINT "FK_54f29e99b1ea544f80ac31a3d50" FOREIGN KEY ("contractorId") REFERENCES "contractor"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "user" ADD CONSTRAINT "FK_031cdc2c9c5eb56d48b5bdb4e54" FOREIGN KEY ("supplierId") REFERENCES "supplier"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "execution_document" ADD CONSTRAINT "FK_b9c966e9f31d636e90a014bf321" FOREIGN KEY ("currencyId") REFERENCES "currency"("id") ON DELETE RESTRICT ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "invoice" ADD CONSTRAINT "FK_09093c332d0d2c063ec11bd0485" FOREIGN KEY ("executionDocumentId") REFERENCES "execution_document"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "invoice" ADD CONSTRAINT "FK_cfef6565e7453f807f0ca5d0f5e" FOREIGN KEY ("stageContractId") REFERENCES "stage_contract"("id") ON DELETE RESTRICT ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "stage_contract" ADD CONSTRAINT "FK_f61b87a60fbffba58783d76d6fc" FOREIGN KEY ("contractId") REFERENCES "contract"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "contract" ADD CONSTRAINT "FK_67fbad3a7aa24e0309aa820141b" FOREIGN KEY ("currencyId") REFERENCES "currency"("id") ON DELETE RESTRICT ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "contract" ADD CONSTRAINT "FK_7a1cb157702ed3be7693c40b668" FOREIGN KEY ("contractorId") REFERENCES "contractor"("id") ON DELETE RESTRICT ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "contract" ADD CONSTRAINT "FK_5f9aba86ffb85928d9bda6e9244" FOREIGN KEY ("supplierId") REFERENCES "supplier"("id") ON DELETE RESTRICT ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "contract" DROP CONSTRAINT "FK_5f9aba86ffb85928d9bda6e9244"`);
        await queryRunner.query(`ALTER TABLE "contract" DROP CONSTRAINT "FK_7a1cb157702ed3be7693c40b668"`);
        await queryRunner.query(`ALTER TABLE "contract" DROP CONSTRAINT "FK_67fbad3a7aa24e0309aa820141b"`);
        await queryRunner.query(`ALTER TABLE "stage_contract" DROP CONSTRAINT "FK_f61b87a60fbffba58783d76d6fc"`);
        await queryRunner.query(`ALTER TABLE "invoice" DROP CONSTRAINT "FK_cfef6565e7453f807f0ca5d0f5e"`);
        await queryRunner.query(`ALTER TABLE "invoice" DROP CONSTRAINT "FK_09093c332d0d2c063ec11bd0485"`);
        await queryRunner.query(`ALTER TABLE "execution_document" DROP CONSTRAINT "FK_b9c966e9f31d636e90a014bf321"`);
        await queryRunner.query(`ALTER TABLE "user" DROP CONSTRAINT "FK_031cdc2c9c5eb56d48b5bdb4e54"`);
        await queryRunner.query(`ALTER TABLE "user" DROP CONSTRAINT "FK_54f29e99b1ea544f80ac31a3d50"`);
        await queryRunner.query(`DROP TABLE "contract"`);
        await queryRunner.query(`DROP TABLE "stage_contract"`);
        await queryRunner.query(`DROP TABLE "invoice"`);
        await queryRunner.query(`DROP TABLE "execution_document"`);
        await queryRunner.query(`DROP TABLE "contractor"`);
        await queryRunner.query(`DROP TABLE "user"`);
        await queryRunner.query(`DROP TABLE "supplier"`);
        await queryRunner.query(`DROP TABLE "currency"`);
    }

}
