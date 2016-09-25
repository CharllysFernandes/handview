/* eslint no-param-reassign: ["error", { "props": false }]*/
const I18n = {
  install(Vue) {
    const jquery = window.JQuery || window.$;
    if (!jquery) {
      throw new Error('JQuery is required.');
    }

    Vue.prototype.$language = 'pt-BR';
    Vue.prototype.$i18n = {};
    Vue.prototype.$setLanguage = function setLanguage(language, callback) {
      Vue.prototype.$language = '';
      Vue.prototype.$i18n = {};

      jquery.ajax({
        url: `assets/i18n/${language}.json`,
        dataType: 'json',
        type: 'GET',
        success(data) {
          Vue.prototype.$language = language;
          Vue.prototype.$i18n = data;
          // update(vm.$root);
          if (callback) {
            callback();
          }
        },
      });
      // Vue.$http.get(, (res) => {
      //  console.log(res);
      // });
    };
  },
};

export default I18n;
