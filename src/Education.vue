<template>
  <v-layout>
    <v-flex xs12>
      <v-card>
        <v-card-title primary-title>
          <v-icon
            color="primary"
            large>
            {{ education.icon }}
          </v-icon>
          <h5 class="headline">
            {{ education.title }}
            <span class="subheading grey--text">
              {{ education.location }}, {{ education.dateFrom }} &ndash; {{ education.dateUntil }}
            </span>
          </h5>
        </v-card-title>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
import data from './data';

export default {
  data() {
    return {
      education: data.experience.education,
    };
  },
};
</script>
