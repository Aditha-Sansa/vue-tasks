<template>
  <div id="app">
    <div id="nav">
      <Header/>
      <!-- <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> -->
    </div>
    <div class="container mx-auto py-6">
    <router-view/>
    </div>
  </div>
</template>

<script>
import Header from "./components/Header.vue";
export default {
    components: {
    Header,
  }
}
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav a {
  /* font-weight: bold;
  color: #2c3e50; */
}

#nav a.router-link-exact-active {
  /* color: #42b983; */
}
</style>
