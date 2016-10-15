import * as types from './mutation-types';

export const selectBook = ({ commit }, book) => {
  commit(types.SELECT_BOOK, {
    book,
  });
};
