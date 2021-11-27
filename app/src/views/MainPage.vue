<template>
  <div id="main-page" class="wg-container wg-main-page">
    <div class="wg-row">
      <div class="wg-col wg-col--50 wg-background--primary">
        <img src="../assets/img/logo.png" />
      </div>
      <div class="wg-col wg-col--50 wg-main-page__menu">
        <div class="wg-main-page__group-buttons">
          <wg-button color="primary"> text </wg-button>
          <wg-button color="primary"> text </wg-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import WgButton from '../components/partials/buttons/wgButton.vue'
  export default {
    name: 'MainPage',
    components: { WgButton },
  }
</script>
<style lang="scss">
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
    &__group-buttons {
      display: flex;
      flex-direction: column;
      width: 30em;
      gap: 1em;
    }
  }

</style>
