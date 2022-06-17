<template>
  <div class="wg-game-data">
    <div class="wg-game-data__background" :style="{ backgroundImage: `url(${lastData.background.url})`}"/>
    <div class="wg-game-data__content">
      <div class="wg-game-data__title">
        <span class="wg-txt-title wg-txt-title--large">{{ lastData.title }}</span>
      </div>
      <div class="wg-game-data__subtitle">
        <span class="wg-txt-body wg-txt-body--large">has</span>
      </div>
      <div class="wg-game-data__value">
        <span class="wg-txt-digits--large">{{ lastValue }}</span>
      </div>
      <div class="wg-game-data__description">
        <span class="wg-txt-body wg-txt-body--large">{{ lastData.description }}</span>
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