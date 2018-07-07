<template>
  <v-layout wrap>
    <v-flex
      xs12
      text-xs-center>
      <avatar />
    </v-flex>
    <v-flex
      xs12
      text-xs-center>
      <h1 class="display-2 name">{{ name }}</h1>
      <h2 class="title">{{ title }}</h2>
    </v-flex>
    <v-flex xs12>
      <v-card>
        <v-list two-line>
          <v-list-tile
            v-for="contact in contacts"
            :href="contact.link"
            :key="contact.key">
            <v-list-tile-action>
              <v-icon
                color="primary"
                large>{{ contact.icon }}</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title>{{ contact.value }}</v-list-tile-title>
              <v-list-tile-sub-title>{{ contact.label }}</v-list-tile-sub-title>
            </v-list-tile-content>
          </v-list-tile>
        </v-list>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
import Avatar from './Avatar.vue';
import data from './data';

export default {
  components: { Avatar },
  data: () => ({
    contacts: data.profile.contacts,
    name: data.profile.name,
    title: data.profile.title,
  }),
};
</script>

<style lang="scss" scoped>
.title {
  font-weight: 300;
}
</style>
