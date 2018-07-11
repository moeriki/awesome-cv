<template>
  <v-container>
    <v-layout wrap>
      <v-flex xs12>
        <intro />
      </v-flex>
      <v-flex xs12>
        <profile />
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import Intro from './Intro.vue';
import Profile from './Profile.vue';

export default {
  components: { Intro, Profile },
};
</script>
