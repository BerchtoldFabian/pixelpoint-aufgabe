<script setup lang="ts">
import { computed, ref } from 'vue';
import EventDate from './EventDate.vue';

const {event} = defineProps<{
    event: EventData
}>()

const isDescriptionExpanded = ref(event.description.length < 350);

const expandIcon = ref('pi pi-chevron-down');


const eventDescription = computed<string>(() => {
    return isDescriptionExpanded.value ? event.description : shortenDescription()
})

//Since a description can end with ... or <br> I need to cover these corner cases.
function shortenDescription(): string {
    let shortened = event.description.substring(0,300);

    while(shortened.endsWith("\u003cbr\u003e")) shortened = shortened.substring(0, shortened.lastIndexOf("\u003cbr\u003e"));

    if(shortened.endsWith("...")) return shortened;

    return shortened + "..."
}

function onIconClick() {
    isDescriptionExpanded.value =! isDescriptionExpanded.value;

    expandIcon.value = expandIcon.value === 'pi pi-chevron-down' ? 'pi pi-chevron-up' : 'pi pi-chevron-down' 
}

</script>

<template>
    <article class="eventCard shadow">
        <h2>{{ event.name }}</h2>
    <div class="innerEvent">
        <div>
        <img :src="event.image[0].originalUrl">
    </div>
    <div class="descriptionContainer">
        <p class="description" v-html="eventDescription"></p>
        <i v-if="event.description.length > 350" :class="expandIcon" @click="onIconClick"></i>
    </div>
    <EventDate :start-date="event.startDate" :end-date="event.endDate"></EventDate>
    </div>
    </article>
</template>

<style scoped>

i {
    color: green;
    font-size: 2rem;
    margin-bottom: 1vh;
}

i:hover {
    color: yellowgreen;
}

.innerEvent {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}

.description {
    width: 95%;
    overflow-wrap: anywhere;
}

.descriptionContainer {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
}

h2 {
    font-weight: bolder;
    text-align: center;
    line-height: 1;
    margin-bottom: 2%;
    margin-top: 1%;
}

img {
    width: 250px;
    height: 220px;
    object-fit: cover;
    margin-left: 0.5vw;
    margin-bottom: 0.3vw;
}

EventDate{
    align-self: center;
}

@media (max-width: 850px){
    .innerEvent {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
}
h2 {
    font-weight: bolder;
    text-align: center;
    margin-bottom: 5%;
    font-size: medium;
    line-height: 1.5;
    
}

p {
    font-size: 0.9em;
}

}
</style>