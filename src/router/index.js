import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '@/pages/Home.vue';
import Blog from '@/pages/Blog.vue';
import Resume from '@/pages/Resume.vue';
import Works from '@/pages/Works.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/works',
    name: 'Works',
    component: Works,
  },
  {
    path: '/blog',
    name: 'Blog',
    component: Blog,
  },
  {
    path: '/resume',
    name: 'Resume',
    component: Resume,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  linkExactActiveClass: 'nav__anchor--active',
  routes,
});

export default router;
