<template>
  <div class="wg-main-brand">
    <div class="wg-row">
      <div class="wg-col">
        <h1 class="wg-main-brand__title wg-text__title wg-text__title--large">
          How is your geography knowledge?
        </h1>
        <h2 class="wg-main-brand__subtitle wg-text__subtitle wg-text__subtitle--large">
          Play this game!
        </h2>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'MainBrand'
  }
</script>
<style lang="scss">
  .wg-main-brand {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    text-align: left;

    .wg-col {
      gap: 24px;
    }
  }
</style>
