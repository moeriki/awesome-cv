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
            <v-list-tile-action class="stars">
              <v-icon
                class="halfAStar"
                v-if="skill.halfAStar">
                fas fa-star-half
              </v-icon>
              <v-icon
                v-if="skill.stars"
                v-for="index in skill.stars"
                :key="index">
                fas fa-star
              </v-icon>
            </v-list-tile-action>
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
        .filter(({ score }) => score > 0)
        .map(({ _id, description, score, title }) => ({
          _id,
          description,
          halfAStar: score % 2 === 1,
          stars: Math.floor(score / 2),
          title,
        })),
    };
  },
};
</script>

<style scoped>
.stars {
  align-items: center;
  flex-direction: row;
  justify-content: flex-end;
}
.halfAStar {
  transform: scaleX(-1);
}
</style>
