<template>
  <div class="wg-score wg-text__label">
    <span>
      {{ text }}:
    </span>
    <span>
      {{ value }}
    </span>
  </div>
</template>
<script>
  export default {
    name: 'ScoreS',
    props: {
      text: {
        default: 'ScoreS',
        type: String
      },
      value: {
        default: 0,
        type: Number
      }
    }
  }
</script>