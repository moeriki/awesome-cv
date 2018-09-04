<template>
  <span v-if="link">
    <a
      @click.stop
      :href="link"
      class="external">
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
    link: { default: null, type: String },
    small: { default: false, type: Boolean },
  },
};
</script>

<style scoped>
.external {
  text-decoration: none;
}
</style>
