<template>
  <div class="wg-game-menu">
    <div class="wg-game-menu__options">
      <wg-button id="POPULATION_CON" @click="onStartGame" class="wg-game-menu__button" color="primary">
          <i class="fas fa-users"/>
          COUNTRY POPULATION
      </wg-button>
      <wg-button id="POPULATION_CI" @click="onStartGame" class="wg-game-menu__button" color="primary">
        <i class="fas fa-ruler"/>
        CITY POPULATION
      </wg-button>
    </div>
  </div>
</template>
<script>
  import WgButton from '../../components/partials/buttons/wgButton.vue'
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

    &__button {
      text-align: center;
      display: flex;
      flex-direction: center;
      align-items: center;
      justify-content: center;
      gap: 20px;
    }
  }
</style>
