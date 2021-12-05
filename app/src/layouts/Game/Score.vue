<template>
  <div class="wg-score">
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
    name: 'Score',
    props: {
      text: {
        default: 'Score',
        type: String
      },
      value: {
        default: 0,
        type: Number
      }
    }
  }
</script>