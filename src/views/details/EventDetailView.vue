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
  <div v-if="event">
    <div class="card-wrapper">
      <div class="card-body">
        <h2>
          {{ event?.first_name }} {{ event?.last_name }} 
        </h2>
        <p><span>Email:</span> {{ event?.email }}</p>
        <p><span>Gender:</span> {{ event?.gender }}</p>
        <p><span>IP_Address:</span> {{ event?.ip_address }}</p>
        <p><span>Source:</span> {{ event?.Source }}</p>
        <p><span>Destination:</span> {{ event?.Destination }}</p>
        <p><span>Travel Date:</span> {{ event?.travelDate }}</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.card-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
}
.card-body {
  line-height: 36pt;
  margin-top: 2rem;
}
span {
  font-weight: bold;
}
</style>
