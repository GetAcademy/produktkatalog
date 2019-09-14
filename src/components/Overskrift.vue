<template>
  <div>
    <h3>{{ data.overskrift }}</h3>
    <p v-if="data.tekst">{{ data.tekst}}</p>
  </div>
</template>

<script>
export default {
  name: "Overskrift",
  props: ["data", "metadata"],
  data() {
    return {};
  }
};
</script>

<style scoped>
</style>