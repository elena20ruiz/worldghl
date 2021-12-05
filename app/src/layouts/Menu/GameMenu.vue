<template>
  <div class="wg-game-menu">
    <div class="wg-game-menu__options">
      <wg-button id="POPULATION" @click="onStartGame" color="primary"> POPULATION </wg-button>
      <wg-button id="DISTANCE" @click="onStartGame" color="primary"> DISTANCE </wg-button>
    </div>
  </div>
</template>
<script>
  import WgButton from '../../components/partials/buttons/wgButton.vue'
  import gameList from '../../data/gameList.json'
  export default {
    name: 'GameMenu',
    components: { WgButton },
    computed: {

    },
    methods: {
      onStartGame (event) {
        const { id } = event.target
        this.$router.push({ name: 'GamePage', params: { game: id } })
      }
    }
  }
</script>
<style lang="scss">
  .wg-game-menu {
    &__options {
      display: flex;
      flex-direction: column;
      width: 30em;
      gap: 1em;
    }
  }
</style>
