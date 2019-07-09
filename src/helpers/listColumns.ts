// external modules
import { QueryTypes } from 'sequelize';

// wildebeest
import { SequelizeMigrator } from '@wildebeest/types';

/**
 * The top level metadata for a column in the db
 */
export type ListedColumn = {
  /** Name of column */
  column_name: string;
  /** Type of column */
  data_type: string;
};

/**
 * List the columns that the table currently has
 *
 * @memberof module:migrations/helpers
 *
 * @returns The current table columns
 */
export default function listColumns(
  db: SequelizeMigrator,
  tableName: string,
): Promise<string[]> {
  return db
    .query(
      `SELECT column_name,data_type from information_schema.columns WHERE table_name='${tableName}'`,
      { type: QueryTypes.SELECT },
    )
    .then((columns: ListedColumn[]) =>
      columns.map(({ column_name }) => column_name),
    );
}
