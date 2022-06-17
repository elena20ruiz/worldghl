<template>
  <div class="wg-main-menu wg-row">
    <div class="wg-col main-col-left">
      <h1 class="logo wg-txt-title wg-txt-title--large">
        WORLD <br/>
        H/L
      </h1>
    </div>
    <div class="wg-col main-col-right wg-background--on-surface">
      <div class="wg-row">
        <h1 class="title wg-txt-title wg-txt-title--large wg-txt-title--primary">
          How is your geography knowledge?
        </h1>
      </div>
      <div class="wg-row">
        <wg-button class="play-button" color="secondary" size="medium" @click="onClick"> PLAY </wg-button>
      </div>
    </div>
  </div>
</template>
<script>
  import wgButton from '../../components/partials/buttons/wgButton.vue'
  export default {
  components: { wgButton },
    name: 'MainMenu',
    emits: ['click:next'],
    methods: {
      onClick() {
        this.$emit('click:next')
      }
    }
  }
</script>
<style lang="scss" scoped>
  .wg-main-menu {
    width: 100%;
    height: 100%;
    align-items: center;
    text-align: center;
    .main-col-left {
      width: 30em;
      background-image: url('../../assets/img/background.jpg');
      height: 100%;
      justify-content: center;
      .logo {
        font-size: 60px;
        line-height: 40px;
        color: $wg-on-surface;
      }
    }

    .main-col-right {
      gap: 30px;
      height: 100%;
      justify-content: center;
      .wg-row {
        justify-content: center;
      }
    }

    .play-button {
      padding-left: 3em;
      padding-right: 3em;
      padding-top: 0.35em;
      padding-bottom: 0.35em;
    }

  }
</style>