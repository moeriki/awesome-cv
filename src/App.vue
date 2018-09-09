<template>
  <v-app id="app">
    <curriculum />
  </v-app>
</template>

<script>
import Curriculum from './Curriculum.vue';

export default {
  name: 'app',
  components: { Curriculum },
};
</script>

<style lang="scss">
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
