export function dataAccessCategories(): string {
  return 'data-access-categories';
}

export {default as categories, selectCategories, fetchCategoriesDone, fetchCategoriesStart, name } from './categories-slice'
export {loadCategoriesEpic} from './categories-effects'
