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
          :link="project.link"
          small />
        <span class="subheading grey--text">
          {{ clients[project.clientId].title }}, {{ project.dateFrom }} &ndash; {{ project.dateUntil }}
        </span>
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

export default {
  components: { ExternalLink },
  data() {
    return {
      clients: data.experience.clients,
    };
  },
  props: {
    projects: { required: true, type: Array },
  },
};
</script>
