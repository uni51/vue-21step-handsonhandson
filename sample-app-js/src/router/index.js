import Vue from 'vue';
import VueRouter from 'vue-router';
import HomeComponent from '@/views/Home.vue';
import ProfileComponent from '@/views/Profile.vue';
import ShareComponent from '@/views/Share.vue';
import SignInComponent from '@/views/SignIn.vue';
import { calendarRoutes } from '@/router/calendar/calendar';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeComponent,
    meta: {
      title: 'home',
    },
  },
  ...calendarRoutes,
  {
    path: '/profile',
    name: 'profile',
    component: ProfileComponent,
  },
  {
    path: '/share',
    name: 'share',
    component: ShareComponent,
  },
  {
    path: '/sign-in',
    name: 'sign-in',
    component: SignInComponent,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

router.afterEach(to => {
  if (!to.meta.title) {
    return;
  }

  document.title = to.meta.title;
});

export default router;
