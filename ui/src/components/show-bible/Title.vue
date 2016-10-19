<template>
	<div class="bible-container">
		<span class="book">{{ book }}</span>
		<span class="verses">24:14</span>
	</div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  computed: mapGetters({
    book: 'getBook',
  }),
};
</script>


<style scoped>
	.bible-container {
		color: #fff;
		height: 500px;
		font-size: 168px;
		font-weight: bold;
		text-align: center;
		text-shadow: 3px 3px 0 #000;
		padding-top: calc((100vh / 2) - 250px);
	}

	.bible-container span {
		display: block;
	}
</style>
