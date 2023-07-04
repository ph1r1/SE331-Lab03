<script setup lang="ts">
import { ref } from 'vue'
import { type CardItem } from '@/type'
import EventService from '@/services/EventService'
import { useRouter } from 'vue-router'

const event = ref<CardItem | null>(null)
const props = defineProps({
  id: String
})
// const router = useRouter()

EventService.getEventById(Number(props.id))
  .then((response) => {
    event.value = response.data
  })
  .catch((error) => {
    console.log(error)
    // if (error.response && error.response.status === 404) {
    //     router.push({ name: '404-resource', params: { resource: 'event' } })
    // } else {
    //     router.push({ name: 'network-error' })
    // }
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
  margin-top: 3rem;
}
span {
  font-weight: bold;
}
</style>
