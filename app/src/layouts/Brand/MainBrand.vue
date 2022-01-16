<template>
  <div class="wg-main-brand">
    <div class="wg-main-brand__img">
      <img src="../../assets/img/logo3.png" />
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
    &__img {
      img {
        width: 80%;
        max-width: 400px;
      }
    }
  }
</style>
