import Vue from 'vue';
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';
import App from './App.vue';
import 'vue-awesome/icons';
import Icon from 'vue-awesome/components/Icon.vue';
import { routes } from './routes.js';

Vue.component('icon', Icon);
Vue.use(VueRouter);
const router = new VueRouter({
  routes
  // mode: "history"
});

Vue.use(VueResource);
// Vue.http.options.root = "localhost:3434";

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
