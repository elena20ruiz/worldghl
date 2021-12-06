<template>
  <div class="wg-game-data">
    <div class="wg-game-data__title">
      <span class="wg-text__title--large">{{ lastData.title }}</span>
    </div>
    <div class="wg-game-data__subtitle">
      <span class="wg-text__body--large">has</span>
    </div>
    <div class="wg-game-data__value">
      <span class="wg-text__digits--large">{{ lastData.value }}</span>
    </div>
    <div class="wg-game-data__description">
      <span class="wg-text__body--large">{{ lastData.description }}</span>
    </div>
  </div>
</template>
<script>
  import { mapGetters } from 'vuex'
  export default {
    name: 'LastData',
    computed: {
      ...mapGetters({
        getData: 'game/getData'
      }),
      lastData () {
        return this.getData('last')
      }
    }
  }
</script>