<template>
  <button class="wg-btn">
    {{ child }}
  </button>
</template>

<script>
  export default {
    name: 'WgButton',
    props: {
      text: String
    }
  }
</script>
<style scoped lang="scss">
  .wg-btn {
    font-weight: 500;
    font-size: 14px;
    line-height: 18px;
    text-transform: uppercase;
    color: $wg-neutral-dark;
    background-color: $wg-primary-color;
    transition: all .2s ease-in-out;
    display: inline-block;
    height: 36px;
    padding: 0 26px;
    margin-top: 6px;
    margin-bottom: 6px;
    border: none;
    border-radius: 2px;
    cursor: pointer;
    touch-action: manipulation;
    background-image: none;
    text-align: center;
    line-height: 36px;
    vertical-align: middle;
    white-space: nowrap;
    user-select: none;
    font-size: 14px;
    letter-spacing: .03em;
    position: relative;
    overflow: hidden;

    &:active, &:focus,&:hover {
      color: rgba(0,0,0,.87);
      background-color: #fff
    }
  }
</style>
