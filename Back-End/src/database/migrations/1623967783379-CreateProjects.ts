import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateProjects1623967783379 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.createTable(
        new Table({
          name: 'projects',
          columns: [
            {
              name: 'id',
              type: 'uuid',
              isPrimary: true
            },
            {
              name: 'name',
              type: 'varchar'
            },
            {
              name: 'userId',
              type: 'varchar'
            },
            {
              name: 'ongProblemId',
              type: 'varchar'
            },
            {
              name: 'description',
              type: 'varchar',
            },
            {
              name: 'github',
              type: 'varchar'
            },
            {
              name: 'email',
              type: 'varchar'
            },
            {
              name: 'updated_at',
              type: 'timestamp',
              default: 'now()'
            }
          ]
        })
      )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
