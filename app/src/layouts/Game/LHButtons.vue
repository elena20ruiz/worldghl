<template>
  <div class="wg-btn-group">
    <wg-button>OK</wg-button>
    <wg-button>KO</wg-button>
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