<template>
  <RouterLink class="event-link" :to="{ name: 'event-detail', params: { id: event?.id } }">
    <article>
      <div class="card-wrapper">
        <div class="card-body">
          <h2>
            {{ event?.first_name }} {{ event?.last_name }} <span>({{ event?.gender }})</span>
          </h2>
          <p class="card-email">{{ event?.email }}</p>
          <!-- <p>@176.3.147.168</p> -->
          <p>{{ event?.Source }} ---&gt; {{ event?.Destination }}</p>
          <p>@{{ event?.travelDate }}</p>
        </div>
      </div>
    </article>
  </RouterLink>
</template>

<script setup lang="ts">
import type { CardItem } from '@/type'
import type { PropType } from 'vue'

const props = defineProps({
  event: {
    type: Object as PropType<CardItem>,
    require: true
  }
})
</script>

<style scoped>
.card-wrapper {
  padding: 20px;
  width: 350px;
  cursor: pointer;
  border: 1px solid #39495c;
  /* margin-bottom: 18px; */
  border-radius: 8px;
}
.card-wrapper:hover {
  transform: scale(1.01);
  box-shadow: 0 3px 12px 0 rgba(0, 0, 0, 0.2);
}
.event-link {
  color: #2c3e50;
  text-decoration: none;
}
.card-body h2 {
  margin: 0 0 12px 0;
  font-size: 1.6rem;
  font-weight: bold;
}
.card-body h2 > span {
  font-size: 16px;
  color: #818181;
}
.card-body .card-email {
  margin: 0 0 12px 0;
  color: #818181;
}
.card-body p {
  margin: 0 0 12px 0;
}
</style>
