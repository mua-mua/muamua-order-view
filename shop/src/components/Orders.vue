<template>
  <div class="orders">
    <h1>注文一覧</h1>
    <table>
      <thead>
        <tr>
          <th v-for='colomn in columns' :key='column.itemName'>{{ column.itemName }}</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for='order in orders' :key='order.message'>
          <td>{{ order.message }}</td>
          <td>{{ order.isProvided }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script lang="js">
  export default {
    data() {
      return {
        columns: [
          {
            itemName: '商品名'
            provideStatus: '提供'
          }
        ],
      };
    },
    computed: {
      orders() {
        return this.$store.state.orders.orders;
      }
    },
    methods: {
      getOrders() {
        this.$store.dispatch('orders/getOrders');
      }
    },
    created() {
      this.getOrders();
    }
  }
</script>
