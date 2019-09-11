import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import metadata from '@/metadata'

Vue.use(Router)

let routes = [];
for (let sideNavn in metadata.sider) {
  let side = metadata.sider[sideNavn];
  let malNavn = side.mal;
  let mal = metadata.maler[malNavn];
  console.log(mal.komponenter);
  let tagger = mal.komponenter.map(k => `<${k} :data="${k}.data" :metadata="${k}.metadata"></${k}>`).join('');
  console.log(tagger);
  let komponent = Vue.component(sideNavn, {
    name: sideNavn,
    data: function () {
      return {
      }
    },
    template: `<div>${tagger}</div>`
  });
  routes.push(
    {
      path: '/' + sideNavn,
      name: sideNavn,
      component: komponent
    });
}

routes.push({
  path: '/',
  name: 'HelloWorld',
  component: HelloWorld
});

export default new Router({ routes })
