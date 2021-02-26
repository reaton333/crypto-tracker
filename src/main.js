import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// Font Awesome Icons
import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js'

// Prismic CMS and it's link resolver
// import PrismicVue from '@prismicio/vue'
// import linkResolver from './link-resolver.js';
// import Vue from 'vue';

// Vue.use(PrismicVue, {
//   endpoint: "https://the-crypto-masters-website.cdn.prismic.io/api/v2",
//   linkResolver
// });

createApp(App).use(router).mount('#app')
