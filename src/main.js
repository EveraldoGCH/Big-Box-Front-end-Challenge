import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router';
import {routes} from './router/routes';
import store from "./store/store";

Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'history',
  routes
});

Vue.prototype.$busqueda = ""

new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')

export default router
