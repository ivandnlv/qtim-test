<template>
  <button v-if="btnType === 'page'" @click="onClick" :class="isSelected ? 'btn selected' : 'btn'">
    {{ page }}
  </button>
  <button v-else-if="btnType === 'prev'" @click="onClick" class="btn arrow-btn">
    <NuxtImg src="/img/prev.svg" alt="prev" />
  </button>
  <button v-else-if="btnType === 'next'" @click="onClick" class="btn arrow-btn">
    <NuxtImg src="/img/next.svg" alt="next" />
  </button>
</template>

<script lang="ts" setup>
interface PaginationBtnProps {
  btnType: 'prev' | 'page' | 'next';
  onClick: () => void;
  page?: string;
  isSelected?: boolean;
}

const props = defineProps<PaginationBtnProps>();
const { btnType, page, onClick, isSelected = false } = toRefs(props);
</script>

<style lang="scss" scoped>
.btn {
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-width: 44px;
  height: 44px;
  border-radius: 12px;
  font-size: 16px;
  color: #000;
  background: #f3f3f3;
  &.selected {
    color: #fff;
    background: #000;
  }
}

.arrow-btn {
  width: 44px;
  height: 44px;
  background: #fff;
  border: 1px solid #e8e8e8;
  img {
    width: 14px;
    height: 14px;
  }
}
</style>
