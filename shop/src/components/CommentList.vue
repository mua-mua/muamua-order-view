<template>
  <div class="coment-list">
    <h1>Comment List</h1>
      <ul>
          <li v-bind:key="item.message" v-for="item in items">
              {{ item.message }}
          </li>
      </ul>
  </div>
</template>

<script lang="js">
import axios from "axios";
import host from "./../host";

export default {
  data: function() {
    return {
        items: []
    }
  },
  created: function() {
      getComments()
      .then(comments => {
          const items = comments.map(comment => {
              return {'message': comment};
          });
          this.$data.items = items;
      });
  },
  methods: {
  }
}

async function getComments() {
    const response = await axios.get(`${host}/api/v1/order-detail/comments`);
    return response.data;
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
