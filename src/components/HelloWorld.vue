<template>
  <div class="hello">
    <skjema-visning :data="person" :metadata="metadata" ></skjema-visning>
  </div>
</template>

<script>
import SkjemaVisning from './SkjemaVisning';

export default {
  name: 'HelloWorld',
  data () {
    return {
      person: {navn: 'Terje Kolderup', fødselsår: 1975},
      metadata: {
        overskrift: 'Hovedperson',
        felt: [
          { visningsnavn: 'Navn', navn: 'navn' },
          { visningsnavn: 'Fødselsår', navn: 'fødselsår' },
        ]
      }
    }
  },
  components: {SkjemaVisning}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
