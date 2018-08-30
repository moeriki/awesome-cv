<template>
  <v-layout wrap>
    <v-flex
      xs12
      text-xs-center>
      <avatar />
    </v-flex>
    <v-flex
      xs12
      text-xs-center>
      <h2 class="display-3">{{ name }}</h2>
      <div class="title">{{ title }}</div>
    </v-flex>
    <v-spacer />
  </v-layout>
</template>

<script>
import Avatar from './Avatar.vue';
import data from './data';

export default {
  components: { Avatar },
  data() {
    return {
      contacts: data.profile.contacts,
      name: data.profile.name,
      title: data.profile.title,
    };
  },
};
</script>

<style scoped>
.title {
  font-weight: 300;
}
</style>
