<template>
  <div class="wg-btn-group">
    <wg-button @click="() => $emit('click', 0)">OK</wg-button>
    <wg-button @click="() => $emit('click', 1)">KO</wg-button>
  </div>
</template>
<script>
  import wgButton from '../../components/partials/buttons/wgButton.vue'
  export default {
    components: { wgButton },
    name: 'LHButtons'
  }
</script>
<style lang="scss">
  .wg-btn-group {
    border-radius: 12px;
    cursor: pointer;
    button {
      border-radius: 0px;
    }
    button:not(:last-child) {
      border-right: none !important; /* Prevent double borders */
    }

    &:after {
      content: "";
      clear: both;
      display: table;
    }
  }
</style>