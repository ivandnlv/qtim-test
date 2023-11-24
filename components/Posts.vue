<template>
  <div class="posts">
    <Card v-for="post in posts" :post="post" :key="post.id" />
  </div>
  <Pagination />
</template>

<script lang="ts" setup>
import { usePostsStore } from '~/store/posts';

const postsStore = usePostsStore();
const { posts } = storeToRefs(postsStore);
</script>

<style lang="scss" scoped>
@import '../assets/sass/variables';
.posts {
  display: grid;
  width: 100%;
  grid-template-columns: repeat(auto-fit, 280px);
  column-gap: 32px;
  row-gap: 42px;
  align-items: center;
}
</style>
