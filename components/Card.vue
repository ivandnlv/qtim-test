<template>
  <div class="card" @mouseenter="isImageOnHover = true" @mouseleave="isImageOnHover = false">
    <div class="card__image">
      <NuxtImg :src="image + '.png'" :alt="title" placeholder="/img/example.png" />
    </div>
    <p class="card__preview">{{ preview }}</p>
    <button v-if="isImageOnHover" class="card__more" @click="onReadMoreClick">Read more</button>
  </div>
</template>

<script lang="ts" setup>
import { type IPost } from '~/types';

const router = useRouter();

const isImageOnHover = ref(false);

interface CardProps {
  post: IPost;
}

const props = defineProps<CardProps>();

const {
  post: {
    value: { id, image, preview, title },
  },
} = toRefs(props);

const onReadMoreClick = () => {
  router.push(`/posts/${id}`);
};
</script>

<style lang="scss" scoped>
@import '../assets/sass/variables';
.card {
  width: 280px;
  min-height: 403px;
  transition: min-height $animation-duration ease-in-out;
  &:hover {
    min-height: 430px;
  }
  &__image {
    width: 100%;
    height: 280px;
    background: $main-color;
    img {
      width: inherit;
      height: inherit;
      object-fit: cover;
    }
  }
  &__preview {
    margin-top: 24px;
    font-size: 20px;
  }
  &__more {
    margin-top: 12px;
    cursor: pointer;
    background: none;
    color: $main-color;
    font-size: 20px;
  }
}
</style>
~/plugins/types/IPost
