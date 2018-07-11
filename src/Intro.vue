<template>
  <v-layout
    class="intro"
    wrap>
    <v-flex
      xs12
      text-xs-center>
      <avatar />
    </v-flex>
    <v-flex
      xs12
      text-xs-center>
      <h1 class="display-2">{{ name }}</h1>
      <div class="display-1 title">{{ title }}</div>
    </v-flex>
    <v-spacer />
  </v-layout>
</template>

<script>
import Avatar from './Avatar.vue';
import data from './data';

export default {
  components: { Avatar },
  data: () => ({
    contacts: data.profile.contacts,
    name: data.profile.name,
    title: data.profile.title,
  }),
};
</script>

<style scoped>
.intro {
  margin-bottom: 16px;
}
.title {
  font-weight: 300;
}
</style>
