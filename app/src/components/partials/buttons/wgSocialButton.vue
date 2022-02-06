<template>
  <wg-button type="raised" :color="`social-${social}`">
    <i :class="[iconClass]" />
    <span><slot /></span>
  </wg-button>
</template>
<script>
  import WgButton from './wgButton.vue'
  export default {
    name: 'wgSocialButton',
    components: { WgButton },
    props: {
      social: {
        default: '',
        type: String
      }
    },
    computed: {
      iconClass() {
        const FA_ICONS = {
          'share': 'fas',
          'twitter': 'fab'
        }
        return `${FA_ICONS[this.social]} fa-${this.social}`
      }
    }
  }
</script>

<style lang="scss">

</style>