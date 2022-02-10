<template>
  <wg-button class="wg-elevation__v1 wg-square-button" :id="id" @click="() => onClick(id)">
    <i :class="[icon, 'wg-square-button__icon']"/>
    <span class="wg-text__label wg-text__label--medium  wg-text__label--primary wg-square-button__text">
      {{ text }}
    </span>
  </wg-button>
</template>
<script>
import wgButton from './wgButton.vue'
  export default {
  components: { wgButton },
    name: 'wgSquareButton',
    props: {
      icon: {
        default: '',
        type: String
      },
      text: {
        default: '',
        type: String
      },
      id: {
        default: '',
        type: String
      }
    },
    emits: ['click'],
    methods: {
      onClick(id) {
        this.$emit('click', id)
      }
    }
  }
</script>
<style lang="scss">
  .wg-square-button {
    display: inline-block;
    border: none;
    background-color: $wg-primary-color;
    border-radius: 8px;
    width: 120px;
    height: 120px;
    padding: 1em;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    &:hover {
      background-color: black;
    }

    gap: 10px;
    &__icon {
      font-size: 48px;
      color: $wg-on-primary-color;
    }

    &__text {
      font-weight: 600;
      &:hover {
        background-color: black;
      }

    }
  }
</style>