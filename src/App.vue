<template>
  <v-app id="app">
    <curriculum v-bind="data" />
  </v-app>
</template>

<script>
import Curriculum from './Curriculum.vue';
import data from './data';

export default {
  name: 'App',
  components: { Curriculum },
  data() {
    return { data };
  },
};
</script>

<style>
html,
body {
  font-family: 'Roboto', sans-serif;
  height: 100%;
}
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
