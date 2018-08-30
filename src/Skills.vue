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
              <v-list-tile-sub-title>{{ skill.score }}</v-list-tile-sub-title>
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

const isNoLegacy = ({ legacy }) => legacy !== true;

export default {
  data() {
    return {
      skills: asArray(data.experience.skills)
        .filter(isNoLegacy)
        .map(({ _id, score, title }) => ({
          _id,
          halfAStar: score && score % 2 === 1,
          stars: score && Math.floor(score / 2),
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
