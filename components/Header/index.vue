<template>
  <header class="header">
    <NuxtLink href="/" class="header__logo">
      <NuxtImg src="/img/logo.png" />
    </NuxtLink>
    <nav class="header__nav">
      <NuxtLink href="/works" active-class="active">Works</NuxtLink>
      <NuxtLink href="/about" active-class="active">About</NuxtLink>
    </nav>
    <div class="header__btns">
      <HeaderLang />
      <HeaderBtn>Let's work</HeaderBtn>
    </div>
  </header>
</template>

<style lang="scss" scoped>
@import '../../assets/sass/variables';
.header {
  width: 100%;
  padding: 35px 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 91px;
  &__logo {
    flex: 1 1 auto;
    width: 144px;
    text-decoration: none;
    img {
      width: inherit;
      object-fit: cover;
    }
  }
  &__nav {
    display: flex;
    gap: 58px;
    align-items: center;
    color: #101010;
    font-size: 20px;
    a {
      color: inherit;
      text-decoration: none;
      transition: color $animation-duration ease-in-out;
      &.active {
        color: darken(#f8d5c3, 30%);
      }
    }
  }
  &__btns {
    display: flex;
    gap: 16px;
  }
}
</style>
