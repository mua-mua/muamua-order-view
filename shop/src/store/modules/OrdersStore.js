/**
 * 注文一覧画面用store.
 */
import axios from 'axios';
import host from './../../host';

export default {
  state: {
    orders: []
  },
  mutations: {
    setOrders(state, orders) {
      state.orders = orders;
    }
  },
  actions: {
    async getOrders() {
      const response = await axios.get(`${host}/api/v1/order-detail/comments`);
      const orders = response.data.items;
      console.log(orders);
      commit('setOrders', orders);
    }
  }
};
