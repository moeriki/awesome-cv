<template>
  <v-card>
    <v-list>
      <v-list-tile>
        <v-list-tile-action>
          <v-icon color="primary" large>{{ icon }}</v-icon>
        </v-list-tile-action>
        <h5 class="headline">
          {{ title }}
          <timespan :text="location" :date-from="dateFrom" :date-until="dateUntil"/>
        </h5>
      </v-list-tile>
    </v-list>
  </v-card>
</template>

<script>
import Timespan from './components/Timespan.vue';

export default {
  components: { Timespan },
  props: {
    dateFrom: { required: true, type: String },
    dateUntil: { required: true, type: String },
    icon: { required: true, type: String },
    location: { required: true, type: String },
    title: { required: true, type: String },
  },
};
</script>
