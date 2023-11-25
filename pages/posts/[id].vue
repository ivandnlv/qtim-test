<template>
  <div class="content">
    <p v-if="pending">Post loading...</p>
    <div v-else class="post">
      <div class="post__top">
        <h1 class="title">{{ post.title }}</h1>
        <p class="text">{{ post.preview }}</p>
      </div>
      <NuxtImg
        class="post__image"
        :src="post.image"
        placeholder="/img/post-example.png"
        :alt="post.title"
        loading="lazy"
      />
      <div class="post__about">
        <span>About</span>
        <p class="text">{{ post.description }}</p>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import type { IPost } from '~/types';

const route = useRoute();

const {
  params: { id },
} = route;

const { pending, data: post }: { pending: globalThis.Ref<boolean>; data: globalThis.Ref<IPost> } =
  useFetch(`https://6082e3545dbd2c001757abf5.mockapi.io/qtim-test-work/posts/${id}`);
</script>

<style lang="scss" scoped>
.content {
  margin-top: 120px;
}
.post {
  display: flex;
  flex-direction: column;
  gap: 80px;
  &__top {
    display: flex;
    align-items: flex-start;
    gap: 34px;
    .title {
      max-width: 592px;
    }
  }
  &__image {
    width: 1216px;
    height: 700px;
    object-fit: cover;
  }
  &__about {
    max-width: 800px;
    margin: 0 auto;
    span {
      font-size: 16px;
      color: #101010;
    }
    .text {
      margin-top: 32px;
    }
  }
}
.text {
  color: #101010;
  font-size: 36px;
}
</style>
