import { createRouter, createWebHistory } from 'vue-router';
import MainPage from '../pages/MainPage.vue';
import GamePage from '../pages/GamePage.vue';
import EndPage from '../pages/EndPage.vue';

const routes = [
  {
    path: '/',
    name: 'MainPage',
    component: MainPage,
  },
  {
    path: '/game/:game',
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
