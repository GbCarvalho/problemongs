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
              name: 'updated_at',
              type: 'timestamp',
              default: 'now()'
            }
          ]
        })
      );

      await queryRunner.createTable(new Table({
        name: 'projects_users_id_users',
        columns: [
            {
                 name: 'usersId',
                 type: 'uuid',
                 isPrimary: true,
            },
            {
                 name: 'projectsId',
                 type: 'uuid',
                 isPrimary: true,
            },
        ],
        foreignKeys: [
            {
                columnNames: ['usersId'],
                referencedColumnNames: ['id'],
                referencedTableName: 'users',
            },
            {
                columnNames: ['projectsId'],
                referencedColumnNames: ['id'],
                referencedTableName: 'projects',
            },
        ],
      }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {

      await queryRunner.dropTable("projects_users_users");
      await queryRunner.dropTable("projects");
    }

}
