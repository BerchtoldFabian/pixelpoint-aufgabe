<script setup lang="ts">
const localeDateTimeFormat = 'de-AT'

const {startDate, endDate} = defineProps<{
    startDate: Date,
    endDate?: Date
}>()

function areStartAndEndDateDifferent() {
    return startDate.toLocaleDateString() !== endDate?.toLocaleDateString()
}

function hasStartDateTime(){
    return startDate.toLocaleTimeString(localeDateTimeFormat) !== '00:00:00'
}

function areStartAndEndTimeDifferent() {
    return startDate.toLocaleTimeString() !== endDate?.toLocaleTimeString()
}

</script>


<template>
    <div>
        <div class="eventDateOuter">
            <h3 class="greenBackground">Datum</h3>
            <div class="eventDateInner">
        <p class="date">{{ startDate.toLocaleDateString(localeDateTimeFormat) }}
            <span v-if="endDate && areStartAndEndDateDifferent()">
                {{ '-' + endDate.toLocaleDateString(localeDateTimeFormat) }}</span>
        </p>

        <p>{{ startDate.toLocaleDateString(localeDateTimeFormat, {weekday: 'long'})}}</p>

        <p v-if="hasStartDateTime()">
            {{ startDate.toLocaleTimeString(localeDateTimeFormat,{timeStyle: 'short'})}}

            <span v-if="endDate && !areStartAndEndDateDifferent() && areStartAndEndTimeDifferent()">
                {{ '-' + endDate.toLocaleTimeString(localeDateTimeFormat, {timeStyle: 'short'}) }}
            </span>

        </p>
    </div>
    </div>
</div>
</template>

<style scoped>
.date {
    font-weight: bolder;
    font-size: larger;
}

p {
    text-align: center;
    line-height: 1;
    font-size: larger;
    margin: 0;
    padding: 4%;
}

.eventDateOuter {
    border-style: groove;
    border-color: darkgreen;
    width: 12vw;
    margin-right: 0.5vw;
}

.eventDateInner{
    background-color: lightgreen;
}

h3{
    text-align: center;
    border-style: groove;
    border-color: darkgreen;
    border-left: 0;
    border-right: 0;
    border-top: 0;
    margin: 0;
    color: white;
}

@media (max-width: 850px) {
    p {
        font-size: 0.9em;
        line-height: 1.5;
        padding: 3%;
    }
    .date {
        font-size: medium;
    }

    .eventDateOuter {
        width: 22vw;
        margin-bottom: 5%;
    }
}




</style>