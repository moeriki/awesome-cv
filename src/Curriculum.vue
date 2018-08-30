<template>
  <v-container>
    <v-layout
      class="main"
      wrap>
      <v-flex xs12>
        <intro />
      </v-flex>
      <v-flex xs12>
        <profile />
      </v-flex>
      <v-flex xs12>
        <education />
      </v-flex>
      <v-flex xs12>
        <h4 class="display-1">Experience</h4>
      </v-flex>
      <v-flex xs12>
        <employers />
      </v-flex>
      <v-flex xs12>
        <h4 class="display-1">Skills</h4>
      </v-flex>
      <v-flex xs12>
        <skills />
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import Education from './Education.vue';
import Employers from './Employers.vue';
import Intro from './Intro.vue';
import Profile from './Profile.vue';
import Skills from './Skills.vue';

export default {
  components: { Education, Employers, Intro, Profile, Skills },
};
</script>

<style scoped>
.main > div {
  margin-top: 16px;
}
h4 {
  margin-top: 32px;
}
</style>
