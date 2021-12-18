import Vue from 'vue';
import Vuex from 'vuex';

import { stocklist } from './modules/stocklist';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    stocklist,
  },
});