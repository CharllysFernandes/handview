/* eslint-disable guard-for-in,no-restricted-syntax*/
function saveModule(modName, modState) {
  for (const prop in modState) {
    localStorage.setItem(`${modName}.${prop}`, JSON.stringify(modState[prop]));
  }
}

export default (store) => {
  store.subscribe((mutation, state) => {
    const moduleToSave = mutation.payload.save;
    if (moduleToSave) {
      saveModule(moduleToSave, state[moduleToSave]);
    }
  });
};
