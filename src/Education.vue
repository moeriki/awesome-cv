<template>
  <v-layout>
    <v-flex xs12>
      <v-card>
        <v-list>
          <v-list-tile>
            <v-list-tile-action>
              <v-icon
                color="primary"
                large>
                {{ education.icon }}
              </v-icon>
            </v-list-tile-action>
            <h5 class="headline">
              {{ education.title }}
              <span class="subheading grey--text">
                {{ education.location }}, {{ education.dateFrom }} &ndash; {{ education.dateUntil }}
              </span>
            </h5>
          </v-list-tile>
        </v-list>
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
