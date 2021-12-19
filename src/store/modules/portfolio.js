export const portfolio = {
  state: {
    funds: 10000,
    stocks: [],
  },
  mutations: {
    buyStock(state, payload){
      const {stockId, stockPrice, quantity} = payload;
      const record = state.stocks.find(element => element.id === stockId);
      if(record) {
        record.quantity += quantity;
      }
      else {
        state.stocks.push({ id: stockId, quantity: quantity});
      }
      state.funds -= stockPrice * quantity;
    },
    sellStock(state, {stockId, stockPrice, quantity}){
      const record = state.stocks.find(element => element.id === stockId);
      if(record.quantity > quantity){
        record.quantity -= quantity;
      }
      else {
        state.stocks.splice(state.stocks.indexOf(record), 1);
      }
      state.funds += stockPrice * quantity;
    },
    setPortfolio(state, payload){
      state.funds = payload.funds;
      state.stocks = payload.stockPortfolio ? payload.stockPortfolio : [];
    },
  },
  actions: {
    sellStock({ commit }, payload){
      commit('sellStock', payload);
    }
  },
  getters: {
    stockPortfolio(state, getters) {
      return state.stocks.map(stock => {
        // stocks globais obtidas pelo getter "stocks" do outro modulo
        const record = getters.stocks.find(element => element.id === stock.id);
        return {
          id: stock.id,
          quantity: stock.quantity,
          name: record.name,
          price: record.price,
        }
      });
    },
    funds(state){
      return state.funds;
    }
  }
}