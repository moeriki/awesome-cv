<template>
  <v-layout wrap>
    <v-flex xs12 text-xs-center>
      <img :alt="caption" src="./assets/logo.svg" height="200">
    </v-flex>
    <v-flex xs12 text-xs-center>
      <h2 class="display-3">{{ name }}</h2>
      <div class="title">{{ title }}</div>
    </v-flex>
    <v-spacer/>
  </v-layout>
</template>

<script>
export default {
  props: {
    name: { required: true, type: String },
    title: { required: true, type: String },
  },
  data() {
    return {
      caption: `Picture of ${this.name}.`,
    };
  },
};
</script>

<style scoped>
.title {
  font-weight: 300;
}
</style>
