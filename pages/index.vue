<template>
  <section class="articles">
    <h1>Articles</h1>
    <div class="posts" v-if="allPagesCount">
      <Posts />
    </div>
    <div v-else>Loading...</div>
  </section>
</template>

<script lang="ts" setup>
import { usePostsStore } from '~/store/posts';
import { type IPost } from '~/types';

const postsStore = usePostsStore();
const { setAllPosts } = postsStore;
const { allPagesCount } = storeToRefs(postsStore);

const { data: allPosts }: { data: globalThis.Ref<IPost[]> } = await useFetch(
  'https://6082e3545dbd2c001757abf5.mockapi.io/qtim-test-work/posts/',
);

setAllPosts(allPosts.value);
</script>

<style lang="scss" scoped>
.articles {
  margin-top: 120px;
  h1 {
    font-size: 84px;
    font-weight: 400;
  }
  .posts {
    margin-top: 39px;
  }
}
</style>
