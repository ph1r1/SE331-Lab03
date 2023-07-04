<script setup lang="ts">
import EventCard from '@/components/EventCard.vue'
import type { CardItem } from '@/type'
import { ref, watchEffect } from 'vue'
import type { Ref } from 'vue'
import EventService from '@/services/EventService'

const events: Ref<Array<CardItem>> = ref([])

const props = defineProps({
  page: {
    type: Number,
    required: true
  }
})

watchEffect(() => {
  EventService.getEvent(5, props.page).then((response) => {
    events.value = response.data
  })
})
</script>

<template>
  <main class="container">
    <EventCard v-for="event in events" :key="event.id" :event="event"></EventCard>
  </main>
</template>

<style scoped>
.container {
  margin-top: 3rem;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  place-items: center;
  row-gap: 3rem;
}

@media (max-width: 1149px) {
  .container {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 859px) {
  .container {
    grid-template-columns: 1fr;
  }
}
</style>
