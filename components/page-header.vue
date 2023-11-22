<template>
  <div class="header">
    <NuxtLink href="/" class="logo">
      <NuxtImg src="/img/logo.svg" />
    </NuxtLink>
    <nav class="header__nav">
      <NuxtLink href="/works" active-class="active">Works</NuxtLink>
      <NuxtLink href="/about" active-class="active">About</NuxtLink>
    </nav>
    <div class="header__btn">
      <page-header-btn>Let's work</page-header-btn>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '../assets/sass/variables';
.header {
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  padding: 35px 40px;
  &__nav {
    display: flex;
    gap: 58px;
    a {
      color: #000;
      text-decoration: none;
      font-size: 20px;
      transition: color $animation-duration ease-in-out;
      &.active {
        color: #e2beff;
      }
    }
  }
}

.logo {
  width: 84px;
  height: 25px;

  img {
    width: inherit;
    height: inherit;
    object-fit: cover;
  }
}
</style>
