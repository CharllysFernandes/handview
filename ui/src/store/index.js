import Vue from 'vue';
import Vuex from 'vuex';
import * as actions from './actions';
import * as getters from './getters';
import bible from './modules/bible';
import localstorage from './plugins/localstorage';

Vue.use(Vuex);

const debug = process.env.NODE_ENV !== 'production';

export default new Vuex.Store({
  actions,
  getters,
  plugins: [localstorage],
  modules: {
    bible,
  },
  strict: debug,
});
