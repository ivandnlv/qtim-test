<template>
  <div class="pagination">
    <PaginationBtn
      v-for="(page, index) in pagesArr"
      btn-type="page"
      :page="page.number.toString()"
      :key="page.number"
      :on-click="() => setCurrentPage(index + 1)"
      :is-selected="page.isCurrent"
    />
    <PaginationBtn btn-type="next" :on-click="onNextPageClick" v-if="allPagesCount > 1" />
  </div>
</template>

<script lang="ts" setup>
import { usePostsStore } from '~/store/posts';

const postsStore = usePostsStore();

const onNextPageClick = () => {
  if (currentPage.value + 1 <= allPagesCount.value) {
    setCurrentPage(currentPage.value + 1);
  } else {
    setCurrentPage(1);
  }
};

const { setCurrentPage } = postsStore;

const currentPage = computed(() => postsStore.currentPage);
const allPagesCount = computed(() => postsStore.allPagesCount);

const pagesArr = ref(
  Array.from({ length: allPagesCount.value }, (_, index) => ({
    number: index + 1,
    isCurrent: currentPage.value === index + 1,
  })),
);

watch(currentPage, () => {
  pagesArr.value = pagesArr.value.map((page) =>
    page.number === currentPage.value
      ? { ...page, isCurrent: true }
      : { ...page, isCurrent: false },
  );
});
</script>

<style lang="scss" scoped>
.pagination {
  margin-top: 20px;
  width: 100%;
  display: flex;
  gap: 8px;
}
</style>
