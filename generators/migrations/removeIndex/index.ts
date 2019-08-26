/**
 *
 * ## Remove Index Migration Generator
 * Remove an existing index
 *
 * @module removeIndex
 */

// global
import linkToClass from '@generators/utils/linkToClass';

// local
import * as prompts from './prompts';

export default {
  configure: ({ columns, modelContainer, model }) => ({
    name: `remove-index-${columns
      .map(({ columnName }) => columnName)
      .join('-')}`,
    comment: `Remove index on ${linkToClass(
      modelContainer,
      model,
    )} fields: ${columns.map(({ columnName }) => columnName).join(', ')}.`, // eslint-disable-line max-len
  }),
  description: 'Remove an existing index',
  prompts,
  type: 'tableColumnsMigration',
};
