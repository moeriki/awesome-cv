<template>
  <span v-if="link">
    <a
      :aria-label="title"
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
    title: { required: true, type: String },
  },
};
</script>

<style scoped>
.external {
  text-decoration: none;
}
</style>
