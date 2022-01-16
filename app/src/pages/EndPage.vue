<template>
  <div id="end-page" class="wg-container">
    <div class="wg-row">
      <span>Tu puntuación:</span>
      <span>{{ score }} </span>
    </div>

    <div class="wg-row">
      <span>Tu record:</span>
      <span>{{ recordScore }} </span>
    </div>
  </div>
</template>
<script>
  import { mapState } from 'vuex'
  export default {
    name: 'EndPage',
    computed: {
      ...mapState({
        recordScore: ({ game }) => game.scores.record,
        score: ({ game }) => game.current.score
      })
    }
  }
</script>
<style lang="scss">
  #end-page {
    height: 100vh;
    width: 100%;
  }
</style>