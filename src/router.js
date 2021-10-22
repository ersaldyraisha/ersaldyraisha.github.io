import { createRouter, createWebHistory } from 'vue-router';
import Home from './pages/Home.vue';
import Project from './pages/Project.vue';

export default createRouter({
  history: createWebHistory(),
  routes: [
    {
      name: 'home',
      path: '/',
      component: Home,
    },
    {
      name: 'project',
      path: '/project',
      component: Project,
    },
  ],
  scrollBehavior() {
    return { top: 0 };
  },
});
