/**
 *
 * ## BulkInsert Prompts
 * Prompts for the bulk insert migration.
 *
 * @module bulkInsert/prompts
 * @see module:bulkInsert
 */

/**
 * Extension on name
 *
 * @returns {module:typeDefs~PlopPrompt} The prompt
 */
module.exports.nameExt = {
  message:
    'Name the migration (will be appended after "bulk-insert-{{ modelTableName }}-"',
  type: 'name',
};
