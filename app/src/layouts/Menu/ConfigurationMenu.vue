<template>
  <div class="wg-configuration-menu">
    <div class="wg-col content">
      <div class="wg-row">
        <div class="wg-txt-title wg-txt-title--medium">
          Configure the game:
        </div>
      </div>
      <div class="wg-row">
        <wg-button size="large" @click="onClick">PLAY</wg-button>
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
    justify-content: center;
    gap: 40px;
    .content {
      width: 425px;
      justify-content: center;
      align-items: center;
      gap: 25px;
    }
  }
</style>