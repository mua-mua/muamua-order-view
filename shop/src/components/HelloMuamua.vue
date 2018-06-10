<template>
  <div class="muamua">
    <h1>Hello MuaMua</h1>
    <div>
      <h2>Comments</h2>
      <input v-model="comment" placeholder="input a comment">
      <p>Comment is {{ comment }} </p>
      <button v-on:click="hoge">POST</button>
    </div>
  </div>
</template>

<script lang="js">
import axios from "axios";

export default {
  data: function() {
    return {
      comment: ""
    }
  },
  methods: {
    hoge: function() {
      const comment = this.comment;
      const data = {"comment": comment};

      // axios({
      //   method: "post",
      //   url: "https://damp-lowlands-89879.herokuapp.com/api/v1/order-detail/comment",
      //   data: data
      // });

      axios({
        method: "post",
        url: "/api/v1/order-detail/comment",
        data: data
      });
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
