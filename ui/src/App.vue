<template>
  <div id="app">
    <main-menu></main-menu>
    <div id="container">
      <div id="content">
        <p>Language: {{$language}}</p>
        <p>{{$i18n.message.hello}}, {{$i18n.message.world}}</p>
        <a @click="$setLanguage('en-US')">English</a>
        <a @click="$setLanguage('pt-BR')">Portguese</a>
        <router-view transition="fade" transition-mode="out-in" class="animated"></router-view>
      </div>
    </div>
  </div>
</template>

<script>
import MainMenu from './components/menu/MainMenu';
export default {
  components: {
    MainMenu,
  },
  methods: {
  },
};
</script>

<style>

</style>
