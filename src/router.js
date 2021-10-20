import { createRouter, createWebHistory } from 'vue-router';
import Home from './pages/Home.vue';
import Project from './pages/Project.vue';

const router = createRouter({
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
});

export default router;
