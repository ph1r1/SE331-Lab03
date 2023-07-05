<script setup lang="ts">
import { type CardItem } from '@/type'
import type { PropType } from 'vue'

defineProps({
  event: {
    type: Object as PropType<CardItem>,
    require: true
  }
})
</script>

<template>
  <div class="center">
      <p>Edit the <span>detail</span> here &nbsp;</p>
      <button>Edit Me</button>
  </div>
</template>

<style scoped>
.center {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 3rem;
}
span {
  font-weight: bold;
}
</style>
