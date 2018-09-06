<template>
  <v-expansion-panel>
    <v-expansion-panel-content
      v-for="project in projects"
      :key="project._id">
      <h6
        class="title font-weight-light"
        slot="header">
        {{ project.title }}
        <external-link
          :link="project.link || clients[project.clientId].link"
          small
          :title="clients[project.clientId].title" />
        <timespan
          :date-from="project.dateFrom"
          :date-until="project.dateUntil"
          :text="clients[project.clientId].title === project.title ? null : clients[project.clientId].title" />
      </h6>
      <v-card>
        <v-card-title class="role">
          <span class="grey--text">{{ project.role }}</span>
        </v-card-title>
        <v-card-text>{{ project.description }}</v-card-text>
      </v-card>
    </v-expansion-panel-content>
  </v-expansion-panel>
</template>

<script>
import data from './data';
import ExternalLink from './components/ExternalLink.vue';
import Timespan from './components/Timespan.vue';

export default {
  components: { ExternalLink, Timespan },
  data() {
    return {
      clients: data.experience.clients,
    };
  },
  props: {
    defaultLink: { default: null, type: String },
    projects: { required: true, type: Array },
  },
};
</script>
