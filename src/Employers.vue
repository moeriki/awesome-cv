<template>
  <v-layout>
    <v-flex xs12>
      <v-card
        class="employer"
        v-for="employer in employers"
        :key="employer._id">
        <v-card-title>
          <v-card-title primary-title>
            <h5 class="headline">
              {{ employer.title }}
              <span class="subheading grey--text">
                {{ employer.dateFrom }} &ndash; {{ employer.dateUntil }}
              </span>
            </h5>
          </v-card-title>
          <v-card-text>{{ employer.description }}</v-card-text>
        </v-card-title>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
import data from './data';
import { asArray } from './utils';

export default {
  data: () => ({
    employers: asArray(data.employers),
  }),
};
</script>

<style scoped>
.employer + .employer {
  margin-top: 16px;
}
</style>
