<template>
  <button class="btn">
    <slot />
  </button>
</template>

<script lang="ts" setup></script>

<style lang="scss" scoped>
@import '../assets/sass/variables';
.btn {
  cursor: pointer;
  padding: 16px 32px;
  border-radius: 999px;
  color: #fff;
  font-size: 20px;
  background: #000;
  transition: opacity $animation-duration ease-in-out;
  border: none;
  &:hover {
    opacity: 0.8;
  }
  &:active {
    opacity: 0.9;
  }
}
</style>
