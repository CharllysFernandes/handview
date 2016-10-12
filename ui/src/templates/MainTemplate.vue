<template>
  <div id="app">
    <main-menu></main-menu>
    <div id="container">
      <div id="content">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
import MainMenu from '../components/menu/MainMenu.vue';

export default {
  components: {
    MainMenu,
  },
  methods: {
  },
};
</script>
