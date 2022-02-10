<template>
  <div class="wg-card wg-elevation__v1 ">
    <slot />
  </div>
</template>
<script>
export default {
  name: 'wgCard'
}
</script>
<style lang="scss">
  .wg-card {
    background-color: white;
    padding: 1em;
  }
</style>