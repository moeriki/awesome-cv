<template>
  <span class="subheading grey--text">
    <span
      v-if="text"
      class="text">
      {{ text }}
    </span>
    <span
      v-if="dateFrom"
      class="dateFrom">
      {{ dateFrom }}
    </span>
    <span
      v-if="dateUntil"
      class="dateUntil">
      {{ dateUntil }}
    </span>
  </span>
</template>

<script>
export default {
  props: {
    dateFrom: { default: null, type: String },
    dateUntil: { default: null, type: String },
    text: { default: null, type: String },
  },
};
</script>

<style scoped>
.text + .dateFrom::before {
  content: ',';
}
.dateFrom + .dateUntil::before {
  content: '–';
}
</style>
