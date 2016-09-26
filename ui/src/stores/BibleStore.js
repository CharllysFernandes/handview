import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

import * as bibleMutations from '../mutations/BibleMutations';

const state = {
  book: '',
};

const mutations = {
  [bibleMutations.SELECT_BOOK](state, data) {
    console.log(data);
    state.book = data.book;
  },
};

export default new Vuex.Store({
  strict: process.env.NODE_ENV !== 'production',
  state,
  mutations,
});
