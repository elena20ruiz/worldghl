import { createRouter, createWebHistory } from 'vue-router';
import StartPage from '../pages/StartPage.vue';
import GamePage from '../pages/GamePage.vue';
import EndPage from '../pages/EndPage.vue';

const routes = [
  {
    path: '/',
    name: 'StartPage',
    component: StartPage,
  },
  {
    path: '/game/',
    name: 'GamePage',
    component: GamePage,
  },
  {
    path: '/end/',
    name: 'EndPage',
    component: EndPage,
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
