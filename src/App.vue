<script setup lang="ts">
import EventsContainer from './components/EventsContainer.vue';
import FooterSection from './components/FooterSection.vue';
import HeroSection from './components/HeroSection.vue'

</script>

<template>
  <header class = "greenBackground">
    <HeroSection></HeroSection>
  </header>
  <main class="lightGrayBackground">
    <EventsContainer></EventsContainer>
  </main>
  <footer class="greenBackground">
    <FooterSection></FooterSection>
  </footer>
</template>

<style scoped>
header{
  width: 100%;
  padding-top: 1%;
  height: 30vh;
}

main {
  padding-top: 1%;
  padding-bottom: 10%;
}


</style>
