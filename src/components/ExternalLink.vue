<template>
  <span v-if="link">
    <a
      :aria-label="title"
      :href="link"
      class="external"
      @click.stop>
      <v-icon
        :large="large"
        :small="small"
        color="secondary">
        fal fa-link
      </v-icon>
    </a>
  </span>
</template>

<script>
export default {
  props: {
    large: { default: false, type: Boolean },
    link: { default: undefined, type: String },
    small: { default: false, type: Boolean },
    title: { default: undefined, type: String },
  },
};
</script>

<style scoped>
.external {
  text-decoration: none;
}
</style>
