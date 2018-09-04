<template>
  <v-layout>
    <v-flex xs12>
      <v-card>
        <v-list two-line>
          <v-list-tile
            v-for="skill in skills"
            :key="skill._id">
            <v-list-tile-content>
              <v-list-tile-title>{{ skill.title }}</v-list-tile-title>
              <v-list-tile-sub-title>{{ skill.description }}</v-list-tile-sub-title>
            </v-list-tile-content>
            <v-list-action class="stars">
              <v-rating
                half-increments
                large
                readonly
                :value="skill.stars" />
            </v-list-action>
          </v-list-tile>
        </v-list>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
import data from './data';
import { asArray } from './utils';

export default {
  data() {
    return {
      skills: asArray(data.experience.skills)
        .filter(({ score }) => score >= 5)
        .map(({ _id, description, score, title }) => ({
          _id,
          description,
          stars: score / 2,
          title,
        })),
    };
  },
};
</script>

<style scoped>
.stars {
  transform: scaleX(-1);
}
</style>
