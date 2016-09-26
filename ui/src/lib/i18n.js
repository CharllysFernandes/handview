/* eslint-disable no-underscore-dangle, no-param-reassign */
/**
 * Updates all the watchers in the Vue instance of a component tree.
 *
 * This function is inspired by the "_digest()" function in the
 * "src/instance/scope.js" of the source of Vue.js, excepts that this function
 * updates the children components no matter whether it is inheritable.
 *
 * @param vm
 * the root of the component tree.
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
      Vue.http.get(`static/i18n/${language}.json`).then((response) => {
        Vue.prototype.$language = language;
        Vue.prototype.$i18n = response.body;
        update(vm.$root);
        if (callback) {
          callback();
        }
      });
    };
  },
};

export default I18n;
