<template>
  <div>
    <v-avatar size=150>
      <img
        src="./assets/profile.jpg"
        :alt=caption>
    </v-avatar>
  </div>
</template>

<script>
import data from './data';

export default {
  data() {
    return {
      caption: `Picture of ${data.profile.name}`,
    };
  },
};
</script>
