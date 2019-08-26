/**
 *
 * ## TablesColumnMigration Migration Type
 * A higher order generator that creates a Tables column migration migrator.
 *
 * Migrate the same column on multiple tables
 *
 * @module tablesColumnMigration
 */

// local
import * as prompts from './prompts';

export default {
  parentType: 'tablesMigration',
  prompts,
};
