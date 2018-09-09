<template>
  <v-layout wrap>
    <v-flex xs12>
      <v-card>
        <v-list two-line>
          <v-list-tile
            v-for="contact in contacts"
            :href="contact.link"
            :key="contact._id">
            <v-list-tile-action>
              <v-icon
                color="primary"
                large>
                {{ contact.icon }}
              </v-icon>
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
export default {
  props: {
    contacts: { required: true, type: Array },
  },
};
</script>
