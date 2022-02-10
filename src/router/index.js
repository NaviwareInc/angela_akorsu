import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import Profile from '@/views/Profile.vue'
import Associations from "@/views/Associations";
import Gallery from "@/views/Gallery";
import Contact from "@/views/Contact";
import Recognitions from "@/views/Recognitions";
import Books from "@/views/publications/Books";
import Articles from "@/views/publications/Articles";
import Reports from "@/views/publications/Reports";
import Research from "@/views/publications/Research";
import Error404 from "@/views/Error404";

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/profile',
    name: 'Profile',
    component: Profile,
  },
  {
    path: '/associations',
    name: 'Associations',
    component: Associations,
  },
  {
    path: '/gallery',
    name: 'Gallery',
    component: Gallery,
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact,
  },
  {
    path: '/recognitions',
    name: 'Recognitions',
    component: Recognitions,
  },
  {
    path: '/books',
    name: 'Books',
    component: Books,
  },
  {
    path: '/Articles',
    name: 'Articles',
    component: Articles,
  },
  {
    path: '/reports',
    name: 'Reports',
    component: Reports,
  },
  {
    path: '/research',
    name: 'Research',
    component: Research,
  },
  //catch all 404
  {
    path: '/:catchAll(.*)',
    name: "Error404",
    component: Error404
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
