/* eslint-disable no-param-reassign,no-shadow*/
import * as types from '../mutation-types';

const state = {
  book: JSON.parse(localStorage.getItem('bible.book')) || '',
};

// mutations
const mutations = {
  [types.SELECT_BOOK](state, { book }) {
    state.book = book;
  },
};

export default {
  state,
  mutations,
};
