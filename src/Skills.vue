<template>
  <v-layout>
    <v-flex xs12>
      <v-card>
        <v-list two-line>
          <v-list-tile
            v-for="skill in skills"
            :key="skill._id">
            <v-list-tile-content>
              <v-list-tile-title>
                {{ skill.title }}
                <span :v-if="skill.icon">
                  <v-icon
                    color="red darken-2"
                    small>
                    {{ skill.icon }}
                  </v-icon>
                </span>
              </v-list-tile-title>
              <v-list-tile-sub-title>{{ skill.description }}</v-list-tile-sub-title>
            </v-list-tile-content>
            <v-list-tile-action class="stars">
              <v-rating
                dense
                half-increments
                :large="$vuetify.breakpoint.lg"
                readonly
                :small="$vuetify.breakpoint.xsOnly"
                :value="skill.stars" />
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
        .filter(({ score }) => score >= 5)
        .map(({ score, ...props }) => ({
          ...props,
          score,
          stars: score / 2,
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
