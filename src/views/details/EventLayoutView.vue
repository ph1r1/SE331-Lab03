<script setup lang="ts">
import { ref } from 'vue'
import { type CardItem } from '@/type'
import EventService from '@/services/EventService'
import { useRouter } from 'vue-router'

const event = ref<CardItem | null>(null)
const airline = ref<CardItem | null>(null)
const props = defineProps({
  id: String
})
const router = useRouter()

EventService.getEventById(Number(props.id))
  .then((response) => {
    event.value = response.data
    EventService.getAirlineById(Number(response.data.airlineId))
      .then((response) => {
        airline.value = response.data
      })
      .catch((error) => {
        console.log(error)
        if (error.response && error.response.status === 404) {
          router.push({ name: '404-resource', params: { resource: 'AirlineId' } })
        }
      })
  })
  .catch((error) => {
    console.log(error)
    if (error.response && error.response.status === 404) {
      router.push({ name: '404-resource', params: { resource: 'PassengerId' } })
    }
  })
</script>

<template>
  <div v-if="event">
    <div class="nav">
      <router-link :to="{ name: 'event-detail', params: { id } }">Detail</router-link> | 
      <router-link :to="{ name: 'event-airline', params: { id } }">Airline</router-link> | 
      <router-link :to="{ name: 'event-edit', params: { id } }">Edit</router-link>
    </div>

    <RouterView :event="event" :airline="airline"></RouterView>
  </div>
</template>

<style scoped>
.nav {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 3rem;
}
.nav a.router-link-exact-active {
  color: #42b983;
  font-weight: bold;
}

.nav a.router-link-exact-active:hover {
  background-color: transparent;
}

.nav a {
  display: inline-block;
  padding: 0 0.5rem;
  color: #2c3e50;
}
</style>
