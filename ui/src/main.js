import Vue from 'vue';
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';
import App from './App';


Vue.use(VueRouter);
Vue.use(VueResource);

Vue.http.options.emulateJSON = true;
// Vue.http.options.root = baseUrl
// Vue.transition('fade', { enterClass: 'fadeIn', leaveClass: 'fadeOut' })

import router from './router';
router.start(App, '#app');
