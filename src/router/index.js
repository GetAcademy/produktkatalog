import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import oppsett from '@/oppsett'
import ListeVisning from '@/components/ListeVisning'
import SkjemaVisning from '@/components/SkjemaVisning'
import Overskrift from '@/components/Overskrift'


Vue.use(Router)

let routes = [];
let metadata = oppsett.metadata;
for (let sideNavn in metadata.sider) {
  let side = metadata.sider[sideNavn];
  let malNavn = side.mal;
  let mal = metadata.maler[malNavn];
  //let tagger = mal.komponenter.map(k => `<${k} :data="${k}.data" :metadata="${k}.metadata"></${k}>`).join('');
  let tagger = mal.komponenter.map(k => `<${k} :data="data" :metadata="metadata"></${k}>`).join('');
  console.log(sideNavn);
  console.log(tagger);
  let komponent = Vue.component(sideNavn, {
    name: sideNavn,
    props: ['data', 'metadata'],
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
      component: komponent,
      props: true
    });
}
console.log(routes);
routes.push({
  path: '/',
  name: 'HelloWorld',
  component: HelloWorld
});

export default new Router({ routes })
