import { MigrationInterface, QueryRunner } from 'typeorm';

export class userRepository1671007066088 implements MigrationInterface {
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "user" ("id" SERIAL PRIMARY KEY NOT NULL,"firstname" CHAR(50) NOT NULL,"lastname" CHAR(50) NOT NULL,"email" CHAR(100) NOT NULL,"password" TEXT NOT NULL,"phone" CHAR(20) NOT NULL,"address" TEXT NOT NULL,"gender" CHAR(20) NOT NULL,"date_of_birth" DATE NOT NULL,"status" BOOLEAN NOT NULL DEFAULT true,"is_deleted" BOOLEAN NOT NULL DEFAULT false,"createdAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),"updatedAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now());`,
    );
  }

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "user" ("id" SERIAL PRIMARY KEY NOT NULL,"firstname" CHAR(50) NOT NULL,"lastname" CHAR(50) NOT NULL,"email" CHAR(100) NOT NULL,"password" TEXT NOT NULL,"phone" CHAR(20) NOT NULL,"address" TEXT NOT NULL,"gender" CHAR(20) NOT NULL,"date_of_birth" DATE NOT NULL,"status" BOOLEAN NOT NULL,"is_deleted" BOOLEAN NOT NULL,"createdAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),"updatedAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now());`,
    );
  }
}
