<template>
  <button class="button">
    <slot />
  </button>
</template>

<style lang="scss" scoped>
.button {
  border: none;
  cursor: pointer;
  padding: 16px 32px;
  background: #000;
  border-radius: 999px;
  color: #fff;
  font-size: 20px;
}
</style>
