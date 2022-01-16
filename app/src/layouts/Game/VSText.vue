<template>
  <div :class="['wg-vs-text']" id="wg-vs-text">
    <template v-if="status === 'CORRECT' ">
      <i class="fas fa-check wg-vs-text__icon" />
    </template>
    <template v-else-if="status === 'INCORRECT' ">
      <i class="fas fa-times wg-vs-text__icon" />
    </template>
    <template v-else>
      <span class="wg-text__title wg-text__title--large">
        VS
      </span>
    </template>
  </div>
</template>
<script>
  export default {
    name: 'VSText',
    props: {
      status: {
        default: '',
        type: String
      }
    },
    watch: {
      status (newValue) {
        if (['INVISIBLE', 'CORRECT', 'INCORRECT'].includes(newValue)) {
          const div = document.getElementById('wg-vs-text')
          const animationClass = `wg-vs-text--${newValue}`
          const duration = newValue === 'INVISIBLE' ? 2000 : 1000
          div.className += ' ' + animationClass
          setTimeout(() => {
            div.className = div.className.replace(` ${animationClass}`, '')
          }, duration)
        }
      }
    }
  }
</script>
<style lang="scss">
  .wg-vs-text {
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: $wg-secondary-container-color;
    padding: 1em;
    border-radius: 10em;
    width: 70px;
    height: 70px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 5px;
    transition: opacity 0.5s ease-in-out;
    span {
      margin-left: 2px;
    }

    &--INCORRECT {
      background-color: $wg-dark-error;
      color: $wg-dark-on-error;
      animation: INCORRECT 2s ease-out 0s 1 normal none;
    }
    &--CORRECT {
      animation: CORRECT 1.5s ease-out 0s 1 normal none;
    }
    &--INVISIBLE {
      opacity: 0;
    }

    &__icon {
      font-size: 25px;
      animation: TEXT 1s ease-out 0s 1 normal none;
    }
  }

  @keyframes INCORRECT {
    0% {
      opacity: 0.8;
    }

    80% {
      opacity: 1;
    }

    100% {
      opacity: 0.6;
    }
  }

  @keyframes CORRECT {
    0% {
      color: black;
      background-color: $wg-secondary-container-color;
    }

    10% {
      color: $wg-on-tertiary-color;
      background-color: $wg-tertiary-color;
    }

    50% {
      opacity: 1;
    }

    100% {
      opacity: 0;
      color: $wg-on-tertiary-color;
      background-color: $wg-tertiary-color;
    }
  }

  @keyframes TEXT {
    0% {
      transform: scale(0.5);
    }

    100% {
      transform: scale(1);
    }
  }
</style>
