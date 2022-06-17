<template>
  <div id="main-page" class="wg-container wg-main-page">
    <div class="wg-row">
      <div class="wg-col wg-col--50">
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
<style lang="scss">
  #main-page {
    height: 100vh;
    background-image: url('../assets/img/background.jpg');
  }

  .wg-main-page {
    padding: 2em;
    &__menu {
      display: flex;
      justify-content: center;
      align-items: center;
      height: inherit;
    }
  }
</style>
