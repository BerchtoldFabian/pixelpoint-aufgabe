<script setup lang="ts">
import { onMounted, ref, type Ref } from 'vue';
import EventListing from './EventListing.vue';
import { fetchDBData } from '@/helper_methods/fetchDBData';


const events: Ref<EventData[]> = ref([]);

onMounted(async () => {
/*     const data = await fetchDBData()

    events.value.push(...data); */
})

</script>


<template>
<section>
    <EventListing v-for="event in events" :key="event.name" :event="event" ></EventListing>
</section>
</template>



<style scoped>
section{
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 25px;
}

</style>