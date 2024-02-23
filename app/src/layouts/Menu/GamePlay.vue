<template>
     <wg-button class="wg-game-menu__play" @click="onStartGame">PLAY</wg-button> 
</template>
<script>
import WgButton from '../../components/partials/buttons/wgButton.vue'
  export default {
    name: 'GamePlay',
    components: { WgButton },
    data () {
      return {
        categories: [{
          id: 'POPULATION_CON'
        }]
      }
    },
    computed: {},
    methods: {
      onStartGame () {
        this.$router.push({ name: 'GamePage', params: { game: this.categories[0].id } })
      }
    }
  }
</script>
<style lang="scss">
  .wg-game-menu {
    display: flex;
    flex-direction: column;
    gap: 40px;

    &__play {
      margin-top: 20px;
      width: 14rem;
      height: 4rem;
      border-radius: 8px !important;
      font-size: 80% !important;
    }
  }
</style>
