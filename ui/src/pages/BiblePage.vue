<template>
  <div>
    <bible-book-selector></bible-book-selector>
    Livro: {{book}}
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import BibleBookSelector from '../components/bible/BibleBookSelector.vue';

export default {
  computed: mapGetters({
    book: 'getBook',
  }),
  components: {
    BibleBookSelector,
  },
};
</script>

<style scoped>

</style>
