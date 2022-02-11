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
    component: Home,
    meta: {
      title: "Home - Dr. Angela Akorsu's Website"
    }
  },
  {
    path: '/profile',
    name: 'Profile',
    component: Profile,
    meta: {
      title: "Profile - Dr. Angela Akorsu's Website"
    }
  },
  {
    path: '/associations',
    name: 'Associations',
    component: Associations,
    meta: {
      title: "Associations & Memberships - Dr. Angela Akorsu's Website"
    }
  },
  {
    path: '/gallery',
    name: 'Gallery',
    component: Gallery,
    meta: {
      title: "Gallery - Dr. Angela Akorsu's Website"
    }
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact,
    meta: {
      title: "Contact Me - Dr. Angela Akorsu's Website"
    }
  },
  {
    path: '/recognitions',
    name: 'Recognitions',
    component: Recognitions,
    meta: {
      title: "Awards & Recognitions - Dr. Angela Akorsu's Website"
    }
  },
  {
    path: '/books',
    name: 'Books',
    component: Books,
    meta: {
      title: "Books - Dr. Angela Akorsu's Website"
    }
  },
  {
    path: '/Articles',
    name: 'Articles',
    component: Articles,
    meta: {
      title: "Articles - Dr. Angela Akorsu's Website"
    }
  },
  {
    path: '/reports',
    name: 'Reports',
    component: Reports,
    meta: {
      title: "Reports - Dr. Angela Akorsu's Website"
    }
  },
  {
    path: '/research',
    name: 'Research',
    component: Research,
    meta: {
      title: "Research - Dr. Angela Akorsu's Website"
    }
  },
  //catch all 404
  {
    path: '/:catchAll(.*)',
    name: "Error404",
    component: Error404,
    meta: {
      title: "Page Not Found - Dr. Angela Akorsu's Website"
    }
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

// This callback runs before every route change, including on page load.
router.beforeEach((to, from, next) => {
  // This goes through the matched routes from last to first, finding the closest route with a title.
  // e.g., if we have `/some/deep/nested/route` and `/some`, `/deep`, and `/nested` have titles,
  // `/nested`'s will be chosen.
  const nearestWithTitle = to.matched.slice().reverse().find(r => r.meta && r.meta.title);

  // Find the nearest route element with meta tags.
  const nearestWithMeta = to.matched.slice().reverse().find(r => r.meta && r.meta.metaTags);

  const previousNearestWithMeta = from.matched.slice().reverse().find(r => r.meta && r.meta.metaTags);

  // If a route with a title was found, set the document (page) title to that value.
  if(nearestWithTitle) {
    document.title = nearestWithTitle.meta.title;
  } else if(previousNearestWithMeta) {
    document.title = previousNearestWithMeta.meta.title;
  }

  // Remove any stale meta tags from the document using the key attribute we set below.
  Array.from(document.querySelectorAll('[data-vue-router-controlled]')).map(el => el.parentNode.removeChild(el));

  // Skip rendering meta tags if there are none.
  if(!nearestWithMeta) return next();

  // Turn the meta tag definitions into actual elements in the head.
  nearestWithMeta.meta.metaTags.map(tagDef => {
    const tag = document.createElement('meta');

    Object.keys(tagDef).forEach(key => {
      tag.setAttribute(key, tagDef[key]);
    });

    // We use this to track which meta tags we create so we don't interfere with other ones.
    tag.setAttribute('data-vue-router-controlled', '');

    return tag;
  })
      // Add the meta tags to the document head.
      .forEach(tag => document.head.appendChild(tag));

  next();
});

export default router
