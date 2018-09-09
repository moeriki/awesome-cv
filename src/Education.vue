<template>
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
          <timespan
            :text="education.location"
            :date-from="education.dateFrom"
            :date-until="education.dateUntil" />
        </h5>
      </v-list-tile>
    </v-list>
  </v-card>
</template>

<script>
import data from './data';
import Timespan from './components/Timespan.vue';

export default {
  components: { Timespan },
  data() {
    return {
      education: data.education,
    };
  },
};
</script>
