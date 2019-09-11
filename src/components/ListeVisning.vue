<template>
  <div>
    <h3>{{ metadata.overskrift }}</h3>
    <table>
      <tr v-for="felt in metadata.felt">
        <th>{{ felt.visningsnavn }}</th>
        <td>{{ data[felt.navn] }}</td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  name: "ListeVisning",
  props: ["data", "metadata"],
  data() {
    return {};
  }
};
</script>

<style scoped>
table {
  text-align: left;
}
</style>