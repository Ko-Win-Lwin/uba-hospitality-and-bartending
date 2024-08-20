import { createWebHistory, createRouter } from 'vue-router';

import HomePage from './pages/Home.page.vue';
import AboutPage from './pages/About.page.vue';
import CoursesPage from './pages/Courses.page.vue'
import GalleryPage from './pages/Gallery.page.vue'
import ServicesPage from './pages/Services.page.vue'
import ContactPage from './pages/Contact-Us.page.vue'
import NotFoundPage from './pages/NotFound.page.vue';

const routes = [
    { path: '/', component: HomePage }, // Default route
    { path: '/home', component: HomePage },
    { path: '/about', component: AboutPage },
    { path: '/courses', component: CoursesPage },
    { path: '/gallery', component: GalleryPage },
    { path: '/services', component: ServicesPage },
    { path: '/contact', component: ContactPage },
    { path: '/:pathMatch(.*)*', component: NotFoundPage },
];

export const router = createRouter({
    history: createWebHistory(),
    routes,
});
