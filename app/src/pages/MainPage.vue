<template>
  <div id="main-page" class="wg-container wg-main-page">
    <div class="wg-row">
      <div class="wg-col wg-col--50 wg-background--primary">
        <main-brand />
      </div>
      <div class="wg-col wg-col--50 wg-main-page__menu">
        <game-menu />
      </div>
    </div>
  </div>
</template>

<script>
  import MainBrand from '../layouts/Brand/MainBrand.vue'
  import GameMenu from '../layouts/Menu/GameMenu.vue'
  export default {
    name: 'MainPage',
    components: { GameMenu, MainBrand }
  }
</script>
<style lang="scss" scoped>
  #main-page {
    height: 100vh;
  }

  .wg-main-page {
    &__menu {
      display: flex;
      justify-content: center;
      align-items: center;
      height: inherit;
    }
  }
</style>
