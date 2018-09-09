<template>
  <v-layout>
    <v-flex xs12>
      <div
        v-for="employer in employers"
        :key="employer._id">
        <v-card class="employer">
          <v-card-title>
            <v-card-title primary-title>
              <h5 class="headline">
                {{ employer.title }}
                <external-link
                  :link="employer.link"
                  :title="employer.title" />
                <timespan
                  :date-from="employer.dateFrom"
                  :date-until="employer.dateUntil"
                  :text="employer.location" />
              </h5>
            </v-card-title>
            <v-card-text>{{ employer.description }}</v-card-text>
          </v-card-title>
        </v-card>
        <projects
          v-if="employer.projects.length !== 0"
          :projects="employer.projects"
          class="projects" />
      </div>
    </v-flex>
  </v-layout>
</template>

<script>
import data from './data';
import { asArray, matchesProperty, orderBy } from './utils';
import ExternalLink from './components/ExternalLink.vue';
import Timespan from './components/Timespan.vue';
import Projects from './Projects.vue';

export default {
  components: { ExternalLink, Projects, Timespan },
  data() {
    return {
      employers: asArray(data.experience.employers)
        .sort(orderBy('dateFrom'))
        .map((employer) => ({
          ...employer,
          projects: asArray(data.experience.projects)
            .filter(matchesProperty('employerId', employer._id))
            .sort(orderBy('dateFrom')),
        })),
    };
  },
};
</script>

<style scoped>
.employer {
  margin-top: 16px;
}
.location + .timespan::before {
  content: ', ';
}
.projects {
  margin-top: 8px;
}
</style>
