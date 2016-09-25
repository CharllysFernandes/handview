<template>
  <div>
    <div v-for="book in books">
      {{ book.description}}
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      books: [
        {
          code: 'genesis',
          description: 'Gênesis',
        },
        {
          code: 'exodo',
          description: 'Êxodo',
        },
      ],
    };
  },
};
</script>
