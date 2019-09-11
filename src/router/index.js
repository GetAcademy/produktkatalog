import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import metadata from '@/metadata'

Vue.use(Router)

let komponenter = {};
for (let side of metadata.sider) {
  komponenter[side.navn] = Vue.component(side.navn, {
    data: function () {
      return {
      }
    },
    template: '<button v-on:click="count++">You clicked me {{ count }} times.</button>'
  })
}

let routes = metadata.sider.map(sidenavn => {
  return {
    path: '/' + sidenavn,
    name: sidenavn,
    component: HelloWorld
  }
})



routes.push({
  path: '/',
  name: 'HelloWorld',
  component: HelloWorld
});

export default new Router({ routes })
