/**
 *
 * ## Remove Non Null Column Migration Generator
 * Remove a column that is not allowed to be null, and when down is run, allow the column to be null
 *
 * @module removeNonNullColumn
 */

// global
const linkToClass = require('@generators/utils/linkToClass');

module.exports = {
  configure: ({ modelTableName, columnName, modelContainer, model }) => ({
    name: `remove-non-null-column-${modelTableName}-${columnName}`,
    comment: `Remove non null column ${linkToClass(
      modelContainer,
      model,
      columnName,
    )}.`,
  }),
  description:
    'Remove a column that is not allowed to be null, and when down is run, allow the column to be null',
  type: 'tableColumnMigration',
};
