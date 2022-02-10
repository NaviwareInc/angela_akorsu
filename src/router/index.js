import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import Profile from '@/views/Profile.vue'
import Associations from "@/views/Associations";
import Gallery from "@/views/Gallery";
import Contact from "@/views/Contact";
import Recognitions from "@/views/Recognitions";
import Books from "@/views/Books";
import Articles from "@/views/Articles";
import Reports from "@/views/Reports";
import Research from "@/views/Research";

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
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
