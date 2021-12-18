import stocks from '../../data/stocks';

export const stocklist = {
  state: {
    stocks: []
  },
  mutations: {
    setStocks(state, payload){
      state.stocks = payload;
    }
  },
  actions: {
    buyStock({ commit }, payload){
      commit();
    },
    initStocks({ commit }){
      commit('setStocks', stocks);
    }
  },
  getters: {
    stocks(state) {
      return state.stocks;
    }
  }
};