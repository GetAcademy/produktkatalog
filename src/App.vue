<template>
  <div id="app">
    <router-view :data="data" :metadata="metadata" />
  </div>
</template>

<script>
import oppsett from "@/oppsett";

export default {
  name: "App",
  data() {
    return oppsett;
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
