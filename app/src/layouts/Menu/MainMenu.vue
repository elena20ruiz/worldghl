<template>
  <div class="wg-main-menu wg-row">
    <div class="wg-col wg-main-menu__col-first">
      <h1 class="wg-main-brand__title wg-text__title wg-text__title--large">
        WORLD <br/>
        H/L
      </h1>
    </div>
    <div class="wg-col wg-main-menu__col-second">
      <div class="wg-row">
        <h1 class="wg-text__title wg-text__title--large">
          How is your geography knowledge?
        </h1>
      </div>
      <div class="wg-row">
        <wg-button @click="onClick"> PLAY </wg-button>
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
    &__col-first {
      width: 35%;
      background-image: url('../../assets/img/background.jpg');
      height: 100%;
      justify-content: center;
      h1 {
        line-height: 35px;
      }
    }

    &__col-second {
      gap: 30px;
      .wg-row {
        justify-content: center;
      }
    }

  }
</style>