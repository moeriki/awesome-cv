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
          <div class="headline">{{ education.title }}</div>
          <span class="grey--text">{{ education.institution }}, {{ education.dateFrom }} &ndash; {{ education.dateUntil }}</span>
        </v-card-title>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
import data from './data';

export default {
  data: () => ({
    education: data.education,
  }),
};
</script>
