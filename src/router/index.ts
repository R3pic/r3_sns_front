import { createRouter, createWebHistory } from 'vue-router';
import { useUserStore } from '../stores/user';
import Home from '../views/Home.vue';
import Search from '../views/Search.vue';
import Notifications from '../views/Notifications.vue';
import Profile from '../views/Profile.vue';
import Login from '../views/Login.vue';
const routes = [
  { path: '/', component: Login },
  { path: '/home', name: 'Home', component: Home },
  { path: '/search', name: 'Search', component: Search },
  { path: '/notifications', name: 'Notifications', component: Notifications },
  { path: '/:username', name: 'Profile', component: Profile },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  const userStore = useUserStore();
  
  if (to.path !== '/' && !userStore.isLoggedIn) {
    console.log('User is not logged in');
    next('/');
  } else if (to.path === '/' && userStore.isLoggedIn) {
    console.log('User is logged in');
    next('/home');
  } else {
    next();
  }
});

export default router;
