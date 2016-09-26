import * as mutations from '../mutations/BibleMutations';

export function selectBook({ dispatch }, book) {
  dispatch(mutations.selectBook(book));
}
