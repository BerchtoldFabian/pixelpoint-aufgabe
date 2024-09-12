<script setup lang="ts">
import { onMounted, ref, type Ref } from 'vue';
import EventListing from './EventListing.vue';
import { fetchDBData } from '@/helper_methods/fetchDBData';


const events: Ref<EventData[]> = ref([]);

const show: Ref<boolean> = ref(false)

onMounted(async () => {
    const data = await fetchDBData()

    events.value.push(...data);
})

setTimeout(() => show.value = true, 5000 )

</script>


<template>
<section>
    <EventListing v-for="event in events" :key="event.name" :event="event" ></EventListing>
    <i v-if="events.length === 0" class="pi pi-spin pi-cog"></i>
    <Transition>
    <p v-if="show && events.length === 0">Hast Du einen Token für die Veranstaltungsdatenbank in "fetchDBData.ts" eingefügt? </p>
</Transition>

</section>
</template>



<style scoped>

/*bounce animation taken from: https://vuejs.org/guide/built-ins/transition*/
.v-enter-active {
    animation: bounce-in 0.5s;
}

@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.25);
  }
  100% {
    transform: scale(1);
  }
}

section{
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 25px;
}

i{
    font-size: 10rem;
    color: gray;
}

@media (max-width: 850px) {
  i{
    font-size: 5rem;
  }

  section {
    padding-top: 2%;
  }
}

</style>