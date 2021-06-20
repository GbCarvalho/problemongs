import { Column, MigrationInterface, QueryRunner, TableColumn } from "typeorm";

export class AddUsernameColumnToUsers1624147245686
  implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn(
      "users",
      new TableColumn({
        name: "username",
        type: "varchar",
        isNullable: false,
        isUnique: true,
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropColumn("users", "username");
  }
}
