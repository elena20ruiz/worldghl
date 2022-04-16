<template>
  <div class="wg-configuration-menu">
    <div class="wg-col wg-configuration-menu__content">
      <div class="wg-row">
        <div class="wg-text__title wg-text__title--large">
          Configure the game:
        </div>
      </div>
      <div class="wg-row">
        <wg-button @click="onClick">PLAY</wg-button>
      </div>
    </div>
  </div>
</template>
<script>
  import wgButton from '../../components/partials/buttons/wgButton.vue'
  export default {
    components: { wgButton },
    name: 'ConfigurationMenu',
    emits: ['click:next'],
    methods: {
      onClick () {
        this.$emit('click:next')
      }
    }
  }
</script>
<style lang="scss" scoped>
  .wg-configuration-menu {
    display: flex;
    height: 100%;
    background: green;
    justify-content: center;
    gap: 40px;
    &__content {
      width: 400px;
      justify-content: center;
      align-items: center;
    }
    &__options-list {
      gap: 10px;
    }
  }
</style>