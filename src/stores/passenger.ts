import type { CardItem } from '@/type'
import { defineStore } from 'pinia'

export const usePassengerStore = defineStore('event', {
  state: () => ({
    event: null as CardItem | null
  }),
  actions: {
    setPassenger(event: CardItem) {
      this.event = event
    }
  }
})

export const useAirlineStore = defineStore('airline', {
  state: () => ({
    airline: null as CardItem | null
  }),
  actions: {
    setAirline(airline: CardItem) {
      this.airline = airline
    }
  }
})
