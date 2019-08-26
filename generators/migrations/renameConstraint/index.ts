/**
 *
 * ## Rename Constraint Migration Generator
 * Rename a table column constraint
 *
 * @module renameConstraint
 */

// external modules
import kebabCase from 'lodash/kebabCase';

// global
import linkToClass from '@generators/utils/linkToClass';

// local
import * as prompts from './prompts';

export default {
  configure: ({ modelContainer, model, columnName, newName, oldName }) => ({
    name: `rename-constraint-${kebabCase(newName)}`,
    comment: `Rename the constraint ${oldName} for ${linkToClass(
      modelContainer,
      model,
      columnName,
    )} to ${newName}.`,
  }),
  description: 'Rename a table column constraint',
  prompts,
  type: 'tableColumnMigration',
};
