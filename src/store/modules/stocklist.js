import stocks from '../../data/stocks';

export const stocklist = {
  state: {
    stocks: []
  },
  mutations: {
    setStocks(state, payload){
      state.stocks = payload;
    },
    randomizeStocks(state) {
      state.stocks.forEach(stock => {
        stock.price = Math.round(stock.price * (1 + Math.random() - 0.45));
      });
    },
  },
  actions: {
    buyStock({ commit }, payload){
      commit('buyStock', payload);
    },
    initStocks({ commit }){
      commit('setStocks', stocks);
    },
    randomizeStocks({ commit }) {
      commit('randomizeStocks');
    }
  },
  getters: {
    stocks(state) {
      return state.stocks;
    }
  }
};