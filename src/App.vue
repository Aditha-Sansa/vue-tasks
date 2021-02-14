<template>
  <div id="app">
    <Header />

    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <div class="container mx-auto py-6">
    <h1>Vuetasks</h1>
    <p>Type in to add a task. We've already added some tasks for you</p>
    </div>
    <div class="container mx-auto py-6">
      <!-- <TasksList /> -->
      <router-view/>
    </div>
  </div>
</template>

<script>
// import TasksList from "./components/TasksList.vue";
import Header from "./components/Header.vue";

export default {
  components: {
    Header,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
h1 {
  text-align: center;
}
</style>
