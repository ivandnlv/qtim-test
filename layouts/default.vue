<template>
  <div class="layout">
    <Header />
    <div class="container">
      <slot />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.container {
  max-width: 1217px;
  margin: 0 auto;
}
</style>
