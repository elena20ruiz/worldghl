<template>
  <div id="main-page" class="wg-container">
    <div class="wg-row">
      <div class="wg-col wg-col--50">
        TITLE
      </div>
      <div class="wg-col wg-col--50">
        MENU
        <wg-button> text </wg-button>
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
</style>
