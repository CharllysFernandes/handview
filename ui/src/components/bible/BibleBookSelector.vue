<template>
  <div>
    <a v-for="book in books" class="btn" @click="selectBook(book)">{{ book}}</a>
  </div>
</template>

<script>
import jquery from 'jquery';
import { mapActions } from 'vuex';

export default {
  data() {
    return {
      books: [],
    };
  },
  created() {
    this.$http.get('static/data/books.json').then((response) => {
      this.books = response.body;
    });

    jquery(window).keydown((e) => {
      this.keydown(e);
    });
  },
  methods: {
    keydown(e) {
      if (e.metaKey || e.ctrlKey) {
        return;
      }
    },
    ...mapActions([
      'selectBook',
    ]),
  },
};
</script>
