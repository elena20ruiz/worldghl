<template>
  <div class="wg-game-data">
    <div class="wg-game-data__background" :style="{ backgroundImage: `url(${lastData.background.url})`}"/>
    <div class="wg-game-data__content">
      <div class="wg-game-data__title">
        <span class="wg-text__title wg-text__title--large">{{ lastData.title }}</span>
      </div>
      <div class="wg-game-data__subtitle">
        <span class="wg-text__body wg-text__body--large">has</span>
      </div>
      <div class="wg-game-data__value">
        <span class="wg-text__digits--large">{{ lastValue }}</span>
      </div>
      <div class="wg-game-data__description">
        <span class="wg-text__body wg-text__body--large">{{ lastData.description }}</span>
      </div>
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
      },
      lastValue () {
        const value = parseInt(this.lastData.value)
        return value.toLocaleString()
      }
    }
  }
</script>