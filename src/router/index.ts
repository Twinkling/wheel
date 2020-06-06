import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'ProgramEditor',
    component: () => import('@/views/program-editor.vue')
  }
];

const router = new VueRouter({
  routes
});

export default router;
