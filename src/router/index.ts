import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import Search from '../views/Search.vue';
import Notifications from '../views/Notifications.vue';
import Profile from '../views/Profile.vue';

const routes = [
  { path: '/', redirect: '/home' },
  { path: '/home', name: 'Home', component: Home },
  { path: '/search', name: 'Search', component: Search },
  { path: '/notifications', name: 'Notifications', component: Notifications },
  { path: '/profile', name: 'Profile', component: Profile },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
