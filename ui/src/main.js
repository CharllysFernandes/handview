import Vue from 'vue';
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';
import I18n from './i18n';
import App from './App';

Vue.use(VueRouter);
Vue.use(VueResource);
Vue.use(I18n, {
  baseUrl: 'resources/i18n',
});

Vue.http.options.emulateJSON = true;
// Vue.http.options.root = baseUrl
// Vue.transition('fade', { enterClass: 'fadeIn', leaveClass: 'fadeOut' })

import router from './router';
import './external-libraries';

new Vue({
  router,
  render: h => h(App),
  beforeCreate() {
    this.$setLanguage('pt-BR');
  },
  methods: {
    switchLanguage(lang) {
      this.$setLanguage(lang);
    },
  },
}).$mount('#app');
