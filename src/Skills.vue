<template>
  <v-card>
    <v-layout v-for="(category, categoryKey) of skillTree" :key="categoryKey" class="category" wrap>
      <v-flex class="title font-weight-light" xs12>{{ category.title }}</v-flex>
      <v-flex xs12>
        <v-layout v-for="(skill, skillKey) of category.children" :key="skillKey" wrap>
          <v-flex md1/>
          <v-flex class="skill" xs8 md7>
            {{ skill.title }}
            <span :v-if="skill.icon">
              <v-icon color="red darken-2" small>{{ skill.icon }}</v-icon>
            </span>
          </v-flex>
          <v-flex xs4 class="stars">
            <v-rating
              :large="$vuetify.breakpoint.lg"
              :small="$vuetify.breakpoint.xsOnly"
              :value="skill.stars || 5"
              dense
              half-increments
              readonly
            />
          </v-flex>
          <v-flex xs12>
            <v-layout v-for="(subSkill, subSkillKey) of skill.children" :key="subSkillKey">
              <v-flex xs1 md2/>
              <v-flex class="skill" xs7 md6>
                {{ subSkill.title }}
                <span :v-if="subSkill.icon">
                  <v-icon color="red darken-2" small>{{ subSkill.icon }}</v-icon>
                </span>
              </v-flex>
              <v-flex xs4 md4 class="stars">
                <v-rating
                  :large="$vuetify.breakpoint.lg"
                  :small="$vuetify.breakpoint.xsOnly"
                  :value="subSkill.stars"
                  dense
                  half-increments
                  readonly
                />
              </v-flex>
            </v-layout>
          </v-flex>
        </v-layout>
      </v-flex>
    </v-layout>
  </v-card>
</template>

<script>
import { transformEntries } from './utils';

export default {
  props: {
    categories: { required: true, type: Object },
    skills: { required: true, type: Object },
  },
  data() {
    const findChildren = (parentId) =>
      transformEntries((entries) =>
        entries
          .filter(([, { score }]) => score >= 5)
          .filter(([, { parent }]) => parent === parentId)
          .map(([skillId, skill]) => [
            skillId,
            {
              ...skill,
              children: findChildren(`skills.${skillId}`),
              stars: skill.score / 2,
            },
          ]),
      )(this.skills);
    return {
      skillTree: transformEntries((entries) =>
        entries.map(([id, category]) => [
          id,
          { ...category, children: findChildren(`categories.${id}`) },
        ]),
      )(this.categories),
    };
  },
};
</script>

<style scoped>
.category {
  padding: 16px 32px;
}
.category .skill {
  padding: 16px 0;
}
.stars {
  transform: scaleX(-1);
}
</style>
