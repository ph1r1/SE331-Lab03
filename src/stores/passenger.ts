import type { Passenger } from '@/type'
import { defineStore } from 'pinia'

export const usePassengerStore = defineStore('event', {
  state: () => ({
    event: null as Passenger | null
  }),
  actions: {
    setPassenger(event: Passenger) {
      this.event = event
    }
  }
})

export const useAirlineStore = defineStore('airline', {
  state: () => ({
    airline: null as Passenger | null
  }),
  actions: {
    setAirline(airline: Passenger) {
      this.airline = airline
    }
  }
})
