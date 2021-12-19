import Vue from 'vue';
import Vuex from 'vuex';

import { stocklist } from './modules/stocklist';
import { portfolio } from './modules/portfolio';
import actions from './actions';

Vue.use(Vuex);

export default new Vuex.Store({
  actions,
  modules: {
    stocklist,
    portfolio,
  },
});