/**
 *
 * ## Rename Table Migration Generator
 * Rename a table
 *
 * @module renameTable
 * @see module:renameTable/prompts
 */

// local
const prompts = require('./prompts');

module.exports = {
  configure: ({ newName, oldName }) => ({
    name: `rename-table-to-${newName}`,
    comment: `Rename the table ${oldName} to ${newName}.`,
  }),
  description: 'Rename a table',
  prompts,
  type: 'dbMigration',
};
