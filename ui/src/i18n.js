/* eslint no-param-reassign: ["error", { "props": false }]*/
/* eslint no-underscore-dangle: "off"*/
import jquery from 'jquery';

/**
 * Updates all the watchers in the Vue instance of a component tree.
 *
 * This function is inspired by the "_digest()" function in the
 * "src/instance/scope.js" of the source of Vue.js, excepts that this function
 * updates the children components no matter whether it is inheritable.
 *
 * @param vm
 *    the root of the component tree.
 */
function update(vm) {
  if (!vm._watchers) {
    return;
  }

  let i = vm._watchers.length;
  while (i--) {
    vm._watchers[i].update(true); // shallow updates
  }
  const children = vm.$children;
  i = children.length;
  while (i--) {
    const child = children[i];
    update(child);
  }
}


const I18n = {
  install(Vue) {
    Vue.prototype.$language = 'pt-BR';
    Vue.prototype.$i18n = {};
    Vue.prototype.$setLanguage = function setLanguage(language, callback) {
      const vm = this;
      Vue.prototype.$language = '';
      Vue.prototype.$i18n = {};
      jquery.ajax({
        url: `static/i18n/${language}.json`,
        async: false,
        dataType: 'json',
        type: 'GET',
        success(data) {
          Vue.prototype.$language = language;
          Vue.prototype.$i18n = data;

          console.log(vm.$root);
          update(vm.$root);
          if (callback) {
            callback();
          }
        },
      });
    };
  },
};

export default I18n;
